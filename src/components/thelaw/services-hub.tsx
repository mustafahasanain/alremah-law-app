"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n/language-context";
import { useRouter } from "./router";
import { SERVICES, DEFAULT_SERVICE_ID, getServiceById } from "@/lib/data/services";
import { ServicesSidebar } from "./services-sidebar";
import { MobileServiceSelector } from "./mobile-service-selector";
import { ServiceDetail } from "./service-detail";

/**
 * The Interactive Services Hub: a sidebar (desktop) / selector (mobile)
 * listing all 17 services alongside the detailed content of whichever
 * service is currently selected. This is the primary Practice Areas
 * experience.
 */
export function ServicesHub() {
  const { dir } = useLanguage();
  const { selectedServiceId, selectService } = useRouter();

  const activeServiceId =
    (selectedServiceId && getServiceById(selectedServiceId)?.id) || DEFAULT_SERVICE_ID;
  const activeService = getServiceById(activeServiceId) ?? SERVICES[0];

  return (
    <section className="bg-white py-10 transition-colors duration-300 dark:bg-charcoal-dark md:py-14 lg:py-16" dir={dir}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-6 lg:hidden">
          <MobileServiceSelector
            activeServiceId={activeServiceId}
            onSelect={selectService}
          />
        </div>

        <div className="grid grid-cols-1 gap-x-10 gap-y-8 lg:grid-cols-[280px_1fr] xl:grid-cols-[300px_1fr]">
          <ServicesSidebar
            activeServiceId={activeServiceId}
            onSelect={selectService}
          />
          <ServiceDetail service={activeService} />
        </div>
      </div>
    </section>
  );
}
