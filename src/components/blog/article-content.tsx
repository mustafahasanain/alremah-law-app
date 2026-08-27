import ReactMarkdown from 'react-markdown';
import type { BlogPost } from '@/lib/frappe/types';
import { getBlogPostRawContent } from '@/lib/frappe/blog';
import { sanitizeBlogHtml } from '@/lib/blog/sanitize';

/**
 * Renders a Blog Post's body according to `content_type`.
 *
 * - Rich Text / HTML -> sanitized on the server (sanitize-html) and
 *   rendered via dangerouslySetInnerHTML. This is the currently-published
 *   content type, so it's the well-tested path.
 * - Markdown -> rendered with `react-markdown` (already a project
 *   dependency). react-markdown does not interpret embedded raw HTML by
 *   default (no rehype-raw plugin is used here), so this path is safe
 *   without a separate sanitize step.
 * - Missing/unrenderable content -> a plain fallback message instead of a
 *   crash or blank article.
 *
 * All formatting comes from the `.article-prose` styles in globals.css,
 * not from Frappe's `.ql-editor` classes (not shipped to this app).
 */
export function ArticleContent({ post }: { post: BlogPost }) {
  const raw = getBlogPostRawContent(post);

  if (!raw) {
    return <p className="article-prose text-medium-gray dark:text-gray-400">لا يتوفر محتوى لهذا المقال حاليًا.</p>;
  }

  if (post.content_type === 'Markdown') {
    return (
      <div className="article-prose">
        <ReactMarkdown>{raw}</ReactMarkdown>
      </div>
    );
  }

  // Rich Text and HTML both store real HTML markup; sanitize before render.
  const safeHtml = sanitizeBlogHtml(raw);
  return <div className="article-prose" dangerouslySetInnerHTML={{ __html: safeHtml }} />;
}
