"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";
import { PROCESS_STEPS } from "@/lib/site-content";

// Postoci uvlake po koraku — stepenasta kompozicija, redoslijed je stvaran.
const INDENTS = ["md:pl-0", "md:pl-[6%]", "md:pl-[12%]", "md:pl-[18%]", "md:pl-[24%]"];

export default function BoldProcess() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>("[data-step]").forEach((step) => {
          gsap.fromTo(
            step,
            { x: -70, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: { trigger: step, start: "top 88%" },
            }
          );
        });
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="proces"
      ref={sectionRef}
      aria-labelledby="proces-naslov"
      className="scroll-mt-16 bg-light text-dark"
    >
      <div className="px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2
            id="proces-naslov"
            className="uppercase leading-[0.9] [font-family:var(--font-display)] text-[clamp(3rem,10vw,9rem)]"
          >
            Proces.
          </h2>
          <p className="pb-2 text-[11px] uppercase tracking-[0.25em] text-dark/60 [font-family:var(--font-mono-blok)]">
            Od izmjere do primopredaje — 5 koraka
          </p>
        </div>

        <ol className="mt-10 border-b-2 border-dark">
          {PROCESS_STEPS.map((step, i) => (
            <li
              key={step.id}
              data-step
              className={`border-t-2 border-dark py-8 md:py-10 ${INDENTS[i]}`}
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:gap-8">
                <span
                  aria-hidden="true"
                  className="uppercase leading-none text-primary [font-family:var(--font-display)] text-[clamp(2.5rem,6vw,5rem)]"
                >
                  {step.number}
                </span>
                <div className="max-w-2xl">
                  <h3 className="uppercase leading-none [font-family:var(--font-display)] text-[clamp(1.5rem,3.5vw,2.75rem)]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-dark/75 sm:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
