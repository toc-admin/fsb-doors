"use client";

import { useRef, useEffect } from "react";
import Container from "@/components/ui/Container";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { gsap, ScrollTrigger } from "@/lib/animations";

const stats = [
  {
    value: 20,
    suffix: "+",
    label: "Godina iskustva",
    description: "Na hrvatskom tržištu",
  },
  {
    value: 5000,
    suffix: "+",
    label: "Ugrađenih vrata",
    description: "Diljem Hrvatske",
  },
  {
    value: 500,
    suffix: "+",
    label: "Zadovoljnih klijenata",
    description: "Koji nam vjeruju",
  },
  {
    value: 100,
    suffix: "%",
    label: "Certificirani proizvodi",
    description: "EU standardi",
  },
];

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Heading animation
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Cards stagger animation
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(":scope > div");
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-gradient-to-br from-primary via-primary to-primary-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <div className="text-center mb-16">
          <h2 ref={headingRef} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Brojke koje govore same za sebe
          </h2>
        </div>

        <div ref={cardsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative text-center p-8 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-2">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  duration={2}
                />
              </div>
              <p className="text-white text-lg font-semibold">{stat.label}</p>
              <p className="text-white/60 text-sm mt-1">{stat.description}</p>

              {/* Decorative line */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/20 rounded-tr-lg" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
