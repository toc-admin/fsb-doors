import RevijaHeader from "@/components/concepts/premium/RevijaHeader";
import HeroSpread from "@/components/concepts/premium/HeroSpread";
import PullLine from "@/components/concepts/premium/PullLine";
import ProductsSpread from "@/components/concepts/premium/ProductsSpread";
import ProcessSpread from "@/components/concepts/premium/ProcessSpread";
import RndFeature from "@/components/concepts/premium/RndFeature";
import ProjectsSpread from "@/components/concepts/premium/ProjectsSpread";
import ClosingSpread from "@/components/concepts/premium/ClosingSpread";
import RevijaFooter from "@/components/concepts/premium/RevijaFooter";

// Koncept 3 — "Revija": stranica složena kao niz araka arhitektonske
// revije o tvrtki FSB Doors, s folio-recima, izvučenim rečenicama i
// fotografijom u velikom, uredničkom formatu.
export default function ConceptPage() {
  return (
    <>
      <RevijaHeader />
      <main>
        <HeroSpread />

        <PullLine>
          „Sva vrata izrađujemo po mjeri u vlastitom pogonu, prema izmjeri i
          zahtjevima svakog projekta.”
        </PullLine>

        <ProductsSpread />

        <PullLine indent>
          „Izrađujemo detaljnu ponudu i tehničke sheme — nakon potvrde, proizvod
          ide u proizvodnju.”
        </PullLine>

        <ProcessSpread />

        <div className="h-16 md:h-24" aria-hidden="true" />

        <RndFeature />

        <PullLine>
          „Svaki proizvod prolazi ispitivanja u akreditiranim institucijama.”
        </PullLine>

        <ProjectsSpread />

        <div className="h-16 md:h-24" aria-hidden="true" />

        <ClosingSpread />
      </main>
      <RevijaFooter />
    </>
  );
}
