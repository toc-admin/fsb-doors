import Image from "next/image";
import Reveal from "./Reveal";
import { container, display, eyebrow, hairline, mono } from "./tokens";

const SHOTS = [
  {
    src: "/images/foto/celicna-vrata-katalog-1.webp",
    alt: "Čelična požarna vrata izrađena u vlastitom proizvodnom pogonu FSB Doors",
    caption: "Čelična požarna vrata — vlastita izrada",
  },
  {
    src: "/images/foto/celicna-vrata-dvokrilna.webp",
    alt: "Dvokrilna čelična požarna vrata iz proizvodnog programa FSB Doors",
    caption: "Dvokrilna izvedba — proizvodni pogon",
  },
  {
    src: "/images/foto/ugradnja-stakla-detalj.webp",
    alt: "Detalj ugradnje vatrootpornog ostakljenja",
    caption: "Ostakljenje — kontrola u svim fazama",
  },
];

// Vlastita certificirana proizvodnja — od materijala do gotovog proizvoda.
export default function Production() {
  return (
    <section
      id="proizvodnja"
      aria-labelledby="proizvodnja-naslov"
      className={`scroll-mt-24 border-y ${hairline} bg-dark py-20 lg:py-28`}
    >
      <div className={container}>
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4 pb-10 lg:pb-14">
            <div>
              <p className={eyebrow}>List 04 / Proizvodnja</p>
              <h2
                id="proizvodnja-naslov"
                className={`${display} mt-4 max-w-3xl text-4xl font-semibold uppercase leading-none md:text-5xl lg:text-6xl`}
              >
                Vlastita certificirana
                <br />
                <span className="text-primary">proizvodnja</span>
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-gray">
                Svaki proizvod nastaje u našem vlastitom certificiranom
                proizvodnom pogonu — po mjeri, uz strogu kontrolu kvalitete u
                svim fazama, od pripreme materijala do gotovog proizvoda.
              </p>
            </div>
            <p className={`${mono} max-w-[220px] text-[11px] uppercase leading-relaxed tracking-[0.22em] text-gray`}>
              Od materijala do gotovog proizvoda — u vlastitom pogonu
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
                  <span className="text-primary">P.{i + 1}</span>
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
