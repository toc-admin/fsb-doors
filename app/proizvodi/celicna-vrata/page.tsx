import { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import ProductCard from "@/components/ui/ProductCard";
import CTA from "@/components/sections/CTA";
import { getCategoryBySlug, getProductsByCategory } from "@/lib/products";

const category = getCategoryBySlug("celicna-vrata")!;
const products = getProductsByCategory("celicna-vrata");

export const metadata: Metadata = {
  title: `${category.name} | FSB Doors`,
  description: category.description,
};

export default function SteelDoorsPage() {
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
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-dark">
                Zašto odabrati čelična vrata?
              </h2>
              <p className="mt-4 text-gray leading-relaxed">
                Čelična protupožarna vrata pružaju najvišu razinu zaštite za industrijske
                i komercijalne objekte. Izrađena od visokokvalitetnog čeličnog lima s
                mineralnom ispunom, ova vrata nude izvrsna protupožarna svojstva i dugotrajnost.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Klase otpornosti od EI30 do EI120",
                  "Robusna konstrukcija za intenzivnu upotrebu",
                  "Otpornost na mehanička oštećenja",
                  "Dugotrajnost i minimalno održavanje",
                  "Mogućnost izrade po mjeri",
                  "Certifikacija prema europskim standardima",
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
            <div className="relative aspect-square rounded-3xl overflow-hidden">
              <Image
                src="/images/celicna-vrata.webp"
                alt="Profesionalna ugradnja"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/95 backdrop-blur-sm rounded-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center text-white">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-dark">Certificirano</div>
                    <div className="text-sm text-gray">EN 1634-1, CE oznaka</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTA
        title="Trebate čelična protupožarna vrata?"
        subtitle="Kontaktirajte nas za besplatno savjetovanje i izradu ponude prilagođene vašim potrebama."
      />
    </>
  );
}
