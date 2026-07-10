"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/animations";
import { HERO_TRUST_STATS } from "@/lib/site-content";
import { display, mono, hairline, container } from "./tokens";

export default function KatalogHero() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.set(".hero-mast", { autoAlpha: 0 });
      gsap.set(".hero-line-inner", { yPercent: 110 });
      gsap.set(".hero-fade", { autoAlpha: 0, y: 18 });
      gsap.set(".hero-img", { clipPath: "inset(0 0 100% 0)" });

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.to(".hero-mast", { autoAlpha: 1, duration: 0.6, ease: "power2.out" }, 0)
        // naslov se slaže redak po redak
        .to(
          ".hero-line-inner",
          { yPercent: 0, duration: 1.05, stagger: 0.14 },
          0.15
        )
        .to(
          ".hero-img",
          { clipPath: "inset(0 0 0% 0)", duration: 1.15, ease: "power3.inOut" },
          0.4
        )
        .to(
          ".hero-fade",
          { autoAlpha: 1, y: 0, duration: 0.75, stagger: 0.09, ease: "power3.out" },
          0.6
        );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} aria-labelledby="hero-naslov">
      <div className={`${container} pt-10 pb-16 md:pt-16 md:pb-24`}>
        {/* Kataloška kartica poglavlja 01 */}
        <div
          className={`hero-mast flex flex-wrap items-baseline gap-x-5 gap-y-1 border-b pb-4 ${hairline}`}
        >
          <span className={`${mono} text-sm font-medium text-primary`}>01</span>
          <p
            className={`${display} text-sm font-bold uppercase tracking-[0.18em]`}
          >
            Katalog protupožarne zaštite
          </p>
          <span
            className={`${mono} w-full text-[11px] uppercase tracking-[0.08em] text-gray sm:ml-auto sm:w-auto`}
          >
            FSB Doors · Zagreb · izrada po mjeri
          </span>
        </div>

        <h1
          id="hero-naslov"
          className={`${display} mt-10 text-[clamp(3.2rem,11vw,9.5rem)] font-bold leading-[0.92] tracking-[-0.03em] md:mt-14`}
        >
          <span className="block overflow-hidden pb-[0.08em]">
            <span className="hero-line-inner block">Vrata za</span>
          </span>
          <span className="block overflow-hidden pb-[0.08em]">
            <span className="hero-line-inner block">
              budućnost<span className="text-primary">.</span>
            </span>
          </span>
        </h1>

        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12 md:gap-8">
          <div className="hero-fade md:col-span-5 lg:col-span-4">
            <p className="max-w-prose text-base leading-relaxed text-gray md:text-lg">
              Protupožarna vrata, ostakljene stijene i revizijska vrata —
              projektirana u vlastitom razvoju, ispitana u akreditiranim
              institucijama i izrađena po mjeri za svaki projekt.
            </p>
            <a
              href="#proizvodi"
              className={`${mono} mt-8 inline-block text-xs uppercase tracking-[0.14em] text-foreground transition-colors hover:text-primary`}
            >
              &darr;&nbsp;02 · Pregled proizvoda
            </a>
          </div>
          <figure className="md:col-span-7 md:col-start-6 lg:col-span-6 lg:col-start-7">
            <div className="hero-img relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/ostakljena-vrata.webp"
                alt="Ostakljena protupožarna vrata u poslovnom interijeru"
                fill
                priority
                sizes="(min-width: 768px) 55vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption
              className={`${mono} hero-fade mt-2 flex justify-between gap-4 text-[11px] text-gray`}
            >
              <span>Sl. 01 — Ostakljena protupožarna vrata</span>
              <span className="text-accent">FGD · EI30–EI60</span>
            </figcaption>
          </figure>
        </div>

        {/* Kolofonski podaci umjesto herojskih brojki */}
        <dl className="mt-14 grid grid-cols-3 gap-4 md:mt-20 md:gap-8">
          {HERO_TRUST_STATS.map((stat) => (
            <div
              key={stat.label}
              className={`hero-fade border-t pt-4 ${hairline}`}
            >
              <dd className={`${mono} text-xl font-medium md:text-3xl`}>
                {stat.value}
              </dd>
              <dt
                className={`${mono} mt-1 text-[10px] uppercase tracking-[0.1em] text-gray md:text-[11px]`}
              >
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
