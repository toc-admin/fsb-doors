"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { gsap, ScrollTrigger } from "@/lib/animations";
import { PROJECT_CATEGORIES, ProjectCategorySlug } from "@/lib/projects";

// Istaknuti sektori za bento raspored (1 velika + 3 manje kartice).
const featuredSlugs: ProjectCategorySlug[] = [
  "hoteli",
  "bolnice",
  "poslovne-gradevine",
  "industrijske-gradevine",
];

const featured = featuredSlugs.map(
  (slug) => PROJECT_CATEGORIES.find((category) => category.slug === slug)!
);

interface SectorGridProps {
  showHeading?: boolean;
}

export default function SectorGrid({ showHeading = true }: SectorGridProps) {
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
                Projekti po sektorima
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark leading-tight">
                Rješenja za<br />svaki prostor
              </h2>
            </div>
            <p className="text-xl text-gray max-w-md lg:text-right">
              Od bolnica i hotela do industrijskih građevina i tunela — pogledajte projekte iz sektora koji vas zanima.
            </p>
          </div>
        )}

        {/* Bento-style grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large featured card */}
          <Link
            href={`/projekti?kategorija=${featured[0].slug}`}
            className="group lg:col-span-2 lg:row-span-2 relative rounded-3xl overflow-hidden card-lift min-h-[400px] lg:min-h-[600px]"
          >
            <Image
              src={featured[0].image}
              alt={featured[0].name}
              fill
              className="object-cover img-zoom"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3">
                {featured[0].name}
              </h3>
              <p className="text-white/80 text-lg max-w-md">
                {featured[0].description}
              </p>
              <div className="mt-6 inline-flex items-center text-white font-semibold">
                <span>Pogledajte projekte</span>
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
          {featured.slice(1).map((category) => (
            <Link
              key={category.slug}
              href={`/projekti?kategorija=${category.slug}`}
              className="group relative rounded-3xl overflow-hidden card-lift min-h-[280px]"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover img-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {category.name}
                </h3>
                <p className="text-white/70 text-sm line-clamp-2">
                  {category.description}
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

        {/* All sectors */}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          {PROJECT_CATEGORIES.filter(
            (category) => !featuredSlugs.includes(category.slug)
          ).map((category) => (
            <Link
              key={category.slug}
              href={`/projekti?kategorija=${category.slug}`}
              className="px-4 py-2 text-sm font-semibold text-dark bg-white border border-gray/10 rounded-full hover:border-primary/30 hover:text-primary transition-colors"
            >
              {category.name}
            </Link>
          ))}
          <Link
            href="/projekti"
            className="px-4 py-2 text-sm font-semibold text-white bg-primary rounded-full hover:bg-primary-dark transition-colors"
          >
            Svi projekti →
          </Link>
        </div>
      </Container>
    </section>
  );
}
