import Image from "next/image";
import Reveal from "@/components/site/Reveal";
import { container, display, eyebrow, hairline, mono } from "@/components/site/tokens";

const benefits = [
  {
    title: "Razvoj karijere",
    description: "Kontinuirano usavršavanje i mogućnost napredovanja",
  },
  {
    title: "Sjajan tim",
    description: "Rad u dinamičnom timu iskusnih stručnjaka",
  },
  {
    title: "Stabilnost",
    description: "Siguran posao u stabilnoj i rastućoj tvrtki",
  },
];

// Uvodni list karijere: naslov, fotografija montera i pogodnosti kao indeks.
export default function CareerHero() {
  return (
    <section className={`border-b ${hairline} bg-dark py-16 lg:py-24`}>
      <div className={container}>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <Reveal>
              <p className={eyebrow}>List K—01 / Karijera</p>
              <h1
                className={`${display} mt-4 max-w-2xl text-4xl font-semibold uppercase leading-none md:text-5xl lg:text-6xl`}
              >
                Želiš se pridružiti našem timu?
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-gray md:text-lg">
                Tražimo talentirane i motivirane ljude koji dijele našu strast za sigurnost i kvalitetu.
                Pridruži nam se i gradi karijeru u vodećoj tvrtki za protupožarnu zaštitu.
              </p>
            </Reveal>

            {/* Pogodnosti — numerirani redovi */}
            <Reveal>
              <ul className={`mt-12 border-b ${hairline}`}>
                {benefits.map((benefit, i) => (
                  <li
                    key={benefit.title}
                    className={`flex items-baseline gap-5 border-t ${hairline} py-4`}
                  >
                    <span className={`${mono} text-[11px] tracking-[0.2em] text-gray`}>
                      B.{i + 1}
                    </span>
                    <div className="flex flex-1 flex-wrap items-baseline gap-x-5 gap-y-1">
                      <h3 className={`${display} text-xl font-medium uppercase leading-tight`}>
                        {benefit.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray">{benefit.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Fotografija s terena — monteri na ugradnji */}
          <Reveal delay={0.08} className="lg:col-span-5">
            <figure>
              <div className={`relative aspect-[4/3] overflow-hidden border ${hairline} lg:aspect-[4/5]`}>
                <Image
                  src="/images/foto/ugradnja-atrij-radnici.webp"
                  alt="FSB monteri tijekom ugradnje u atriju"
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
                Tim na terenu — ugradnja čelično-staklene stijene
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
