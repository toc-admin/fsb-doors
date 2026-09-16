import { Metadata } from "next";
import Link from "next/link";
import ProjectGrid from "@/components/sections/ProjectGrid";
import CTA from "@/components/sections/CTA";
import Reveal from "@/components/site/Reveal";
import SectionRule from "@/components/site/SectionRule";
import { container, display, eyebrow, hairline, mono } from "@/components/site/tokens";
import {
  PROJECT_CATEGORIES,
  getAllProjects,
  getCategoryBySlug,
  getProjectsByCategory,
} from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projekti | FSB Doors",
  description: "Referentni projekti protupožarne zaštite prema područjima primjene - zdravstvo, obrazovanje, hoteli, industrija, javni i trgovački objekti, stambene i poslovne zgrade te prometna infrastruktura.",
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
      {/* Zaglavlje lista — registar referenci */}
      <section className="pt-12 md:pt-16">
        <div className={container}>
          <Reveal>
            <p className={eyebrow}>List PR—01 / Projekti</p>
            <h1
              className={`${display} mt-4 max-w-4xl text-4xl font-semibold uppercase leading-none md:text-5xl lg:text-6xl`}
            >
              {activeCategory ? activeCategory.name : "Registar projekata"}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray md:text-lg">
              {activeCategory
                ? activeCategory.description
                : "Pogledajte neke od naših uspješno realiziranih projekata. Od bolnica i hotela do industrijskih građevina i tunela - naša vrata štite objekte diljem Hrvatske."}
            </p>
          </Reveal>

          {/* Filtar po područjima primjene — mono indeks */}
          <Reveal delay={0.08}>
            <div className={`mt-10 border-t ${hairline} pt-6 lg:mt-14`}>
              <p className={`${mono} pb-4 text-[11px] uppercase tracking-[0.24em] text-gray`}>
                Filtar / Područje primjene
              </p>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/projekti"
                  className={`${mono} border px-3.5 py-2 text-[11px] uppercase tracking-[0.16em] transition-colors ${
                    !activeCategory
                      ? "border-primary bg-primary text-[#f5f0ea]"
                      : `${hairline} text-gray hover:border-[#8a8f98] hover:text-foreground`
                  }`}
                >
                  Svi projekti
                </Link>
                {PROJECT_CATEGORIES.map((category, i) => (
                  <Link
                    key={category.slug}
                    href={`/projekti?kategorija=${category.slug}`}
                    className={`${mono} border px-3.5 py-2 text-[11px] uppercase tracking-[0.16em] transition-colors ${
                      activeCategory?.slug === category.slug
                        ? "border-primary bg-primary text-[#f5f0ea]"
                        : `${hairline} text-gray hover:border-[#8a8f98] hover:text-foreground`
                    }`}
                  >
                    <span className="mr-2 opacity-60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Popis projekata */}
      {projects.length > 0 ? (
        <ProjectGrid projects={projects} showHeading={false} />
      ) : (
        <section className="py-20 lg:py-28">
          <div className={container}>
            <Reveal>
              <div className={`border ${hairline} px-6 py-14 text-center md:py-20`}>
                <p className={`${mono} text-[11px] uppercase tracking-[0.24em] text-gray`}>
                  Zapis u pripremi
                </p>
                <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray">
                  Reference iz ovog područja primjene uskoro objavljujemo.{" "}
                  <Link
                    href="/kontakt"
                    className="text-primary underline-offset-4 transition-colors hover:underline"
                  >
                    Kontaktirajte nas
                  </Link>{" "}
                  za više informacija.
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <SectionRule code="PR—PR / 02" />

      <CTA
        title="Imate projekt na umu?"
        subtitle="Kontaktirajte nas za besplatno savjetovanje i ponudu prilagođenu vašim potrebama."
      />
    </>
  );
}
