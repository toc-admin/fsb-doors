import Image from "next/image";
import Reveal from "./Reveal";
import { container, display, eyebrow, hairline, mono } from "./tokens";

const SHOTS = [
  {
    src: "/images/foto/tunel-vrata-767m.webp",
    alt: "Narančasta protupožarna vrata evakuacijskog prolaza u cestovnom tunelu",
    caption: "Tunel — evakuacijski prolaz",
  },
  {
    src: "/images/foto/ugradnja-atrij-radnici.webp",
    alt: "FSB monteri ugrađuju čeličnu ostakljenu stijenu u atriju",
    caption: "Ugradnja — čelično-staklena stijena",
  },
  {
    src: "/images/foto/ltm-staklo-zar.webp",
    alt: "Vatrostalno staklo tijekom ispitivanja požarne otpornosti",
    caption: "Ispitivanje — vatrostalno staklo",
  },
];

// Brend u prostoru: stvarne ugradnje kao dokaz, potpis brenda kao poruka.
export default function BrandBand() {
  return (
    <section
      aria-labelledby="brend-naslov"
      className={`border-y ${hairline} bg-dark py-20 lg:py-28`}
    >
      <div className={container}>
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4 pb-10 lg:pb-14">
            <div>
              <p className={eyebrow}>List 04 / FSB Doors u prostoru</p>
              <h2
                id="brend-naslov"
                className={`${display} mt-4 max-w-3xl text-4xl font-semibold uppercase leading-none md:text-5xl lg:text-6xl`}
              >
                Ne prodajemo samo vrata.
                <br />
                <span className="text-primary">Prodajemo povjerenje.</span>
              </h2>
            </div>
            <p className={`${mono} max-w-[220px] text-[11px] uppercase leading-relaxed tracking-[0.22em] text-gray`}>
              Svaka ugradnja nosi potpis FSB Doors
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3 md:gap-4 lg:gap-6">
          {SHOTS.map((shot, i) => (
            <Reveal key={shot.src} delay={i * 0.08}>
              <figure>
                <div className={`relative aspect-[4/3] overflow-hidden border ${hairline}`}>
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>
                <figcaption
                  className={`${mono} mt-3 flex items-baseline gap-3 text-[10px] uppercase tracking-[0.2em] text-gray`}
                >
                  <span className="text-primary">F.{i + 1}</span>
                  {shot.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
