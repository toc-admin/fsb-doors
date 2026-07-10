import { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Industrija | FSB Doors",
  description: "Robusna protupožarna vrata za proizvodne hale, skladišta i industrijske komplekse.",
};

const applications = [
  {
    title: "Proizvodne hale",
    description: "Robusna vrata za odvojene proizvodne zone i tehničke prostore.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
  },
  {
    title: "Skladišta",
    description: "Vrata za skladišne prostore, hladnjače i logističke centre.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    title: "Energetska postrojenja",
    description: "Specijalna vrata za elektrane, trafostanice i energetske objekte.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Kemijska industrija",
    description: "Vrata s posebnim karakteristikama za rad s opasnim tvarima.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 15.5m14.8-.2l-1.5-.375a9.063 9.063 0 01-3.3.313M5 14.5l1.5-.313a9.063 9.063 0 013.3.313M5 14.5l-.8 2.4c-.32.96.3 1.954 1.296 2.074l4.404.488A24.232 24.232 0 0112 19.5a24.232 24.232 0 012.1-.038l4.404-.488c.996-.12 1.616-1.114 1.296-2.074l-.8-2.4M12 15a3 3 0 11-6 0 3 3 0 016 0zm6 0a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const benefits = [
  "Visoke klase otpornosti do EI120",
  "Otpornost na teške uvjete rada",
  "Mogućnost automatizacije otvaranja",
  "Integracija s industrijskim sustavima",
  "Jednostavno održavanje",
  "Dugotrajnost i pouzdanost",
];

export default function IndustryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/industrija.webp"
            alt="Industrija"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Badge variant="light">Primjena</Badge>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Industrija
            </h1>
            <p className="mt-6 text-xl text-white/80 leading-relaxed">
              Robusna protupožarna vrata za proizvodne hale, skladišta i industrijske komplekse.
              Dizajnirana za najzahtjevnije uvjete rada.
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
              Industrijska rješenja
            </h2>
            <p className="mt-4 text-gray max-w-2xl mx-auto">
              Naša protupožarna vrata projektirana su za najzahtjevnije industrijske primjene.
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
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-dark">
                Izdržljiva rješenja za industriju
              </h2>
              <p className="mt-4 text-gray leading-relaxed">
                Naša industrijska vrata dizajnirana su za intenzivnu upotrebu u teškim
                uvjetima - od visokih temperatura do korozivnih sredina.
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
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/industrija.webp"
                alt="Industrijski objekt"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <CTA
        title="Trebate industrijsko rješenje?"
        subtitle="Kontaktirajte nas za konzultacije o protupožarnoj zaštiti vašeg industrijskog objekta."
      />
    </>
  );
}
