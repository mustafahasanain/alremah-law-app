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

export const metadata: Metadata = {
  title: {
    default: "Alremah Company for Legal Services and Consultancy - Criminal Justice Attorney",
    template: "%s | Alremah Company for Legal Services and Consultancy",
  },
  description:
    "Alremah Company for Legal Services and Consultancy - Experienced Criminal Justice Attorney providing aggressive legal representation in criminal defense, personal injury, family law, business disputes, and more. Over 25 years of dedicated service with a 98% success rate. Legal Consultation available 24/7.",
  keywords: [
    "law firm",
    "criminal defense attorney",
    "personal injury lawyer",
    "family law",
    "business disputes",
    "DUI defense",
    "legal representation",
    "Legal Consultation",
    "24/7 emergency lawyer",
    "الكرادة عرصات الهدية",
    "litigation",
    "civil rights",
  ],
  authors: [{ name: "Alremah Company for Legal Services and Consultancy" }],
  creator: "Alremah Company for Legal Services and Consultancy",
  publisher: "Alremah Company for Legal Services and Consultancy",
  metadataBase: new URL("https://thelawfirm.com"),
  openGraph: {
    title: "Alremah Company for Legal Services and Consultancy - Criminal Justice Attorney",
    description:
      "Experienced Criminal Justice Attorneys. Over 25 years of dedicated legal representation with a 98% success rate. Legal Consultation available 24/7.",
    type: "website",
    siteName: "Alremah Company for Legal Services and Consultancy",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alremah Company for Legal Services and Consultancy - Criminal Justice Attorney",
    description:
      "Experienced Criminal Justice Attorneys. Over 25 years of dedicated legal representation with a 98% success rate.",
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
