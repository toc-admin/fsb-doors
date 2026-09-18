import Hero from "@/components/site/Hero";
import Products from "@/components/site/Products";
import Process from "@/components/site/Process";
import Production from "@/components/site/Production";
import Rnd from "@/components/site/Rnd";
import Projects from "@/components/site/Projects";
import StatsStrip from "@/components/site/StatsStrip";
import Cta from "@/components/site/Cta";
import SectionRule from "@/components/site/SectionRule";

// Naslovnica — smjer "Inženjering": tehnički list postao brend.
export default function Home() {
  return (
    <>
      <Hero />
      <SectionRule code="A—A / 02" />
      <Products />
      <SectionRule code="B—B / 03" />
      <Process />
      <Production />
      <Rnd />
      <SectionRule code="C—C / 06" />
      <Projects />
      <StatsStrip />
      <Cta />
    </>
  );
}
