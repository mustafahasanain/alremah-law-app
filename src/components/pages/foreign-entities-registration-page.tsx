"use client";

import React from "react";
import Image from "next/image";
import { PageHero } from "../thelaw/page-hero";
import { AnimatedSection } from "../thelaw/scroll-animation";
import { useRouter } from "../thelaw/router";
import { useLanguage } from "@/lib/i18n/language-context";
import { ArrowRight, ArrowLeft, Building2, Users, Handshake, Stamp } from "lucide-react";

const SECTION_IMAGES = [
  "/images/foreign-entities/foreign-branches-corporate.jpg",
  "/images/foreign-entities/ngo-international-meeting.jpg",
  "/images/foreign-entities/commercial-agency-trade-port.jpg",
  "/images/foreign-entities/residency-work-visa-airport.jpg",
];

const SECTION_ICONS = [Building2, Users, Handshake, Stamp];

export function ForeignEntitiesRegistrationPage() {
  const { t, dir, isRTL } = useLanguage();
  const { navigate } = useRouter();
  const { hero, sections, cta } = t.foreignEntitiesPage;
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className="max-w-full overflow-x-hidden" dir={dir}>
      <PageHero title={hero.title} breadcrumb={hero.breadcrumb.current} />

      {/* Hero supporting visual + subtitle */}
      <section className="relative bg-charcoal dark:bg-charcoal-dark">
        <div className="relative h-56 md:h-72 lg:h-80 overflow-hidden">
          <Image
            src="/images/foreign-entities/hero-international-business.jpg"
            alt={
              isRTL
                ? "أبراج أعمال دولية ترمز إلى الاستثمار الأجنبي ودخول السوق العراقي"
                : "International business towers representing foreign investment and market entry into Iraq"
            }
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent dark:from-charcoal-dark dark:via-charcoal-dark/70" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto px-4 pb-6 md:pb-10 w-full">
              <AnimatedSection animation="fade-up">
                <p className="max-w-3xl text-sm md:text-base lg:text-lg text-gray-200 leading-7 md:leading-8">
                  {hero.subtitle}
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Four service sections, alternating image/content */}
      {sections.map((section, index) => {
        const Icon = SECTION_ICONS[index];
        const imageFirst = index % 2 === 0;

        return (
          <section
            key={section.title}
            className={`py-14 md:py-20 lg:py-24 transition-colors duration-300 ${
              index % 2 === 0
                ? "bg-white dark:bg-charcoal-dark"
                : "bg-light-gray dark:bg-charcoal"
            }`}
          >
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                {/* Image */}
                <AnimatedSection
                  animation={imageFirst ? "fade-right" : "fade-left"}
                  className={`${imageFirst ? "lg:order-1" : "lg:order-2"}`}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden border border-border-gray dark:border-gray-700 shadow-lg">
                    <Image
                      src={SECTION_IMAGES[index]}
                      alt={section.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute top-0 left-0 h-1 w-16 bg-gold" />
                  </div>
                </AnimatedSection>

                {/* Content */}
                <AnimatedSection
                  animation={imageFirst ? "fade-left" : "fade-right"}
                  delay={100}
                  className={`${imageFirst ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center border border-gold text-gold">
                    <Icon size={26} strokeWidth={1.5} />
                  </div>
                  <h2
                    className="mb-6 text-2xl md:text-3xl font-bold text-charcoal dark:text-white"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    {section.title}
                  </h2>
                  <div className="max-w-2xl space-y-4">
                    {section.paragraphs.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className="text-sm md:text-base leading-7 md:leading-8 text-medium-gray dark:text-gray-300"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="bg-charcoal dark:bg-charcoal-dark relative overflow-hidden py-14 md:py-20">
        <div className="absolute inset-0 moving-gradient-bg" />
        <div className="absolute top-0 left-0 right-0 h-0.5 gold-gradient" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection animation="fade-up">
            <h2
              className="mb-4 text-2xl md:text-4xl font-bold text-white"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              {cta.title}
            </h2>
            <p className="mb-8 text-sm md:text-lg text-gray-300 leading-7 md:leading-8">
              {cta.description}
            </p>
            <button
              onClick={() => navigate("contact")}
              className="inline-flex items-center gap-2 bg-gold text-charcoal px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-gold-light transition-all shadow-md hover:shadow-lg btn-ripple"
            >
              {cta.button}
              <ArrowIcon size={16} />
            </button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
