import Link from "next/link";
import { HERO_TRUST_STATS } from "@/lib/site-content";
import DoorSplit from "./DoorSplit";

export default function BoldHero() {
  return (
    <DoorSplit
      id="vrh"
      leafA="bg-primary"
      leafB="bg-dark"
      amount={7}
      start="top top"
      end="bottom top"
      className="min-h-[calc(100svh-4rem)]"
    >
      <div className="flex min-h-[calc(100svh-4rem)] flex-col justify-between">
        {/* Tehnički potpis uz gornji rub */}
        <p className="flex flex-wrap items-center justify-between gap-2 px-5 pt-5 text-[10px] uppercase tracking-[0.2em] text-light/80 sm:text-[11px] md:px-8 [font-family:var(--font-mono-blok)]">
          <span>FSB Doors — protupožarna vrata</span>
          <span aria-hidden="true">Zagreb / HR</span>
        </p>

        {/* Izjava preko procjepa između krila */}
        <div className="px-5 text-center md:px-8">
          <h1 className="uppercase leading-[0.88] text-light [font-family:var(--font-display)]">
            <span className="block text-[clamp(3rem,11vw,10rem)]">
              Vrata za
            </span>
            <span className="block text-[clamp(3.75rem,14vw,13rem)]">
              budućnost.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-light/85 sm:text-base">
            Protupožarna vrata po mjeri — vlastiti razvoj, proizvodnja i
            ugradnja, od EI30 do EI120.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center bg-light px-8 py-4 text-sm font-bold uppercase tracking-wide text-dark transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light"
            >
              Zatražite ponudu
            </Link>
            <a
              href="#proizvodi"
              className="inline-flex items-center justify-center border-2 border-light px-8 py-[14px] text-sm font-bold uppercase tracking-wide text-light transition-colors hover:bg-light/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light"
            >
              Proizvodi &darr;
            </a>
          </div>
        </div>

        {/* Provjerljivi podaci uz donji rub bloka */}
        <dl className="grid grid-cols-1 border-t border-light/25 sm:grid-cols-3">
          {HERO_TRUST_STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col-reverse px-5 py-5 md:px-8 ${i > 0 ? "border-t border-light/25 sm:border-l sm:border-t-0" : ""}`}
            >
              <dt className="mt-1 text-[10px] uppercase tracking-[0.2em] text-light/75 sm:text-[11px] [font-family:var(--font-mono-blok)]">
                {stat.label}
              </dt>
              <dd className="text-4xl uppercase text-light md:text-5xl [font-family:var(--font-display)]">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </DoorSplit>
  );
}
