import Image from "next/image";
import Reveal from "@/components/site/Reveal";
import { container, display, eyebrow, hairline, mono } from "@/components/site/tokens";
import { FEATURES } from "@/lib/site-content";

// Razlozi kao tehnički indeks: numerirani redovi umjesto kartica s ikonama.
export default function FeatureGrid() {
  return (
    <section aria-labelledby="prednosti-naslov" className="py-20 lg:py-28">
      <div className={container}>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Lijevi stupac — naslov i fotografija ugradnje */}
          <Reveal className="lg:col-span-5">
            <p className={eyebrow}>List F—01 / Zašto FSB Doors</p>
            <h2
              id="prednosti-naslov"
              className={`${display} mt-4 text-4xl font-semibold uppercase leading-none md:text-5xl`}
            >
              Pouzdani partner u{" "}
              <span className="text-primary">protupožarnoj zaštiti</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-gray">
              Kombiniramo stručnost, kvalitetu i pouzdanost kako bismo vam pružili
              najbolja rješenja za zaštitu vaših prostora.
            </p>

            <figure className="mt-10">
              <div className={`relative aspect-[4/3] overflow-hidden border ${hairline}`}>
                <Image
                  src="/images/ugradnja-protupozarnih-vrata.webp"
                  alt="Profesionalna ugradnja protupožarnih vrata"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover grayscale contrast-[1.05] brightness-[0.85]"
                />
                <span aria-hidden className="absolute inset-0 bg-primary/25 mix-blend-multiply" />
              </div>
              <figcaption
                className={`${mono} mt-3 flex items-baseline gap-3 text-[10px] uppercase tracking-[0.2em] text-gray`}
              >
                <span className="text-primary">F.1</span>
                Ugradnja — certificirani tehničari / 20+ godina iskustva
              </figcaption>
            </figure>
          </Reveal>

          {/* Desni stupac — numerirani indeks prednosti */}
          <Reveal className="lg:col-span-7">
            <ul className={`border-b ${hairline}`}>
              {FEATURES.map((feature, i) => (
                <li
                  key={feature.id}
                  className={`grid grid-cols-12 gap-x-4 gap-y-2 border-t ${hairline} py-5 md:py-6`}
                >
                  <span className={`${mono} col-span-2 text-sm text-gray md:col-span-1`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="col-span-10 md:col-span-11 md:pl-2">
                    <h3 className={`${display} text-2xl font-medium uppercase leading-tight`}>
                      {feature.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
