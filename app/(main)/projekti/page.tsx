import { Metadata } from "next";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import ProjectGrid from "@/components/sections/ProjectGrid";
import CTA from "@/components/sections/CTA";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projekti | FSB Doors",
  description: "Pogledajte naše uspješno realizirane projekte protupožarne zaštite diljem Hrvatske - hoteli, trgovački centri, bolnice, industrijski objekti.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

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
              Naši projekti
            </h1>
            <p className="mt-6 text-xl text-white/80 leading-relaxed">
              Pogledajte neke od naših uspješno realiziranih projekata. Od luksuznih
              hotela do industrijskih kompleksa - naša vrata štite objekte diljem Hrvatske.
            </p>
          </div>
        </Container>
      </section>

      {/* Projects Grid */}
      <ProjectGrid projects={projects} showHeading={false} />

      <CTA
        title="Imate projekt na umu?"
        subtitle="Kontaktirajte nas za besplatno savjetovanje i ponudu prilagođenu vašim potrebama."
      />
    </>
  );
}
