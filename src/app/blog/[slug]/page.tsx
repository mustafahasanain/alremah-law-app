import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Calendar, Clock, User } from 'lucide-react';
import { getBlogPostByName, getBlogger } from '@/lib/frappe/blog';
import { getFrappeAssetUrl } from '@/lib/frappe/client';
import { formatBlogDate } from '@/lib/blog/format-date';
import { ArticleContent } from '@/components/blog/article-content';

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

function decodeSlug(slug: string): string {
  // Next.js is expected to hand page params already decoded, but percent-
  // encoded Arabic segments have been observed arriving still-encoded here
  // (e.g. "%D9%83..."). Decoding defensively is safe either way: a string
  // with no "%XX" sequences (already-decoded Arabic text) passes through
  // decodeURIComponent unchanged.
  try {
    return decodeURIComponent(slug);
  } catch {
    return slug;
  }
}

async function loadPost(slug: string) {
  // getBlogPostByName sends the value through URLSearchParams, so no
  // further escaping is needed once it's decoded here.
  return getBlogPostByName(decodeSlug(slug));
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await loadPost(slug);

  if (!post) {
    return { title: 'المقال غير موجود' };
  }

  const title = post.meta_title ?? post.title;
  const description = post.meta_description ?? post.blog_intro ?? undefined;
  const imageUrl = getFrappeAssetUrl(post.meta_image);

  return {
    title,
    description,
    // No canonical: the root layout's metadataBase ("https://thelawfirm.com")
    // is a placeholder, not the real Alremah production domain, so a
    // canonical URL built from it would be wrong. Add this back once the
    // real production domain is configured.
    openGraph: {
      title,
      description,
      type: 'article',
      images: imageUrl ? [{ url: imageUrl }] : undefined,
    },
    twitter: {
      card: imageUrl ? 'summary_large_image' : 'summary',
      title,
      description,
    },
  };
}

// Server Component: Frappe data is fetched here, on the server, only.
export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = await loadPost(slug);

  if (!post) {
    notFound();
  }

  // Blogger details are secondary to the article itself: if this lookup
  // fails, the article still renders without an author byline.
  const blogger = post.blogger
    ? await getBlogger(post.blogger).catch(() => null)
    : null;

  const imageUrl = getFrappeAssetUrl(post.meta_image);
  const avatarUrl = getFrappeAssetUrl(blogger?.avatar);
  const publishedDate = formatBlogDate(post.published_on);
  const authorName = blogger?.full_name ?? post.blogger;

  return (
    <article className="mx-auto max-w-3xl px-4 py-10 md:py-14">
      {post.blog_category && (
        <span className="mb-3 block text-sm font-semibold uppercase tracking-wider text-gold">
          {post.blog_category.replace(/-/g, ' ')}
        </span>
      )}

      <h1
        className="mb-4 text-2xl font-bold leading-snug text-charcoal dark:text-white md:text-4xl"
        style={{ fontFamily: 'var(--font-arabic), sans-serif' }}
      >
        {post.title}
      </h1>

      {post.blog_intro && (
        <p className="mb-6 text-base leading-8 text-medium-gray dark:text-gray-300">{post.blog_intro}</p>
      )}

      <div className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-y border-border-gray py-4 text-sm text-medium-gray dark:border-gray-700 dark:text-gray-400">
        {authorName && (
          <span className="flex items-center gap-2">
            {avatarUrl ? (
              <img src={avatarUrl} alt={authorName} className="h-7 w-7 rounded-full object-cover" />
            ) : (
              <User size={16} />
            )}
            {authorName}
          </span>
        )}
        {publishedDate && (
          <span className="flex items-center gap-1.5">
            <Calendar size={14} />
            {publishedDate}
          </span>
        )}
        {typeof post.read_time === 'number' && post.read_time > 0 && (
          <span className="flex items-center gap-1.5">
            <Clock size={14} />
            {post.read_time} دقيقة قراءة
          </span>
        )}
      </div>

      {imageUrl && (
        // Plain <img>, not next/image: next/image's optimizer would fetch
        // this file server-side from FRAPPE_URL, whose host is
        // environment-dependent (a local hostname in dev today, a real
        // domain in production) and isn't necessarily configured as a
        // next.config.ts remotePattern in every environment. A plain <img>
        // loads the already-resolved absolute URL directly from the
        // browser and degrades safely (broken-image only) instead of a
        // 500 from the image optimizer if the host is ever unreachable
        // from the Next.js server. It's still responsive via CSS below.
        <img
          src={imageUrl}
          alt={post.title}
          className="mb-8 aspect-[16/9] w-full border border-border-gray object-cover dark:border-gray-700"
        />
      )}

      <ArticleContent post={post} />
    </article>
  );
}
