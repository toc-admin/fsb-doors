import { Metadata } from "next";
import Image from "next/image";
import Stats from "@/components/sections/Stats";
import CTA from "@/components/sections/CTA";
import Reveal from "@/components/site/Reveal";
import { container, display, eyebrow, hairline, mono } from "@/components/site/tokens";
import { RND_CERTIFICATION } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "O nama | FSB Doors",
  description: "FSB DOORS d.o.o. - Više od 20 godina iskustva u izradi i ugradnji protupožarnih vrata vrhunske kvalitete.",
};

const values = [
  {
    title: "Kvaliteta",
    description: "Koristimo samo vrhunske materijale i slijedimo najstrože standarde u proizvodnji.",
  },
  {
    title: "Pouzdanost",
    description: "Ono što obećamo, to i isporučimo. Vaša sigurnost je naša odgovornost.",
  },
  {
    title: "Stručnost",
    description: "Naš tim čine iskusni stručnjaci s dubokim poznavanjem protupožarne zaštite.",
  },
  {
    title: "Partnerstvo",
    description: "Gradimo dugoročne odnose s klijentima temeljene na povjerenju i transparentnosti.",
  },
];

const certifications = [
  "EN 1634-1 - Testiranje protupožarnih vrata",
  "CE oznaka za sve proizvode",
  "ISO 9001 - Sustav upravljanja kvalitetom",
  "Hrvatska norma HRN EN 1125 - Evakuacijski okov",
];

