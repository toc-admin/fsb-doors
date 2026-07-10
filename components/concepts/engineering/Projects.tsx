import Link from "next/link";
import {
  PROJECT_CATEGORIES,
  getCategoryName,
  getFeaturedProjects,
} from "@/lib/projects";
import Reveal from "./Reveal";
import { container, display, eyebrow, hairline, mono } from "./tokens";

// Sektori kao indeks + izdvojeni projekti kao dosje-redovi.
export default function Projects() {
  const featured = getFeaturedProjects(3);

  return (
    <section
      id="projekti"
      aria-labelledby="projekti-naslov"
      className="scroll-mt-24 py-20 lg:py-28"
    >
      <div className={container}>
        <Reveal>
          <div className="pb-12 lg:pb-16">
            <p className={eyebrow}>List 05 / Projekti i sektori</p>
            <h2
              id="projekti-naslov"
              className={`${display} mt-4 max-w-3xl text-4xl font-semibold uppercase leading-none md:text-5xl lg:text-6xl`}
            >
              Ugrađeno u osam sektora
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          {/* Indeks sektora */}
          <Reveal className="lg:col-span-5">
            <p className={`${mono} pb-4 text-[11px] uppercase tracking-[0.24em] text-gray`}>
              Sektori primjene
            </p>
            <ul className={`border-b ${hairline}`}>
              {PROJECT_CATEGORIES.map((cat, i) => (
                <li key={cat.slug}>
                  <Link
                    href={`/projekti?kategorija=${cat.slug}`}
                    className={`group flex items-baseline gap-5 border-t ${hairline} py-3.5 transition-colors hover:bg-light`}
                  >
                    <span className={`${mono} text-[11px] tracking-[0.16em] text-gray`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-sm text-foreground md:text-base">
                      {cat.name}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`${mono} text-sm text-gray transition-transform duration-300 group-hover:translate-x-1 group-hover:text-foreground`}
                    >
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Izdvojeni projekti — dosje-redovi */}
          <Reveal className="lg:col-span-7">
            <div className="flex items-baseline justify-between gap-4 pb-4">
              <p className={`${mono} text-[11px] uppercase tracking-[0.24em] text-gray`}>
                Izdvojeni projekti
              </p>
              <Link
                href="/projekti"
                className={`${mono} text-[11px] uppercase tracking-[0.18em] text-gray underline-offset-4 transition-colors hover:text-foreground hover:underline`}
              >
                Svi projekti →
              </Link>
            </div>
            <ul className={`border-b ${hairline}`}>
              {featured.map((project, i) => (
                <li key={project.slug}>
                  <Link
                    href={`/projekti/${project.slug}`}
                    className={`group block border-t ${hairline} py-6 transition-colors hover:bg-light md:py-7`}
                  >
                    <div className={`${mono} flex flex-wrap items-baseline gap-x-4 gap-y-1 text-[11px] tracking-[0.16em] text-gray`}>
                      <span>{String(i + 1).padStart(2, "0")}</span>
                      <span>{project.year}</span>
                      <span>{project.location}</span>
                      <span className="ml-auto uppercase">
                        {getCategoryName(project.category)}
                      </span>
                    </div>
                    <div className="mt-3 flex items-baseline justify-between gap-4">
                      <h3
                        className={`${display} text-2xl font-medium uppercase leading-tight md:text-3xl`}
                      >
                        {project.title}
                      </h3>
                      <span
                        aria-hidden="true"
                        className={`${mono} text-lg text-gray transition-transform duration-300 group-hover:translate-x-1 group-hover:text-foreground`}
                      >
                        →
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
