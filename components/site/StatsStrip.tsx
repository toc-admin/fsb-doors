import { COMPANY_STATS } from "@/lib/site-content";
import Reveal from "./Reveal";
import { container, display, hairline, mono } from "./tokens";

// Traka podataka — samo provjerljive brojke iz lib/site-content.
export default function StatsStrip() {
  return (
    <section aria-label="Podaci o tvrtki" className={`border-y ${hairline} bg-dark`}>
      <Reveal className={container}>
        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {COMPANY_STATS.map((stat) => (
            <div
              key={stat.label}
              className={`flex flex-col border-t ${hairline} py-8 first:border-t-0 sm:[&:nth-child(2)]:border-t-0 sm:even:border-l sm:even:pl-8 lg:border-t-0 lg:border-l lg:py-10 lg:pl-8 lg:first:border-l-0 lg:first:pl-0`}
            >
              <dt
                className={`${mono} order-2 mt-3 text-[11px] uppercase tracking-[0.22em] text-foreground`}
              >
                {stat.label}
              </dt>
              <dd className={`${display} order-1 text-5xl font-semibold leading-none md:text-6xl`}>
                {stat.value}
                {stat.suffix}
              </dd>
              <dd className="order-3 mt-1.5 text-xs text-gray">{stat.description}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
