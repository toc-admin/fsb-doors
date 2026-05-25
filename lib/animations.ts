"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin (safe for SSR - only runs on client)
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Default animation config
export const defaultConfig = {
  duration: 0.8,
  ease: "power2.out",
  stagger: 0.15,
  start: "top 85%",
};

// Fade up animation - uses fromTo for reliability
export function fadeUp(
  element: gsap.TweenTarget,
  options: {
    y?: number;
    duration?: number;
    delay?: number;
    ease?: string;
    trigger?: Element | string;
    start?: string;
  } = {}
) {
  const {
    y = 60,
    duration = defaultConfig.duration,
    delay = 0,
    ease = defaultConfig.ease,
    trigger,
    start = defaultConfig.start,
  } = options;

  return gsap.fromTo(
    element,
    { y, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger: trigger || (element as Element),
        start,
        toggleActions: "play none none none",
      },
    }
  );
}

// Staggered fade up for multiple items
export function staggerFadeUp(
  elements: gsap.TweenTarget,
  options: {
    y?: number;
    duration?: number;
    stagger?: number;
    ease?: string;
    trigger?: Element | string;
    start?: string;
  } = {}
) {
  const {
    y = 40,
    duration = defaultConfig.duration,
    stagger = defaultConfig.stagger,
    ease = defaultConfig.ease,
    trigger,
    start = "top 85%",
  } = options;

  return gsap.fromTo(
    elements,
    { y, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration,
      stagger,
      ease,
      scrollTrigger: {
        trigger: trigger || (elements as Element),
        start,
        toggleActions: "play none none none",
      },
    }
  );
}

// Fade in animation (no movement)
export function fadeIn(
  element: gsap.TweenTarget,
  options: {
    duration?: number;
    delay?: number;
    ease?: string;
    trigger?: Element | string;
    start?: string;
  } = {}
) {
  const {
    duration = defaultConfig.duration,
    delay = 0,
    ease = defaultConfig.ease,
    trigger,
    start = defaultConfig.start,
  } = options;

  return gsap.fromTo(
    element,
    { opacity: 0 },
    {
      opacity: 1,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger: trigger || (element as Element),
        start,
        toggleActions: "play none none none",
      },
    }
  );
}

// Scale up animation
export function scaleUp(
  element: gsap.TweenTarget,
  options: {
    scale?: number;
    duration?: number;
    delay?: number;
    ease?: string;
    trigger?: Element | string;
    start?: string;
  } = {}
) {
  const {
    scale = 0.9,
    duration = defaultConfig.duration,
    delay = 0,
    ease = defaultConfig.ease,
    trigger,
    start = defaultConfig.start,
  } = options;

  return gsap.fromTo(
    element,
    { scale, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger: trigger || (element as Element),
        start,
        toggleActions: "play none none none",
      },
    }
  );
}

// Slide from left
export function slideFromLeft(
  element: gsap.TweenTarget,
  options: {
    x?: number;
    duration?: number;
    delay?: number;
    ease?: string;
    trigger?: Element | string;
    start?: string;
  } = {}
) {
  const {
    x = -80,
    duration = defaultConfig.duration,
    delay = 0,
    ease = defaultConfig.ease,
    trigger,
    start = defaultConfig.start,
  } = options;

  return gsap.fromTo(
    element,
    { x, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger: trigger || (element as Element),
        start,
        toggleActions: "play none none none",
      },
    }
  );
}

// Slide from right
export function slideFromRight(
  element: gsap.TweenTarget,
  options: {
    x?: number;
    duration?: number;
    delay?: number;
    ease?: string;
    trigger?: Element | string;
    start?: string;
  } = {}
) {
  const {
    x = 80,
    duration = defaultConfig.duration,
    delay = 0,
    ease = defaultConfig.ease,
    trigger,
    start = defaultConfig.start,
  } = options;

  return gsap.fromTo(
    element,
    { x, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger: trigger || (element as Element),
        start,
        toggleActions: "play none none none",
      },
    }
  );
}

// Animated counter
export function animateCounter(
  element: Element,
  endValue: number,
  options: {
    duration?: number;
    ease?: string;
    trigger?: Element | string;
    start?: string;
    suffix?: string;
    prefix?: string;
  } = {}
) {
  const {
    duration = 2,
    ease = "power2.out",
    trigger,
    start = "top 85%",
    suffix = "",
    prefix = "",
  } = options;

  const obj = { value: 0 };

  return gsap.to(obj, {
    value: endValue,
    duration,
    ease,
    scrollTrigger: {
      trigger: trigger || element,
      start,
      toggleActions: "play none none none",
    },
    onUpdate: () => {
      element.textContent = `${prefix}${Math.round(obj.value)}${suffix}`;
    },
  });
}

// Kill all ScrollTrigger instances (useful for cleanup)
export function killAllScrollTriggers() {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
}

// Refresh ScrollTrigger (useful after dynamic content changes)
export function refreshScrollTrigger() {
  ScrollTrigger.refresh();
}

export { gsap, ScrollTrigger };
