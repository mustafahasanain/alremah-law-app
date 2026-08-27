import type { Metadata } from 'next';
import { FileText } from 'lucide-react';
import { getBlogPosts } from '@/lib/frappe/blog';
import { BlogCard } from '@/components/blog/blog-card';

export const metadata: Metadata = {
  title: 'المدونة',
  description: 'مقالات ومستجدات قانونية من شركة الرماح لخدمات المحاماة والاستشارات القانونية.',
};

// Server Component: Frappe data is fetched here, on the server, only.
export default async function BlogIndexPage() {
  const posts = await getBlogPosts();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
      <div className="mb-10 text-center md:mb-14">
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-2 w-2 rotate-45 bg-gold" />
          <span className="h-0.5 w-10 bg-gold" />
          <span className="h-2 w-2 rotate-45 bg-gold" />
        </div>
        <h1
          className="mb-3 text-3xl font-bold text-charcoal dark:text-white md:text-4xl"
          style={{ fontFamily: 'var(--font-arabic), sans-serif' }}
        >
          المدونة القانونية
        </h1>
        <p className="mx-auto max-w-2xl text-sm leading-7 text-medium-gray dark:text-gray-300 md:text-base">
          مقالات ونصائح قانونية من فريق شركة الرماح لخدمات المحاماة والاستشارات القانونية، لمساعدتك على فهم حقوقك
          والإجراءات القانونية بوضوح.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="flex flex-col items-center gap-4 border border-dashed border-border-gray py-20 text-center dark:border-gray-700">
          <FileText size={40} strokeWidth={1.5} className="text-gold/40" />
          <p className="text-medium-gray dark:text-gray-400">لا توجد مقالات منشورة حاليًا. يرجى العودة قريبًا.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.name} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
