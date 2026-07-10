import Header from "@/components/concepts/engineering/Header";
import Hero from "@/components/concepts/engineering/Hero";
import Products from "@/components/concepts/engineering/Products";
import Process from "@/components/concepts/engineering/Process";
import Rnd from "@/components/concepts/engineering/Rnd";
import Projects from "@/components/concepts/engineering/Projects";
import StatsStrip from "@/components/concepts/engineering/StatsStrip";
import Cta from "@/components/concepts/engineering/Cta";
import Footer from "@/components/concepts/engineering/Footer";
import SectionRule from "@/components/concepts/engineering/SectionRule";

// Koncept 1 — "Inženjering": tehnički list postao brend.
export default function ConceptPage() {
  return (
    <>
      <Header />
      <main id="top" className="bg-background text-foreground">
        <Hero />
        <SectionRule code="A—A / 02" />
        <Products />
        <SectionRule code="B—B / 03" />
        <Process />
        <Rnd />
        <SectionRule code="C—C / 05" />
        <Projects />
        <StatsStrip />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
