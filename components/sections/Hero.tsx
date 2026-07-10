"use client";

import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { gsap } from "@/lib/animations";
import { HERO_TRUST_STATS } from "@/lib/site-content";

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  primaryCta?: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  badge?: string;
}

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

    // Get all animatable elements
    const badge = content.querySelector("[data-animate='badge']");
    const title = content.querySelector("[data-animate='title']");
    const subtitle = content.querySelector("[data-animate='subtitle']");
    const cta = content.querySelector("[data-animate='cta']");
    const trust = content.querySelector("[data-animate='trust']");

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      if (badge) {
        tl.fromTo(
          badge,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 }
        );
      }

      if (title) {
        tl.fromTo(
          title,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          badge ? "-=0.3" : 0
        );
      }

      if (subtitle) {
        tl.fromTo(
          subtitle,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.5"
        );
      }

      if (cta && cta.children.length > 0) {
        tl.fromTo(
          Array.from(cta.children),
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.15 },
          "-=0.4"
        );
      }

      if (trust) {
        tl.fromTo(
          trust,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.3"
        );
      }
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/70 to-dark/30" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 py-32 px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
        <div ref={contentRef} className="max-w-4xl">
          {badge && (
            <span data-animate="badge" className="inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white bg-primary/90 backdrop-blur-sm rounded-full mb-8">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              {badge}
            </span>
          )}
          <h1 data-animate="title" className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.05] tracking-tight">
            {title}
          </h1>
          <p data-animate="subtitle" className="mt-8 text-xl sm:text-2xl text-white/80 leading-relaxed max-w-2xl">
            {subtitle}
          </p>
          {(primaryCta || secondaryCta) && (
            <div data-animate="cta" className="mt-12 flex flex-wrap gap-5">
              {primaryCta && (
                <Button href={primaryCta.href} variant="primary" size="lg" className="text-base px-10 py-4">
                  {primaryCta.text}
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Button>
              )}
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white hover:text-dark text-base px-10 py-4">
                  {secondaryCta.text}
                </Button>
              )}
            </div>
          )}

          {/* Trust indicators */}
          <div data-animate="trust" className="mt-16 pt-8 border-t border-white/10">
            <p className="text-white/50 text-sm uppercase tracking-wider mb-4">Pouzdani partner već više od</p>
            <div className="flex items-center gap-12">
              {HERO_TRUST_STATS.map((stat, index) => (
                <div key={stat.label} className="flex items-center gap-12">
                  {index > 0 && (
                    <div className={`w-px h-12 bg-white/20 ${index > 1 ? "hidden sm:block" : ""}`} />
                  )}
                  <div className={index > 1 ? "hidden sm:block" : ""}>
                    <span className="text-5xl font-bold text-white">{stat.value}</span>
                    <p className="text-white/60 text-sm mt-1">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-light/20 to-transparent" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
