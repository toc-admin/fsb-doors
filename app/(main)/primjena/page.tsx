import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ApplicationGrid from "@/components/sections/ApplicationGrid";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Primjena | FSB Doors",
  description: "Protupožarna vrata za sve vrste objekata - ugostiteljstvo, poslovne objekte, javne i stambene objekte te industriju.",
};

export default function ApplicationsPage() {
  return (
    <>
      <Hero
        title="Područja primjene"
        subtitle="Naša protupožarna vrata štite različite vrste objekata - od hotela i poslovnih zgrada do industrijskih postrojenja. Za svaki sektor nudimo prilagođena rješenja."
        image="/images/poslovni-objekti.webp"
        primaryCta={{ text: "Zatražite ponudu", href: "/kontakt" }}
      />

      <ApplicationGrid showHeading={false} />

      <CTA
        title="Imate specifične zahtjeve?"
        subtitle="Naši stručnjaci pomoći će vam pronaći optimalno rješenje za vaš objekt. Kontaktirajte nas za besplatno savjetovanje."
      />
    </>
  );
}
