"use client";

import { useRef, useEffect, ReactNode } from "react";
import { gsap, ScrollTrigger } from "@/lib/animations";

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

    // Define from and to states
    const fromState: gsap.TweenVars = { opacity: 0 };
    const toState: gsap.TweenVars = { opacity: 1, x: 0, y: 0, scale: 1 };

    if (direction === "up") fromState.y = distance;
    if (direction === "down") fromState.y = -distance;
    if (direction === "left") fromState.x = distance;
    if (direction === "right") fromState.x = -distance;
    if (scale) fromState.scale = scale;

    const animation = gsap.fromTo(element, fromState, {
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

    return () => {
      animation.kill();
      ScrollTrigger.getAll()
        .filter((t) => t.trigger === element)
        .forEach((t) => t.kill());
    };
  }, [direction, delay, duration, distance, scale, once, start]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
