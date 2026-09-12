import type { Metadata, Viewport } from "next";
import { Cairo, Montserrat, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { NO_FLASH_SCRIPT, ThemeProvider } from "@/components/theme/theme-provider";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cairo = Cairo({
  variable: "--font-arabic",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#333333",
  width: "device-width",
  initialScale: 1,
};

const SITE_TITLE = "شركة الرماح للمحاماة والاستشارات القانونية | Alremah Law Firm";
const SITE_DESCRIPTION =
  "شركة الرماح لتقديم الخدمات والاستشارات القانونية المتخصصة في شؤون الشركات والاستثمار الأجنبي والعقود والصفقات التجارية وتسوية المنازعات في العراق.";

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_TITLE}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "شركة الرماح للمحاماة",
    "استشارات قانونية",
    "تأسيس الشركات",
    "الاستثمار الأجنبي",
    "العقود والصفقات التجارية",
    "تسوية المنازعات",
    "بغداد الكرادة عرصات الهندية",
    "Alremah Law Firm",
    "Iraq law firm",
  ],
  authors: [{ name: "Alremah Law Firm" }],
  creator: "Alremah Law Firm",
  publisher: "Alremah Law Firm",
  metadataBase: new URL("https://thelawfirm.com"),
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    type: "website",
    siteName: "Alremah Law Firm",
    locale: "ar_IQ",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/images/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/favicon.svg" type="image/svg+xml" />
        {/* Must run before hydration to avoid a flash of the wrong theme;
            App Router requires beforeInteractive scripts to be written
            directly in the root layout (see theme-provider.tsx). */}
        <Script id="theme-no-flash" strategy="beforeInteractive">
          {NO_FLASH_SCRIPT}
        </Script>
      </head>
      <body
        className={`${montserrat.variable} ${playfair.variable} ${cairo.variable} antialiased bg-background text-foreground font-sans transition-colors duration-300`}
        style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
      >
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
