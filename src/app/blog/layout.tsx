import type { Metadata } from 'next';
import { BlogHeader } from '@/components/blog/blog-header';
import { BlogFooter } from '@/components/blog/blog-footer';

export const metadata: Metadata = {
  title: {
    default: 'المدونة',
    template: '%s | شركة الرماح لخدمات المحاماة والاستشارات القانونية',
  },
};

/**
 * Shared chrome for /blog and /blog/[slug]. The published content is
 * Arabic, so this section is rendered `dir="rtl"` / `lang="ar"` directly
 * (the root <html lang="en"> in src/app/layout.tsx can't be overridden
 * from a nested layout, so direction/language are set here on the
 * section's own wrapper instead -- this is a normal, supported way to mix
 * text directions on a page and does not require reversing any string).
 */
export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div dir="rtl" lang="ar" className="flex min-h-screen flex-col" style={{ fontFamily: 'var(--font-arabic), sans-serif' }}>
      <BlogHeader />
      <main className="flex-1">{children}</main>
      <BlogFooter />
    </div>
  );
}
