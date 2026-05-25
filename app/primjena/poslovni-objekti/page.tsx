import { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Poslovni objekti | FSB Doors",
  description: "Suvremena protupožarna vrata za urede, poslovne centre i administrativne zgrade.",
};

const applications = [
  {
    title: "Uredske zgrade",
    description: "Vrata za urede, hodnik, stubišta i pomoćne prostore.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    title: "Poslovni centri",
    description: "Kompleksna rješenja za višenamjenske poslovne komplekse.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: "Banke i financije",
    description: "Sigurnosna vrata za trezore, serverske sobe i uredske prostore.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
  },
  {
    title: "IT i data centri",
    description: "Specijalna vrata za serverske sobe i tehničke prostore.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
];

const benefits = [
  "Integracija s pristupnim sustavima kontrole",
  "Ostakljena vrata za moderan izgled ureda",
  "Tihi samozatvarači za udobnost zaposlenika",
  "Usklađenost s propisima o zaštiti na radu",
  "Opcije za evakuacijske puteve",
  "Mogućnost povezivanja s vatrodojavnim sustavom",
];

export default function CommercialPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/poslovni-objekti.webp"
            alt="Poslovni objekti"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Badge variant="light">Primjena</Badge>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Poslovni objekti
            </h1>
            <p className="mt-6 text-xl text-white/80 leading-relaxed">
              Suvremena protupožarna vrata za urede, poslovne centre i administrativne zgrade.
              Kombinacija sigurnosti i profesionalnog izgleda.
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
              Rješenja za poslovne prostore
            </h2>
            <p className="mt-4 text-gray max-w-2xl mx-auto">
              Naša protupožarna vrata štite zaposlenike i imovinu u različitim poslovnim okruženjima.
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
                Prednosti za poslovne objekte
              </h2>
              <p className="mt-4 text-gray leading-relaxed">
                Naša vrata dizajnirana su za moderne poslovne prostore - kombiniraju sigurnost
                s estetikom i funkcionalnosti.
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
                src="/images/poslovni-objekti.webp"
                alt="Poslovni objekt"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <CTA
        title="Gradite ili renovirate poslovni prostor?"
        subtitle="Kontaktirajte nas za konzultacije o optimalnoj protupožarnoj zaštiti vašeg objekta."
      />
    </>
  );
}
