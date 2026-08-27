import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

/**
 * Footer for the /blog section. See blog-header.tsx for why this is a
 * small standalone component instead of reusing the SPA's <Footer> — same
 * reasoning applies (that component is wired to the hash-based in-page
 * router and isn't meaningful outside `/`). Brand colors, spacing, and
 * typography match the existing footer.
 */
export function BlogFooter() {
  return (
    <footer className="mt-auto bg-charcoal-dark text-gray-300 dark:bg-[#111111]">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h4 className="mb-3 text-base font-semibold text-white">
              شركة الرماح لخدمات المحاماة والاستشارات القانونية
            </h4>
            <p className="text-sm leading-6 text-gray-400">
              أكثر من 25 عامًا من الخبرة في تقديم استشارات وخدمات قانونية موثوقة.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-base font-semibold text-white">روابط سريعة</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/" className="w-fit text-gray-300 transition-colors hover:text-gold">
                الرئيسية
              </Link>
              <Link href="/blog" className="w-fit text-gray-300 transition-colors hover:text-gold">
                المدونة
              </Link>
              <Link href="/#contact" className="w-fit text-gray-300 transition-colors hover:text-gold">
                تواصل معنا
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-base font-semibold text-white">تواصل معنا</h4>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="tel:+964 774 646 4606"
                className="flex items-center gap-2 text-gray-300 transition-colors hover:text-gold"
              >
                <Phone size={14} className="text-gold" />
                <span dir="ltr">+964 774 646 4606</span>
              </a>
              <a
                href="mailto:al-remahLawfirm@outlook.com"
                className="flex items-center gap-2 text-gray-300 transition-colors hover:text-gold"
              >
                <Mail size={14} className="text-gold" />
                al-remahLawfirm@outlook.com
              </a>
              <span className="flex items-center gap-2 text-gray-300">
                <MapPin size={14} className="text-gold" />
                بغداد، الكرادة عرصات الهدية
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} شركة الرماح لخدمات المحاماة والاستشارات القانونية. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}