export default function AboutPage() {
  return (
    <>
      {/* Zaglavlje lista — naslov i dokumentarna fotografija tima */}
      <section className={`border-b ${hairline} bg-dark py-16 lg:py-24`}>
        <div className={container}>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <Reveal className="lg:col-span-7">
              <p className={eyebrow}>List O—01 / O nama</p>
              <h1
                className={`${display} mt-4 text-4xl font-semibold uppercase leading-none md:text-5xl lg:text-6xl`}
              >
                FSB DOORS d.o.o.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-gray md:text-lg">
                Više od 20 godina izrađujemo i ugrađujemo protupožarna vrata vrhunske kvalitete.
                Naša misija je zaštititi ljude i imovinu kroz inovativna rješenja protupožarne zaštite.
              </p>
            </Reveal>
            <Reveal delay={0.08} className="lg:col-span-5">
              <figure>
                <div className={`relative aspect-[4/3] overflow-hidden border ${hairline}`}>
                  <Image
                    src="/images/foto/ltm-inzenjeri-monitor.webp"
                    alt="Inženjeri prate ispitivanje na monitorima ispitne stanice"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    priority
                    className="object-cover"
                  />
                </div>
                <figcaption
                  className={`${mono} mt-3 flex items-baseline gap-3 text-[10px] uppercase tracking-[0.2em] text-gray`}
                >
                  <span className="text-primary">F.1</span>
                  Tim za ispitnom stanicom — praćenje ispitivanja
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      <Stats />

      {/* Naša priča */}
      <section aria-labelledby="prica-naslov" className="py-20 lg:py-28">
        <div className={container}>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <Reveal className="lg:col-span-7">
              <p className={eyebrow}>List O—02 / Naša priča</p>
              <h2
                id="prica-naslov"
                className={`${display} mt-4 text-4xl font-semibold uppercase leading-none md:text-5xl`}
              >
                Naša priča
              </h2>
              <div className="mt-7 max-w-2xl space-y-4 text-base leading-relaxed text-gray">
                <p>
                  FSB DOORS d.o.o. osnovana je s jasnom vizijom - postati vodeći partner
                  u protupožarnoj zaštiti na hrvatskom tržištu. Godinama smo gradili svoje
                  znanje i iskustvo, prateći najnovije tehnologije i standarde u industriji.
                </p>
                <p>
                  Danas smo ponosni na tisuće uspješno realiziranih projekata diljem Hrvatske.
                  Od manjih poslovnih prostora do velikih industrijskih kompleksa, naša vrata
                  štite ljude i imovinu u najrazličitijim okruženjima.
                </p>
                <p>
                  Naš tim čine iskusni stručnjaci koji razumiju specifičnosti svakog projekta.
                  Savjetujemo, planiramo, ugrađujemo i održavamo - pružamo kompletnu uslugu
                  protupožarne zaštite.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08} className="lg:col-span-5">
              <figure>
                <div className={`relative aspect-[4/3] overflow-hidden border ${hairline}`}>
                  <Image
                    src="/images/savjetovanje-o-protupozarnoj-zastiti.webp"
                    alt="Naš tim tijekom savjetovanja o protupožarnoj zaštiti"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption
                  className={`${mono} mt-3 flex items-baseline gap-3 text-[10px] uppercase tracking-[0.2em] text-gray`}
                >
                  <span className="text-primary">F.2</span>
                  Savjetovanje — analiza zahtjeva projekta
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vrijednosti — numerirani indeks */}
      <section aria-labelledby="vrijednosti-naslov" className={`border-y ${hairline} bg-light py-20 lg:py-28`}>
        <div className={container}>
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 pb-10 lg:pb-14">
              <div>
                <p className={eyebrow}>List O—03 / Naše vrijednosti</p>
                <h2
                  id="vrijednosti-naslov"
                  className={`${display} mt-4 text-4xl font-semibold uppercase leading-none md:text-5xl`}
                >
                  Naše vrijednosti
                </h2>
              </div>
              <p className={`${mono} max-w-[260px] text-[11px] uppercase leading-relaxed tracking-[0.22em] text-gray`}>
                Principi koji nas vode u svakodnevnom radu
              </p>
            </div>
          </Reveal>

          <Reveal>
            <ul className={`grid border-b ${hairline} md:grid-cols-2 md:gap-x-10 lg:grid-cols-4 lg:gap-x-8`}>
              {values.map((value, index) => (
                <li key={value.title} className={`border-t ${hairline} py-6 lg:py-8`}>
                  <span className={`${mono} text-[11px] tracking-[0.2em] text-gray`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className={`${display} mt-3 text-2xl font-medium uppercase leading-tight`}>
                    {value.title}
                  </h3>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-gray">
                    {value.description}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Razvoj i certifikacija */}
      <section aria-labelledby="certifikati-naslov" className="py-20 lg:py-28">
        <div className={container}>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <Reveal className="order-2 lg:order-1 lg:col-span-5">
              <figure>
                <div className={`relative aspect-[4/3] overflow-hidden border ${hairline}`}>
                  <Image
                    src="/images/foto/ltm-vrata-nakon-ispitivanja.webp"
                    alt="Protupožarna vrata nakon ispitivanja vatrootpornosti"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption
                  className={`${mono} mt-3 flex items-baseline gap-3 text-[10px] uppercase tracking-[0.2em] text-gray`}
                >
                  <span className="text-primary">F.3</span>
                  Dokumentacija ispitivanja — vrata nakon ispitne peći
                </figcaption>
              </figure>
            </Reveal>
            <Reveal className="order-1 lg:order-2 lg:col-span-7">
              <p className={eyebrow}>List O—04 / {RND_CERTIFICATION.label}</p>
              <h2
                id="certifikati-naslov"
                className={`${display} mt-4 max-w-xl text-4xl font-semibold uppercase leading-none md:text-5xl`}
              >
                {RND_CERTIFICATION.label}
              </h2>
              <div className="mt-7 max-w-2xl space-y-4 text-base leading-relaxed text-gray">
                {RND_CERTIFICATION.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
              <ul className={`mt-9 border-b ${hairline}`}>
                {certifications.map((cert, index) => (
                  <li
                    key={cert}
                    className={`flex items-baseline gap-5 border-t ${hairline} py-4`}
                  >
                    <span className={`${mono} text-[11px] tracking-[0.2em] text-gray`}>
                      C.{index + 1}
                    </span>
                    <span className="text-sm leading-relaxed text-foreground md:text-base">
                      {cert}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <CTA
        title="Postanite naš partner"
        subtitle="Pridružite se stotinama zadovoljnih klijenata koji su nam povjerili zaštitu svojih prostora."
      />
    </>
  );
}
