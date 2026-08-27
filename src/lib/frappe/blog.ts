import 'server-only';

import { frappeFetch } from './client';
import type { BlogCategory, Blogger, BlogPost, FrappeDocResponse, FrappeListResponse } from './types';

const BLOG_POST_LIST_FIELDS = [
  'name',
  'title',
  'route',
  'blog_intro',
  'published',
  'published_on',
  'featured',
  'read_time',
  'meta_title',
  'meta_description',
  'meta_image',
  'blogger',
  'blog_category',
] as const;

const BLOG_POST_DETAIL_FIELDS = [
  ...BLOG_POST_LIST_FIELDS,
  'content_type',
  'content',
  'content_md',
  'content_html',
] as const;

const DEFAULT_PAGE_LENGTH = 20;

/**
 * Fetch published Blog Posts, newest first.
 *
 * Only requests the fields the frontend needs (list view does not need
 * `content`). Uses the default 60s revalidation from frappeFetch.
 */
export async function getBlogPosts(): Promise<BlogPost[]> {
  const params = new URLSearchParams({
    fields: JSON.stringify(BLOG_POST_LIST_FIELDS),
    filters: JSON.stringify([['published', '=', 1]]),
    order_by: 'published_on desc',
    limit_page_length: String(DEFAULT_PAGE_LENGTH),
  });

  const result = await frappeFetch<FrappeListResponse<BlogPost>>(`/api/resource/Blog%20Post?${params}`);
  return result.data;
}

/**
 * Fetch a single published Blog Post by its exact stored `route` (the full
 * website route Frappe generates, e.g. "blog/example-post" — see types.ts
 * for details). Callers must supply the exact route; this function does not
 * guess or prepend any prefix (e.g. "blog/"). Returns null if no matching
 * published post exists.
 */
export async function getBlogPostByRoute(route: string): Promise<BlogPost | null> {
  const params = new URLSearchParams({
    fields: JSON.stringify(BLOG_POST_DETAIL_FIELDS),
    filters: JSON.stringify([
      ['route', '=', route],
      ['published', '=', 1],
    ]),
    limit_page_length: '1',
  });

  const result = await frappeFetch<FrappeListResponse<BlogPost>>(`/api/resource/Blog%20Post?${params}`);
  return result.data[0] ?? null;
}

/** Fetch a single Blogger by name (the User-linked blogger record). */
export async function getBlogger(name: string): Promise<Blogger | null> {
  const params = new URLSearchParams({
    fields: JSON.stringify(['name', 'full_name', 'short_name', 'avatar']),
  });

  try {
    const result = await frappeFetch<FrappeDocResponse<Blogger>>(
      `/api/resource/Blogger/${encodeURIComponent(name)}?${params}`
    );
    return result.data;
  } catch (error) {
    if (error instanceof Error && 'status' in error && (error as { status: number }).status === 404) {
      return null;
    }
    throw error;
  }
}

/** Fetch published Blog Categories. */
export async function getBlogCategories(): Promise<BlogCategory[]> {
  const params = new URLSearchParams({
    fields: JSON.stringify(['name', 'title', 'route', 'published']),
    filters: JSON.stringify([['published', '=', 1]]),
    limit_page_length: String(DEFAULT_PAGE_LENGTH),
  });

  const result = await frappeFetch<FrappeListResponse<BlogCategory>>(`/api/resource/Blog%20Category?${params}`);
  return result.data;
}

/**
 * Return the raw (unrendered) content source for a Blog Post, selected
 * according to `content_type`:
 *   - "Rich Text" -> content
 *   - "Markdown"  -> content_md
 *   - "HTML"      -> content_html
 *   - null/unknown -> falls back to `content` (Frappe's default content_type
 *     is Rich Text, so this is the safe default).
 * Does not render, sanitize, or otherwise transform the value — that
 * belongs to the Blog page implementation.
 */
export function getBlogPostRawContent(post: BlogPost): string | null {
  switch (post.content_type) {
    case 'Markdown':
      return post.content_md;
    case 'HTML':
      return post.content_html;
    case 'Rich Text':
    default:
      return post.content;
  }
}
