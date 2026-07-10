import { RND_CERTIFICATION } from "@/lib/site-content";

/**
 * Ključni diferencijator klijenta — puni bordo blok. Nazivi akreditiranih
 * institucija (LTM, Institut IGH) postavljeni kao pečati: uokvireni,
 * blago zarotirani, u mjerilu naslova.
 */
export default function BoldRnd() {
  return (
    <section
      id="razvoj"
      aria-labelledby="razvoj-naslov"
      className="scroll-mt-16 bg-primary text-light"
    >
      <div className="px-5 pb-16 pt-16 md:px-8 md:pb-20 md:pt-24">
        <p className="text-[11px] uppercase tracking-[0.25em] text-light/70 [font-family:var(--font-mono-blok)]">
          {RND_CERTIFICATION.label}
        </p>
        <h2
          id="razvoj-naslov"
          className="mt-4 max-w-5xl uppercase leading-[0.92] [font-family:var(--font-display)] text-[clamp(2.5rem,7vw,6.5rem)]"
        >
          {RND_CERTIFICATION.title}
        </h2>

        <div className="mt-12 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            {RND_CERTIFICATION.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="mt-4 max-w-xl text-sm leading-relaxed text-light/85 first:mt-0 sm:text-base"
              >
                {paragraph}
              </p>
            ))}

            <ul className="mt-10 space-y-3">
              {RND_CERTIFICATION.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-[12px] uppercase tracking-[0.12em] text-light/90 [font-family:var(--font-mono-blok)]"
                >
                  <span
                    aria-hidden="true"
                    className="mt-1 size-2 shrink-0 bg-accent"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Pečati akreditiranih institucija */}
          <div className="flex flex-col items-center justify-center gap-10 md:col-span-6">
            <p className="-rotate-3 border-4 border-light px-8 py-5 text-center uppercase leading-none [font-family:var(--font-display)] text-[clamp(3rem,7vw,6rem)]">
              LTM
            </p>
            <p className="rotate-2 border-4 border-light px-8 py-5 text-center uppercase leading-none [font-family:var(--font-display)] text-[clamp(2rem,4.5vw,3.75rem)]">
              Institut IGH
            </p>
            <p className="text-center text-[11px] uppercase tracking-[0.25em] text-light/70 [font-family:var(--font-mono-blok)]">
              Ispitivanja u akreditiranim institucijama
            </p>
          </div>
        </div>
      </div>

      {/* Raspon klasa — dekorativno, ton na ton, preko cijele širine bloka.
          Informacija je već navedena u popisu točaka iznad. */}
      <p
        aria-hidden="true"
        className="select-none overflow-hidden whitespace-nowrap px-5 pb-6 uppercase leading-[0.85] text-primary-dark [font-family:var(--font-display)] text-[clamp(3.5rem,13vw,12rem)] md:px-8"
      >
        EI30&ndash;EI120
      </p>
    </section>
  );
}
