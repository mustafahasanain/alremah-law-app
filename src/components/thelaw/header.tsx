'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter, type PageName } from './router';
import { useLanguage } from '@/lib/i18n/language-context';
import { Menu, X, Phone, Mail, Instagram } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { LanguageSwitcher } from './language-switcher';

const INSTAGRAM_URL = 'https://www.instagram.com/remah.lawfirm';
const FOREIGN_ENTITIES_PATH = '/foreign-entities-registration';

type NavItem =
  | { kind: "page"; label: string; page: PageName }
  | { kind: "link"; label: string; href: string };

export function Header() {
  const { currentPage, navigate, navigateToSection } = useRouter();
  const { t, isRTL } = useLanguage();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const NAV_ITEMS: NavItem[] = [
    { kind: 'page', label: t.header.home, page: 'home' },
    { kind: 'page', label: t.header.about, page: 'about' },
    { kind: 'page', label: t.header.practiceAreas, page: 'practice-areas' },
    { kind: 'link', label: t.header.foreignEntities, href: FOREIGN_ENTITIES_PATH },
    { kind: 'page', label: t.header.faq, page: 'faq' },
    { kind: 'link', label: t.header.blog, href: '/blog' },
    { kind: 'page', label: t.header.contact, page: 'contact' },
  ];

  const isItemActive = (item: NavItem) =>
    item.kind === 'link'
      ? pathname === item.href
      : currentPage === item.page && pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const openMobileMenu = useCallback(() => {
    setMobileMenuOpen(true);
    requestAnimationFrame(() => {
      setMobileMenuVisible(true);
    });
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuVisible(false);
    setTimeout(() => {
      setMobileMenuOpen(false);
    }, 300);
  }, []);

  const handleNavigate = useCallback((page: PageName) => {
    navigate(page);
    closeMobileMenu();
  }, [navigate, closeMobileMenu]);

  return (
    <>
      {/* Top bar */}
      <div className="bg-charcoal dark:bg-charcoal-dark text-white text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
                <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer noopener" title="Instagram" className="text-gold hover:text-gold-light transition-colors"><Instagram size={14} /></a>
              <a href="mailto:al-remahLawfirm@outlook.com" className="text-gold hover:text-gold-light transition-colors"><Mail size={14} /></a>
            </div>
            <span className="text-gray-400">|</span>
            <a href="tel:+964 774 646 4606" className="flex items-center gap-1 text-gray-300 hover:text-gold transition-colors">
              <Phone size={12} />
              <span dir="ltr" className="phone-ltr">+964 774 646 4606</span>
            </a>
            <a href="mailto:al-remahLawfirm@outlook.com" className="flex items-center gap-1 text-gray-300 hover:text-gold transition-colors">
              <Mail size={12} />
              al-remahLawfirm@outlook.com
            </a>
          </div>
          <button
            onClick={() => navigateToSection('home', 'book-appointment')}
            className="bg-gold text-white px-4 py-1 text-xs font-semibold uppercase tracking-wider hover:bg-gold-light transition-all"
          >
            {t.header.freeConsultation}
          </button>
        </div>
      </div>

      {/* Main header */}
      <header className={`sticky top-0 z-50 bg-white dark:bg-charcoal-dark transition-all duration-300 border-b border-border-gray dark:border-gray-700 ${scrolled ? 'shadow-md' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-4">
          {/* Logo */}
          <button onClick={() => handleNavigate('home')} className="flex items-center gap-1 cursor-pointer">
            <Image 
              src="/images/logo.jpg" 
              alt="Alremah Law Services" 
              width={180} 
              height={60}
              className="h-12 w-auto"
            />
          </button>

          {/* Desktop Nav - hidden on mobile/tablet, shown on lg+ */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => {
              const className = `px-3 py-2 text-sm font-medium transition-colors ${
                isItemActive(item)
                  ? 'text-gold'
                  : 'text-[#333333] dark:text-gray-300 hover:text-gold'
              }`;
              return item.kind === 'link' ? (
                <Link key={item.href} href={item.href} className={className}>
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.page}
                  onClick={() => handleNavigate(item.page)}
                  className={className}
                >
                  {item.label}
                </button>
              );
            })}
            <LanguageSwitcher />
            <ThemeToggle />
          </nav>

          {/* Mobile: theme toggle + hamburger menu button - visible only below lg */}
          <div className="flex lg:hidden items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              onClick={() => {
                if (mobileMenuOpen) {
                  closeMobileMenu();
                } else {
                  openMobileMenu();
                }
              }}
              className="p-2.5 text-charcoal dark:text-white hover:text-gold transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center rounded-md hover:bg-light-gray dark:hover:bg-charcoal z-[60] relative border border-border-gray dark:border-gray-700"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div
          className={`fixed inset-0 bg-black/50 z-[55] transition-opacity duration-300 lg:hidden ${
            mobileMenuVisible ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu panel */}
      {mobileMenuOpen && (
        <div
          className={`fixed top-0 ${isRTL ? 'left-0' : 'right-0'} h-full w-[300px] max-w-[85vw] bg-white dark:bg-charcoal-dark z-[60] lg:hidden shadow-2xl transition-transform duration-300 ease-in-out ${
            mobileMenuVisible
              ? 'translate-x-0'
              : isRTL
                ? '-translate-x-full'
                : 'translate-x-full'
          }`}
        >
          {/* Menu header */}
          <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-border-gray dark:border-gray-700">
            <span className="min-w-0 flex-1 break-words text-base font-semibold leading-snug text-charcoal dark:text-white" style={{ fontFamily: isRTL ? 'var(--font-arabic), sans-serif' : 'var(--font-playfair), serif' }}>
              {t.header.logo}
            </span>
            <button
              onClick={closeMobileMenu}
              className="p-2 text-charcoal dark:text-white hover:text-gold transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center rounded-md hover:bg-light-gray dark:hover:bg-charcoal shrink-0"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          {/* Contact info */}
          <div className="px-5 py-3 border-b border-border-gray dark:border-gray-700 bg-light-gray/50 dark:bg-charcoal/30">
            <div className="flex items-center gap-3 py-1.5">
                <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer noopener" title="Instagram" className="text-gold hover:text-gold-light transition-colors"><Instagram size={15} /></a>
              <a href="mailto:al-remahLawfirm@outlook.com" className="text-gold hover:text-gold-light transition-colors"><Mail size={15} /></a>
            </div>
            <a href="tel:+964 774 646 4606" className="flex items-center gap-2 text-sm text-charcoal dark:text-gray-300 py-1.5">
              <Phone size={14} className="text-gold" /> <span dir="ltr" className="phone-ltr">+964 774 646 4606</span>
            </a>
            <a href="mailto:al-remahLawfirm@outlook.com" className="flex items-center gap-2 text-sm text-charcoal dark:text-gray-300 py-1.5">
              <Mail size={14} className="text-gold" /> al-remahLawfirm@outlook.com
            </a>
          </div>

          {/* Navigation links */}
          <nav className="px-5 py-3 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 240px)' }}>
            {NAV_ITEMS.map((item) => {
              const className = `flex w-full items-center py-3 min-h-[44px] text-sm font-medium border-b border-border-gray dark:border-gray-700 ${
                isItemActive(item) ? 'text-gold' : 'text-[#333333] dark:text-gray-300'
              }`;
              return item.kind === 'link' ? (
                <Link key={item.href} href={item.href} className={className} onClick={closeMobileMenu}>
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.page}
                  onClick={() => handleNavigate(item.page)}
                  className={className}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* CTA button */}
          <div className="absolute bottom-0 left-0 right-0 px-5 py-4 border-t border-border-gray dark:border-gray-700 bg-white dark:bg-charcoal-dark">
            <button
              onClick={() => {
                navigateToSection('home', 'book-appointment');
                closeMobileMenu();
              }}
              className="w-full bg-gold text-white px-4 py-2.5 text-sm font-semibold uppercase tracking-wider hover:bg-gold-light transition-all"
            >
              {t.header.freeConsultation}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
