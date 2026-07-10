import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { Project, getCategoryName } from "@/lib/projects";

interface ProjectGridProps {
  projects: Project[];
  showHeading?: boolean;
  headingText?: string;
  maxProjects?: number;
}

export default function ProjectGrid({
  projects,
  showHeading = true,
  headingText = "Naši projekti",
  maxProjects,
}: ProjectGridProps) {
  const displayProjects = maxProjects ? projects.slice(0, maxProjects) : projects;

  return (
    <section className="py-20 lg:py-28">
      <Container>
        {showHeading && (
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-dark">
                {headingText}
              </h2>
              <p className="mt-4 text-gray max-w-2xl">
                Pogledajte neke od naših uspješno realiziranih projekata protupožarne
                zaštite diljem Hrvatske.
              </p>
            </div>
            {maxProjects && projects.length > maxProjects && (
              <Link
                href="/projekti"
                className="inline-flex items-center text-primary font-semibold hover:underline"
              >
                Svi projekti
                <svg
                  className="ml-2 w-4 h-4"
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
              </Link>
            )}
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {displayProjects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/projekti/${project.slug}`}
              className={`group relative rounded-2xl overflow-hidden ${
                index === 0 ? "md:col-span-2 aspect-[21/9]" : "aspect-[16/10]"
              }`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 text-xs font-semibold bg-primary text-white rounded-full">
                    {getCategoryName(project.category)}
                  </span>
                  <span className="px-3 py-1 text-xs font-semibold bg-white/20 backdrop-blur-sm text-white rounded-full">
                    {project.year}
                  </span>
                </div>
                <h3
                  className={`font-bold text-white group-hover:text-primary transition-colors ${
                    index === 0 ? "text-2xl sm:text-3xl lg:text-4xl" : "text-xl sm:text-2xl"
                  }`}
                >
                  {project.title}
                </h3>
                <p className="mt-2 text-white/70 flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  {project.location}
                </p>
                <div className="mt-4 inline-flex items-center text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Pogledaj projekt
                  <svg
                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
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
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
