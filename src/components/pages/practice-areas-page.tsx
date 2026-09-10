"use client";

import React from "react";
import { PageHero } from "../thelaw/page-hero";
import { ServicesHub } from "../thelaw/services-hub";
import { useLanguage } from "@/lib/i18n/language-context";

export function PracticeAreasPage() {
  const { dir, t } = useLanguage();
  const { hero } = t.practiceAreasPage;

  return (
    <div className="max-w-full overflow-x-hidden" dir={dir}>
      <PageHero title={hero.title} breadcrumb={hero.breadcrumb.current} />
      <ServicesHub />
    </div>
  );
}
