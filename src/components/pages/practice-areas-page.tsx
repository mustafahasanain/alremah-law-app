"use client";

import React from "react";
import { PageHero } from "../thelaw/page-hero";
import { AnimatedSection } from "../thelaw/scroll-animation";
import { useLanguage } from "@/lib/i18n/language-context";
import {
  BadgeDollarSign,
  Building2,
  BriefcaseBusiness,
  FileCheck2,
  Fuel,
  Gavel,
  Globe2,
  Handshake,
  HeartPulse,
  Landmark,
  Scale,
  ShieldCheck,
  Stamp,
  UsersRound,
} from "lucide-react";

const PRACTICE_AREAS = [
  {
    number: "01",
    icon: Scale,
  },
  {
    number: "02",
    icon: Building2,
  },
  {
    number: "03",
    icon: Globe2,
  },
  {
    number: "04",
    icon: Fuel,
  },
  {
    number: "05",
    icon: FileCheck2,
  },
  {
    number: "06",
    icon: Handshake,
  },
  {
    number: "07",
    icon: Gavel,
  },
  {
    number: "08",
    icon: Landmark,
  },
  {
    number: "09",
    icon: UsersRound,
  },
  {
    number: "10",
    icon: Stamp,
  },
  {
    number: "11",
    icon: ShieldCheck,
  },
  {
    number: "12",
    icon: BadgeDollarSign,
  },
  {
    number: "13",
    icon: HeartPulse,
  },
  {
    number: "14",
    icon: BriefcaseBusiness,
  },
];

export function PracticeAreasPage() {
  const { dir, t } = useLanguage();
  const { content, hero } = t.practiceAreasPage;

  return (
    <div className="max-w-full overflow-x-hidden" dir={dir}>
      <PageHero title={hero.title} breadcrumb={hero.breadcrumb.current} />

      <section className="bg-white py-14 transition-colors duration-300 dark:bg-charcoal-dark md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <AnimatedSection animation="fade-left">
            <div className="mx-auto mb-12 max-w-4xl text-center md:mb-16">
              <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-gold">
                {content.eyebrow}
              </p>
              <h1 className="mb-6 text-3xl font-bold text-charcoal dark:text-white md:text-4xl">
                {content.title}
              </h1>
              <p className="text-base leading-8 text-medium-gray dark:text-gray-300 md:text-lg">
                {content.intro}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PRACTICE_AREAS.map((area, index) => {
              const Icon = area.icon;
              const item = content.items[index];

              return (
                <AnimatedSection key={area.number} delay={index * 70}>
                  <article className={`practice-card group relative h-full overflow-hidden border border-border-gray bg-light-gray p-7 transition-all duration-300 hover:border-gold hover:bg-white hover:shadow-lg dark:border-gray-700 dark:bg-charcoal dark:hover:bg-charcoal-dark md:p-8 ${dir === "rtl" ? "text-right" : "text-left"}`}>
                    <span className="absolute left-6 top-5 text-4xl font-bold text-gold/15 transition-colors group-hover:text-gold/30">
                      {area.number}
                    </span>
                    <div className="mb-6 flex h-14 w-14 items-center justify-center border border-gold text-gold transition-all group-hover:bg-gold group-hover:text-charcoal">
                      <Icon size={26} strokeWidth={1.5} />
                    </div>
                    <h2 className="mb-4 text-xl font-bold text-charcoal dark:text-white">
                      {item.title}
                    </h2>
                    <p className="text-sm leading-7 text-medium-gray dark:text-gray-300">
                      {item.description}
                    </p>
                  </article>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
