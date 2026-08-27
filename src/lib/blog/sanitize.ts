import 'server-only';

import sanitizeHtml from 'sanitize-html';

/**
 * Sanitizes Blog Post HTML content (Rich Text / HTML content types) before
 * it is rendered via `dangerouslySetInnerHTML` on the server.
 *
 * This is intentionally a server-only module: sanitization must happen on
 * the server, and only the resulting safe HTML string is ever sent to the
 * client — the sanitizer itself, and its rules, never ship to the browser.
 *
 * Allows normal article formatting (paragraphs, headings, emphasis, links,
 * lists, blockquotes, code/pre, tables, images) while stripping anything
 * capable of executing script in the browser: <script>, <iframe>, inline
 * event handler attributes (onclick, onerror, ...), and `javascript:` /
 * `data:` URLs in href/src.
 */

const ALLOWED_TAGS = [
  'p',
  'br',
  'hr',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'strong',
  'b',
  'em',
  'i',
  'u',
  's',
  'strike',
  'mark',
  'sub',
  'sup',
  'a',
  'ul',
  'ol',
  'li',
  'blockquote',
  'code',
  'pre',
  'table',
  'thead',
  'tbody',
  'tfoot',
  'tr',
  'th',
  'td',
  'img',
  'span',
  'div',
];

const ALLOWED_ATTRIBUTES: sanitizeHtml.IOptions['allowedAttributes'] = {
  a: ['href', 'title', 'target', 'rel'],
  img: ['src', 'alt', 'title', 'width', 'height'],
  '*': ['class'],
};

// Only allow safe URL schemes; blocks `javascript:`, `data:`, `vbscript:`, etc.
const ALLOWED_SCHEMES = ['http', 'https', 'mailto', 'tel'];

/**
 * Sanitize raw Frappe Blog Post HTML (from `content` or `content_html`) for
 * safe server-side rendering. Does not sanitize Markdown source — Markdown
 * is not HTML and must go through a Markdown renderer instead (see
 * src/app/blog/[slug]/page.tsx for the current fallback behavior).
 */
export function sanitizeBlogHtml(rawHtml: string): string {
  return sanitizeHtml(rawHtml, {
    allowedTags: ALLOWED_TAGS,
    allowedAttributes: ALLOWED_ATTRIBUTES,
    allowedSchemes: ALLOWED_SCHEMES,
    allowedSchemesByTag: {
      img: ['http', 'https'],
    },
    // Strip javascript:/data: etc. even inside allowed attributes.
    disallowedTagsMode: 'discard',
    // Force safe defaults on links so a sanitized `target="_blank"` can't be
    // used for a reverse-tabnabbing attack.
    transformTags: {
      a: sanitizeHtml.simpleTransform('a', { rel: 'noopener noreferrer nofollow' }),
    },
  });
}
