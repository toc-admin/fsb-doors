import { hairline, mono } from "@/components/site/tokens";
import { MARQUEE_ITEMS as items } from "@/lib/site-content";

// Tehnički ticker: mono traka između hairline linija, kvadratni separatori.
export default function Marquee() {
  return (
    <section aria-hidden="true" className={`overflow-hidden border-y ${hairline} py-4`}>
      <div className="animate-marquee flex whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className={`${mono} mx-6 flex items-center text-[12px] uppercase tracking-[0.24em] text-gray`}
          >
            {item}
            <span className="ml-12 block h-1.5 w-1.5 bg-primary" />
          </span>
        ))}
      </div>
    </section>
  );
}
