import Link from "next/link";
import DoorSplit from "./DoorSplit";

/**
 * Drugi trenutak potpisa — krila u zrcalnom rasporedu u odnosu na hero
 * (crno | bordo) razmiču se dok pozivamo na sljedeći korak.
 */
export default function BoldCta() {
  return (
    <DoorSplit
      leafA="bg-dark"
      leafB="bg-primary"
      amount={5}
      start="top 80%"
      end="bottom 20%"
    >
      <div className="flex min-h-[70svh] flex-col items-center justify-center px-5 py-20 text-center md:px-8">
        <p className="text-[11px] uppercase tracking-[0.25em] text-light/70 [font-family:var(--font-mono-blok)]">
          Sljedeći korak
        </p>
        <h2 className="mt-4 uppercase leading-[0.88] text-light [font-family:var(--font-display)]">
          <span className="block text-[clamp(2.75rem,9vw,8rem)]">
            Vaš projekt.
          </span>
          <span className="block text-[clamp(2.75rem,9vw,8rem)]">
            Naša vrata.
          </span>
        </h2>
        <p className="mt-6 max-w-lg text-sm leading-relaxed text-light/85 sm:text-base">
          Pošaljite nam upit — izlazimo na izmjeru te izrađujemo ponudu i
          tehničke sheme za vaš projekt.
        </p>
        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center bg-light px-10 py-5 text-sm font-bold uppercase tracking-wide text-dark transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light"
          >
            Zatražite ponudu
          </Link>
          <a
            href="tel:+38513496811"
            className="inline-flex items-center justify-center border-2 border-light px-10 py-[18px] text-sm font-bold uppercase tracking-wide text-light transition-colors hover:bg-light/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light"
          >
            +385 1 3496 811
          </a>
        </div>
      </div>
    </DoorSplit>
  );
}
