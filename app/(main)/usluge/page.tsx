import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServiceList from "@/components/sections/ServiceList";
import CTA from "@/components/sections/CTA";
import Reveal from "@/components/site/Reveal";
import SectionRule from "@/components/site/SectionRule";
import { container, display, eyebrow, hairline, mono } from "@/components/site/tokens";

export const metadata: Metadata = {
  title: "Usluge | FSB Doors",
  description: "Kompletne usluge protupožarne zaštite - savjetovanje, planiranje, ugradnja i održavanje protupožarnih vrata.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Zaglavlje lista — tehnički pregled usluga */}
      <section className="pt-12 md:pt-16">
        <div className={container}>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <Reveal className="flex flex-col justify-center lg:col-span-7">
              <p className={eyebrow}>List U—01 / Usluge</p>
              <h1
                className={`${display} mt-4 text-4xl font-semibold uppercase leading-none md:text-5xl lg:text-6xl`}
              >
                Naše usluge
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-gray md:text-lg">
                Pružamo kompletne usluge protupožarne zaštite - od savjetovanja i
                planiranja do profesionalne ugradnje i redovitog održavanja.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="/kontakt"
                  className={`${mono} bg-primary px-6 py-3.5 text-[13px] font-medium uppercase tracking-[0.16em] text-[#f5f0ea] transition-colors hover:bg-[#9e1b33]`}
                >
                  Kontaktirajte nas
                </Link>
              </div>
            </Reveal>

            {/* Terenska snimka — ugradnja na objektu */}
            <Reveal delay={0.08} className="lg:col-span-5">
              <figure className={`border ${hairline}`}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/foto/ugradnja-atrij-radnici.webp"
                    alt="FSB monteri na skeli tijekom ugradnje"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover grayscale contrast-[1.05] brightness-[0.85]"
                    priority
                  />
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-primary/25 mix-blend-multiply"
                  />
                </div>
                <figcaption
                  className={`${mono} flex items-baseline justify-between gap-4 px-4 py-3 text-[10px] uppercase tracking-[0.2em] text-gray`}
                >
                  <span>Snimka s terena</span>
                  <span>Ugradnja</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="pt-14 lg:pt-20">
        <SectionRule code="U—U / 02" />
      </div>

      <ServiceList />

      <CTA
        title="Trebate stručnu pomoć?"
        subtitle="Naš tim stoji vam na raspolaganju za sva pitanja vezana uz protupožarnu zaštitu vašeg objekta."
      />
    </>
  );
}
