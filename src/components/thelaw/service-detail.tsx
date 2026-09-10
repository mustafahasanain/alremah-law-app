"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Phone } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { useRouter } from "./router";
import { getServiceContent, type ServiceDefinition } from "@/lib/data/services";

interface ServiceDetailProps {
  service: ServiceDefinition;
}

export function ServiceDetail({ service }: ServiceDetailProps) {
  const { language, t } = useLanguage();
  const { navigate } = useRouter();
  const content = getServiceContent(service, language);
  const paragraphs = content.fullDescription
    .split("\n\n")
    .map((p) => p.trim())
    .filter(Boolean);
  const containerRef = useRef<HTMLDivElement>(null);

  // When the selected service changes, bring the detail panel back into
  // view instead of leaving the reader stranded deep in the previous
  // service's content.
  useEffect(() => {
    containerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [service.id]);

  return (
    <div
      ref={containerRef}
      key={service.id}
      className="animate-[pageFadeIn_300ms_ease-out_forwards] scroll-mt-24"
    >
      <div className="relative mb-8 aspect-[16/9] w-full overflow-hidden bg-light-gray dark:bg-charcoal">
        <Image
          src={service.image}
          alt={content.imageAlt}
          fill
          sizes="(min-width: 1024px) 66vw, 100vw"
          className="object-cover"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
        <span className="absolute bottom-4 text-6xl font-bold text-white/20 rtl:right-5 ltr:left-5">
          {service.number}
        </span>
      </div>

      <h1
        className="mb-6 text-2xl font-bold text-charcoal dark:text-white md:text-3xl lg:text-4xl"
        style={{ fontFamily: "var(--font-playfair), serif" }}
      >
        {content.title}
      </h1>

      <div className="space-y-5">
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-base leading-8 text-medium-gray dark:text-gray-300 md:text-[17px] md:leading-9"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-10 border-t border-border-gray pt-8 dark:border-gray-700">
        <div className="flex flex-col items-start justify-between gap-5 border border-gold/20 bg-gold/5 p-6 sm:flex-row sm:items-center md:p-8">
          <div>
            <h2 className="mb-1 text-lg font-bold text-charcoal dark:text-white">
              {t.servicesHub.ctaTitle}
            </h2>
            <p className="text-sm text-medium-gray dark:text-gray-300">
              {t.servicesHub.ctaDescription}
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigate("contact")}
            className="btn-ripple btn-primary-hover flex shrink-0 items-center justify-center gap-2 whitespace-nowrap bg-gold px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-charcoal transition-all hover:bg-gold-dark"
          >
            <Phone size={16} />
            {t.servicesHub.ctaButton}
          </button>
        </div>
      </div>
    </div>
  );
}
