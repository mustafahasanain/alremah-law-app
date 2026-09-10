'use client';

import React, { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react';

export type PageName = 'home' | 'about' | 'practice-areas' | 'faq' | 'contact';

const VALID_PAGES: PageName[] = ['home', 'about', 'practice-areas', 'faq', 'contact'];

interface RouterContextType {
  currentPage: PageName;
  navigate: (page: PageName) => void;
  navigateToSection: (page: PageName, sectionId: string) => void;
  /** The currently selected service slug for the Services Hub (practice-areas page), if any. */
  selectedServiceId: string | null;
  /** Navigate to the Services Hub with a specific service selected. */
  navigateToService: (serviceId: string) => void;
  /** Select a service without navigating (used when already on the Services Hub). */
  selectService: (serviceId: string) => void;
}

const RouterContext = createContext<RouterContextType>({
  currentPage: 'home',
  navigate: () => {},
  navigateToSection: () => {},
  selectedServiceId: null,
  navigateToService: () => {},
  selectService: () => {},
});

export function useRouter() {
  return useContext(RouterContext);
}

/** Parses "practice-areas/some-service-slug" (or just "practice-areas") from the hash. */
function parseHash(hash: string): { page: PageName | null; serviceId: string | null } {
  const clean = hash.replace('#', '');
  const [pagePart, servicePart] = clean.split('/');
  const page = pagePart && VALID_PAGES.includes(pagePart as PageName) ? (pagePart as PageName) : null;
  return { page, serviceId: servicePart || null };
}

function getInitialPage(): PageName {
  if (typeof window !== 'undefined') {
    const { page } = parseHash(window.location.hash);
    if (page) return page;
  }
  return 'home';
}

function getInitialServiceId(): string | null {
  if (typeof window !== 'undefined') {
    const { serviceId } = parseHash(window.location.hash);
    return serviceId;
  }
  return null;
}

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [currentPage, setCurrentPage] = useState<PageName>(getInitialPage);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(getInitialServiceId);
  const initialized = useRef(false);
  // Tracks the last known page so hash changes that only swap the selected
  // service (not the page) don't trigger a jarring scroll-to-top.
  const lastPageRef = useRef<PageName>(currentPage);

  const scrollToSection = useCallback((sectionId: string) => {
    const attemptScroll = (attempt = 0) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }

      if (attempt < 20) {
        window.setTimeout(() => attemptScroll(attempt + 1), 50);
      }
    };

    attemptScroll();
  }, []);

  const navigate = useCallback((page: PageName) => {
    // The hash-routed SPA only lives at "/". When this is called from a real
    // App Router route (e.g. /foreign-entities-registration), setting the
    // hash alone would produce a broken URL like
    // "/foreign-entities-registration#about". Do a real navigation back to
    // the SPA instead.
    if (typeof window !== 'undefined' && window.location.pathname !== '/') {
      window.location.href = page === 'home' ? '/' : `/#${page}`;
      return;
    }
    setCurrentPage(page);
    // A plain navigation to a page means no specific service was requested,
    // so the Services Hub falls back to its default (first) service.
    setSelectedServiceId(null);
    lastPageRef.current = page;
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const navigateToSection = useCallback((page: PageName, sectionId: string) => {
    if (typeof window !== 'undefined' && window.location.pathname !== '/') {
      window.location.href = `/?section=${sectionId}#${page}`;
      return;
    }
    setCurrentPage(page);
    setSelectedServiceId(null);
    lastPageRef.current = page;
    window.location.hash = page;
    scrollToSection(sectionId);
  }, [scrollToSection]);

  const navigateToService = useCallback((serviceId: string) => {
    if (typeof window !== 'undefined' && window.location.pathname !== '/') {
      window.location.href = `/#practice-areas/${serviceId}`;
      return;
    }
    setCurrentPage('practice-areas');
    setSelectedServiceId(serviceId);
    lastPageRef.current = 'practice-areas';
    window.location.hash = `practice-areas/${serviceId}`;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Selects a service while already on the Services Hub — updates the
  // active sidebar item and the URL hash without reloading or scrolling
  // the whole page to the top (the detail panel resets its own scroll).
  const selectService = useCallback((serviceId: string) => {
    setSelectedServiceId(serviceId);
    lastPageRef.current = 'practice-areas';
    if (typeof window !== 'undefined' && window.location.pathname === '/') {
      window.location.hash = `practice-areas/${serviceId}`;
    }
  }, []);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Consume a pending "?section=" left by navigateToSection() when it had
    // to bounce back here from a real App Router route.
    const params = new URLSearchParams(window.location.search);
    const pendingSection = params.get('section');
    if (pendingSection) {
      scrollToSection(pendingSection);
      params.delete('section');
      const cleanSearch = params.toString();
      window.history.replaceState(
        null,
        '',
        `${window.location.pathname}${cleanSearch ? `?${cleanSearch}` : ''}${window.location.hash}`
      );
    }

    const handleHashChange = () => {
      const { page, serviceId } = parseHash(window.location.hash);
      if (page) {
        const pageChanged = page !== lastPageRef.current;
        lastPageRef.current = page;
        setCurrentPage(page);
        setSelectedServiceId(serviceId);
        // Only jump to top on an actual page change (e.g. browser back/
        // forward). Switching services within the Hub keeps scroll position.
        if (pageChanged) {
          window.scrollTo({ top: 0, behavior: 'instant' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <RouterContext.Provider
      value={{
        currentPage,
        navigate,
        navigateToSection,
        selectedServiceId,
        navigateToService,
        selectService,
      }}
    >
      {children}
    </RouterContext.Provider>
  );
}
