"use client";

import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { useRouter } from "./router";
import {
  getServiceContent,
  type ServiceDefinition,
} from "@/lib/data/services";

interface ServiceCardProps {
  service: ServiceDefinition;
}

/**
 * A single service card used on the Home page grid. Clicking it opens the
 * Services Hub with this service selected.
 */
export function ServiceCard({ service }: ServiceCardProps) {
  const { language, dir, t } = useLanguage();
  const { navigateToService } = useRouter();
  const content = getServiceContent(service, language);
  const Icon = service.icon;
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <button
      type="button"
      onClick={() => navigateToService(service.id)}
      className={`service-card group relative flex h-full flex-col border border-border-gray bg-white p-6 text-start transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lg dark:border-gray-700 dark:bg-charcoal dark:hover:bg-charcoal-dark md:p-7 ${
        dir === "rtl" ? "text-right" : "text-left"
      }`}
      aria-label={`${content.title} — ${t.servicesHub.viewFullDetails}`}
    >
      <span className="absolute top-5 text-4xl font-bold text-gold/10 transition-colors group-hover:text-gold/25 rtl:left-6 ltr:right-6">
        {service.number}
      </span>
      <div className="mb-5 flex h-14 w-14 items-center justify-center border border-gold text-gold transition-all group-hover:bg-gold group-hover:text-charcoal">
        <Icon size={26} strokeWidth={1.5} />
      </div>
      <h3 className="mb-3 text-lg font-bold text-charcoal dark:text-white">
        {content.title}
      </h3>
      <p className="mb-5 line-clamp-3 flex-1 text-sm leading-7 text-medium-gray dark:text-gray-300">
        {content.summary}
      </p>
      <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gold transition-all group-hover:gap-3">
        {t.servicesHub.viewFullDetails.replace(/\s*[←→]\s*$/, "")}
        <ArrowIcon size={16} />
      </span>
    </button>
  );
}
