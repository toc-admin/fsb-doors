"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { gsap, ScrollTrigger } from "@/lib/animations";

const applications = [
  {
    title: "Ugostiteljstvo",
    description:
      "Protupožarna rješenja za hotele, restorane i ostale ugostiteljske objekte.",
    image: "/images/ugostiteljstvo.webp",
    href: "/primjena/ugostiteljstvo",
    stats: "200+ projekata",
  },
  {
    title: "Poslovni objekti",
    description:
      "Suvremena protupožarna vrata za urede, poslovne centre i administrativne zgrade.",
    image: "/images/poslovni-objekti.webp",
    href: "/primjena/poslovni-objekti",
    stats: "150+ projekata",
  },
  {
    title: "Javni i stambeni objekti",
    description:
      "Rješenja za škole, bolnice, stambene zgrade i druge javne prostore.",
    image: "/images/javni-i-stambeni-objekti.webp",
    href: "/primjena/javni-i-stambeni-objekti",
    stats: "300+ projekata",
  },
  {
    title: "Industrija",
    description:
      "Robusna protupožarna vrata za proizvodne hale, skladišta i industrijske komplekse.",
    image: "/images/industrija.webp",
    href: "/primjena/industrija",
    stats: "100+ projekata",
  },
];

interface ApplicationGridProps {
  showHeading?: boolean;
}

export default function ApplicationGrid({ showHeading = true }: ApplicationGridProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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

      // Grid cards - staggered with scale
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll(":scope > a");
        gsap.fromTo(
          cards,
          { y: 60, scale: 0.95, opacity: 0 },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, [showHeading]);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-light">
      <Container>
        {showHeading && (
          <div ref={headingRef} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 text-sm font-semibold text-primary bg-primary/10 rounded-full mb-6">
                Područja primjene
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark leading-tight">
                Rješenja za<br />svaki prostor
              </h2>
            </div>
            <p className="text-xl text-gray max-w-md lg:text-right">
              Naša protupožarna vrata štite različite vrste objekata - od hotela do industrijskih postrojenja.
            </p>
          </div>
        )}

        {/* Bento-style grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large featured card */}
          <Link
            href={applications[0].href}
            className="group lg:col-span-2 lg:row-span-2 relative rounded-3xl overflow-hidden card-lift min-h-[400px] lg:min-h-[600px]"
          >
            <Image
              src={applications[0].image}
              alt={applications[0].title}
              fill
              className="object-cover img-zoom"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
              <span className="inline-block px-4 py-1.5 text-sm font-semibold text-white bg-primary rounded-full mb-4">
                {applications[0].stats}
              </span>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3">
                {applications[0].title}
              </h3>
              <p className="text-white/80 text-lg max-w-md">
                {applications[0].description}
              </p>
              <div className="mt-6 inline-flex items-center text-white font-semibold">
                <span>Saznajte više</span>
                <svg
                  className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Smaller cards */}
          {applications.slice(1).map((app, index) => (
            <Link
              key={index}
              href={app.href}
              className="group relative rounded-3xl overflow-hidden card-lift min-h-[280px]"
            >
              <Image
                src={app.image}
                alt={app.title}
                fill
                className="object-cover img-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-primary rounded-full mb-3">
                  {app.stats}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {app.title}
                </h3>
                <p className="text-white/70 text-sm line-clamp-2">
                  {app.description}
                </p>
              </div>
              {/* Hover arrow */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
