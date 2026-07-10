"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/animations";

// Suzdržano otkrivanje sadržaja na scroll, u duhu tiskane revije:
// - [data-reveal] elementi ulaze mirno (opacitet + minimalan pomak),
// - [data-reveal-img] fotografije se "razmaskiraju" blagim clip-pathom.
// Poštuje prefers-reduced-motion kroz gsap.matchMedia.
export default function Reveal({
  children,
  className,
  stagger = 0.12,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const items = el.querySelectorAll("[data-reveal]");
      if (items.length > 0) {
        gsap.fromTo(
          items,
          { y: 22, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1,
            ease: "power2.out",
            stagger,
            scrollTrigger: { trigger: el, start: "top 80%", once: true },
          }
        );
      }

      el.querySelectorAll("[data-reveal-img]").forEach((fig) => {
        gsap.fromTo(
          fig,
          { clipPath: "inset(0% 0% 14% 0%)", autoAlpha: 0, y: 14 },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            autoAlpha: 1,
            y: 0,
            duration: 1.3,
            ease: "power2.out",
            scrollTrigger: { trigger: fig, start: "top 84%", once: true },
          }
        );
      });
    });

    return () => mm.revert();
  }, [stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
