import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetail from "@/components/sections/ProjectDetail";
import ProjectGrid from "@/components/sections/ProjectGrid";
import { getProjectBySlug, getAllProjects } from "@/lib/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Projekt nije pronađen | FSB Doors",
    };
  }

  return {
    title: `${project.title} | FSB Doors Projekti`,
    description: project.description.substring(0, 160),
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Get related projects (excluding current)
  const allProjects = getAllProjects();
  const relatedProjects = allProjects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 2);

  return (
    <>
      <ProjectDetail project={project} />

      {relatedProjects.length > 0 && (
        <section className="bg-light">
          <ProjectGrid
            projects={relatedProjects}
            headingText="Slični projekti"
            showHeading={true}
          />
        </section>
      )}
    </>
  );
}
