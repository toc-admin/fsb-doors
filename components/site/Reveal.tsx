"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "@/lib/animations";

// Suzdržani scroll-reveal: blagi pomak + fade, samo kad korisnik ne traži
// smanjeno kretanje. Bez efekta element ostaje normalno vidljiv.
export default function Reveal({
  children,
  className,
  y = 24,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          el,
          { y, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            delay,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, el);

    return () => ctx.revert();
  }, [y, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
