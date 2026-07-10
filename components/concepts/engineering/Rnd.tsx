import { RND_CERTIFICATION } from "@/lib/site-content";
import Reveal from "./Reveal";
import { container, display, eyebrow, hairline, mono } from "./tokens";

const EI_CLASSES = [
  { label: "EI30", minutes: 30 },
  { label: "EI60", minutes: 60 },
  { label: "EI90", minutes: 90 },
  { label: "EI120", minutes: 120 },
];

// Ključni diferencijator: vlastiti razvoj + akreditirana ispitivanja.
export default function Rnd() {
  return (
    <section
      id="razvoj"
      aria-labelledby="razvoj-naslov"
      className="scroll-mt-24 bg-dark py-20 lg:py-28"
    >
      <div className={container}>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Lijevi stupac — oznaka lista i instituti kao pečati */}
          <Reveal className="lg:col-span-4">
            <p className={eyebrow}>List 04 / Razvoj i certifikacija</p>

            <div className="mt-10 flex flex-col items-start gap-5">
              <p className={`${mono} text-[11px] uppercase tracking-[0.24em] text-gray`}>
                Akreditirani instituti
              </p>
              <span
                className={`${mono} border ${hairline} px-5 py-3 text-sm uppercase tracking-[0.3em] text-foreground outline outline-offset-4 outline-[rgba(237,234,228,0.14)]`}
              >
                LTM
              </span>
              <span
                className={`${mono} border ${hairline} px-5 py-3 text-sm uppercase tracking-[0.3em] text-foreground outline outline-offset-4 outline-[rgba(237,234,228,0.14)]`}
              >
                Institut IGH
              </span>
            </div>
          </Reveal>

          {/* Desni stupac — sadržaj */}
          <div className="lg:col-span-8">
            <Reveal>
              <h2
                id="razvoj-naslov"
                className={`${display} max-w-2xl text-4xl font-semibold uppercase leading-[1.02] md:text-5xl`}
              >
                {RND_CERTIFICATION.title}
              </h2>
              <div className="mt-7 max-w-2xl space-y-4 text-base leading-relaxed text-gray">
                {RND_CERTIFICATION.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <ul className={`mt-10 border-b ${hairline}`}>
                {RND_CERTIFICATION.points.map((point, i) => (
                  <li
                    key={point}
                    className={`flex items-baseline gap-5 border-t ${hairline} py-4`}
                  >
                    <span className={`${mono} text-[11px] tracking-[0.2em] text-gray`}>
                      R.{i + 1}
                    </span>
                    <span className="text-sm leading-relaxed text-foreground md:text-base">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Skala klasa otpornosti EI30–EI120 */}
            <Reveal>
              <figure className="mt-14">
                <figcaption
                  className={`${mono} text-[11px] uppercase tracking-[0.24em] text-gray`}
                >
                  Ispitane klase otpornosti — minute vatrootpornosti
                </figcaption>
                <div className="relative mt-8 pb-8">
                  <div className={`h-px w-full border-t ${hairline}`} />
                  {/* postignuti raspon 30–120 min */}
                  <div
                    aria-hidden="true"
                    className="absolute left-[25%] top-0 h-px w-[75%] bg-primary"
                  />
                  <span
                    className={`${mono} absolute left-0 top-3 text-[10px] tracking-[0.16em] text-gray`}
                  >
                    0 min
                  </span>
                  {EI_CLASSES.map((c) => (
                    <span
                      key={c.label}
                      className="absolute top-0 -translate-x-1/2"
                      style={{ left: `${(c.minutes / 120) * 100}%` }}
                    >
                      <span className="mx-auto -mt-[5px] block h-[9px] w-[9px] bg-primary" />
                      <span
                        className={`${mono} mt-2 block text-[11px] font-medium tracking-[0.14em] text-primary`}
                      >
                        {c.label}
                      </span>
                    </span>
                  ))}
                </div>
              </figure>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
