"use client";

import { useEffect, useRef } from "react";
import { gsap, animateCounter } from "@/lib/animations";
import { COMPANY_STATS } from "@/lib/site-content";

// Kontrastni blokovi za četiri brojke — bordo, crni, tamnobordo, svijetli.
const BLOCK_STYLES = [
  "bg-primary text-light",
  "bg-dark text-light",
  "bg-primary-dark text-light",
  "bg-light text-dark border-y-2 border-dark md:border-y-0",
];

export default function BoldStats() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        el.querySelectorAll<HTMLElement>("[data-counter]").forEach((node) => {
          const value = Number(node.dataset.value ?? 0);
          const suffix = node.dataset.suffix ?? "";
          animateCounter(node, value, {
            suffix,
            duration: 1.6,
            trigger: el,
            start: "top 80%",
          });
        });
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="FSB Doors u brojkama"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
    >
      {COMPANY_STATS.map((stat, i) => (
        <div key={stat.label} className={`px-6 py-12 md:py-16 ${BLOCK_STYLES[i]}`}>
          <p
            data-counter
            data-value={stat.value}
            data-suffix={stat.suffix}
            className="uppercase leading-none [font-family:var(--font-display)] text-[clamp(3.5rem,6vw,6rem)]"
          >
            {stat.value}
            {stat.suffix}
          </p>
          <p className="mt-3 text-[11px] uppercase tracking-[0.2em] [font-family:var(--font-mono-blok)]">
            {stat.label}
          </p>
          <p className={`mt-1 text-xs ${i === 3 ? "text-dark/60" : "text-light/60"}`}>
            {stat.description}
          </p>
        </div>
      ))}
    </section>
  );
}
