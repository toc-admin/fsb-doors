import { MARQUEE_ITEMS } from "@/lib/site-content";

function MarqueeRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <span
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center"
    >
      {MARQUEE_ITEMS.map((item) => (
        <span key={item} className="flex items-center">
          <span className="px-6 text-2xl uppercase text-light md:text-3xl [font-family:var(--font-display)]">
            {item}
          </span>
          <span aria-hidden="true" className="size-2 shrink-0 bg-accent" />
        </span>
      ))}
    </span>
  );
}

export default function BoldMarquee() {
  return (
    <div
      className="overflow-hidden border-y-4 border-dark bg-primary-dark py-4"
      role="marquee"
      aria-label="FSB Doors — ključne poruke"
    >
      <div className="animate-marquee flex w-max motion-reduce:[animation:none]">
        <MarqueeRow />
        <MarqueeRow ariaHidden />
      </div>
    </div>
  );
}
