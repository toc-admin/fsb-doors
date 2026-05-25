import { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Ugostiteljstvo | FSB Doors",
  description: "Protupožarna rješenja za hotele, restorane i ostale ugostiteljske objekte. Sigurnost gostiju je prioritet.",
};

const applications = [
  {
    title: "Hoteli",
    description: "Protupožarna vrata za hotelske sobe, hodnike, stubišta i tehničke prostore.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: "Restorani i kafići",
    description: "Vrata za kuhinje, skladišta i prostore s povećanim rizikom od požara.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
      </svg>
    ),
  },
  {
    title: "Wellness centri",
    description: "Specijalna rješenja za saune, bazene i prostore s visokom vlažnosti.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
  },
  {
    title: "Konferencijski centri",
    description: "Vrata za dvorane, foajee i pomoćne prostore velikih kapaciteta.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
];

const benefits = [
  "Usklađenost s hrvatskim i EU propisima o protupožarnoj zaštiti",
  "Estetska rješenja koja se uklapaju u dizajn interijera",
  "Tihi rad samozatvarača za udobnost gostiju",
  "Opcije za pristupačnost osoba s invaliditetom",
  "Brza ugradnja uz minimalne smetnje za goste",
  "Redovito održavanje i brza intervencija",
];

export default function HospitalityPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/ugostiteljstvo.webp"
            alt="Ugostiteljstvo"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Badge variant="light">Primjena</Badge>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Ugostiteljstvo
            </h1>
            <p className="mt-6 text-xl text-white/80 leading-relaxed">
              Protupožarna rješenja za hotele, restorane i ostale ugostiteljske objekte.
              Sigurnost vaših gostiju je naš prioritet.
            </p>
            <div className="mt-10">
              <Button href="/kontakt" variant="primary" size="lg">
                Zatražite ponudu
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Applications */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark">
              Gdje koristimo protupožarna vrata
            </h2>
            <p className="mt-4 text-gray max-w-2xl mx-auto">
              U ugostiteljstvu, protupožarna vrata štite goste i osoblje u različitim prostorima.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="p-8 rounded-2xl bg-light hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary">
                  {app.icon}
                </div>
                <h3 className="mt-6 text-xl font-bold text-dark">{app.title}</h3>
                <p className="mt-3 text-gray">{app.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28 bg-light">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/ugostiteljstvo.webp"
                alt="Hotel"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-dark">
                Zašto odabrati nas za ugostiteljske objekte
              </h2>
              <p className="mt-4 text-gray leading-relaxed">
                Razumijemo specifične zahtjeve ugostiteljske industrije - potrebu za estetikom,
                tihim radom i minimalnim smetnjama za goste.
              </p>
              <ul className="mt-8 space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-dark">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <CTA
        title="Planirate gradnju ili renovaciju?"
        subtitle="Kontaktirajte nas u ranoj fazi projekta za optimalno planiranje protupožarne zaštite."
      />
    </>
  );
}
