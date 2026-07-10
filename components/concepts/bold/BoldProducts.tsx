import Image from "next/image";
import Link from "next/link";
import { productCategories } from "@/lib/products";

/**
 * Četiri pune trake u izmjeni svijetlo/tamno — svaka kategorija je vlastiti
 * blok s duotone fotografijom (sivo + bordo preko multiply) i EI rasponom
 * ispisanim u konturi u mjerilu bloka. Bez kartica, bez radijusa.
 */
export default function BoldProducts() {
  return (
    <section id="proizvodi" aria-labelledby="proizvodi-naslov" className="scroll-mt-16">
      <h2 id="proizvodi-naslov" className="sr-only">
        Proizvodi
      </h2>

      {productCategories.map((category, i) => {
        const darkBand = i % 2 === 1;
        const eiRange = category.features[0].replace(" - ", "–");

        return (
          <article
            key={category.slug}
            className={darkBand ? "bg-dark text-light" : "bg-light text-dark"}
          >
            <div className="grid gap-10 px-5 py-16 md:grid-cols-12 md:gap-12 md:px-8 md:py-24">
              {/* Tekstualni blok */}
              <div
                className={`flex flex-col justify-between md:col-span-7 ${
                  darkBand ? "md:order-2" : ""
                }`}
              >
                <div>
                  <p
                    className={`text-[11px] uppercase tracking-[0.25em] [font-family:var(--font-mono-blok)] ${
                      darkBand ? "text-light/60" : "text-dark/60"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")} / 04 — kategorija
                  </p>
                  <h3 className="mt-4 uppercase leading-[0.9] [font-family:var(--font-display)] text-[clamp(2.5rem,7vw,6.5rem)]">
                    {category.name}
                  </h3>
                  <p
                    aria-label={`Klase otpornosti ${eiRange}`}
                    className={`mt-2 uppercase leading-none text-transparent [font-family:var(--font-display)] text-[clamp(3rem,9vw,8.5rem)] ${
                      darkBand
                        ? "[-webkit-text-stroke:2px_#f5f1ec]"
                        : "[-webkit-text-stroke:2px_var(--primary)]"
                    }`}
                  >
                    {eiRange}
                  </p>
                  <p
                    className={`mt-6 max-w-xl text-sm leading-relaxed sm:text-base ${
                      darkBand ? "text-light/80" : "text-dark/75"
                    }`}
                  >
                    {category.description}
                  </p>
                </div>

                <div className="mt-10">
                  <ul
                    className={`flex flex-wrap gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.15em] [font-family:var(--font-mono-blok)] ${
                      darkBand ? "text-light/70" : "text-dark/70"
                    }`}
                  >
                    {category.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <span
                          aria-hidden="true"
                          className="size-1.5 bg-accent"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/proizvodi/${category.slug}`}
                    className={`mt-8 inline-flex items-center gap-3 px-7 py-4 text-sm font-bold uppercase tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${
                      darkBand
                        ? "bg-light text-dark hover:bg-white focus-visible:outline-light"
                        : "bg-dark text-light hover:bg-primary-dark focus-visible:outline-dark"
                    }`}
                  >
                    Pogledaj kategoriju
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>

              {/* Duotone fotografija kao ploča */}
              <div
                className={`relative aspect-[4/5] max-h-[560px] w-full overflow-hidden bg-primary md:col-span-5 ${
                  darkBand ? "md:order-1 md:self-start" : "md:self-end"
                }`}
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover opacity-90 grayscale contrast-110 mix-blend-multiply"
                />
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
