import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import FeatureGrid from "@/components/sections/FeatureGrid";
import RndCertification from "@/components/sections/RndCertification";
import ProductGrid from "@/components/sections/ProductGrid";
import Process from "@/components/sections/Process";
import SectorGrid from "@/components/sections/SectorGrid";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import ProjectGrid from "@/components/sections/ProjectGrid";
import BlogGrid from "@/components/sections/BlogGrid";
import PartnerSection from "@/components/sections/PartnerSection";
import { getFeaturedProjects } from "@/lib/projects";
import { getLatestBlogPosts } from "@/lib/blog";

export default function Home() {
  const featuredProjects = getFeaturedProjects(4);
  const latestPosts = getLatestBlogPosts(3);

  return (
    <>
      <Hero
        title="Vrata za budućnost"
        subtitle="Protupožarna vrata vrhunske kvalitete koja štite vaš prostor i osiguravaju sigurnost."
        image="/images/hero.webp"
        primaryCta={{ text: "Zatražite ponudu", href: "/kontakt" }}
        secondaryCta={{ text: "Naši proizvodi", href: "/proizvodi" }}
        badge="FSB DOORS d.o.o."
      />

      <Marquee />

      <ProductGrid />

      <Process />

      <FeatureGrid />

      <RndCertification />

      <SectorGrid />

      <ProjectGrid
        projects={featuredProjects}
        headingText="Izabrani projekti"
        maxProjects={4}
      />

      <Testimonials />

      <Stats />

      <PartnerSection />

      <BlogGrid
        posts={latestPosts}
        headingText="Najnoviji članci"
        maxPosts={3}
      />

      <FAQ />

      <CTA
        title="Spremni za siguran prostor?"
        subtitle="Kontaktirajte nas danas i saznajte kako vam možemo pomoći u odabiru optimalnog rješenja za protupožarnu zaštitu vašeg objekta."
        primaryCta={{ text: "Zatražite ponudu", href: "/kontakt" }}
        secondaryCta={{ text: "Pogledajte proizvode", href: "/proizvodi" }}
      />
    </>
  );
}
