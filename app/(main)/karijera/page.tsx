import { Metadata } from "next";
import CareerHero from "@/components/sections/CareerHero";
import JobsList from "@/components/sections/JobsList";
import CTA from "@/components/sections/CTA";
import { getActiveJobs } from "@/lib/jobs";

export const metadata: Metadata = {
  title: "Karijera | FSB Doors",
  description: "Pridružite se FSB DOORS timu. Pregledajte otvorene pozicije i prijavite se za posao u vodećoj tvrtki za protupožarnu zaštitu.",
};

export default function CareersPage() {
  const activeJobs = getActiveJobs();

  return (
    <>
      <CareerHero />
      <JobsList jobs={activeJobs} />
      <CTA
        title="Imate pitanja?"
        subtitle="Kontaktirajte naš HR odjel za sve informacije o otvorenim pozicijama i procesu zapošljavanja."
        primaryCta={{ text: "Kontaktirajte HR", href: "mailto:hr@fsb-zagreb.hr" }}
      />
    </>
  );
}
