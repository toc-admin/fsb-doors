import Link from "next/link";
import { PROJECT_CATEGORIES, getFeaturedProjects } from "@/lib/projects";

/**
 * Tipografski indeks sektora — velika lista s bordo ispunom na hover,
 * bez kartica i fotografija. Ispod: tri izdvojena projekta, minimalno.
 */
export default function BoldSectors() {
  const featured = getFeaturedProjects(3);

  return (
    <section
      id="projekti"
      aria-labelledby="projekti-naslov"
      className="scroll-mt-16 bg-dark text-light"
    >
      <div className="px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2
            id="projekti-naslov"
            className="uppercase leading-[0.9] [font-family:var(--font-display)] text-[clamp(3rem,10vw,9rem)]"
          >
            Sektori.
          </h2>
          <p className="pb-2 text-[11px] uppercase tracking-[0.25em] text-light/60 [font-family:var(--font-mono-blok)]">
            8 područja primjene — od bolnica do tunela
          </p>
        </div>

        <ul className="mt-10 border-b border-light/20">
          {PROJECT_CATEGORIES.map((category, i) => (
            <li key={category.slug}>
              <Link
                href={`/projekti?kategorija=${category.slug}`}
                className="group relative flex items-baseline justify-between gap-4 overflow-hidden border-t border-light/20 px-1 py-4 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-light md:py-5"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 origin-bottom scale-y-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-y-100 group-focus-visible:scale-y-100 motion-reduce:transition-none"
                />
                <span className="relative z-10 flex items-baseline gap-4 md:gap-8">
                  <span
                    aria-hidden="true"
                    className="text-[11px] tracking-[0.2em] text-light/50 transition-colors group-hover:text-light/80 [font-family:var(--font-mono-blok)]"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="uppercase leading-none [font-family:var(--font-display)] text-[clamp(1.75rem,5vw,4.5rem)]">
                    {category.name}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="relative z-10 hidden text-2xl text-light/50 transition-all group-hover:translate-x-1 group-hover:text-light sm:block"
                >
                  &rarr;
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-16">
          <h3 className="text-[11px] uppercase tracking-[0.25em] text-light/60 [font-family:var(--font-mono-blok)]">
            Izdvojeni projekti
          </h3>
          <ul className="mt-6 grid gap-8 sm:grid-cols-3">
            {featured.map((project) => (
              <li key={project.slug} className="border-l-2 border-primary pl-4">
                <Link
                  href={`/projekti/${project.slug}`}
                  className="group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-light"
                >
                  <p className="text-lg uppercase leading-tight transition-colors group-hover:text-accent [font-family:var(--font-display)]">
                    {project.title}
                  </p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.15em] text-light/60 [font-family:var(--font-mono-blok)]">
                    {project.year} — {project.location}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
