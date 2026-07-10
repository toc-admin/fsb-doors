"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/animations";

// Diskretno otkrivanje sadržaja na scroll: blagi pomak po y-osi, bez efekata
// koji skreću pozornost. Ako element sadrži [data-reveal] potomke, animiraju
// se oni uz stupnjevanje; inače cijeli element.
export default function Reveal({
  children,
  className,
  stagger = 0.09,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const targets = el.querySelectorAll("[data-reveal]");
      gsap.fromTo(
        targets.length > 0 ? targets : el,
        { y: 26, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger,
          scrollTrigger: {
            trigger: el,
            start: "top 82%",
            once: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
