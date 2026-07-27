"use client";

import { useState } from "react";
import Reveal from "@/components/site/Reveal";
import { container, display, eyebrow, hairline, mono } from "@/components/site/tokens";

const testimonials = [
  {
    quote: "FSB Doors je bio izvrstan partner na našem hotelskom projektu. Profesionalan pristup, kvalitetni proizvodi i precizna ugradnja. Preporučujemo svima koji traže pouzdana protupožarna rješenja.",
    author: "Marko Horvat",
    role: "Direktor projekta",
    company: "Luxury Hotels Group",
    initials: "MH",
  },
  {
    quote: "Surađujemo s FSB-om već 10 godina na raznim industrijskim projektima. Njihova stručnost u protupožarnoj zaštiti i fleksibilnost u prilagodbi našim potrebama čini ih idealnim partnerom.",
    author: "Ana Petrović",
    role: "Voditelj održavanja",
    company: "Industrija d.o.o.",
    initials: "AP",
  },
  {
    quote: "Odabrali smo FSB Doors za naš novi poslovni centar i nismo požalili. Od savjetovanja do ugradnje, sve je proteklo besprijekorno. Vrata su estetski savršena i funkcionalna.",
    author: "Ivan Kovačević",
    role: "Arhitekt",
    company: "Studio K Arhitektura",
    initials: "IK",
  },
];

// Izjave klijenata kao dosje: jedan citat u kadru, mono navigacija po zapisima.
export default function Testimonials() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <section aria-labelledby="reference-naslov" className="py-20 lg:py-28">
      <div className={container}>
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4 pb-10 lg:pb-14">
            <div>
              <p className={eyebrow}>List T—01 / Reference klijenata</p>
              <h2
                id="reference-naslov"
                className={`${display} mt-4 text-4xl font-semibold uppercase leading-none md:text-5xl lg:text-6xl`}
              >
                Povjerenje koje smo izgradili
              </h2>
            </div>
            <p className={`${mono} text-[11px] uppercase tracking-[0.22em] text-gray`}>
              {testimonials.length} zapisa — hoteli / industrija / arhitektura
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className={`border ${hairline} bg-light`}>
            {/* Zaglavlje zapisa */}
            <div
              className={`${mono} flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b ${hairline} px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-gray md:px-10`}
            >
              <span className="text-primary">Zapis {String(active + 1).padStart(2, "0")}</span>
              <span>{current.company}</span>
              <span className="ml-auto">{current.initials}</span>
            </div>

            <blockquote className="px-6 py-10 md:px-10 md:py-14">
              <p className="max-w-3xl text-xl leading-relaxed text-foreground md:text-2xl">
                &ldquo;{current.quote}&rdquo;
              </p>
              <footer
                className={`${mono} mt-8 text-[12px] uppercase tracking-[0.18em] text-gray`}
              >
                — {current.author} / {current.role}, {current.company}
              </footer>
            </blockquote>
          </div>

          {/* Navigacija po zapisima — kvadratni mono indeksi */}
          <div className="mt-6 flex gap-3">
            {testimonials.map((t, index) => (
              <button
                key={t.author}
                onClick={() => setActive(index)}
                aria-label={`Izjava ${index + 1} — ${t.author}`}
                aria-pressed={active === index}
                className={`${mono} border px-3.5 py-2 text-[11px] tracking-[0.16em] transition-colors ${
                  active === index
                    ? "border-primary text-primary"
                    : `${hairline} text-gray hover:border-[#8a8f98] hover:text-foreground`
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
