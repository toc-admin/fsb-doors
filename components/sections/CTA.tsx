"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { gsap, ScrollTrigger } from "@/lib/animations";

interface CTAProps {
  title?: string;
  subtitle?: string;
  primaryCta?: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
}

export default function CTA({
  title = "Spremni za sljedeći korak?",
  subtitle = "Kontaktirajte nas danas i zatražite besplatnu ponudu za vaš projekt. Naši stručnjaci stoje vam na raspolaganju.",
  primaryCta = { text: "Zatražite ponudu", href: "/kontakt" },
  secondaryCta,
}: CTAProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Content animation
      if (contentRef.current) {
        const children = contentRef.current.children;
        gsap.fromTo(
          children,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Contact info animation
      if (contactRef.current) {
        gsap.fromTo(
          contactRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: contactRef.current,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.webp"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/80" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-64 h-64 border border-white/10 rounded-full" />
      <div className="absolute bottom-10 left-10 w-40 h-40 border border-white/10 rounded-full" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <div ref={contentRef} className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {title}
          </h2>
          <p className="mt-8 text-xl lg:text-2xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Button
              href={primaryCta.href}
              variant="white"
              size="lg"
              className="text-lg px-10 py-4 shadow-xl"
            >
              {primaryCta.text}
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Button>
            {secondaryCta && (
              <Button
                href={secondaryCta.href}
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white hover:text-primary text-lg px-10 py-4"
              >
                {secondaryCta.text}
              </Button>
            )}
          </div>
        </div>

        {/* Contact info */}
        <div ref={contactRef} className="mt-16 pt-10 border-t border-white/10">
          <p className="text-white/50 text-sm uppercase tracking-wider mb-6 text-center">Ili nas kontaktirajte direktno</p>
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            <a href="tel:+38513496811" className="flex items-center gap-3 text-white hover:text-white/80 transition-colors">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <span className="text-lg font-medium">+385 1 3496 811</span>
            </a>
            <a href="mailto:info@fsb-zagreb.hr" className="flex items-center gap-3 text-white hover:text-white/80 transition-colors">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <span className="text-lg font-medium">info@fsb-zagreb.hr</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
