import Button from "@/components/ui/Button";
import Reveal from "@/components/site/Reveal";
import { container, display, eyebrow, hairline, mono } from "@/components/site/tokens";

const services = [
  {
    title: "Savjetovanje",
    description: "Stručna pomoć u odabiru optimalnih rješenja",
  },
  {
    title: "Planiranje",
    description: "Projektiranje sustava protupožarne zaštite",
  },
  {
    title: "Implementacija",
    description: "Profesionalna ugradnja i montaža",
  },
  {
    title: "Razvoj i certifikacija",
    description: "Vlastiti razvoj, ispitan u akreditiranim tijelima",
  },
];

// Partnerski list: tamna ploča s hairline okvirom i indeksom usluga.
export default function PartnerSection() {
  return (
    <section aria-labelledby="partner-naslov" className="py-20 lg:py-28">
      <div className={container}>
        <Reveal>
          <div className={`grid gap-12 border ${hairline} bg-dark p-6 md:p-10 lg:grid-cols-12 lg:gap-8 lg:p-14`}>
            <div className="lg:col-span-7">
              <p className={eyebrow}>List P—01 / Partner</p>
              <h2
                id="partner-naslov"
                className={`${display} mt-4 max-w-xl text-4xl font-semibold uppercase leading-none md:text-5xl`}
              >
                Kompletna protupožarna zaštita
              </h2>
              <p className={`${mono} mt-5 text-[11px] uppercase tracking-[0.24em] text-gray`}>
                Više od samih vrata
              </p>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-gray">
                FSB DOORS surađuje s protupozarna-zastita.com za kompletne projekte protupožarne zaštite.
                Od savjetovanja i planiranja do implementacije i certifikacije - pružamo cjelovito rješenje
                za sigurnost vašeg objekta.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="https://protupozarna-zastita.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${mono} inline-flex items-center justify-center bg-primary px-8 py-4 text-[13px] font-medium uppercase tracking-[0.16em] text-[#f5f0ea] transition-colors hover:bg-[#9e1b33]`}
                >
                  protupozarna-zastita.com ↗
                </a>
                <Button href="/kontakt" variant="outline" size="lg">
                  Kontaktirajte nas
                </Button>
              </div>
            </div>

            {/* Opseg suradnje — numerirani indeks */}
            <div className="lg:col-span-5">
              <p className={`${mono} pb-4 text-[11px] uppercase tracking-[0.24em] text-gray`}>
                Opseg suradnje
              </p>
              <ul className={`border-b ${hairline}`}>
                {services.map((service, i) => (
                  <li
                    key={service.title}
                    className={`flex items-baseline gap-5 border-t ${hairline} py-4`}
                  >
                    <span className={`${mono} text-[11px] tracking-[0.2em] text-gray`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className={`${display} text-xl font-medium uppercase leading-tight`}>
                        {service.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-gray">
                        {service.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
