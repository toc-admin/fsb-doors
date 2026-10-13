import { Metadata } from "next";
import Reveal from "@/components/site/Reveal";
import { container, display, eyebrow, hairline, mono } from "@/components/site/tokens";

export const metadata: Metadata = {
  title: "O nama | FSB Doors",
  description:
    "FSB Doors razvija, proizvodi i ugrađuje požarna vrata, stijene i prozore prilagođene svakom projektu — od razvoja proizvoda i certifikacije do ugradnje na objektu.",
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

// Tekst odjeljka dolazi od klijentice (mail, listopad 2026) — ne mijenjati bez nje.
const story = [
  "FSB Doors nastao je iz tvrtke FSB Solutions, koja se bavi sustavima pasivne zaštite od požara. Kroz rad na projektima uočili smo da tržište nudi uglavnom standardna, „konfekcijska“ požarna vrata, a mnogim objektima trebaju rješenja izrađena po mjeri. Tako je nastao FSB Doors.",
  "Danas razvijamo, proizvodimo i ugrađujemo požarna vrata, stijene i prozore prilagođene svakom projektu. Cijeli proces vodimo sami, od razvoja proizvoda i certifikacije do proizvodnje i ugradnje na objektu.",
  "U našem programu su čelična i aluminijska vrata s ostakljenjem ili bez njega, staklene stijene, revizijska vrata i požarni prozori. Vrata ispitujemo, između ostalog, na vatrootpornost, dimonepropusnost, zvučnu izolaciju i koeficijent prolaska topline.",
  "Uz sigurnost nam je jednako važan izgled. Želimo da požarna vrata budu dio arhitekture prostora, a ne nešto čemu se prostor mora prilagoditi.",
];

export default function AboutPage() {
  return (
    <>
      {/* Zaglavlje lista — tekst klijentice, bez fotografije dok ne odabere prikladnu */}
      <section className={`border-b ${hairline} bg-dark py-16 lg:py-24`}>
        <div className={container}>
          <Reveal className="max-w-3xl">
            <p className={eyebrow}>List O—01 / O nama</p>
            <h1
              className={`${display} mt-4 text-4xl font-semibold uppercase leading-none md:text-5xl lg:text-6xl`}
            >
              O nama
            </h1>
            <div className="mt-8 space-y-4 text-base leading-relaxed text-gray md:text-lg">
              {story.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vrijednosti — numerirani indeks */}
      <section aria-labelledby="vrijednosti-naslov" className={`bg-light py-20 lg:py-28`}>
        <div className={container}>
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 pb-10 lg:pb-14">
              <div>
                <p className={eyebrow}>List O—02 / Naše vrijednosti</p>
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
    </>
  );
}
