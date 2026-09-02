import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Reveal from "@/components/site/Reveal";
import { container, display, hairline, mono } from "@/components/site/tokens";
import { COMPANY_STATS as stats } from "@/lib/site-content";

// Podaci o tvrtki kao mjerna traka — display brojke se odbrojavaju,
// mono oznake ispod njih (isti raster kao site/StatsStrip).
export default function Stats() {
  return (
    <section aria-label="Podaci o tvrtki" className={`border-y ${hairline} bg-dark`}>
      <Reveal className={container}>
        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
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
                <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2} />
              </dd>
              <dd className="order-3 mt-1.5 text-xs text-gray">{stat.description}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
