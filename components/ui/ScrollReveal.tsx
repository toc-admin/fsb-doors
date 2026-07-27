"use client";

import { useRef, useEffect, ReactNode } from "react";
import { gsap } from "@/lib/animations";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  distance?: number;
  scale?: number;
  className?: string;
  once?: boolean;
  start?: string;
}

// Scroll-reveal s istim API-jem kao prije, ali poštuje prefers-reduced-motion
// (kao site/Reveal): bez efekta element ostaje normalno vidljiv.
export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  distance = 60,
  scale,
  className = "",
  once = true,
  start = "top 85%",
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const fromState: gsap.TweenVars = { opacity: 0 };
        const toState: gsap.TweenVars = { opacity: 1, x: 0, y: 0, scale: 1 };

        if (direction === "up") fromState.y = distance;
        if (direction === "down") fromState.y = -distance;
        if (direction === "left") fromState.x = distance;
        if (direction === "right") fromState.x = -distance;
        if (scale) fromState.scale = scale;

        gsap.fromTo(element, fromState, {
          ...toState,
          duration,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start,
            toggleActions: once ? "play none none none" : "play reverse play reverse",
          },
        });
      });
    }, element);

    return () => ctx.revert();
  }, [direction, delay, duration, distance, scale, once, start]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
