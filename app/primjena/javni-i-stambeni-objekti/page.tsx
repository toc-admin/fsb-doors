import { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Javni i stambeni objekti | FSB Doors",
  description: "Rješenja za škole, bolnice, stambene zgrade i druge javne prostore s naglaskom na sigurnost.",
};

const applications = [
  {
    title: "Škole i obrazovne ustanove",
    description: "Protupožarna vrata za učionice, hodnike, stubišta i pomoćne prostore.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: "Bolnice i zdravstvene ustanove",
    description: "Specijalna vrata za operacijske sale, odsjeke i tehničke prostore.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: "Stambene zgrade",
    description: "Vrata za hodnike, stubišta i zajedničke prostore višestambenih zgrada.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
  },
  {
    title: "Domovi za starije",
    description: "Vrata prilagođena potrebama starijih osoba i osoba s invaliditetom.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
];

const benefits = [
  "Usklađenost s propisima za javne objekte",
  "Opcije za osobe s invaliditetom (šira vrata, niži pragovi)",
  "Integrirani sustavi za evakuaciju",
  "Otpornost na vandalizam",
  "Dugotrajnost i minimalno održavanje",
  "Mogućnost integracije s vatrodojavnim sustavom",
];

export default function PublicResidentialPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/javni-i-stambeni-objekti.webp"
            alt="Javni i stambeni objekti"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Badge variant="light">Primjena</Badge>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Javni i stambeni objekti
            </h1>
            <p className="mt-6 text-xl text-white/80 leading-relaxed">
              Rješenja za škole, bolnice, stambene zgrade i druge javne prostore.
              Sigurnost korisnika je naš prioritet.
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
              Rješenja za javne i stambene prostore
            </h2>
            <p className="mt-4 text-gray max-w-2xl mx-auto">
              Naša protupožarna vrata štite korisnike javnih ustanova i stanare stambenih zgrada.
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
                src="/images/javni-i-stambeni-objekti.webp"
                alt="Stambena zgrada"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-dark">
                Prilagođeno javnim prostorima
              </h2>
              <p className="mt-4 text-gray leading-relaxed">
                Naša vrata dizajnirana su za intenzivnu upotrebu u javnim prostorima,
                s naglaskom na pristupačnost i dugotrajnost.
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
        title="Projektirate javni ili stambeni objekt?"
        subtitle="Kontaktirajte nas za konzultacije o protupožarnoj zaštiti i pristupačnosti."
      />
    </>
  );
}
