import { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Stats from "@/components/sections/Stats";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "O nama | FSB Doors",
  description: "FSB DOORS d.o.o. - Više od 20 godina iskustva u izradi i ugradnji protupožarnih vrata vrhunske kvalitete.",
};

const values = [
  {
    title: "Kvaliteta",
    description: "Koristimo samo vrhunske materijale i slijedimo najstrože standarde u proizvodnji.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    title: "Pouzdanost",
    description: "Ono što obećamo, to i isporučimo. Vaša sigurnost je naša odgovornost.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Stručnost",
    description: "Naš tim čine iskusni stručnjaci s dubokim poznavanjem protupožarne zaštite.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: "Partnerstvo",
    description: "Gradimo dugoročne odnose s klijentima temeljene na povjerenju i transparentnosti.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
];

const certifications = [
  "EN 1634-1 - Testiranje protupožarnih vrata",
  "CE oznaka za sve proizvode",
  "ISO 9001 - Sustav upravljanja kvalitetom",
  "Hrvatska norma HRN EN 1125 - Evakuacijski okov",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/poslovni-objekti.webp"
            alt="O nama"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Badge variant="light">O nama</Badge>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              FSB DOORS d.o.o.
            </h1>
            <p className="mt-6 text-xl text-white/80 leading-relaxed">
              Više od 20 godina izrađujemo i ugrađujemo protupožarna vrata vrhunske kvalitete.
              Naša misija je zaštititi ljude i imovinu kroz inovativna rješenja protupožarne zaštite.
            </p>
          </div>
        </Container>
      </section>

      <Stats />

      {/* Story Section */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-dark">
                Naša priča
              </h2>
              <div className="mt-6 space-y-4 text-gray leading-relaxed">
                <p>
                  FSB DOORS d.o.o. osnovana je s jasnom vizijom - postati vodeći partner
                  u protupožarnoj zaštiti na hrvatskom tržištu. Godinama smo gradili svoje
                  znanje i iskustvo, prateći najnovije tehnologije i standarde u industriji.
                </p>
                <p>
                  Danas smo ponosni na tisuće uspješno realiziranih projekata diljem Hrvatske.
                  Od manjih poslovnih prostora do velikih industrijskih kompleksa, naša vrata
                  štite ljude i imovinu u najrazličitijim okruženjima.
                </p>
                <p>
                  Naš tim čine iskusni stručnjaci koji razumiju specifičnosti svakog projekta.
                  Savjetujemo, planiramo, ugrađujemo i održavamo - pružamo kompletnu uslugu
                  protupožarne zaštite.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/savjetovanje-o-protupozarnoj-zastiti.webp"
                alt="Naš tim"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-light">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark">
              Naše vrijednosti
            </h2>
            <p className="mt-4 text-gray max-w-2xl mx-auto">
              Principi koji nas vode u svakodnevnom radu i odnosu s klijentima.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="p-8 rounded-2xl bg-white hover:shadow-xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary">
                  {value.icon}
                </div>
                <h3 className="mt-6 text-xl font-bold text-dark">{value.title}</h3>
                <p className="mt-3 text-gray">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Certifications */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/planiranje-protupozarne-zastite.webp"
                alt="Certifikati"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-dark">
                Certifikati i standardi
              </h2>
              <p className="mt-4 text-gray leading-relaxed">
                Svi naši proizvodi posjeduju potrebne certifikate i ispunjavaju najstrože
                europske standarde protupožarne zaštite.
              </p>
              <ul className="mt-8 space-y-4">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-dark">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <CTA
        title="Postanite naš partner"
        subtitle="Pridružite se stotinama zadovoljnih klijenata koji su nam povjerili zaštitu svojih prostora."
      />
    </>
  );
}
