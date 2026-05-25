"use client";

import { useState, useRef, useEffect } from "react";
import Container from "@/components/ui/Container";
import { gsap, ScrollTrigger } from "@/lib/animations";

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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const faqsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Left side animation
      if (leftRef.current) {
        const children = leftRef.current.children;
        gsap.fromTo(
          children,
          { x: -60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: leftRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // FAQ items stagger
      if (faqsRef.current) {
        const items = faqsRef.current.querySelectorAll(":scope > div");
        gsap.fromTo(
          items,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: faqsRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left side - Heading */}
          <div ref={leftRef} className="lg:sticky lg:top-32 lg:self-start">
            <span className="inline-block px-4 py-1.5 text-sm font-semibold text-primary bg-primary/10 rounded-full mb-6">
              Česta pitanja
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark leading-tight">
              Imate pitanja?<br />
              <span className="text-primary">Imamo odgovore</span>
            </h2>
            <p className="mt-6 text-xl text-gray leading-relaxed">
              Pronađite odgovore na najčešća pitanja o našim proizvodima i uslugama.
            </p>
            <div className="mt-10 p-6 bg-light rounded-2xl">
              <p className="text-dark font-medium">Ne pronalazite odgovor?</p>
              <p className="text-gray mt-2">
                Kontaktirajte nas direktno na{" "}
                <a href="mailto:info@fsb-zagreb.hr" className="text-primary hover:underline">
                  info@fsb-zagreb.hr
                </a>
              </p>
            </div>
          </div>

          {/* Right side - Accordion */}
          <div ref={faqsRef} className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 ${
                  openIndex === index
                    ? "border-primary/20 bg-primary/5"
                    : "border-gray/10 bg-light hover:border-gray/20"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-start justify-between p-6 lg:p-8 text-left"
                >
                  <span className={`text-lg lg:text-xl font-semibold pr-4 ${
                    openIndex === index ? "text-primary" : "text-dark"
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? "bg-primary text-white rotate-180"
                      : "bg-white text-gray"
                  }`}>
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 lg:px-8 pb-6 lg:pb-8 text-gray leading-relaxed text-lg">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
