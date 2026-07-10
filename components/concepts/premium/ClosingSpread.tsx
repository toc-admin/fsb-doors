import Link from "next/link";
import { COMPANY_STATS } from "@/lib/site-content";
import Folio from "./Folio";
import Reveal from "./Reveal";
import { serif, caps, container, hairline, focusRing } from "./tokens";

// Završni arak: tihi kolofonski redak s podacima tvrtke i serifni poziv
// s jednim, suzdržanim gumbom.
export default function ClosingSpread() {
  return (
    <section aria-labelledby="poziv-naslov" className={container}>
      <Reveal>
        <p
          data-reveal
          className={`${caps} flex flex-wrap gap-x-10 gap-y-2 border-y py-5 text-gray ${hairline}`}
        >
          {COMPANY_STATS.map((stat) => (
            <span key={stat.label}>
              <span className="text-foreground">
                {stat.value}
                {stat.suffix}
              </span>{" "}
              {stat.label.toLowerCase()}
            </span>
          ))}
        </p>
      </Reveal>

      <div className="py-20 md:py-28">
        <Folio page="06" label="Poziv" />
        <Reveal>
          <h2
            id="poziv-naslov"
            data-reveal
            className={`${serif} mt-12 max-w-4xl text-[clamp(2.4rem,6vw,4.5rem)] font-light leading-[1.06] text-foreground`}
          >
            Razgovarajmo o <em className="italic text-primary">vašem</em>{" "}
            projektu.
          </h2>
          <p
            data-reveal
            className="mt-7 max-w-xl text-lg leading-relaxed text-gray md:ml-[8.333%]"
          >
            Opišite nam objekt i zahtjeve — pripremit ćemo ponudu i tehničke
            sheme, a svaki proizvod izraditi po izmjeri s lokacije.
          </p>
          <p data-reveal className="mt-10 md:ml-[8.333%]">
            <Link
              href="/kontakt"
              className={`${caps} inline-block border border-foreground px-8 py-4 text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-background ${focusRing}`}
            >
              Zatražite ponudu
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
