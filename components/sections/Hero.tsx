"use client";

import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { gsap } from "@/lib/animations";
import { HERO_TRUST_STATS } from "@/lib/site-content";
import { display, hairline, mono } from "@/components/site/tokens";

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  primaryCta?: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  badge?: string;
}

// Podstranični hero u jeziku tehničkog lista: monokromatska fotografija,
// mono oznaka lista i podaci o tvrtki kao traka mjernih vrijednosti.
export default function Hero({
  title,
  subtitle,
  image,
  primaryCta,
  secondaryCta,
  badge,
}: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    // Ulazna animacija: suzdržani fade + pomak, redom po elementima.
    const badgeEl = content.querySelector("[data-animate='badge']");
    const titleEl = content.querySelector("[data-animate='title']");
    const subtitleEl = content.querySelector("[data-animate='subtitle']");
    const ctaEl = content.querySelector("[data-animate='cta']");
    const trustEl = content.querySelector("[data-animate='trust']");

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

        if (badgeEl) {
          tl.fromTo(badgeEl, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 });
        }
        if (titleEl) {
          tl.fromTo(
            titleEl,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7 },
            badgeEl ? "-=0.25" : 0
          );
        }
        if (subtitleEl) {
          tl.fromTo(
            subtitleEl,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7 },
            "-=0.45"
          );
        }
        if (ctaEl && ctaEl.children.length > 0) {
          tl.fromTo(
            Array.from(ctaEl.children),
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, stagger: 0.12 },
            "-=0.35"
          );
        }
        if (trustEl) {
          tl.fromTo(trustEl, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.25");
        }
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative flex min-h-[calc(100svh-4rem)] items-end overflow-hidden border-b ${hairline} bg-dark`}
    >
      {/* Pozadinska fotografija — monokromatski tretman kataloškog lista */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          sizes="100vw"
          className="object-cover grayscale contrast-[1.05] brightness-[0.85]"
          priority
        />
        <span aria-hidden className="absolute inset-0 bg-primary/25 mix-blend-multiply" />
        <span aria-hidden className="absolute inset-0 bg-[#0a0b0c]/70" />
      </div>

      {/* Sadržaj */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-14 pt-32 md:px-8 lg:px-12 lg:pb-20">
        <div ref={contentRef} className="max-w-4xl">
          {badge && (
            <p
              data-animate="badge"
              className={`${mono} text-[11px] uppercase tracking-[0.28em] text-gray`}
            >
              <span className="text-primary">■</span> {badge}
            </p>
          )}
          <h1
            data-animate="title"
            className={`${display} mt-5 text-4xl font-semibold uppercase leading-none md:text-5xl lg:text-6xl`}
          >
            {title}
          </h1>
          <p
            data-animate="subtitle"
            className="mt-6 max-w-2xl text-base leading-relaxed text-gray md:text-lg"
          >
            {subtitle}
          </p>
          {(primaryCta || secondaryCta) && (
            <div data-animate="cta" className="mt-9 flex flex-wrap gap-4">
              {primaryCta && (
                <Button href={primaryCta.href} variant="primary" size="lg">
                  {primaryCta.text} →
                </Button>
              )}
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="outline" size="lg">
                  {secondaryCta.text}
                </Button>
              )}
            </div>
          )}

          {/* Provjerljivi podaci — traka mjernih vrijednosti */}
          <dl
            data-animate="trust"
            className={`mt-14 grid grid-cols-3 border-t ${hairline} pt-6`}
          >
            {HERO_TRUST_STATS.map((stat, index) => (
              <div
                key={stat.label}
                className={index > 0 ? `border-l ${hairline} pl-5 md:pl-8` : ""}
              >
                <dd className={`${display} text-3xl font-semibold leading-none md:text-4xl`}>
                  {stat.value}
                </dd>
                <dt
                  className={`${mono} mt-2 text-[10px] uppercase tracking-[0.2em] text-gray md:text-[11px]`}
                >
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
