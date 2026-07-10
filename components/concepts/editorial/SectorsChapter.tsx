import Image from "next/image";
import Link from "next/link";
import {
  PROJECT_CATEGORIES,
  getFeaturedProjects,
  getCategoryName,
} from "@/lib/projects";
import ChapterTab from "./ChapterTab";
import Reveal from "./Reveal";
import { display, mono, hairline, container } from "./tokens";

export default function SectorsChapter() {
  const featured = getFeaturedProjects(3);

  return (
    <section id="projekti" className="scroll-mt-28">
      <div className={`${container} py-20 md:py-28`}>
        <ChapterTab
          number="05"
          title="Projekti"
          tag={`${PROJECT_CATEGORIES.length} sektora primjene · reference`}
        />

        <Reveal className="mt-10 grid gap-14 md:mt-14 lg:grid-cols-12 lg:gap-8">
          {/* Indeks sektora */}
          <nav
            aria-label="Sektori primjene"
            data-reveal
            className="lg:col-span-5"
          >
            <p
              className={`${mono} mb-4 text-[11px] uppercase tracking-[0.1em] text-gray`}
            >
              Indeks sektora
            </p>
            <ol>
              {PROJECT_CATEGORIES.map((category, index) => (
                <li key={category.slug}>
                  <Link
                    href={`/projekti?kategorija=${category.slug}`}
                    className={`group flex items-baseline gap-5 border-t py-3.5 transition-colors ${hairline}`}
                  >
                    <span
                      className={`${mono} text-xs text-gray transition-colors group-hover:text-primary`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`${display} text-lg font-bold tracking-[-0.01em] transition-colors group-hover:text-primary md:text-xl`}
                    >
                      {category.name}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`${mono} ml-auto text-sm text-gray transition-colors group-hover:text-primary`}
                    >
                      &rarr;
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </nav>

          {/* Izdvojene reference */}
          <div data-reveal className="lg:col-span-6 lg:col-start-7">
            <figure>
              <div className="relative aspect-[21/9] overflow-hidden">
                <Image
                  src="/images/industrija.webp"
                  alt="Čelična protupožarna vrata u industrijskom pogonu"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption
                className={`${mono} mt-2 flex justify-between gap-4 text-[11px] text-gray`}
              >
                <span>Sl. 02 — Industrijska primjena</span>
                <span className="text-accent">FSD · do EI120</span>
              </figcaption>
            </figure>

            <p
              className={`${mono} mt-12 mb-4 text-[11px] uppercase tracking-[0.1em] text-gray`}
            >
              Izdvojene reference
            </p>
            <ul>
              {featured.map((project) => (
                <li key={project.slug}>
                  <Link
                    href={`/projekti/${project.slug}`}
                    className={`group block border-t py-5 ${hairline}`}
                  >
                    <div className="flex items-baseline gap-5">
                      <span
                        className={`${mono} text-xs font-medium text-accent`}
                      >
                        {project.year}
                      </span>
                      <h3
                        className={`${display} text-lg font-bold tracking-[-0.01em] transition-colors group-hover:text-primary md:text-xl`}
                      >
                        {project.title}
                      </h3>
                    </div>
                    <p
                      className={`${mono} mt-1.5 pl-[calc(1.25rem+4ch)] text-[11px] text-gray`}
                    >
                      {project.location} · {getCategoryName(project.category)}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/projekti"
              className={`${mono} mt-6 inline-block text-xs uppercase tracking-[0.12em] text-foreground underline decoration-[rgba(19,19,19,0.3)] underline-offset-4 transition-colors hover:text-primary hover:decoration-current`}
            >
              Svi projekti&nbsp;&rarr;
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
