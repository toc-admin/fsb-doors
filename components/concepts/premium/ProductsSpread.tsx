import Image from "next/image";
import Link from "next/link";
import { productCategories, getProductsByCategory } from "@/lib/products";
import Folio from "./Folio";
import Reveal from "./Reveal";
import { serif, caps, container, hairline, focusRing, photo } from "./tokens";

// Raspon klasa otpornosti izveden iz stvarnih proizvoda kategorije.
const EI_ORDER = ["EI30", "EI60", "EI90", "EI120"];

function eiRange(categorySlug: string): string {
  const ratings = new Set(
    getProductsByCategory(categorySlug).flatMap((p) => p.fireRating)
  );
  const present = EI_ORDER.filter((r) => ratings.has(r));
  if (present.length === 0) return "";
  if (present.length === 1) return present[0];
  return `${present[0]} – ${present[present.length - 1]}`;
}

// Potpisi fotografija — izvedeni iz opisa kategorija, slog revije.
const CAPTIONS: Record<string, string> = {
  "celicna-vrata":
    "Čelična protupožarna vrata za industrijske i komercijalne objekte",
  "ostakljena-vrata":
    "Ostakljena vrata — sigurnost i estetika poslovnih prostora",
  "fiksne-ostakljene-stijene":
    "Staklene pregrade uz očuvano prirodno svjetlo",
  "revizijska-vrata":
    "Pristup tehničkim instalacijama bez narušavanja zaštite",
};

// Arak proizvoda: četiri uređivačke cjeline u izmjeničnim, asimetričnim
// kompozicijama slike i teksta — bez uniformne mreže kartica.
export default function ProductsSpread() {
  return (
    <section
      id="proizvodi"
      aria-labelledby="proizvodi-naslov"
      className={`${container} scroll-mt-10`}
    >
      <Folio page="02" label="Proizvodni program" />

      <h2
        id="proizvodi-naslov"
        className={`${serif} mt-10 max-w-3xl text-[clamp(2rem,4.5vw,3.25rem)] font-light leading-[1.1] text-foreground`}
      >
        Četiri obitelji proizvoda, jedna mjera — vaša.
      </h2>

      <div className="mt-14 space-y-20 md:mt-20 md:space-y-28">
        {productCategories.map((category, index) => {
          const imageLeft = index % 2 === 0;
          return (
            <Reveal key={category.slug}>
              <article className="grid items-end gap-x-10 gap-y-8 md:grid-cols-12">
                <figure
                  data-reveal-img
                  className={
                    imageLeft
                      ? "md:col-span-7"
                      : "md:col-span-7 md:col-start-6 md:row-start-1"
                  }
                >
                  <div
                    className={`relative overflow-hidden ${
                      imageLeft ? "aspect-[4/3]" : "aspect-[5/4]"
                    }`}
                  >
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      sizes="(min-width: 768px) 58vw, 100vw"
                      className={`object-cover ${photo}`}
                    />
                  </div>
                  <figcaption className={`${caps} mt-3 text-accent`}>
                    {CAPTIONS[category.slug] ?? category.name}
                  </figcaption>
                </figure>

                <div
                  data-reveal
                  className={
                    imageLeft
                      ? "md:col-span-5 md:pb-8"
                      : "md:col-span-5 md:row-start-1 md:pb-8"
                  }
                >
                  <h3
                    className={`${serif} text-[clamp(1.6rem,3vw,2.25rem)] font-normal leading-tight text-foreground`}
                  >
                    {category.name}
                  </h3>
                  <p className="mt-4 leading-relaxed text-gray">
                    {category.description}
                  </p>
                  <p className={`${caps} mt-6 text-foreground`}>
                    <span className="text-accent">Klase otpornosti</span> ·{" "}
                    {eiRange(category.slug)}
                  </p>
                  <p className="mt-7">
                    <Link
                      href={`/proizvodi/${category.slug}`}
                      className={`${caps} inline-flex items-baseline gap-2 border-b pb-1.5 text-foreground transition-colors hover:border-primary hover:text-primary ${hairline} ${focusRing}`}
                    >
                      Pogledajte proizvode
                      <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
