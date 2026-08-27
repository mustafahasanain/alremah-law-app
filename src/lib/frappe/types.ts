/**
 * Minimal Frappe Blog Post fields needed by the frontend.
 *
 * Field list confirmed against the installed Frappe v15 schema at:
 * apps/frappe/frappe/website/doctype/blog_post/blog_post.json
 *
 * Note on `route`: Frappe stores the FULL slug on the document, e.g.
 * "blog/example-post" (Blog Category route + scrubbed title), not just the
 * last path segment. See blog_post.py -> make_route().
 */
export interface BlogPost {
  name: string;
  title: string;
  route: string;
  blog_intro: string;
  content: string;
  published: 0 | 1;
  published_on: string;
  meta_title: string | null;
  meta_description: string | null;
  meta_image: string | null;
  blogger: string;
  blog_category: string;
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
}

/** Shape of a Frappe REST "list" response: { data: T[] }. */
export interface FrappeListResponse<T> {
  data: T[];
}

/** Shape of a Frappe REST "single document" response: { data: T }. */
export interface FrappeDocResponse<T> {
  data: T;
}
