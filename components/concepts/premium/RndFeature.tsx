import Image from "next/image";
import { RND_CERTIFICATION } from "@/lib/site-content";
import Folio from "./Folio";
import Reveal from "./Reveal";
import { serif, caps, container, hairline, photo } from "./tokens";

// Središnji arak revije: reportaža o vlastitom razvoju — inicijal u prvom
// odlomku, kurzivna izvučena rečenica i akreditirane institucije kao
// elegantna verzalna posveta. Umetak na tonu "light" papira.
export default function RndFeature() {
  const [firstParagraph, secondParagraph] = RND_CERTIFICATION.paragraphs;

  return (
    <section
      id="razvoj"
      aria-labelledby="razvoj-naslov"
      className="scroll-mt-10 bg-light py-16 md:py-24"
    >
      <div className={container}>
        <Folio page="04" label={RND_CERTIFICATION.label} />

        <Reveal>
          <div className="mt-10 grid gap-x-10 gap-y-12 md:grid-cols-12">
            <div className="md:col-span-6">
              <h2
                id="razvoj-naslov"
                data-reveal
                className={`${serif} text-[clamp(2rem,4.5vw,3.25rem)] font-light leading-[1.1] text-foreground`}
              >
                {RND_CERTIFICATION.title}
              </h2>

              <p
                data-reveal
                className="mt-9 leading-relaxed text-foreground/85 first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:[font-family:var(--font-revija)] first-letter:text-[3.6rem] first-letter:font-medium first-letter:leading-[0.78] first-letter:text-primary"
              >
                {firstParagraph}
              </p>
              <p data-reveal className="mt-5 leading-relaxed text-gray">
                {secondParagraph}
              </p>

              <blockquote data-reveal className="mt-12">
                <span aria-hidden="true" className="block h-px w-16 bg-primary" />
                <p
                  className={`${serif} mt-6 text-[clamp(1.4rem,2.6vw,1.9rem)] font-light italic leading-[1.3] text-foreground`}
                >
                  „Od konstrukcije i materijala do najsitnijih detalja
                  izvedbe.”
                </p>
              </blockquote>
            </div>

            <div className="md:col-span-5 md:col-start-8">
              <figure data-reveal-img>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="/images/planiranje-protupozarne-zastite.webp"
                    alt="Planiranje protupožarne zaštite nad tehničkom dokumentacijom"
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className={`object-cover ${photo}`}
                  />
                </div>
                <figcaption className={`${caps} mt-3 text-accent`}>
                  Od tehničke sheme do certificiranog proizvoda
                </figcaption>
              </figure>

              <ul className="mt-10">
                {RND_CERTIFICATION.points.map((point) => (
                  <li
                    key={point}
                    data-reveal
                    className={`border-t py-3.5 text-sm leading-relaxed text-gray ${hairline}`}
                  >
                    <span aria-hidden="true" className="mr-3 text-primary">
                      —
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            data-reveal
            className={`mt-14 flex flex-wrap items-baseline gap-x-12 gap-y-3 border-y py-5 md:mt-20 ${hairline}`}
          >
            <p className={`${caps} text-accent`}>Ispitivanja i certifikacija</p>
            <p className={`${caps} text-foreground`}>
              LTM · Institut IGH i dr.
            </p>
            <p className={`${caps} text-foreground`}>EI30 – EI120</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
