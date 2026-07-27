import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import SectionRule from "@/components/site/SectionRule";
import { container, display, eyebrow, hairline, mono } from "@/components/site/tokens";
import { Project, getCategoryName } from "@/lib/projects";
import { products } from "@/lib/products";

interface ProjectDetailProps {
  project: Project;
}

// Projekt kao dosje: mono tablica činjenica, dokumentarne fotografije u boji
// i popis ugrađenih proizvoda kao indeks-redovi.
export default function ProjectDetail({ project }: ProjectDetailProps) {
  // Podaci o proizvodima ugrađenima na projektu
  const projectProducts = project.products
    .map((slug) => products.find((p) => p.slug === slug))
    .filter(Boolean);

  return (
    <>
      {/* Zaglavlje dosjea */}
      <section className="pt-12 md:pt-16">
        <div className={container}>
          <Reveal>
            {/* Krušne mrvice */}
            <nav
              aria-label="Navigacijski put"
              className={`${mono} flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-gray`}
            >
              <Link href="/projekti" className="transition-colors hover:text-foreground">
                Projekti
              </Link>
              <span aria-hidden>/</span>
              <Link
                href={`/projekti?kategorija=${project.category}`}
                className="transition-colors hover:text-foreground"
              >
                {getCategoryName(project.category)}
              </Link>
            </nav>

            <p className={`${eyebrow} mt-8`}>
              Dosje PR—{project.year} / {getCategoryName(project.category)}
            </p>
            <h1
              className={`${display} mt-4 max-w-4xl text-4xl font-semibold uppercase leading-none md:text-5xl lg:text-6xl`}
            >
              {project.title}
            </h1>
          </Reveal>

          <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-8">
            {/* Dokumentarna snimka — puna boja kao dokaz izvedbe */}
            <Reveal className="lg:col-span-8">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </Reveal>

            {/* Tablica činjenica */}
            <Reveal delay={0.08} className="lg:col-span-4">
              <p className={`${mono} pb-2 text-[11px] uppercase tracking-[0.24em] text-gray`}>
                Podaci o projektu
              </p>
              <dl className={`border-t ${hairline}`}>
                {[
                  { dt: "Klijent", dd: project.client },
                  { dt: "Lokacija", dd: project.location },
                  { dt: "Godina", dd: project.year },
                  { dt: "Kategorija", dd: getCategoryName(project.category) },
                ].map((row) => (
                  <div
                    key={row.dt}
                    className={`flex items-baseline justify-between gap-6 border-b ${hairline} py-4`}
                  >
                    <dt className={`${mono} text-[10px] uppercase tracking-[0.24em] text-gray`}>
                      {row.dt}
                    </dt>
                    <dd className={`${mono} text-right text-sm text-foreground`}>
                      {row.dd}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Opis i ugrađeni proizvodi */}
      <section className="py-16 lg:py-24">
        <div className={container}>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
            <Reveal className="lg:col-span-7">
              <p className={`${mono} pb-4 text-[11px] uppercase tracking-[0.24em] text-gray`}>
                O projektu
              </p>
              <h2
                className={`${display} text-2xl font-medium uppercase leading-tight md:text-3xl`}
              >
                Opis izvedbe
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray md:text-lg">
                {project.description}
              </p>
            </Reveal>

            {projectProducts.length > 0 && (
              <Reveal delay={0.08} className="lg:col-span-4 lg:col-start-9">
                <p className={`${mono} pb-4 text-[11px] uppercase tracking-[0.24em] text-gray`}>
                  Ugrađeni proizvodi
                </p>
                <ul className={`border-b ${hairline}`}>
                  {projectProducts.map((product, i) => (
                    <li key={product!.slug}>
                      <Link
                        href={`/proizvodi/${product!.categorySlug}/${product!.slug}`}
                        className={`group flex items-baseline gap-4 border-t ${hairline} py-4 transition-colors hover:bg-light`}
                      >
                        <span className={`${mono} text-[11px] tracking-[0.16em] text-gray`}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm text-foreground">
                            {product!.name}
                          </span>
                          <span
                            className={`${mono} mt-1 block text-[10px] uppercase tracking-[0.18em] text-gray`}
                          >
                            {product!.category}
                          </span>
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
            )}
          </div>
        </div>
      </section>

      {/* Galerija — dokumentarne snimke u boji */}
      {project.gallery.length > 1 && (
        <section className="bg-light py-16 lg:py-24">
          <div className={container}>
            <Reveal>
              <div className="flex flex-wrap items-baseline justify-between gap-4 pb-8">
                <h2
                  className={`${display} text-2xl font-medium uppercase leading-tight md:text-3xl`}
                >
                  Galerija projekta
                </h2>
                <p className={`${mono} text-[11px] uppercase tracking-[0.24em] text-gray`}>
                  {String(project.gallery.length).padStart(2, "0")} snimki
                </p>
              </div>
            </Reveal>
            <div className="grid gap-5 md:grid-cols-2">
              {project.gallery.map((img, index) => (
                <Reveal key={index} delay={(index % 2) * 0.08}>
                  <figure className={`border ${hairline}`}>
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={img}
                        alt={`${project.title} - slika ${index + 1}`}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption
                      className={`${mono} flex items-baseline justify-between gap-4 px-4 py-3 text-[10px] uppercase tracking-[0.2em] text-gray`}
                    >
                      <span>Snimka {String(index + 1).padStart(2, "0")}</span>
                      <span>{project.location}</span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="pt-16 lg:pt-24">
        <SectionRule code="PR—PR / 03" />
      </div>

      {/* Poziv — sličan projekt */}
      <section className="py-16 lg:py-24">
        <div className={container}>
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-8">
                <p className={eyebrow}>List PR—02 / Ponuda</p>
                <h2
                  className={`${display} mt-4 max-w-2xl text-4xl font-semibold uppercase leading-none md:text-5xl`}
                >
                  Imate sličan projekt?
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-gray">
                  Kontaktirajte nas za besplatno savjetovanje i ponudu prilagođenu
                  vašim potrebama.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="/kontakt"
                    className={`${mono} bg-primary px-6 py-3.5 text-[13px] font-medium uppercase tracking-[0.16em] text-[#f5f0ea] transition-colors hover:bg-[#9e1b33]`}
                  >
                    Kontaktirajte nas
                  </Link>
                  <Link
                    href="/projekti"
                    className={`${mono} border ${hairline} px-6 py-3.5 text-[13px] uppercase tracking-[0.16em] text-foreground transition-colors hover:border-[#8a8f98]`}
                  >
                    ← Svi projekti
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
