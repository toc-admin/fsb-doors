import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ServiceList from "@/components/sections/ServiceList";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Usluge | FSB Doors",
  description: "Kompletne usluge protupožarne zaštite - savjetovanje, planiranje, ugradnja i održavanje protupožarnih vrata.",
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Naše usluge"
        subtitle="Pružamo kompletne usluge protupožarne zaštite - od savjetovanja i planiranja do profesionalne ugradnje i redovitog održavanja."
        image="/images/ugradnja-protupozarnih-vrata.webp"
        primaryCta={{ text: "Kontaktirajte nas", href: "/kontakt" }}
      />

      <ServiceList />

      <CTA
        title="Trebate stručnu pomoć?"
        subtitle="Naš tim stoji vam na raspolaganju za sva pitanja vezana uz protupožarnu zaštitu vašeg objekta."
      />
    </>
  );
}
