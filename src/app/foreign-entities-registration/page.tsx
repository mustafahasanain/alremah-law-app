"use client";

import React from "react";
import { RouterProvider } from "@/components/thelaw/router";
import { LanguageProvider, useLanguage } from "@/lib/i18n/language-context";
import { Header } from "@/components/thelaw/header";
import { Footer } from "@/components/thelaw/footer";
import { CookieBanner } from "@/components/thelaw/cookie-banner";
import { BackToTop } from "@/components/thelaw/back-to-top";
import { ScrollProgress } from "@/components/thelaw/scroll-progress";
import { ForeignEntitiesRegistrationPage } from "@/components/pages/foreign-entities-registration-page";

/**
 * Real App Router route at /foreign-entities-registration.
 *
 * The rest of the marketing site (src/app/page.tsx) is a hash-routed SPA
 * driven by RouterProvider/useRouter (src/components/thelaw/router.tsx),
 * which only ever renders at "/". This page is a genuine, separately
 * rendered route (supports direct load, refresh, and back/forward), so it
 * mounts its own LanguageProvider/RouterProvider instances and reuses the
 * same global Header/Footer/etc. — router.tsx's navigate()/navigateToSection()
 * already know how to bounce back to "/" (or "/#page") when called from a
 * pathname other than "/".
 */
function PageContent() {
  const { dir } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden" dir={dir}>
      <a href="#main-content" className="skip-to-content">
        Skip to Content
      </a>
      <ScrollProgress />
      <Header />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        <ForeignEntitiesRegistrationPage />
      </main>
      <Footer />
      <CookieBanner />
      <BackToTop />
    </div>
  );
}

export default function ForeignEntitiesRegistrationRoute() {
  return (
    <LanguageProvider>
      <RouterProvider>
        <PageContent />
      </RouterProvider>
    </LanguageProvider>
  );
}
