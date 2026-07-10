import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import ProjectGrid from "@/components/sections/ProjectGrid";
import CTA from "@/components/sections/CTA";
import {
  PROJECT_CATEGORIES,
  getAllProjects,
  getCategoryBySlug,
  getProjectsByCategory,
} from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projekti | FSB Doors",
  description: "Pogledajte naše uspješno realizirane projekte protupožarne zaštite diljem Hrvatske - bolnice, hoteli, stambene i poslovne građevine, industrija, škole i tuneli.",
};

export default async function ProjectsPage(props: PageProps<"/projekti">) {
  const { kategorija } = await props.searchParams;
  const activeCategory = getCategoryBySlug(
    Array.isArray(kategorija) ? kategorija[0] : kategorija ?? ""
  );
  const projects = activeCategory
    ? getProjectsByCategory(activeCategory.slug)
    : getAllProjects();

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-dark overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Badge variant="light">Projekti</Badge>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              {activeCategory ? activeCategory.name : "Naši projekti"}
            </h1>
            <p className="mt-6 text-xl text-white/80 leading-relaxed">
              {activeCategory
                ? activeCategory.description
                : "Pogledajte neke od naših uspješno realiziranih projekata. Od bolnica i hotela do industrijskih građevina i tunela - naša vrata štite objekte diljem Hrvatske."}
            </p>
          </div>

          {/* Category filter */}
          <div className="mt-12 flex flex-wrap gap-3">
            <Link
              href="/projekti"
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
                !activeCategory
                  ? "bg-primary text-white"
                  : "bg-white/10 text-white/80 hover:bg-white/20"
              }`}
            >
              Svi projekti
            </Link>
            {PROJECT_CATEGORIES.map((category) => (
              <Link
                key={category.slug}
                href={`/projekti?kategorija=${category.slug}`}
                className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
                  activeCategory?.slug === category.slug
                    ? "bg-primary text-white"
                    : "bg-white/10 text-white/80 hover:bg-white/20"
                }`}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Projects Grid */}
      {projects.length > 0 ? (
        <ProjectGrid projects={projects} showHeading={false} />
      ) : (
        <section className="py-24">
          <Container>
            <p className="text-center text-xl text-gray">
              Reference iz ovog sektora uskoro objavljujemo.{" "}
              <Link href="/kontakt" className="text-primary font-semibold hover:underline">
                Kontaktirajte nas
              </Link>{" "}
              za više informacija.
            </p>
          </Container>
        </section>
      )}

      <CTA
        title="Imate projekt na umu?"
        subtitle="Kontaktirajte nas za besplatno savjetovanje i ponudu prilagođenu vašim potrebama."
      />
    </>
  );
}
