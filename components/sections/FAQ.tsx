"use client";

import { useState } from "react";
import Reveal from "@/components/site/Reveal";
import { container, display, eyebrow, hairline, mono } from "@/components/site/tokens";

const faqs = [
  {
    question: "Koje klase otpornosti na požar nudite?",
    answer:
      "Nudimo protupožarna vrata s klasama otpornosti EI30, EI60, EI90 i EI120. Klasa otpornosti označava vrijeme u minutama tijekom kojeg vrata zadržavaju integritet i izolacijska svojstva. Naši stručnjaci pomoći će vam odabrati odgovarajuću klasu prema zahtjevima vašeg projekta i zakonskim propisima.",
  },
  {
    question: "Koliko traje ugradnja protupožarnih vrata?",
    answer:
      "Vrijeme ugradnje ovisi o broju vrata i složenosti projekta. Standardna ugradnja jednih vrata traje nekoliko sati, dok veći projekti mogu zahtijevati više dana. Nakon pregleda lokacije, dostavit ćemo vam precizne informacije o trajanju ugradnje.",
  },
  {
    question: "Jesu li vaši proizvodi certificirani?",
    answer:
      "Da, svi naši proizvodi posjeduju potrebne europske certifikate i ispunjavaju zahtjeve hrvatske regulative. Protupožarna vrata testirana su prema normi EN 1634-1 i označena CE oznakom. Uz svaki proizvod dostavljamo kompletnu dokumentaciju.",
  },
  {
    question: "Nudite li jamstvo na proizvode?",
    answer:
      "Nudimo višegodišnje jamstvo na sve naše proizvode. Standardno jamstvo iznosi 2 godine, a za određene proizvode i duže. Jamstvo pokriva tvorničke greške i defekte materijala. Uz redovito održavanje, naša vrata služe pouzdano godinama.",
  },
  {
    question: "Mogu li dobiti vrata po mjeri?",
    answer:
      "Apsolutno! Izrađujemo protupožarna vrata po mjeri prema vašim specifičnim zahtjevima. Bilo da trebate nestandardne dimenzije, posebne završne obrade ili specifična okovja, naš tim je spreman realizirati vaš projekt.",
  },
  {
    question: "Kako održavati protupožarna vrata?",
    answer:
      "Preporučujemo godišnji pregled i održavanje protupožarnih vrata. Redovito održavanje uključuje provjeru brtvi, podmazivanje mehanizama, kontrolu samozatvarača i provjeru ispravnosti svih komponenti. Nudimo godišnje ugovore o održavanju za bezbrižno korištenje.",
  },
];

// Pitanja kao numerirani redovi tehničkog upitnika: hairline okviri,
// kvadratni +/− indikator umjesto zaobljene ikone.
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section aria-labelledby="faq-naslov" className="py-20 lg:py-28">
      <div className={container}>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Lijevi stupac — naslov */}
          <Reveal className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <p className={eyebrow}>List Q—01 / Česta pitanja</p>
            <h2
              id="faq-naslov"
              className={`${display} mt-4 text-4xl font-semibold uppercase leading-none md:text-5xl`}
            >
              Imate pitanja?
              <br />
              <span className="text-primary">Imamo odgovore</span>
            </h2>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-gray">
              Pronađite odgovore na najčešća pitanja o našim proizvodima i uslugama.
            </p>
            <div className={`mt-10 border ${hairline} bg-light p-6`}>
              <p className={`${mono} text-[11px] uppercase tracking-[0.22em] text-gray`}>
                Ne pronalazite odgovor?
              </p>
              <a
                href="mailto:info@fsb-zagreb.hr"
                className={`${mono} mt-3 block text-base text-foreground transition-colors hover:text-primary`}
              >
                info@fsb-zagreb.hr
              </a>
            </div>
          </Reveal>

          {/* Desni stupac — akordeon */}
          <Reveal className={`border-b ${hairline} lg:col-span-8`}>
            {faqs.map((faq, index) => {
              const open = openIndex === index;
              return (
                <div key={faq.question} className={`border-t ${hairline}`}>
                  <button
                    onClick={() => setOpenIndex(open ? null : index)}
                    aria-expanded={open}
                    className="group flex w-full items-baseline gap-5 py-5 text-left md:py-6"
                  >
                    <span
                      className={`${mono} text-[11px] tracking-[0.2em] ${
                        open ? "text-primary" : "text-gray"
                      }`}
                    >
                      P.{String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`${display} flex-1 pr-4 text-xl font-medium uppercase leading-tight md:text-2xl ${
                        open ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`${mono} flex h-7 w-7 shrink-0 items-center justify-center self-center border text-sm transition-colors ${
                        open
                          ? "border-primary text-primary"
                          : `${hairline} text-gray group-hover:border-[#8a8f98] group-hover:text-foreground`
                      }`}
                    >
                      {open ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      open ? "max-h-[40rem]" : "max-h-0"
                    }`}
                  >
                    <p className="max-w-2xl pb-6 pl-12 pr-4 text-sm leading-relaxed text-gray md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
