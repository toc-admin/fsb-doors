import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import { container, display, eyebrow, hairline, mono } from "@/components/site/tokens";
import { PROJECT_CATEGORIES } from "@/lib/projects";

interface SectorGridProps {
  showHeading?: boolean;
}

// Sektori kao numerirani indeks (isti raster kao popis sektora u site/Projects)
// uz jednu dokumentarnu fotografiju umjesto bento kartica.
export default function SectorGrid({ showHeading = true }: SectorGridProps) {
  return (
    <section aria-labelledby="sektori-naslov" className="py-20 lg:py-28">
      <div className={container}>
        {showHeading && (
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 pb-12 lg:pb-16">
              <div>
                <p className={eyebrow}>List S—01 / Projekti po sektorima</p>
                <h2
                  id="sektori-naslov"
                  className={`${display} mt-4 max-w-2xl text-4xl font-semibold uppercase leading-none md:text-5xl lg:text-6xl`}
                >
                  Rješenja za svaki prostor
                </h2>
              </div>
              <p className={`${mono} max-w-[260px] text-[11px] uppercase leading-relaxed tracking-[0.22em] text-gray`}>
                Od bolnica i hotela do industrije i tunela
              </p>
            </div>
          </Reveal>
        )}

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Indeks sektora */}
          <Reveal className="lg:col-span-6">
            <p className={`${mono} pb-4 text-[11px] uppercase tracking-[0.24em] text-gray`}>
              Sektori primjene — {PROJECT_CATEGORIES.length}
            </p>
            <ul className={`border-b ${hairline}`}>
              {PROJECT_CATEGORIES.map((category, i) => (
                <li key={category.slug}>
                  <Link
                    href={`/projekti?kategorija=${category.slug}`}
                    className={`group flex items-baseline gap-5 border-t ${hairline} py-4 transition-colors hover:bg-light`}
                  >
                    <span className={`${mono} text-[11px] tracking-[0.16em] text-gray`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`${display} flex-1 text-xl font-medium uppercase leading-tight text-foreground md:text-2xl`}
                    >
                      {category.name}
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
            <Link
              href="/projekti"
              className={`${mono} mt-6 inline-block text-[11px] uppercase tracking-[0.18em] text-gray underline-offset-4 transition-colors hover:text-foreground hover:underline`}
            >
              Svi projekti →
            </Link>
          </Reveal>

          {/* Dokumentarna fotografija */}
          <Reveal delay={0.08} className="lg:col-span-6">
            <figure>
              <div className={`relative aspect-[4/3] overflow-hidden border ${hairline} lg:aspect-[4/5]`}>
                <Image
                  src="/images/foto/dron-moderna-zgrada.webp"
                  alt="Moderna zgrada iz zraka — sektori primjene FSB rješenja"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover grayscale contrast-[1.05] brightness-[0.85]"
                />
                <span aria-hidden className="absolute inset-0 bg-primary/25 mix-blend-multiply" />
              </div>
              <figcaption
                className={`${mono} mt-3 flex items-baseline gap-3 text-[10px] uppercase tracking-[0.2em] text-gray`}
              >
                <span className="text-primary">F.1</span>
                Objekti u prostoru — pregled sektora primjene
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
