"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "@/lib/animations";
import { HERO_TRUST_STATS } from "@/lib/site-content";
import DoorSchematic from "./DoorSchematic";
import { container, display, eyebrow, hairline, mono } from "./tokens";

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

        // Nacrt: pune linije se iscrtavaju, pomoćne blijede, oznake se pečatiraju.
        gsap.set(".schematic-path", { strokeDasharray: 1, strokeDashoffset: 1 });

        tl.fromTo(
          ".hero-eyebrow",
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          0
        )
          .fromTo(
            ".hero-line-inner",
            { yPercent: 112 },
            { yPercent: 0, duration: 0.9, stagger: 0.12, ease: "power3.out" },
            0.1
          )
          .fromTo(
            [".hero-sub", ".hero-ctas"],
            { y: 18, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.12 },
            0.65
          )
          .to(
            ".schematic-path",
            {
              strokeDashoffset: 0,
              duration: 1.3,
              stagger: 0.07,
              ease: "power1.inOut",
            },
            0.35
          )
          .fromTo(
            ".schematic-dash",
            { opacity: 0 },
            { opacity: 1, duration: 0.7 },
            1.4
          )
          .fromTo(
            ".schematic-label",
            { opacity: 0 },
            { opacity: 1, duration: 0.02, stagger: 0.14, ease: "none" },
            2.0
          )
          .fromTo(
            ".hero-stat",
            { y: 14, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 },
            1.6
          );
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} aria-labelledby="hero-naslov" className="pt-16">
      <div className={container}>
        <div className="grid gap-12 pb-14 pt-12 md:pt-16 lg:grid-cols-12 lg:gap-8 lg:pb-20 lg:pt-20">
          {/* Lijevi stupac — naslovna teza */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <p className={`hero-eyebrow ${eyebrow}`}>
              List 01 / FSB Doors — protupožarna vrata
            </p>

            <h1
              id="hero-naslov"
              className={`${display} mt-7 text-[19vw] font-semibold uppercase leading-[0.92] tracking-[0.01em] sm:text-7xl md:text-8xl xl:text-[7.5rem]`}
            >
              <span className="block overflow-hidden">
                <span className="hero-line-inner block">Vrata za</span>
              </span>
              <span className="block overflow-hidden">
                <span className="hero-line-inner block">budućnost</span>
              </span>
            </h1>

            <p className="hero-sub mt-7 max-w-xl text-base leading-relaxed text-gray md:text-lg">
              Protupožarna vrata po mjeri — od tehničke sheme do ugradnje.
              Vlastiti razvoj i proizvodnja, ispitivanja u akreditiranim
              institutima i klase otpornosti od EI30 do EI120.
            </p>

            <div className="hero-ctas mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/kontakt"
                className={`${mono} bg-primary px-6 py-3.5 text-[13px] font-medium uppercase tracking-[0.16em] text-[#f5f0ea] transition-colors hover:bg-[#9e1b33]`}
              >
                Zatražite ponudu
              </Link>
              <a
                href="#proizvodi"
                className={`${mono} border ${hairline} px-6 py-3.5 text-[13px] uppercase tracking-[0.16em] text-foreground transition-colors hover:border-[#8a8f98]`}
              >
                Proizvodi ↓
              </a>
            </div>
          </div>

          {/* Desni stupac — potpisni nacrt */}
          <div className="relative lg:col-span-5">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.16]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(237,234,228,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(237,234,228,0.35) 1px, transparent 1px)",
                backgroundSize: "56px 56px",
              }}
            />
            <DoorSchematic className="relative mx-auto h-auto w-full max-w-[380px] lg:max-w-[440px]" />
          </div>
        </div>

        {/* Mono očitanja — provjerljivi podaci */}
        <div className={`grid grid-cols-1 gap-px border-t ${hairline} sm:grid-cols-3`}>
          {HERO_TRUST_STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`hero-stat flex items-baseline gap-4 py-5 sm:flex-col sm:gap-2 ${
                i > 0 ? `border-t sm:border-l sm:border-t-0 sm:pl-8 ${hairline}` : ""
              }`}
            >
              <span
                className={`${mono} text-2xl font-medium tracking-[0.06em] md:text-3xl ${
                  stat.value.startsWith("EI") ? "text-primary" : "text-foreground"
                }`}
              >
                {stat.value}
              </span>
              <span className={`${mono} text-[11px] uppercase tracking-[0.22em] text-gray`}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
