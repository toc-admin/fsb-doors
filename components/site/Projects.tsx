import Link from "next/link";
import {
  PROJECT_CATEGORIES,
  REFERENCES,
  getCategoryName,
} from "@/lib/projects";
import Reveal from "./Reveal";
import { container, display, eyebrow, hairline, mono } from "./tokens";

// Presjek stvarnih referenci kroz različita područja primjene.
const FEATURED_REFERENCE_NAMES = [
  "Tunel Plasina",
  "KBC Osijek",
  "Supernova Varaždin",
  "Nadbiskupski dvor",
  "RHE Velebit",
];

// Područja primjene kao indeks + izdvojene reference kao dosje-redovi.
export default function Projects() {
  const featured = FEATURED_REFERENCE_NAMES.map((name) =>
    REFERENCES.find((reference) => reference.name === name)
  ).filter((reference) => reference !== undefined);

  return (
    <section
      id="projekti"
      aria-labelledby="projekti-naslov"
      className="scroll-mt-24 py-20 lg:py-28"
    >
      <div className={container}>
        <Reveal>
          <div className="pb-12 lg:pb-16">
            <p className={eyebrow}>List 06 / Referentni projekti</p>
            <h2
              id="projekti-naslov"
              className={`${display} mt-4 max-w-3xl text-4xl font-semibold uppercase leading-none md:text-5xl lg:text-6xl`}
            >
              Jedna sigurnost. Brojne primjene
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray">
              Naša požarna vrata primjenjuju se u različitim područjima — od
              stambenih i poslovnih objekata do industrije, zdravstva,
              hotelijerstva i javnih prostora.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          {/* Indeks područja primjene */}
          <Reveal className="lg:col-span-5" selector="li" stagger={0.06}>
            <p className={`${mono} pb-4 text-[11px] uppercase tracking-[0.24em] text-gray`}>
              Područja primjene
            </p>
            <ul className={`border-b ${hairline}`}>
              {PROJECT_CATEGORIES.map((cat, i) => (
                <li key={cat.slug}>
                  <Link
                    href={`/projekti?kategorija=${cat.slug}`}
                    className={`group flex items-baseline gap-5 border-t ${hairline} py-3.5 transition-colors hover:bg-light`}
                  >
                    <span className={`${mono} text-[11px] tracking-[0.16em] text-gray`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-sm text-foreground md:text-base">
                      {cat.name}
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

          {/* Izdvojeni projekti — dosje-redovi */}
          <Reveal className="lg:col-span-7" selector="li" stagger={0.1}>
            <div className="flex items-baseline justify-between gap-4 pb-4">
              <p className={`${mono} text-[11px] uppercase tracking-[0.24em] text-gray`}>
                Izdvojene reference
              </p>
              <Link
                href="/projekti"
                className={`${mono} text-[11px] uppercase tracking-[0.18em] text-gray underline-offset-4 transition-colors hover:text-foreground hover:underline`}
              >
                Svi projekti →
              </Link>
            </div>
            <ul className={`border-b ${hairline}`}>
              {featured.map((reference, i) => {
                const row = (
                  <>
                    <div className={`${mono} flex flex-wrap items-baseline gap-x-4 gap-y-1 text-[11px] tracking-[0.16em] text-gray`}>
                      <span>{String(i + 1).padStart(2, "0")}</span>
                      {reference.location && <span>{reference.location}</span>}
                      <span className="ml-auto uppercase">
                        {getCategoryName(reference.category)}
                      </span>
                    </div>
                    <div className="mt-3 flex items-center justify-between gap-5">
                      <h3
                        className={`${display} flex-1 text-2xl font-medium uppercase leading-tight md:text-3xl`}
                      >
                        {reference.name}
                      </h3>
                      {reference.projectSlug && (
                        <span
                          aria-hidden="true"
                          className={`${mono} text-lg text-gray transition-transform duration-300 group-hover:translate-x-1 group-hover:text-foreground`}
                        >
                          →
                        </span>
                      )}
                    </div>
                  </>
                );

                return (
                  <li key={reference.name}>
                    {reference.projectSlug ? (
                      <Link
                        href={`/projekti/${reference.projectSlug}`}
                        className={`group block border-t ${hairline} py-5 transition-colors hover:bg-light md:py-6`}
                      >
                        {row}
                      </Link>
                    ) : (
                      <div className={`border-t ${hairline} py-5 md:py-6`}>{row}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
