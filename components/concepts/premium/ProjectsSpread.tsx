import Link from "next/link";
import { PROJECT_CATEGORIES, getFeaturedProjects, getCategoryName } from "@/lib/projects";
import Folio from "./Folio";
import Reveal from "./Reveal";
import { serif, caps, container, hairline, focusRing } from "./tokens";

// Arak projekata: profinjeni kazalo-popis sektora u dva stupca s tankim
// separatorima te tri odabrane reference kao kratke natuknice.
export default function ProjectsSpread() {
  const featured = getFeaturedProjects(3);

  return (
    <section
      id="projekti"
      aria-labelledby="projekti-naslov"
      className={`${container} scroll-mt-10`}
    >
      <Folio page="05" label="Projekti i reference" />

      <h2
        id="projekti-naslov"
        className={`${serif} mt-10 max-w-3xl text-[clamp(2rem,4.5vw,3.25rem)] font-light leading-[1.1] text-foreground`}
      >
        Osam sektora primjene — od bolnica do tunela.
      </h2>

      <Reveal>
        <ul className="mt-12 grid gap-x-14 sm:grid-cols-2">
          {PROJECT_CATEGORIES.map((category) => (
            <li key={category.slug} data-reveal className={`border-b ${hairline}`}>
              <Link
                href={`/projekti?kategorija=${category.slug}`}
                className={`group flex items-baseline justify-between gap-6 py-4 ${focusRing}`}
              >
                <span
                  className={`${serif} text-xl font-normal text-foreground transition-colors group-hover:text-primary`}
                >
                  {category.name}
                </span>
                <span
                  aria-hidden="true"
                  className="text-accent transition-all group-hover:translate-x-1 group-hover:text-primary"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal>
        <p data-reveal className={`${caps} mt-16 text-accent md:mt-20`}>
          Odabrane reference
        </p>
        <div className="mt-6 grid gap-x-10 gap-y-10 md:grid-cols-3">
          {featured.map((project) => (
            <article
              key={project.slug}
              data-reveal
              className={`border-t pt-5 ${hairline}`}
            >
              <h3
                className={`${serif} text-2xl font-normal leading-snug text-foreground`}
              >
                {project.title}
              </h3>
              <p className={`${caps} mt-4 text-gray`}>
                {project.location} · {project.year}
              </p>
              <p className={`${caps} mt-1.5 text-accent`}>
                {getCategoryName(project.category)}
              </p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
