import { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt | FSB Doors",
  description: "Kontaktirajte FSB Solutions d.o.o. za sve informacije o protupožarnim vratima. Samoborska Cesta 91B i Samoborski Odvojak 1, 10000 Zagreb.",
};

const locations = [
  {
    name: "FSB d.o.o.",
    address: "Samoborska Cesta 91B",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6438.3273898673!2d15.875223!3d45.811062!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d1a0699a9dc5%3A0xf26ff3eba66388d6!2sSamoborska%20cesta%2091B%2C%2010000%2C%20Zagreb%2C%20Croatia!5e1!3m2!1sen!2sus!4v1779105245054!5m2!1sen!2sus",
  },
  {
    name: "FSB SOLUTIONS d.o.o.",
    address: "Samoborski Odvojak 1",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6438.34565421049!2d15.875127!3d45.810904!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d1a041da1359%3A0xaf04362b9c99e403!2sSamoborski%20Cesta%20odv.%201%2C%2010000%2C%20Zagreb%2C%20Croatia!5e1!3m2!1sen!2sus!4v1779105234450!5m2!1sen!2sus",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/kontakt.webp"
            alt="Kontakt"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Badge variant="light">Kontakt</Badge>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Javite nam se
            </h1>
            <p className="mt-6 text-xl text-white/80 leading-relaxed">
              Imate pitanja o našim proizvodima ili uslugama? Naš tim stoji vam na
              raspolaganju za sve informacije i besplatno savjetovanje.
            </p>
          </div>
        </Container>
      </section>

      <ContactForm />

      {/* Map Section */}
      <section className="py-20 lg:py-28 bg-light">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark">
              Posjetite nas
            </h2>
            <p className="mt-4 text-gray">
              Dvije lokacije u Zagrebu
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {locations.map((location) => (
              <div key={location.name}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-dark">{location.name}</p>
                    <p className="text-sm text-gray">{location.address}</p>
                  </div>
                </div>
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray/20">
                  <iframe
                    src={location.embedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                    title={`${location.name} lokacija`}
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
