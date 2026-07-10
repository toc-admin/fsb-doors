import Link from "next/link";
import Reveal from "./Reveal";
import { display, mono, hairline, container } from "./tokens";

export default function CtaSection() {
  return (
    <section aria-labelledby="cta-naslov" className={`border-t ${hairline}`}>
      <Reveal className={`${container} py-20 md:py-32`}>
        <p
          data-reveal
          className={`${mono} text-[11px] uppercase tracking-[0.1em] text-gray`}
        >
          Upit
        </p>
        <h2
          id="cta-naslov"
          data-reveal
          className={`${display} mt-4 max-w-[14ch] text-[clamp(2.6rem,7vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.025em]`}
        >
          Zatražite ponudu za svoj projekt<span className="text-primary">.</span>
        </h2>
        <p
          data-reveal
          className="mt-7 max-w-xl text-base leading-relaxed text-gray md:text-lg"
        >
          Pošaljite opis projekta ili nacrte — pripremamo ponudu i tehničke
          sheme, a nakon vaše potvrde proizvod ide u proizvodnju.
        </p>
        <div data-reveal className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Link
            href="/kontakt"
            className={`${mono} bg-foreground px-8 py-4 text-sm uppercase tracking-[0.1em] text-background transition-colors hover:bg-primary`}
          >
            Zatražite ponudu
          </Link>
          <a
            href="tel:+38513496811"
            className={`${mono} text-sm text-foreground underline decoration-[rgba(19,19,19,0.3)] underline-offset-4 transition-colors hover:text-primary hover:decoration-current`}
          >
            +385 1 3496 811
          </a>
        </div>
      </Reveal>
    </section>
  );
}
