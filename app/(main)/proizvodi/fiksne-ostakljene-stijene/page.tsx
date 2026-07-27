import { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import ProductCard from "@/components/ui/ProductCard";
import CTA from "@/components/sections/CTA";
import Reveal from "@/components/site/Reveal";
import SectionRule from "@/components/site/SectionRule";
import { display, eyebrow, hairline, mono } from "@/components/site/tokens";
import { getCategoryBySlug, getProductsByCategory } from "@/lib/products";

const category = getCategoryBySlug("fiksne-ostakljene-stijene")!;
const products = getProductsByCategory("fiksne-ostakljene-stijene");

export const metadata: Metadata = {
  title: `${category.name} | FSB Doors`,
  description: category.description,
};

export default function GlazedPartitionsPage() {
  return (
    <>
      {/* Uvodni list kategorije */}
      <section className="bg-dark py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <Reveal className="lg:col-span-7">
              <p className={eyebrow}>List P—04 / Fiksne ostakljene stijene</p>
              <h1
                className={`${display} mt-4 text-4xl font-semibold uppercase leading-none md:text-5xl lg:text-6xl`}
              >
                {category.name}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-gray">
                {category.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
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
              </div>
            </Reveal>

            <Reveal delay={0.08} className="lg:col-span-4 lg:col-start-9">
              <figure>
                <div className={`relative aspect-[4/3] overflow-hidden border ${hairline}`}>
                  <Image
                    src={category.image}
                    alt={category.name}
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
                  Kategorija proizvoda / {products.length} proizvoda
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Dostupni proizvodi */}
      <section className="py-20 lg:py-28">
        <Container>
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 pb-10 lg:pb-14">
              <div>
                <p className={eyebrow}>Indeks / {category.name}</p>
                <h2
                  className={`${display} mt-4 text-4xl font-semibold uppercase leading-none md:text-5xl`}
                >
                  Dostupni proizvodi
                </h2>
              </div>
              <p className={`${mono} text-[11px] uppercase tracking-[0.22em] text-gray`}>
                {products.length} proizvoda u ovoj kategoriji
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {products.map((product, i) => (
              <Reveal key={product.slug} delay={i * 0.08}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <SectionRule code="P—P / 04" />

      {/* Zašto fiksne ostakljene stijene */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className={eyebrow}>Obrazloženje / Stijene</p>
              <h2
                className={`${display} mt-4 text-4xl font-semibold uppercase leading-none md:text-5xl`}
              >
                Zašto odabrati fiksne ostakljene stijene?
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-gray">
                Fiksne ostakljene stijene idealne su za stvaranje protupožarnih zona uz
                održavanje vizualne povezanosti prostora. Modularni sustav omogućuje
                prilagodbu raznim konfiguracijama i dimenzijama.
              </p>
              <ul className={`mt-10 border-b ${hairline}`}>
                {[
                  "Visina do 4 metra",
                  "Modularni sustav za fleksibilnost",
                  "Kombinacija s vratima",
                  "Minimalni profili za maksimalnu transparentnost",
                  "Zidna ili stropna montaža",
                  "Idealne za atrije i otvorene prostore",
                ].map((item, i) => (
                  <li
                    key={item}
                    className={`flex items-baseline gap-4 border-t ${hairline} py-3.5`}
                  >
                    <span className={`${mono} text-[11px] tracking-[0.2em] text-gray`}>
                      S.{i + 1}
                    </span>
                    <span className="text-sm leading-relaxed text-foreground md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.08}>
              <figure>
                <div className={`relative aspect-square overflow-hidden border ${hairline}`}>
                  <Image
                    src="/images/foto/ugradnja-atrij-radnici.webp"
                    alt="Ugradnja fiksnih ostakljenih stijena u atriju"
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
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
                  Ugradnja ostakljenih stijena / atrij
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </Container>
      </section>

      <CTA
        title="Trebate protupožarne staklene stijene?"
        subtitle="Kontaktirajte nas za besplatno savjetovanje i izradu ponude prilagođene vašim potrebama."
      />
    </>
  );
}
