import { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import ProductCard from "@/components/ui/ProductCard";
import CTA from "@/components/sections/CTA";
import { getCategoryBySlug, getProductsByCategory } from "@/lib/products";

const category = getCategoryBySlug("ostakljena-vrata")!;
const products = getProductsByCategory("ostakljena-vrata");

export const metadata: Metadata = {
  title: `${category.name} | FSB Doors`,
  description: category.description,
};

export default function GlazedDoorsPage() {
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
                src="/images/ostakljena-vrata.webp"
                alt="Ostakljena vrata"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/95 backdrop-blur-sm rounded-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center text-white">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-dark">Premium dizajn</div>
                    <div className="text-sm text-gray">Elegancija i sigurnost</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-dark">
                Zašto odabrati ostakljena vrata?
              </h2>
              <p className="mt-4 text-gray leading-relaxed">
                Ostakljena protupožarna vrata idealna su za prostore gdje je potrebna kombinacija
                sigurnosti i estetike. S vatrostalnim staklom visoke transparentnosti, ova vrata
                omogućuju protok prirodnog svjetla uz punu protupožarnu zaštitu.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Vatrostalno staklo EI30/EI60",
                  "Minimalistički aluminijski ili čelični okvir",
                  "Maksimalna transparentnost",
                  "Tihi samozatvarači",
                  "Elegantne boje i završne obrade",
                  "Idealna za poslovne i javne prostore",
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
        title="Trebate ostakljena protupožarna vrata?"
        subtitle="Kontaktirajte nas za besplatno savjetovanje i izradu ponude prilagođene vašim potrebama."
      />
    </>
  );
}
