import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

const FOREIGN_ENTITIES_PATH = '/foreign-entities-registration';

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
 * accents, typography) and the full set of main-site nav items. Links that
 * target a hash "page" on the SPA (e.g. "/#contact") use plain <a> tags
 * rather than next/link's <Link>: Link performs a soft, client-side
 * navigation that can reuse a cached "/" render whose RouterProvider was
 * already mounted with a different hash, so the hash-change is silently
 * ignored and the user lands on whatever page was last cached (typically
 * "home") instead of the requested one. A plain <a> forces a full page
 * load, which always re-reads the hash on mount and lands on the right
 * page. Real, separately-rendered routes ("/", "/blog",
 * "/foreign-entities-registration") don't have this problem and keep using
 * <Link>. It intentionally does not duplicate the SPA's mobile drawer/
 * menu-state logic.
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
          <a
            href="/#contact"
            className="bg-gold px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white transition-all hover:bg-gold-light"
          >
            استشارة قانونية
          </a>
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

          <nav className="flex flex-wrap items-center justify-end gap-1" aria-label="التنقل الرئيسي">
            <a
              href="/"
              className="px-3 py-2 text-sm font-medium text-[#333333] transition-colors hover:text-gold dark:text-gray-300"
            >
              الرئيسية
            </a>
            <a
              href="/#about"
              className="px-3 py-2 text-sm font-medium text-[#333333] transition-colors hover:text-gold dark:text-gray-300"
            >
              من نحن
            </a>
            <a
              href="/#practice-areas"
              className="px-3 py-2 text-sm font-medium text-[#333333] transition-colors hover:text-gold dark:text-gray-300"
            >
              مجالات الممارسة
            </a>
            <Link
              href={FOREIGN_ENTITIES_PATH}
              className="px-3 py-2 text-sm font-medium text-[#333333] transition-colors hover:text-gold dark:text-gray-300"
            >
              تسجيل الشركات والمنظمات الأجنبية
            </Link>
            <a
              href="/#faq"
              className="px-3 py-2 text-sm font-medium text-[#333333] transition-colors hover:text-gold dark:text-gray-300"
            >
              الأسئلة الشائعة
            </a>
            <Link
              href="/blog"
              className="px-3 py-2 text-sm font-medium text-gold transition-colors"
            >
              المدونة
            </Link>
            <a
              href="/#contact"
              className="px-3 py-2 text-sm font-medium text-[#333333] transition-colors hover:text-gold dark:text-gray-300"
            >
              تواصل معنا
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
