import Link from "next/link";
import { productCategories, getProductsByCategory } from "@/lib/products";
import ChapterTab from "./ChapterTab";
import DoorPictogram, { type PictogramVariant } from "./DoorPictogram";
import Reveal from "./Reveal";
import { display, mono, hairline, container } from "./tokens";

const PICTOGRAM: Record<string, PictogramVariant> = {
  "celicna-vrata": "single",
  "ostakljena-vrata": "glazed",
  "fiksne-ostakljene-stijene": "wall",
  "revizijska-vrata": "panel",
};

const EI_ORDER = ["EI30", "EI60", "EI90", "EI120"];

// Raspon klasa otpornosti izveden iz stvarnih proizvoda kategorije.
function eiRange(slugs: string[]): string {
  const present = EI_ORDER.filter((r) => slugs.includes(r));
  if (present.length === 0) return "";
  if (present.length === 1) return present[0];
  return `${present[0]}–${present[present.length - 1]}`;
}

function SpecRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`flex gap-4 border-t py-2.5 ${hairline}`}>
      <dt
        className={`${mono} w-24 shrink-0 pt-0.5 text-[11px] uppercase tracking-[0.08em] text-gray sm:w-32`}
      >
        {label}
      </dt>
      <dd className="min-w-0">{children}</dd>
    </div>
  );
}

export default function ProductsChapter() {
  return (
    <section id="proizvodi" className="scroll-mt-28">
      <div className={`${container} pb-20 md:pb-28`}>
        <ChapterTab
          number="02"
          title="Proizvodi"
          tag="FSD / FGD / FGW / FAD · EN 1634-1"
        />

        <Reveal className="mt-10 md:mt-14">
          {productCategories.map((category, index) => {
            const items = getProductsByCategory(category.slug);
            const codes = items.map((p) => p.name.split(" ")[0]);
            const range = eiRange(items.flatMap((p) => p.fireRating));
            const traits = category.features.filter(
              (f) => !f.startsWith("EI")
            );

            return (
              <article
                key={category.slug}
                data-reveal
                className={`grid gap-6 border-t py-10 md:grid-cols-12 md:gap-8 md:py-12 ${hairline}`}
              >
                {/* Indeks stavke + piktogram */}
                <div className="flex items-start justify-between md:col-span-2 md:block">
                  <span
                    className={`${mono} text-xs font-medium text-primary`}
                  >
                    02.{index + 1}
                  </span>
                  <DoorPictogram
                    variant={PICTOGRAM[category.slug] ?? "single"}
                    className="h-14 w-14 text-foreground md:mt-5 md:h-16 md:w-16"
                  />
                </div>

                <div className="md:col-span-5 lg:col-span-4">
                  <h3
                    className={`${display} text-2xl font-bold tracking-[-0.01em] md:text-3xl`}
                  >
                    {category.name}
                  </h3>
                  <p className="mt-3 max-w-prose text-sm leading-relaxed text-gray">
                    {category.description}
                  </p>
                  <Link
                    href={`/proizvodi/${category.slug}`}
                    className={`${mono} mt-5 inline-block text-xs uppercase tracking-[0.12em] text-foreground underline decoration-[rgba(19,19,19,0.3)] underline-offset-4 transition-colors hover:text-primary hover:decoration-current`}
                  >
                    Specifikacije serije&nbsp;&rarr;
                  </Link>
                </div>

                {/* Tablični sažetak specifikacija */}
                <dl className="md:col-span-5 lg:col-span-6">
                  <SpecRow label="Klasa">
                    <span
                      className={`${mono} text-base font-medium text-accent md:text-lg`}
                    >
                      {range}
                    </span>
                  </SpecRow>
                  <SpecRow label="Oznake">
                    <span className={`${mono} text-sm`}>
                      {codes.join(" · ")}
                    </span>
                  </SpecRow>
                  <SpecRow label="Izvedba">
                    <span className="text-sm text-foreground">
                      {traits.join(" · ")}
                    </span>
                  </SpecRow>
                  <SpecRow label="Certifikat">
                    <span className={`${mono} text-sm`}>
                      EN 1634-1 · CE oznaka
                    </span>
                  </SpecRow>
                </dl>
              </article>
            );
          })}
        </Reveal>

        <p className={`${mono} border-t pt-4 text-[11px] text-gray ${hairline}`}>
          Sve serije izrađuju se po mjeri prema izmjeri na lokaciji — dimenzije
          i izvedbe prema tehničkim shemama projekta.
        </p>
      </div>
    </section>
  );
}
