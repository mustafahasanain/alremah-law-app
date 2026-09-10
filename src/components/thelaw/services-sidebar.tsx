"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n/language-context";
import { SERVICES, getServiceContent } from "@/lib/data/services";

interface ServicesSidebarProps {
  activeServiceId: string;
  onSelect: (serviceId: string) => void;
  className?: string;
}

/**
 * Desktop sidebar listing all 17 services. Sticky on large screens so it
 * stays visible while reading long service content.
 */
export function ServicesSidebar({
  activeServiceId,
  onSelect,
  className = "",
}: ServicesSidebarProps) {
  const { language, t } = useLanguage();

  return (
    <nav
      aria-label={t.servicesHub.sidebarAriaLabel}
      className={`hidden lg:block lg:sticky lg:top-24 lg:self-start ${className}`}
    >
      <h2 className="mb-4 px-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
        {t.servicesHub.sidebarTitle}
      </h2>
      <ul className="max-h-[calc(100vh-8rem)] space-y-1 overflow-y-auto pe-1">
        {SERVICES.map((service) => {
          const content = getServiceContent(service, language);
          const isActive = service.id === activeServiceId;
          const Icon = service.icon;

          return (
            <li key={service.id}>
              <button
                type="button"
                onClick={() => onSelect(service.id)}
                aria-current={isActive ? "true" : undefined}
                className={`group flex w-full items-start gap-3 border-s-2 px-3 py-3 text-start transition-all duration-200 ${
                  isActive
                    ? "border-gold bg-gold/10 text-charcoal dark:text-white"
                    : "border-transparent text-medium-gray hover:border-gold/40 hover:bg-light-gray dark:text-gray-400 dark:hover:bg-charcoal"
                }`}
              >
                <span
                  className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center transition-colors ${
                    isActive
                      ? "bg-gold text-charcoal"
                      : "bg-gold/10 text-gold group-hover:bg-gold/20"
                  }`}
                >
                  <Icon size={16} strokeWidth={1.5} />
                </span>
                <span className="flex flex-col">
                  <span className="text-[11px] font-semibold tracking-wider text-gold/80">
                    {service.number}
                  </span>
                  <span
                    className={`text-sm leading-snug ${
                      isActive
                        ? "font-semibold text-charcoal dark:text-white"
                        : "text-medium-gray dark:text-gray-300"
                    }`}
                  >
                    {content.title}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
