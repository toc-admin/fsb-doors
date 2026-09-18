import { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/sections/CTA";
import Reveal from "@/components/site/Reveal";
import SectionRule from "@/components/site/SectionRule";
import { container, display, eyebrow, hairline, mono } from "@/components/site/tokens";
import {
  PROJECT_CATEGORIES,
  getCategoryBySlug,
  getProjectBySlug,
  getReferencesByCategory,
  type Reference,
} from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projekti | FSB Doors",
  description: "Referentni projekti protupožarne zaštite prema područjima primjene - zdravstvo, obrazovanje, hoteli, industrija, javni i trgovački objekti, stambene i poslovne zgrade te prometna infrastruktura.",
};

// Red registra: reference s detaljnim dosjeom vode na svoju stranicu.
function ReferenceRow({ reference, index }: { reference: Reference; index: number }) {
  const detail = reference.projectSlug ? getProjectBySlug(reference.projectSlug) : undefined;
  const content = (
    <>
      <span className={`${mono} text-[11px] tracking-[0.16em] text-gray`}>
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="flex-1 text-sm text-foreground md:text-base">{reference.name}</span>
      {reference.location && (
        <span className={`${mono} text-[11px] uppercase tracking-[0.16em] text-gray`}>
          {reference.location}
        </span>
      )}
      {detail && (
        <span
          aria-hidden="true"
          className={`${mono} text-sm text-gray transition-transform duration-300 group-hover:translate-x-1 group-hover:text-foreground`}
        >
          →
        </span>
      )}
    </>
  );

  if (detail) {
    return (
      <Link
        href={`/projekti/${detail.slug}`}
        className={`group flex items-baseline gap-5 border-t ${hairline} py-4 transition-colors hover:bg-light`}
      >
        {content}
      </Link>
    );
  }

  return <div className={`flex items-baseline gap-5 border-t ${hairline} py-4`}>{content}</div>;
}

export default async function ProjectsPage(props: PageProps<"/projekti">) {
  const { kategorija } = await props.searchParams;
  const activeCategory = getCategoryBySlug(
    Array.isArray(kategorija) ? kategorija[0] : kategorija ?? ""
  );
  const categoriesToShow = activeCategory ? [activeCategory] : PROJECT_CATEGORIES;

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
                : "Referentni projekti prema područjima primjene. Od bolnica i škola do trgovačkih centara i tunela - naša vrata štite objekte diljem Hrvatske."}
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

      {/* Registar referenci po područjima primjene */}
      <section className="py-16 lg:py-24">
        <div className={container}>
          <div className="space-y-16 lg:space-y-20">
            {categoriesToShow.map((category, ci) => {
              const references = getReferencesByCategory(category.slug);
              return (
                <div key={category.slug}>
                  {!activeCategory && (
                    <Reveal>
                      <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
                        <span className={`${mono} text-[11px] tracking-[0.2em] text-gray`}>
                          {String(ci + 1).padStart(2, "0")}
                        </span>
                        <h2
                          className={`${display} text-2xl font-medium uppercase leading-tight md:text-3xl`}
                        >
                          {category.name}
                        </h2>
                      </div>
                      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray md:text-base">
                        {category.description}
                      </p>
                    </Reveal>
                  )}

                  {references.length > 0 ? (
                    <Reveal selector="li" stagger={0.05}>
                      <ul className={`mt-6 border-b ${hairline}`}>
                        {references.map((reference, i) => (
                          <li key={reference.name}>
                            <ReferenceRow reference={reference} index={i} />
                          </li>
                        ))}
                      </ul>
                    </Reveal>
                  ) : (
                    <Reveal>
                      <p
                        className={`${mono} mt-6 border-t ${hairline} pt-5 text-[11px] uppercase tracking-[0.2em] text-gray`}
                      >
                        Reference iz ovog područja primjene uskoro objavljujemo
                      </p>
                    </Reveal>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SectionRule code="PR—PR / 02" />

      <CTA
        title="Imate projekt na umu?"
        subtitle="Kontaktirajte nas za besplatno savjetovanje i ponudu prilagođenu vašim potrebama."
      />
    </>
  );
}
