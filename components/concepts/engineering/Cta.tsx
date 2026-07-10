import Link from "next/link";
import Reveal from "./Reveal";
import { container, display, eyebrow, hairline, mono } from "./tokens";

// Završni poziv: ponuda počinje tehničkim zahtjevima projekta.
export default function Cta() {
  return (
    <section aria-labelledby="cta-naslov" className="py-20 lg:py-28">
      <Reveal className={container}>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <p className={eyebrow}>List 06 / Ponuda</p>
            <h2
              id="cta-naslov"
              className={`${display} mt-4 max-w-2xl text-4xl font-semibold uppercase leading-[0.98] md:text-6xl`}
            >
              Zatražite ponudu za svoj projekt
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray">
              Pošaljite nam zahtjeve projekta — analiziramo ih, izlazimo na
              izmjeru i vraćamo se s ponudom i tehničkim shemama.
            </p>
            <Link
              href="/kontakt"
              className={`${mono} mt-9 inline-block bg-primary px-8 py-4 text-[13px] font-medium uppercase tracking-[0.16em] text-[#f5f0ea] transition-colors hover:bg-[#9e1b33]`}
            >
              Zatražite ponudu →
            </Link>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <dl className={`border-t ${hairline}`}>
              <div className={`border-b ${hairline} py-4`}>
                <dt className={`${mono} text-[10px] uppercase tracking-[0.24em] text-gray`}>
                  Telefon
                </dt>
                <dd className="mt-1.5">
                  <a
                    href="tel:+38513496811"
                    className={`${mono} text-base text-foreground transition-colors hover:text-primary`}
                  >
                    +385 1 3496 811
                  </a>
                </dd>
              </div>
              <div className={`border-b ${hairline} py-4`}>
                <dt className={`${mono} text-[10px] uppercase tracking-[0.24em] text-gray`}>
                  E-mail
                </dt>
                <dd className="mt-1.5">
                  <a
                    href="mailto:info@fsb-zagreb.hr"
                    className={`${mono} text-base text-foreground transition-colors hover:text-primary`}
                  >
                    info@fsb-zagreb.hr
                  </a>
                </dd>
              </div>
              <div className={`border-b ${hairline} py-4`}>
                <dt className={`${mono} text-[10px] uppercase tracking-[0.24em] text-gray`}>
                  Adresa
                </dt>
                <dd className={`${mono} mt-1.5 text-base text-foreground`}>
                  Samoborska cesta 91B, Zagreb
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
