'use client';

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { type Language, type TranslationKeys, translations } from './translations';

interface LanguageContextType {
  language: Language;
  dir: 'ltr' | 'rtl';
  setLanguage: (lang: Language) => void;
  t: TranslationKeys;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  dir: 'ltr',
  setLanguage: () => {},
  t: translations.en as unknown as TranslationKeys,
  isRTL: false,
});

export function useLanguage() {
  return useContext(LanguageContext);
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Always start at "en" so the client's first render matches the
  // server-rendered HTML (which has no access to localStorage). Reading the
  // saved language directly in the useState initializer caused a hydration
  // mismatch — the client's very first render already differed from the
  // server's, producing React "Hydration failed" errors on any direct load
  // or refresh once a visitor had previously selected Arabic. The persisted
  // language is restored right after mount instead, in the effect below.
  const [language, setLanguageState] = useState<Language>('en');

  // Restore the visitor's saved language once mounted (client-only). This
  // syncs React state from an external store (localStorage) right after
  // hydration completes, so it intentionally runs once on mount.
  useEffect(() => {
    const saved = localStorage.getItem('thelaw-language') as Language | null;
    if (saved && (saved === 'en' || saved === 'ar') && saved !== language) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- restoring persisted state post-hydration, not a render-phase side effect
      setLanguageState(saved);
    }
  }, [language]);

  // Update document dir and lang attributes
  useEffect(() => {
    const dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = language;

    // Add/remove RTL class for CSS targeting
    if (language === 'ar') {
      document.documentElement.classList.add('rtl');
    } else {
      document.documentElement.classList.remove('rtl');
    }
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('thelaw-language', lang);
  }, []);

  const dir = language === 'ar' ? 'rtl' : 'ltr';
  const t = translations[language] as unknown as TranslationKeys;
  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, dir, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}
