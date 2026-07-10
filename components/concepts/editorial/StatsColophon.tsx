import { COMPANY_STATS } from "@/lib/site-content";
import ChapterTab from "./ChapterTab";
import Reveal from "./Reveal";
import { mono, hairline, container } from "./tokens";

// Brojke tvrtke složene kao podaci, ne kao herojske kartice.
export default function StatsColophon() {
  return (
    <section aria-label="Tvrtka u brojkama">
      <div className={`${container} pb-20 md:pb-28`}>
        <ChapterTab number="06" title="Podaci" tag="FSB Doors d.o.o." />
        <Reveal className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 md:mt-10 lg:grid-cols-4 lg:gap-8">
          {COMPANY_STATS.map((stat) => (
            <div
              key={stat.label}
              data-reveal
              className={`border-t pt-4 ${hairline}`}
            >
              <p className={`${mono} text-2xl font-medium md:text-3xl`}>
                {stat.value}
                {stat.suffix}
              </p>
              <p className="mt-2 text-sm font-medium text-foreground">
                {stat.label}
              </p>
              <p className={`${mono} mt-0.5 text-[11px] text-gray`}>
                {stat.description}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
