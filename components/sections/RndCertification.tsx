import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/site/Reveal";
import { container, display, eyebrow, hairline, mono } from "@/components/site/tokens";
import { RND_CERTIFICATION } from "@/lib/site-content";

// Razvoj i certifikacija kao tamna traka: pečati instituta, dokumentacija
// ispitivanja iz peći i točke kao numerirani redovi (uzor: site/Rnd).
export default function RndCertification() {
  return (
    <section
      aria-labelledby="rnd-naslov"
      className={`border-y ${hairline} bg-dark py-20 lg:py-28`}
    >
      <div className={container}>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Lijevi stupac — oznaka lista, pečati instituta i fotografija */}
          <Reveal className="lg:col-span-4">
            <p className={eyebrow}>List R—01 / {RND_CERTIFICATION.label}</p>

            <div className="mt-10 flex flex-col items-start gap-5">
              <p className={`${mono} text-[11px] uppercase tracking-[0.24em] text-gray`}>
                Akreditirani instituti
              </p>
              <span
                className={`${mono} border ${hairline} px-5 py-3 text-sm uppercase tracking-[0.3em] text-foreground outline outline-offset-4 outline-[rgba(237,234,228,0.14)]`}
              >
                LTM
              </span>
              <span
                className={`${mono} border ${hairline} px-5 py-3 text-sm uppercase tracking-[0.3em] text-foreground outline outline-offset-4 outline-[rgba(237,234,228,0.14)]`}
              >
                Institut IGH
              </span>
            </div>

            <figure className="mt-12">
              <div className={`relative aspect-[4/3] overflow-hidden border ${hairline}`}>
                <Image
                  src="/images/foto/ltm-pec-vrata.webp"
                  alt="Protupožarna vrata pripremljena u ispitnoj peći"
                  fill
                  sizes="(min-width: 1024px) 30vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption
                className={`${mono} mt-3 text-[10px] uppercase leading-relaxed tracking-[0.2em] text-gray`}
              >
                Ispitna peć / vrata prije ispitivanja vatrootpornosti
              </figcaption>
            </figure>
          </Reveal>

          {/* Desni stupac — sadržaj */}
          <div className="lg:col-span-8">
            <Reveal>
              <h2
                id="rnd-naslov"
                className={`${display} max-w-2xl text-4xl font-semibold uppercase leading-[1.02] md:text-5xl`}
              >
                {RND_CERTIFICATION.title}
              </h2>
              <div className="mt-7 max-w-2xl space-y-4 text-base leading-relaxed text-gray">
                {RND_CERTIFICATION.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <ul className={`mt-10 border-b ${hairline}`}>
                {RND_CERTIFICATION.points.map((point, i) => (
                  <li
                    key={point}
                    className={`flex items-baseline gap-5 border-t ${hairline} py-4`}
                  >
                    <span className={`${mono} text-[11px] tracking-[0.2em] text-gray`}>
                      R.{i + 1}
                    </span>
                    <span className="text-sm leading-relaxed text-foreground md:text-base">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <div className="mt-10">
                <Button href="/kontakt" variant="primary" size="lg">
                  Razgovarajte s našim timom →
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
