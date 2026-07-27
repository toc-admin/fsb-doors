import { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";
import Reveal from "@/components/site/Reveal";
import { container, display, eyebrow, hairline, mono } from "@/components/site/tokens";

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
      {/* Zaglavlje lista */}
      <section className={`border-b ${hairline} bg-dark py-16 lg:py-24`}>
        <Reveal className={container}>
          <div className="max-w-3xl">
            <p className={eyebrow}>List KT—01 / Kontakt</p>
            <h1
              className={`${display} mt-4 text-4xl font-semibold uppercase leading-none md:text-5xl lg:text-6xl`}
            >
              Javite nam se
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray md:text-lg">
              Imate pitanja o našim proizvodima ili uslugama? Naš tim stoji vam na
              raspolaganju za sve informacije i besplatno savjetovanje.
            </p>
          </div>
        </Reveal>
      </section>

      <ContactForm />

      {/* Lokacije — dvije karte kao tehnički prilozi */}
      <section aria-labelledby="lokacije-naslov" className={`border-t ${hairline} bg-light py-20 lg:py-28`}>
        <div className={container}>
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 pb-10 lg:pb-14">
              <div>
                <p className={eyebrow}>List KT—03 / Lokacije</p>
                <h2
                  id="lokacije-naslov"
                  className={`${display} mt-4 text-4xl font-semibold uppercase leading-none md:text-5xl`}
                >
                  Posjetite nas
                </h2>
              </div>
              <p className={`${mono} text-[11px] uppercase tracking-[0.22em] text-gray`}>
                2 lokacije — Zagreb
              </p>
            </div>
          </Reveal>

          <div className="grid gap-10 md:grid-cols-2 md:gap-8">
            {locations.map((location, index) => (
              <Reveal key={location.name} delay={index * 0.08}>
                <figure>
                  <figcaption
                    className={`${mono} mb-3 flex flex-wrap items-baseline gap-x-4 gap-y-1 text-[11px] uppercase tracking-[0.2em] text-gray`}
                  >
                    <span className="text-primary">L.{index + 1}</span>
                    <span className="text-foreground">{location.name}</span>
                    <span>{location.address}</span>
                  </figcaption>
                  <div className={`relative aspect-video overflow-hidden border ${hairline} bg-dark`}>
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
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
