"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { gsap, ScrollTrigger } from "@/lib/animations";

const products = [
  {
    title: "Čelična vrata",
    description:
      "Visokokvalitetna čelična protupožarna vrata s klasama otpornosti od EI30 do EI120. Idealna za industrijske i komercijalne objekte.",
    image: "/images/celicna-vrata.webp",
    href: "/proizvodi/celicna-vrata",
    features: ["EI30 - EI120", "Čelični okvir", "Mineralna ispuna"],
  },
  {
    title: "Ostakljena vrata",
    description:
      "Moderna protupožarna ostakljena vrata koja kombiniraju sigurnost i estetiku. Savršena za poslovne i javne prostore.",
    image: "/images/ostakljena-vrata.webp",
    href: "/proizvodi/ostakljena-vrata",
    features: ["EI30 - EI60", "Vatrostalno staklo", "Aluminij/čelik"],
  },
  {
    title: "Fiksne ostakljene stijene",
    description:
      "Protupožarne staklene pregrade za odvajanje prostora uz održavanje vizualne povezanosti i prirodnog svjetla.",
    image: "/images/fiksne-ostakljene-stijene.webp",
    href: "/proizvodi/fiksne-ostakljene-stijene",
    features: ["Do 4m visine", "Modularni sustav", "Visoka transparentnost"],
  },
  {
    title: "Revizijska vrata",
    description:
      "Specijalizirana protupožarna vrata za pristup tehničkim instalacijama i revizijskim oknima.",
    image: "/images/revizijska-vrata.webp",
    href: "/proizvodi/revizijska-vrata",
    features: ["EI30 - EI90", "Skrivene šarke", "Brzi pristup"],
  },
];

interface ProductGridProps {
  showHeading?: boolean;
  limit?: number;
}

export default function ProductGrid({ showHeading = true, limit }: ProductGridProps) {
  const displayProducts = limit ? products.slice(0, limit) : products;
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Heading animation
      if (headingRef.current && showHeading) {
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

      // Cards staggered animation
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(":scope > a");
        gsap.fromTo(
          cards,
          { y: 60, opacity: 0 },
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

      // Button animation
      if (buttonRef.current && showHeading) {
        gsap.fromTo(
          buttonRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: buttonRef.current,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, [showHeading]);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white">
      <Container>
        {showHeading && (
          <div ref={headingRef} className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 text-sm font-semibold text-primary bg-primary/10 rounded-full mb-6">
              Naši proizvodi
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark leading-tight">
              Protupožarna vrata<br />
              <span className="text-primary">vrhunske kvalitete</span>
            </h2>
            <p className="mt-6 text-xl text-gray max-w-2xl mx-auto">
              Širok asortiman certificiranih protupožarnih vrata za sve vrste objekata i namjena.
            </p>
          </div>
        )}

        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {displayProducts.map((product, index) => (
            <Link
              key={index}
              href={product.href}
              className="group relative bg-light rounded-3xl overflow-hidden card-lift"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover img-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />

                {/* Features badges */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {product.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium text-white bg-white/20 backdrop-blur-sm rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10">
                <h3 className="text-2xl lg:text-3xl font-bold text-dark group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                <p className="mt-4 text-gray text-lg leading-relaxed">
                  {product.description}
                </p>
                <div className="mt-6 inline-flex items-center text-primary font-semibold text-lg">
                  <span>Saznajte više</span>
                  <svg
                    className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[4rem] group-hover:bg-primary/10 transition-colors" />
            </Link>
          ))}
        </div>

        {/* View all button */}
        {showHeading && (
          <div ref={buttonRef} className="mt-16 text-center">
            <Link
              href="/proizvodi"
              className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-primary border-2 border-primary rounded-full hover:bg-primary hover:text-white transition-all"
            >
              Pogledajte sve proizvode
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}
