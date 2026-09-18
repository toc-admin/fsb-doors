import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import CTA from "@/components/sections/CTA";
import Reveal from "@/components/site/Reveal";
import SectionRule from "@/components/site/SectionRule";
import { display, eyebrow, hairline, mono } from "@/components/site/tokens";
import { productCategories, products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Proizvodi | FSB Doors",
  description: "Širok asortiman certificiranih požarnih vrata - čelična vrata, aluminijska vrata, aluminijski prozori, fiksne ostakljene stijene i revizijska vrata.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Uvodni list — kataloško zaglavlje */}
      <section className="bg-dark py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <Reveal className="lg:col-span-7">
              <p className={eyebrow}>List P—01 / Proizvodi</p>
              <h1
                className={`${display} mt-4 text-4xl font-semibold uppercase leading-none md:text-5xl lg:text-6xl`}
              >
                Naši proizvodi
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-gray">
                Nudimo širok asortiman certificiranih požarnih vrata za sve
                vrste objekata i namjena. Svi naši proizvodi ispunjavaju
                najstrože europske standarde.
              </p>
              <div className={`mt-9 flex flex-wrap gap-x-8 gap-y-3 border-t ${hairline} pt-5`}>
                <span className={`${mono} text-[11px] uppercase tracking-[0.22em] text-gray`}>
                  {productCategories.length} kategorija
                </span>
                <span className={`${mono} text-[11px] uppercase tracking-[0.22em] text-gray`}>
                  {products.length}+ proizvoda
                </span>
                <span className={`${mono} text-[11px] uppercase tracking-[0.22em] text-gray`}>
                  Izrada po mjeri
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="lg:col-span-4 lg:col-start-9">
              <figure>
                <div className={`relative aspect-[4/3] overflow-hidden border ${hairline}`}>
                  <Image
                    src="/images/foto/celicna-vrata-katalog-1.webp"
                    alt="Čelična požarna vrata iz proizvodnog programa"
                    fill
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className="object-cover grayscale contrast-[1.05] brightness-[0.85]"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-primary/25 mix-blend-multiply"
                  />
                </div>
                <figcaption
                  className={`${mono} mt-3 text-[10px] uppercase leading-relaxed tracking-[0.2em] text-gray`}
                >
                  Katalog / čelična požarna vrata
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Indeks kategorija — numerirani redovi kataloškog lista */}
      <section className="py-20 lg:py-28">
        <Container>
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 pb-10 lg:pb-14">
              <div>
                <p className={eyebrow}>Indeks / Kategorije</p>
                <h2
                  className={`${display} mt-4 text-4xl font-semibold uppercase leading-none md:text-5xl lg:text-6xl`}
                >
                  Kategorije proizvoda
                </h2>
              </div>
              <p className={`${mono} text-[11px] uppercase tracking-[0.22em] text-gray`}>
                Odaberite kategoriju za pregled proizvoda
              </p>
            </div>
          </Reveal>

          <Reveal>
            <ul className={`border-b ${hairline}`}>
              {productCategories.map((category, index) => {
                const categoryProducts = products.filter(
                  (p) => p.categorySlug === category.slug
                );

                return (
                  <li key={category.slug}>
                    <Link
                      href={`/proizvodi/${category.slug}`}
                      className={`group grid grid-cols-12 items-center gap-x-4 gap-y-3 border-t ${hairline} py-6 transition-colors hover:bg-light md:py-7`}
                    >
                      <span className={`${mono} col-span-2 text-sm text-gray md:col-span-1`}>
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="relative col-span-10 hidden aspect-[4/3] overflow-hidden md:col-span-2 md:block">
                        <Image
                          src={category.image}
                          alt={category.name}
                          fill
                          sizes="220px"
                          className="object-cover grayscale contrast-[1.05] brightness-[0.85] transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 bg-primary/25 mix-blend-multiply"
                        />
                      </span>

                      <span className="col-span-10 md:col-span-5 md:pl-2 lg:pl-6">
                        <span
                          className={`${display} block text-2xl font-medium uppercase leading-tight md:text-3xl`}
                        >
                          {category.name}
                        </span>
                        <span className="mt-2 block max-w-lg text-sm leading-relaxed text-gray">
                          {category.description}
                        </span>
                        <span
                          className={`${mono} mt-3 block text-[10px] uppercase tracking-[0.2em] text-gray`}
                        >
                          {categoryProducts.length} proizvoda
                        </span>
                      </span>

                      <span className="col-span-10 col-start-3 flex flex-wrap content-center gap-2 md:col-span-3 md:col-start-auto md:justify-end">
                        {category.features.map((feature) => (
                          <span
                            key={feature}
                            className={`${mono} border px-2.5 py-1.5 text-[11px] tracking-[0.08em] ${
                              feature.startsWith("EI")
                                ? "border-[#b3223d66] text-primary"
                                : `${hairline} text-gray`
                            }`}
                          >
                            {feature}
                          </span>
                        ))}
                      </span>

                      <span
                        aria-hidden="true"
                        className={`${mono} col-span-12 hidden text-right text-lg text-gray transition-transform duration-300 group-hover:translate-x-1 group-hover:text-foreground md:col-span-1 md:block`}
                      >
                        →
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </Container>
      </section>

      <SectionRule code="P—P / 02" />

      {/* Zašto FSB Doors — tehničke prednosti */}
      <section className="py-20 lg:py-28">
        <Container>
          <Reveal>
            <p className={eyebrow}>Prednosti / FSB Doors</p>
            <h2
              className={`${display} mt-4 text-4xl font-semibold uppercase leading-none md:text-5xl`}
            >
              Zašto odabrati FSB Doors?
            </h2>
          </Reveal>

          <div className={`mt-12 grid border-t border-l ${hairline} sm:grid-cols-2 lg:grid-cols-4`}>
            {[
              {
                title: "Certificirano",
                description: "EN 1634-1, CE oznaka",
              },
              {
                title: "Po mjeri",
                description: "Prilagođene dimenzije",
              },
              {
                title: "Ugradnja",
                description: "Profesionalni tehničari",
              },
              {
                title: "Jamstvo",
                description: "Višegodišnje jamstvo",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <div className={`h-full border-b border-r ${hairline} p-6 lg:p-8`}>
                  <span className={`${mono} text-[11px] tracking-[0.2em] text-primary`}>
                    0{index + 1}
                  </span>
                  <h3
                    className={`${display} mt-5 text-2xl font-medium uppercase leading-tight text-foreground`}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTA
        title="Trebate pomoć pri odabiru?"
        subtitle="Naši stručnjaci pomoći će vam odabrati optimalno rješenje za vaše potrebe. Kontaktirajte nas za besplatno savjetovanje."
      />
    </>
  );
}
