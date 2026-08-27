/**
 * Minimal Frappe Blog Post fields needed by the frontend.
 *
 * Field list confirmed against the installed Frappe v15 schema at:
 * apps/frappe/frappe/website/doctype/blog_post/blog_post.json
 *
 * Note on `route`: Frappe stores the FULL slug on the document, e.g.
 * "blog/example-post" (Blog Category route + scrubbed title), not just the
 * last path segment. See blog_post.py -> make_route().
 *
 * Note on content fields: a Blog Post's active content field depends on
 * `content_type`:
 *   - content_type === "Rich Text" -> `content` holds the HTML to render.
 *   - content_type === "Markdown"  -> `content_md` holds the markdown source.
 *   - content_type === "HTML"      -> `content_html` holds the HTML source.
 * A post that was previously edited under a different content type may
 * still carry a stale value in the other field(s) — callers must select the
 * field based on `content_type`, not on which fields happen to be non-empty.
 */
export interface BlogPost {
  name: string;
  title: string;
  route: string;
  blog_intro: string | null;
  blogger: string;
  blog_category: string;
  published: 0 | 1;
  published_on: string;
  featured: 0 | 1;
  read_time: number | null;

  content_type: 'Rich Text' | 'Markdown' | 'HTML' | null;
  content: string | null;
  content_md: string | null;
  content_html: string | null;

  meta_title: string | null;
  meta_description: string | null;
  meta_image: string | null;
}

/** Minimal Blogger fields needed for current integration. */
export interface Blogger {
  name: string;
  full_name: string;
  short_name: string;
  avatar: string | null;
}

/** Minimal Blog Category fields needed for current integration. */
export interface BlogCategory {
  name: string;
  title: string;
  route: string;
  published: 0 | 1;
}

/** Shape of a Frappe REST "list" response: { data: T[] }. */
export interface FrappeListResponse<T> {
  data: T[];
}

/** Shape of a Frappe REST "single document" response: { data: T }. */
export interface FrappeDocResponse<T> {
  data: T;
}
