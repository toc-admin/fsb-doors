import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import CTA from "@/components/sections/CTA";
import { productCategories, products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Proizvodi | FSB Doors",
  description: "Širok asortiman certificiranih protupožarnih vrata - čelična vrata, ostakljena vrata, fiksne ostakljene stijene i revizijska vrata.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/celicna-vrata.webp"
            alt="Naši proizvodi"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark/50 to-dark/80" />

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Katalog proizvoda
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
              Naši proizvodi
            </h1>
            <p className="mt-6 text-xl text-white/80 leading-relaxed">
              Nudimo širok asortiman certificiranih protupožarnih vrata za sve vrste objekata i namjena.
              Svi naši proizvodi ispunjavaju najstrože europske standarde.
            </p>
            <div className="mt-8 flex items-center gap-6 text-white/60">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>{productCategories.length} kategorije</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>{products.length}+ proizvoda</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Categories Grid */}
      <section className="py-20 lg:py-28 bg-light">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark">
              Kategorije proizvoda
            </h2>
            <p className="mt-4 text-xl text-gray max-w-2xl mx-auto">
              Odaberite kategoriju za pregled svih dostupnih proizvoda
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {productCategories.map((category, index) => {
              const categoryProducts = products.filter(p => p.categorySlug === category.slug);

              return (
                <Link
                  key={category.slug}
                  href={`/proizvodi/${category.slug}`}
                  className="group relative rounded-3xl overflow-hidden card-lift min-h-[400px]"
                >
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover img-zoom"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {category.features.map((feature, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium text-white bg-white/20 backdrop-blur-sm rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                      {category.name}
                    </h3>
                    <p className="text-white/70 mb-4 line-clamp-2">
                      {category.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-white/50 text-sm">
                        {categoryProducts.length} proizvoda
                      </span>
                      <span className="inline-flex items-center text-white font-semibold group-hover:gap-3 gap-2 transition-all">
                        Pogledaj proizvode
                        <svg
                          className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Number indicator */}
                  <div className="absolute top-6 right-6 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* All products overview */}
      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark">
              Zašto odabrati FSB Doors?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
                title: "Certificirano",
                description: "EN 1634-1, CE oznaka",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: "Po mjeri",
                description: "Prilagođene dimenzije",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                  </svg>
                ),
                title: "Ugradnja",
                description: "Profesionalni tehničari",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                  </svg>
                ),
                title: "Jamstvo",
                description: "Višegodišnje jamstvo",
              },
            ].map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-dark">{item.title}</h3>
                <p className="text-gray mt-1">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTA
        title="Trebate pomoć pri odabiru?"
        subtitle="Naši stručnjaci pomoći će vam odabrati optimalno rješenje za vaše potrebe. Kontaktirajte nas za besplatno savjetovanje."
      />
    </>
  );
}
