import BoldHeader from "@/components/concepts/bold/BoldHeader";
import BoldHero from "@/components/concepts/bold/BoldHero";
import BoldMarquee from "@/components/concepts/bold/BoldMarquee";
import BoldProducts from "@/components/concepts/bold/BoldProducts";
import BoldProcess from "@/components/concepts/bold/BoldProcess";
import BoldRnd from "@/components/concepts/bold/BoldRnd";
import BoldSectors from "@/components/concepts/bold/BoldSectors";
import BoldStats from "@/components/concepts/bold/BoldStats";
import BoldCta from "@/components/concepts/bold/BoldCta";
import BoldFooter from "@/components/concepts/bold/BoldFooter";

// Koncept 3 — "Blok": stranica složena od punih blokova brenda,
// s motivom dvokrilnih vrata koja se razmiču na scroll.
export default function ConceptPage() {
  return (
    <>
      <BoldHeader />
      <main>
        <BoldHero />
        <BoldMarquee />
        <BoldProducts />
        <BoldProcess />
        <BoldRnd />
        <BoldSectors />
        <BoldStats />
        <BoldCta />
      </main>
      <BoldFooter />
    </>
  );
}
