import 'server-only';

/**
 * Server-only Frappe REST client.
 *
 * Reads credentials from server-side-only environment variables
 * (FRAPPE_URL, FRAPPE_API_KEY, FRAPPE_API_SECRET, optional FRAPPE_SITE_NAME).
 * Never import this module (or anything that re-exports it) from a Client
 * Component — the `server-only` import will throw a build-time error if
 * that happens by mistake.
 */

const DEFAULT_REVALIDATE_SECONDS = 60;

export class FrappeRequestError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = 'FrappeRequestError';
    this.status = status;
  }
}

interface FrappeEnv {
  url: string;
  apiKey: string;
  apiSecret: string;
  siteName?: string;
}

function getFrappeEnv(): FrappeEnv {
  const url = process.env.FRAPPE_URL;
  const apiKey = process.env.FRAPPE_API_KEY;
  const apiSecret = process.env.FRAPPE_API_SECRET;
  const siteName = process.env.FRAPPE_SITE_NAME;

  const missing: string[] = [];
  if (!url) missing.push('FRAPPE_URL');
  if (!apiKey) missing.push('FRAPPE_API_KEY');
  if (!apiSecret) missing.push('FRAPPE_API_SECRET');

  if (missing.length > 0) {
    throw new Error(
      `Frappe client is misconfigured: missing required environment variable(s): ${missing.join(', ')}.`
    );
  }

  return { url: url!.replace(/\/+$/, ''), apiKey: apiKey!, apiSecret: apiSecret!, siteName };
}

interface FrappeFetchOptions {
  /** Next.js fetch cache mode override, e.g. 'no-store' or 'force-cache'. */
  cache?: RequestCache;
  /** Next.js revalidation options. Defaults to revalidate: 60 seconds. */
  next?: NextFetchRequestConfig;
  /** Extra headers to merge in (never used for credentials by callers). */
  headers?: Record<string, string>;
}

/**
 * Typed fetch helper for the Frappe REST API.
 *
 * `path` must start with "/" and already contain any encoded query string,
 * e.g. `/api/resource/Blog%20Post?${new URLSearchParams(...)}`.
 */
export async function frappeFetch<T>(path: string, options: FrappeFetchOptions = {}): Promise<T> {
  const env = getFrappeEnv();

  const headers: Record<string, string> = {
    Authorization: `token ${env.apiKey}:${env.apiSecret}`,
    Accept: 'application/json',
    ...options.headers,
  };

  if (env.siteName) {
    headers['X-Frappe-Site-Name'] = env.siteName;
  }

  let response: Response;
  try {
    response = await fetch(`${env.url}${path}`, {
      method: 'GET',
      headers,
      cache: options.cache,
      next: options.cache ? undefined : (options.next ?? { revalidate: DEFAULT_REVALIDATE_SECONDS }),
    });
  } catch (cause) {
    // Network-level failure (DNS, connection refused, timeout, etc).
    // Never include headers/credentials in the thrown error.
    throw new FrappeRequestError(
      `Frappe request failed: could not reach ${env.url}. Is the Frappe server running and reachable?`,
      0
    );
  }

  if (!response.ok) {
    throw new FrappeRequestError(`Frappe request failed with status ${response.status}`, response.status);
  }

  try {
    return (await response.json()) as T;
  } catch {
    throw new FrappeRequestError('Frappe request failed: response was not valid JSON', response.status);
  }
}
