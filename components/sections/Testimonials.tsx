"use client";

import { useState, useRef, useEffect } from "react";
import Container from "@/components/ui/Container";
import { gsap, ScrollTrigger } from "@/lib/animations";

const testimonials = [
  {
    quote: "FSB Doors je bio izvrstan partner na našem hotelskom projektu. Profesionalan pristup, kvalitetni proizvodi i precizna ugradnja. Preporučujemo svima koji traže pouzdana protupožarna rješenja.",
    author: "Marko Horvat",
    role: "Direktor projekta",
    company: "Luxury Hotels Group",
    initials: "MH",
  },
  {
    quote: "Surađujemo s FSB-om već 10 godina na raznim industrijskim projektima. Njihova stručnost u protupožarnoj zaštiti i fleksibilnost u prilagodbi našim potrebama čini ih idealnim partnerom.",
    author: "Ana Petrović",
    role: "Voditelj održavanja",
    company: "Industrija d.o.o.",
    initials: "AP",
  },
  {
    quote: "Odabrali smo FSB Doors za naš novi poslovni centar i nismo požalili. Od savjetovanja do ugradnje, sve je proteklo besprijekorno. Vrata su estetski savršena i funkcionalna.",
    author: "Ivan Kovačević",
    role: "Arhitekt",
    company: "Studio K Arhitektura",
    initials: "IK",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Heading animation
      if (headingRef.current) {
        const children = headingRef.current.children;
        gsap.fromTo(
          children,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Quote card animation
      if (quoteRef.current) {
        gsap.fromTo(
          quoteRef.current,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: quoteRef.current,
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
    <section ref={sectionRef} className="py-24 lg:py-32 bg-light overflow-hidden">
      <Container>
        <div ref={headingRef} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-semibold text-primary bg-primary/10 rounded-full mb-6">
            Što kažu naši klijenti
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark leading-tight">
            Povjerenje koje smo izgradili
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Quote */}
          <div ref={quoteRef} className="relative bg-white rounded-3xl p-10 lg:p-16 shadow-xl">
            {/* Quote mark */}
            <div className="absolute top-8 left-8 text-primary/10">
              <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            <blockquote className="relative z-10">
              <p className="text-xl lg:text-2xl text-dark leading-relaxed font-medium">
                &ldquo;{testimonials[active].quote}&rdquo;
              </p>
            </blockquote>

            <div className="mt-10 flex items-center gap-5">
              <div className="w-[60px] h-[60px] rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                {testimonials[active].initials}
              </div>
              <div>
                <div className="font-bold text-dark text-lg">{testimonials[active].author}</div>
                <div className="text-gray">
                  {testimonials[active].role}, {testimonials[active].company}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-10 flex justify-center gap-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  active === index
                    ? "bg-primary w-10"
                    : "bg-gray/30 hover:bg-gray/50"
                }`}
                aria-label={`Testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
