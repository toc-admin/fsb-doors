import { RND_CERTIFICATION } from "@/lib/site-content";
import ChapterTab from "./ChapterTab";
import Reveal from "./Reveal";
import { display, mono, hairline, container } from "./tokens";

const EI_LADDER = ["EI30", "EI60", "EI90", "EI120"];
const FOOTNOTE_MARKS = ["a", "b", "c", "d"];

export default function RndChapter() {
  return (
    <section id="razvoj" className="scroll-mt-28 bg-light">
      <div className={`${container} py-20 md:py-28`}>
        <ChapterTab
          number="04"
          title={RND_CERTIFICATION.label}
          tag="LTM / Institut IGH · EN 1634-1"
        />

        <Reveal className="mt-10 grid gap-14 md:mt-14 lg:grid-cols-12 lg:gap-8">
          <div data-reveal className="lg:col-span-6">
            <h3
              className={`${display} max-w-[16ch] text-3xl font-bold leading-[1.05] tracking-[-0.02em] md:text-5xl`}
            >
              {RND_CERTIFICATION.title}
            </h3>
            <div className="mt-8 max-w-prose space-y-5 text-sm leading-relaxed text-gray md:text-base">
              {RND_CERTIFICATION.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>

            <ul className="mt-10">
              {RND_CERTIFICATION.points.map((point, index) => (
                <li
                  key={point}
                  className={`flex gap-5 border-t py-3.5 ${hairline}`}
                >
                  <span
                    className={`${mono} pt-0.5 text-xs font-medium text-primary`}
                  >
                    {FOOTNOTE_MARKS[index] ?? "·"}.
                  </span>
                  <span className="text-sm text-foreground md:text-base">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Grafičko sidro: najviša klasa otpornosti kao konturni slog */}
          <div
            data-reveal
            className="flex flex-col justify-between lg:col-span-5 lg:col-start-8"
          >
            <div>
              <div
                className={`${mono} flex flex-wrap gap-x-6 gap-y-1 text-xs text-gray`}
              >
                {EI_LADDER.map((grade) => (
                  <span
                    key={grade}
                    className={
                      grade === "EI120" ? "font-medium text-primary" : undefined
                    }
                  >
                    {grade}
                  </span>
                ))}
              </div>
              <p
                aria-hidden="true"
                className={`${display} mt-3 select-none whitespace-nowrap text-[clamp(4.5rem,12vw,10rem)] font-bold leading-none tracking-[-0.02em] text-transparent [-webkit-text-stroke:1.5px_var(--foreground)]`}
              >
                EI120
              </p>
              <p className={`${mono} mt-2 text-[11px] text-gray`}>
                120 minuta otpornosti na požar — najviša klasa u programu
              </p>
            </div>

            {/* Akreditacije kao kolofonske fusnote */}
            <dl
              className={`${mono} mt-14 border-t pt-4 text-[11px] leading-relaxed text-gray ${hairline}`}
            >
              <div className="flex gap-4">
                <dt className="w-24 shrink-0 uppercase tracking-[0.08em]">
                  Ispitivanja
                </dt>
                <dd>LTM · Institut IGH i dr. — akreditirane institucije</dd>
              </div>
              <div className="mt-2 flex gap-4">
                <dt className="w-24 shrink-0 uppercase tracking-[0.08em]">
                  Norma
                </dt>
                <dd>EN 1634-1 · CE oznaka</dd>
              </div>
              <div className="mt-2 flex gap-4">
                <dt className="w-24 shrink-0 uppercase tracking-[0.08em]">
                  Klase
                </dt>
                <dd className="text-accent">EI30 — EI120</dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
