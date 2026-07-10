import EditorialHeader from "@/components/concepts/editorial/EditorialHeader";
import KatalogHero from "@/components/concepts/editorial/KatalogHero";
import ProductsChapter from "@/components/concepts/editorial/ProductsChapter";
import ProcessChapter from "@/components/concepts/editorial/ProcessChapter";
import RndChapter from "@/components/concepts/editorial/RndChapter";
import SectorsChapter from "@/components/concepts/editorial/SectorsChapter";
import StatsColophon from "@/components/concepts/editorial/StatsColophon";
import CtaSection from "@/components/concepts/editorial/CtaSection";
import EditorialFooter from "@/components/concepts/editorial/EditorialFooter";

// Koncept 2 — "Katalog": švicarski tehnički editorial. Stranica je složena
// kao premium tehnički katalog s indeksiranim poglavljima.
export default function ConceptPage() {
  return (
    <>
      <EditorialHeader />
      <main>
        <KatalogHero />
        <ProductsChapter />
        <ProcessChapter />
        <RndChapter />
        <SectorsChapter />
        <StatsColophon />
        <CtaSection />
      </main>
      <EditorialFooter />
    </>
  );
}
