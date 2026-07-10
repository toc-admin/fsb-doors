"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";

/**
 * Potpis koncepta "Blok": sekcija podijeljena na dva krila kontrastne pune
 * boje koja se na scroll lagano razmiču (4–8%) i kroz procjep propuštaju
 * svijetlu podlogu — vrata koja se otvaraju. Na mobitelu se krila slažu
 * vertikalno i razmiču po Y osi. Uz prefers-reduced-motion krila miruju.
 */
interface DoorSplitProps {
  id?: string;
  /** Tailwind klase pozadine lijevog (gornjeg) krila */
  leafA?: string;
  /** Tailwind klase pozadine desnog (donjeg) krila */
  leafB?: string;
  /** Koliko se krila razmaknu, u postocima vlastite širine */
  amount?: number;
  /** ScrollTrigger start/end — hero i CTA imaju različit ritam */
  start?: string;
  end?: string;
  className?: string;
  children: React.ReactNode;
}

export default function DoorSplit({
  id,
  leafA = "bg-primary",
  leafB = "bg-dark",
  amount = 6,
  start = "top top",
  end = "bottom top",
  className = "",
  children,
}: DoorSplitProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          horizontal:
            "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
          vertical:
            "(max-width: 767.98px) and (prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const horizontal = Boolean(context.conditions?.horizontal);
          const trigger = { trigger: el, start, end, scrub: true } as const;

          gsap.to(el.querySelector("[data-leaf='a']"), {
            ...(horizontal ? { xPercent: -amount } : { yPercent: -amount }),
            ease: "none",
            scrollTrigger: { ...trigger },
          });
          gsap.to(el.querySelector("[data-leaf='b']"), {
            ...(horizontal ? { xPercent: amount } : { yPercent: amount }),
            ease: "none",
            scrollTrigger: { ...trigger },
          });
        }
      );
    }, el);

    return () => ctx.revert();
  }, [amount, start, end]);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`relative overflow-hidden bg-light ${className}`}
    >
      <div
        data-leaf="a"
        aria-hidden="true"
        className={`absolute left-0 top-0 h-1/2 w-full will-change-transform md:h-full md:w-1/2 ${leafA}`}
      />
      <div
        data-leaf="b"
        aria-hidden="true"
        className={`absolute bottom-0 right-0 h-1/2 w-full will-change-transform md:top-0 md:h-full md:w-1/2 ${leafB}`}
      />
      <div className="relative z-10 h-full">{children}</div>
    </section>
  );
}
