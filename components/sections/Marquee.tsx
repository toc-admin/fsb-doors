import { MARQUEE_ITEMS as items } from "@/lib/site-content";

export default function Marquee() {

  return (
    <section className="py-6 bg-primary overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="mx-8 text-xl md:text-2xl font-bold text-white flex items-center"
          >
            {item}
            <span className="ml-8 text-white/40">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
