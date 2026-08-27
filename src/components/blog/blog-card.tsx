import Link from 'next/link';
import { Clock, FolderOpen } from 'lucide-react';
import type { BlogPost } from '@/lib/frappe/types';
import { getFrappeAssetUrl } from '@/lib/frappe/client';
import { formatBlogDate } from '@/lib/blog/format-date';

/**
 * Blog listing card. Links to the public slug route (`post.name`), never
 * to Frappe's internal category-based `post.route`.
 *
 * Uses a plain <img> rather than next/image for the remote Frappe asset —
 * see the note in src/app/blog/[slug]/page.tsx for why.
 */
export function BlogCard({ post }: { post: BlogPost }) {
  const imageUrl = getFrappeAssetUrl(post.meta_image);
  const publishedDate = formatBlogDate(post.published_on);

  return (
    <Link
      href={`/blog/${encodeURIComponent(post.name)}`}
      className="practice-card group flex h-full flex-col overflow-hidden border border-border-gray bg-light-gray transition-all duration-300 hover:border-gold hover:bg-white hover:shadow-lg dark:border-gray-700 dark:bg-charcoal dark:hover:bg-charcoal-dark"
    >
      <div className="aspect-[16/9] w-full overflow-hidden bg-border-gray dark:bg-gray-800">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-gold/30">
            <FolderOpen size={40} strokeWidth={1.5} />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        {post.blog_category && (
          <span className="mb-2 w-fit text-xs font-semibold uppercase tracking-wider text-gold">
            {post.blog_category.replace(/-/g, ' ')}
          </span>
        )}

        <h2 className="mb-2 text-lg font-bold leading-snug text-charcoal dark:text-white">
          {post.title}
        </h2>

        {post.blog_intro && (
          <p className="mb-4 line-clamp-3 flex-1 text-sm leading-6 text-medium-gray dark:text-gray-300">
            {post.blog_intro}
          </p>
        )}

        <div className="mt-auto flex items-center gap-4 border-t border-border-gray pt-3 text-xs text-medium-gray dark:border-gray-700 dark:text-gray-400">
          {publishedDate && <span>{publishedDate}</span>}
          {typeof post.read_time === 'number' && post.read_time > 0 && (
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {post.read_time} دقيقة قراءة
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
