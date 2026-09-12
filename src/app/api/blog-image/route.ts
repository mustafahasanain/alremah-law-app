import { NextRequest } from 'next/server';

/**
 * Same-origin proxy for Frappe-hosted blog images.
 *
 * The Frappe backend (FRAPPE_URL) is only reachable over plain HTTP — it has
 * no TLS certificate. The site itself is served over HTTPS, so a browser
 * refuses to load an `http://` image on an `https://` page as mixed content
 * (this is why blog thumbnails and in-article images render broken in
 * production while working in local dev over HTTP).
 *
 * This route fetches the image server-side (a server-to-server HTTP request
 * has no mixed-content restriction) and re-serves the bytes from this app's
 * own HTTPS origin. Only paths under Frappe's public file store ("/files/")
 * are allowed, to avoid turning this into an open proxy for the rest of the
 * Frappe REST API.
 */
export const dynamic = 'force-dynamic';

function isAllowedPath(path: string): boolean {
  return path.startsWith('/files/');
}

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get('path');

  if (!path || !path.startsWith('/') || !isAllowedPath(path)) {
    return new Response('Not found', { status: 404 });
  }

  const frappeUrl = process.env.FRAPPE_URL;
  if (!frappeUrl) {
    return new Response('Not configured', { status: 500 });
  }

  let upstream: Response;
  try {
    upstream = await fetch(`${frappeUrl.replace(/\/+$/, '')}${path}`, {
      next: { revalidate: 3600 },
    });
  } catch {
    return new Response('Bad gateway', { status: 502 });
  }

  if (!upstream.ok || !upstream.body) {
    return new Response('Not found', { status: upstream.status || 404 });
  }

  return new Response(upstream.body, {
    status: 200,
    headers: {
      'Content-Type': upstream.headers.get('content-type') ?? 'application/octet-stream',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400',
    },
  });
}
