"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/animations";
import { HERO_TRUST_STATS } from "@/lib/site-content";
import Folio from "./Folio";
import { serif, caps, container, hairline, photo } from "./tokens";

// Naslovni arak: velika serifna glava, mirni uvodnik (standfirst) i jedna
// velika fotografija s potpisom — kompozicija otvaranja revije.
export default function HeroSpread() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      tl.fromTo(
        ".hero-folio",
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.8 },
        0
      )
        .fromTo(
          ".hero-naslov",
          { y: 26, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 1.2 },
          0.15
        )
        .fromTo(
          ".hero-uvodnik",
          { y: 18, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 1, stagger: 0.14 },
          0.45
        )
        .fromTo(
          ".hero-slika",
          { clipPath: "inset(0% 0% 16% 0%)", autoAlpha: 0, y: 16 },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            autoAlpha: 1,
            y: 0,
            duration: 1.5,
            ease: "power2.inOut",
          },
          0.55
        )
        .fromTo(
          ".hero-potpis",
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.8 },
          1.3
        );
      return () => tl.kill();
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={root} aria-labelledby="hero-naslov" className={container}>
      <div className="hero-folio pt-8 md:pt-10">
        <Folio page="01" label="Protupožarna zaštita po mjeri" />
      </div>

      <div className="grid gap-x-10 md:grid-cols-12">
        <h1
          id="hero-naslov"
          className={`hero-naslov ${serif} col-span-full mt-10 text-[clamp(3rem,8.5vw,6.5rem)] font-light leading-[1.02] tracking-[-0.01em] text-foreground md:col-span-11 md:mt-14`}
        >
          Vrata za <em className="italic text-primary">budućnost</em>.
        </h1>

        <p
          className="hero-uvodnik col-span-full mt-8 max-w-2xl text-lg leading-relaxed text-gray md:col-span-7 md:col-start-6 md:mt-10"
        >
          FSB Doors projektira i izrađuje protupožarna vrata po mjeri — od
          vlastitog razvoja i ispitivanja u akreditiranim institucijama do
          ugradnje, u klasama otpornosti od EI30 do EI120.
        </p>

        <p
          className={`hero-uvodnik ${caps} col-span-full mt-9 flex flex-wrap gap-x-8 gap-y-2 border-t pt-4 text-accent md:col-span-7 md:col-start-6 ${hairline}`}
        >
          {HERO_TRUST_STATS.map((stat) => (
            <span key={stat.label}>
              <span className="text-foreground">{stat.value}</span> {stat.label}
            </span>
          ))}
        </p>
      </div>

      <figure className="mt-12 md:mt-16">
        <div className="hero-slika relative aspect-[3/2] overflow-hidden md:aspect-[21/9]">
          <Image
            src="/images/hero.webp"
            alt="Protupožarna vrata FSB Doors"
            fill
            priority
            sizes="(min-width: 1280px) 1168px, 100vw"
            className={`object-cover ${photo}`}
          />
        </div>
        <figcaption
          className={`hero-potpis ${caps} mt-3 text-right text-accent`}
        >
          Iz proizvodnog programa FSB Doors — izvedba po mjeri projekta
        </figcaption>
      </figure>
    </section>
  );
}
