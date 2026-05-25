"use client";

import { useRef, useEffect, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/animations";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  className = "",
}: AnimatedCounterProps) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: "top 90%",
      onEnter: () => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;

        const obj = { value: 0 };
        gsap.to(obj, {
          value,
          duration,
          ease: "power2.out",
          onUpdate: () => {
            setDisplayValue(Math.round(obj.value));
          },
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [value, duration]);

  return (
    <span ref={elementRef} className={className}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}
