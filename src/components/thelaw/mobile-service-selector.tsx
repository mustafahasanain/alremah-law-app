"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { SERVICES, getServiceContent } from "@/lib/data/services";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface MobileServiceSelectorProps {
  activeServiceId: string;
  onSelect: (serviceId: string) => void;
}

/**
 * Compact, touch-friendly way to browse all 17 services on small screens:
 * a bar showing the current service that opens a bottom sheet listing all
 * of them.
 */
export function MobileServiceSelector({
  activeServiceId,
  onSelect,
}: MobileServiceSelectorProps) {
  const { language, dir, t } = useLanguage();
  const [open, setOpen] = useState(false);

  const activeService = SERVICES.find((s) => s.id === activeServiceId) ?? SERVICES[0];
  const activeContent = getServiceContent(activeService, language);
  const ActiveIcon = activeService.icon;

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex w-full items-center gap-3 border border-border-gray bg-white px-4 py-3.5 text-start dark:border-gray-700 dark:bg-charcoal"
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-gold/10 text-gold">
          <ActiveIcon size={20} strokeWidth={1.5} />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-[11px] font-semibold uppercase tracking-wider text-gold">
            {t.servicesHub.mobileSelectorLabel}
          </span>
          <span className="block truncate text-sm font-semibold text-charcoal dark:text-white">
            {activeContent.title}
          </span>
        </span>
        <ChevronDown size={20} className="shrink-0 text-medium-gray dark:text-gray-400" />
      </button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="bottom"
          dir={dir}
          className="h-[80vh] rounded-t-xl bg-white p-0 dark:bg-charcoal-dark"
        >
          <SheetHeader className="border-b border-border-gray px-4 pb-3 pt-4 dark:border-gray-700">
            <SheetTitle className="text-charcoal dark:text-white">
              {t.servicesHub.sidebarTitle}
            </SheetTitle>
          </SheetHeader>
          <ul className="flex-1 divide-y divide-border-gray overflow-y-auto dark:divide-gray-700">
            {SERVICES.map((service) => {
              const content = getServiceContent(service, language);
              const isActive = service.id === activeServiceId;
              const Icon = service.icon;

              return (
                <li key={service.id}>
                  <button
                    type="button"
                    onClick={() => {
                      onSelect(service.id);
                      setOpen(false);
                    }}
                    aria-current={isActive ? "true" : undefined}
                    className={`flex w-full items-center gap-3 px-4 py-4 text-start min-h-[56px] ${
                      isActive
                        ? "bg-gold/10"
                        : "active:bg-light-gray dark:active:bg-charcoal"
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center ${
                        isActive ? "bg-gold text-charcoal" : "bg-gold/10 text-gold"
                      }`}
                    >
                      <Icon size={18} strokeWidth={1.5} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[11px] font-semibold tracking-wider text-gold/80">
                        {service.number}
                      </span>
                      <span
                        className={`block text-sm leading-snug ${
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
        </SheetContent>
      </Sheet>
    </div>
  );
}
