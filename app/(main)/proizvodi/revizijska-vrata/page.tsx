import { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import ProductCard from "@/components/ui/ProductCard";
import CTA from "@/components/sections/CTA";
import { getCategoryBySlug, getProductsByCategory } from "@/lib/products";

const category = getCategoryBySlug("revizijska-vrata")!;
const products = getProductsByCategory("revizijska-vrata");

export const metadata: Metadata = {
  title: `${category.name} | FSB Doors`,
  description: category.description,
};

export default function InspectionDoorsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover opacity-30"
          />
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <span className="w-2 h-2 bg-primary rounded-full" />
              Kategorija proizvoda
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {category.name}
            </h1>
            <p className="mt-6 text-xl text-white/80 leading-relaxed">
              {category.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {category.features.map((feature, i) => (
                <span
                  key={i}
                  className="px-4 py-2 text-sm font-medium text-white bg-white/10 backdrop-blur-sm rounded-full"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Products Grid */}
      <section className="py-20 lg:py-28 bg-light">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-dark">
                Dostupni proizvodi
              </h2>
              <p className="mt-2 text-gray">
                {products.length} proizvoda u ovoj kategoriji
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative aspect-square rounded-3xl overflow-hidden">
              <Image
                src="/images/revizijska-vrata.webp"
                alt="Revizijska vrata"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-dark">
                Zašto odabrati revizijska vrata?
              </h2>
              <p className="mt-4 text-gray leading-relaxed">
                Revizijska protupožarna vrata omogućuju siguran pristup tehničkim
                instalacijama bez narušavanja protupožarne zaštite objekta. Dostupna
                su za zidnu, stropnu i podnu ugradnju.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Zidna, stropna i podna ugradnja",
                  "Različiti sustavi zaključavanja",
                  "Mogućnost oblaganja",
                  "Skrivene ili vidljive šarke",
                  "Brz pristup za intervencije",
                  "Klase otpornosti do EI90",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-dark">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <CTA
        title="Trebate revizijska protupožarna vrata?"
        subtitle="Kontaktirajte nas za besplatno savjetovanje i izradu ponude prilagođene vašim potrebama."
      />
    </>
  );
}
