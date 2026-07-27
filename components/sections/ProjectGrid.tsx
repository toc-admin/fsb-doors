import Link from "next/link";
import Image from "next/image";
import { container, display, hairline, mono } from "@/components/site/tokens";
import Reveal from "@/components/site/Reveal";
import { Project, getCategoryName } from "@/lib/projects";

interface ProjectGridProps {
  projects: Project[];
  showHeading?: boolean;
  headingText?: string;
  maxProjects?: number;
}

// Projekti kao dosje-redovi tehničkog lista: broj, mono metapodaci,
// mala crno-bijela snimka i naslov u display pismu.
export default function ProjectGrid({
  projects,
  showHeading = true,
  headingText = "Naši projekti",
  maxProjects,
}: ProjectGridProps) {
  const displayProjects = maxProjects ? projects.slice(0, maxProjects) : projects;

  return (
    <section className="py-16 lg:py-24">
      <div className={container}>
        {showHeading && (
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 pb-10 lg:pb-12">
              <h2
                className={`${display} text-4xl font-semibold uppercase leading-none md:text-5xl`}
              >
                {headingText}
              </h2>
              {maxProjects && projects.length > maxProjects && (
                <Link
                  href="/projekti"
                  className={`${mono} text-[11px] uppercase tracking-[0.18em] text-gray underline-offset-4 transition-colors hover:text-foreground hover:underline`}
                >
                  Svi projekti →
                </Link>
              )}
            </div>
          </Reveal>
        )}

        <ul className={`border-b ${hairline}`}>
          {displayProjects.map((project, i) => (
            <li key={project.slug}>
              <Reveal delay={Math.min(i, 4) * 0.08}>
                <Link
                  href={`/projekti/${project.slug}`}
                  className={`group block border-t ${hairline} py-6 transition-colors hover:bg-light md:py-8`}
                >
                  <div
                    className={`${mono} flex flex-wrap items-baseline gap-x-4 gap-y-1 text-[11px] tracking-[0.16em] text-gray`}
                  >
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    <span>{project.year}</span>
                    <span>{project.location}</span>
                    <span className="ml-auto uppercase">
                      {getCategoryName(project.category)}
                    </span>
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-5 md:gap-8">
                    <span className="relative hidden aspect-[4/3] w-32 shrink-0 overflow-hidden sm:block md:w-40">
                      <Image
                        src={project.image}
                        alt=""
                        fill
                        sizes="160px"
                        className="object-cover grayscale contrast-[1.05] brightness-[0.85] transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-primary/25 mix-blend-multiply"
                      />
                    </span>

                    <div className="min-w-0 flex-1">
                      <h3
                        className={`${display} text-2xl font-medium uppercase leading-tight md:text-3xl`}
                      >
                        {project.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 max-w-2xl text-sm leading-relaxed text-gray">
                        {project.description}
                      </p>
                    </div>

                    <span
                      aria-hidden="true"
                      className={`${mono} shrink-0 text-lg text-gray transition-transform duration-300 group-hover:translate-x-1 group-hover:text-foreground`}
                    >
                      →
                    </span>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
