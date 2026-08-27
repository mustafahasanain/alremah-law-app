'use client';

import React, { createContext, useCallback, useContext, useSyncExternalStore } from 'react';

/**
 * Minimal replacement for `next-themes`' <ThemeProvider>/useTheme().
 *
 * Why this exists: next-themes renders its no-flash-of-wrong-theme script
 * as a raw `<script>` React element inside the component tree
 * (`t.createElement("script", ...)`), which React 19 / Next 16's dev
 * overlay flags with "Encountered a script tag while rendering React
 * component" -- true as of the latest next-themes release (0.4.6) and
 * still true in its 1.0.0-beta.0. Since the app only ever used `theme` +
 * `setTheme` (see theme-toggle.tsx, ui/sonner.tsx) with attribute="class",
 * defaultTheme="light", enableSystem={false}, this local implementation
 * covers that exact surface without depending on the library.
 *
 * The actual no-flash script tag lives in src/app/layout.tsx itself (via
 * next/script, strategy="beforeInteractive") -- Next's App Router docs
 * require beforeInteractive scripts to be written directly in the root
 * layout, and its ESLint rule (no-before-interactive-script-outside-document)
 * only recognizes that placement. `NO_FLASH_SCRIPT` here is the single
 * source of truth for its contents, kept next to STORAGE_KEY/DEFAULT_THEME
 * so they can't drift out of sync.
 *
 * Theme reads use `useSyncExternalStore` (subscribing to localStorage /
 * this module's in-memory listeners) rather than "read on mount then
 * setState in an effect", which is flagged by the
 * react-hooks/set-state-in-effect lint rule and causes an extra render.
 *
 * The "Encountered a script tag while rendering React component" warning
 * itself is a confirmed, currently-unfixed React 19 / Next.js 16.2 dev-mode
 * false positive -- it fires for ANY <script> host element rendered client
 * side, including Next's own sanctioned next/script `beforeInteractive`
 * strategy (its inline-script branch renders a plain `<script>` internally;
 * see node_modules/next/dist/client/script.js). The same warning is open
 * and unresolved against next-themes, shadcn/ui, and heroui:
 *   https://github.com/pacocoursey/next-themes/issues/387
 *   https://github.com/shadcn-ui/ui/issues/10104
 *   https://github.com/shadcn-ui/ui/issues/10200
 *   https://github.com/heroui-inc/heroui/issues/6348
 * There is no way to keep synchronous no-flash theming (a real script tag
 * must run before hydration) without triggering it in this Next/React
 * combo. `installDevScriptWarningFilter` below applies the same scoped
 * console.error filter used as a workaround across those issues: dev-only,
 * matches only this exact message, everything else still reaches the real
 * console.error unchanged.
 */

const SCRIPT_WARNING_TEXT = 'Encountered a script tag while rendering React component';

/**
 * Filters out only the known-false-positive warning documented above.
 * Every other console.error call is passed through unchanged. Dev-only
 * (NODE_ENV !== 'production') and browser-only; a module-level flag keeps
 * Fast Refresh from wrapping console.error more than once.
 */
function installDevScriptWarningFilter() {
  if (typeof window === 'undefined' || process.env.NODE_ENV === 'production') return;

  const w = window as typeof window & { __themeScriptWarningFilterInstalled?: boolean };
  if (w.__themeScriptWarningFilterInstalled) return;
  w.__themeScriptWarningFilterInstalled = true;

  const originalConsoleError = console.error;
  console.error = (...args: unknown[]) => {
    if (typeof args[0] === 'string' && args[0].includes(SCRIPT_WARNING_TEXT)) return;
    originalConsoleError.apply(console, args);
  };
}

installDevScriptWarningFilter();

export type Theme = 'light' | 'dark';

export const STORAGE_KEY = 'theme';
export const DEFAULT_THEME: Theme = 'light';

export const NO_FLASH_SCRIPT = `(function(){try{var t=localStorage.getItem('${STORAGE_KEY}');if(t!=='light'&&t!=='dark'){t='${DEFAULT_THEME}';}var d=document.documentElement;d.classList.remove('light','dark');d.classList.add(t);d.style.colorScheme=t;}catch(e){}})();`;

const listeners = new Set<() => void>();

function readStoredTheme(): Theme {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === 'light' || saved === 'dark' ? saved : DEFAULT_THEME;
  } catch {
    return DEFAULT_THEME;
  }
}

function getServerSnapshot(): Theme {
  return DEFAULT_THEME;
}

function subscribe(onStoreChange: () => void) {
  listeners.add(onStoreChange);
  return () => listeners.delete(onStoreChange);
}

function applyThemeToDocument(theme: Theme) {
  const root = document.documentElement;
  root.classList.remove('light', 'dark');
  root.classList.add(theme);
  root.style.colorScheme = theme;
}

function writeStoredTheme(theme: Theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Ignore write failures (e.g. private browsing); theme still applies
    // for this session via the DOM class set below.
  }
  applyThemeToDocument(theme);
  listeners.forEach((listener) => listener());
}

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: DEFAULT_THEME,
  setTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Server snapshot matches DEFAULT_THEME (no localStorage during SSR); the
  // client snapshot reads the real stored value. React reconciles the two
  // safely because useSyncExternalStore is designed for exactly this.
  const theme = useSyncExternalStore(subscribe, readStoredTheme, getServerSnapshot);

  const setTheme = useCallback((next: Theme) => {
    writeStoredTheme(next);
  }, []);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}
