import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

/**
 * Header for the /blog section.
 *
 * The rest of the site (src/app/page.tsx) is a single hash-routed SPA: its
 * <Header> reads/writes navigation state through a client-side
 * `RouterProvider` (src/components/thelaw/router.tsx) that only knows about
 * five in-page "pages" ('home' | 'about' | 'practice-areas' | 'faq' |
 * 'contact') and never leaves `/`. /blog and /blog/[slug] are real,
 * separately-rendered App Router routes, so that provider isn't mounted
 * here and its nav buttons would silently no-op if reused as-is.
 *
 * This header reproduces the same brand look (logo, top contact bar, gold
 * accents, typography) using plain <Link>s that are real URLs — "/" and
 * "/#<section>" — so navigation actually works when landing on /blog from
 * a fresh page load. It intentionally does not duplicate the SPA's mobile
 * drawer/menu-state logic.
 */
export function BlogHeader() {
  return (
    <>
      <div className="hidden bg-charcoal text-white text-sm md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
          <div className="flex items-center gap-4">
            <a
              href="tel:+964 774 646 4606"
              className="flex items-center gap-1 text-gray-300 transition-colors hover:text-gold"
            >
              <Phone size={12} />
              <span dir="ltr">+964 774 646 4606</span>
            </a>
            <a
              href="mailto:al-remahLawfirm@outlook.com"
              className="flex items-center gap-1 text-gray-300 transition-colors hover:text-gold"
            >
              <Mail size={12} />
              al-remahLawfirm@outlook.com
            </a>
          </div>
          <Link
            href="/#contact"
            className="bg-gold px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white transition-all hover:bg-gold-light"
          >
            استشارة قانونية
          </Link>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-border-gray bg-white dark:border-gray-700 dark:bg-charcoal-dark">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/images/logo.jpg"
              alt="Alremah Law Services"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          <nav className="flex items-center gap-1" aria-label="التنقل الرئيسي">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-medium text-[#333333] transition-colors hover:text-gold dark:text-gray-300"
            >
              الرئيسية
            </Link>
            <Link
              href="/blog"
              className="px-3 py-2 text-sm font-medium text-gold transition-colors"
            >
              المدونة
            </Link>
            <Link
              href="/#contact"
              className="px-3 py-2 text-sm font-medium text-[#333333] transition-colors hover:text-gold dark:text-gray-300"
            >
              تواصل معنا
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
