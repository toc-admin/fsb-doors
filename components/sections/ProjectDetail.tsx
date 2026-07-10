import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Project, getCategoryName } from "@/lib/projects";
import { products } from "@/lib/products";

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  // Get product details for this project
  const projectProducts = project.products
    .map((slug) => products.find((p) => p.slug === slug))
    .filter(Boolean);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 lg:pb-24 bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover opacity-40"
          />
        </div>
        <Container className="relative z-10">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
              <Link href="/projekti" className="hover:text-white transition-colors">
                Projekti
              </Link>
              <span>/</span>
              <span>{getCategoryName(project.category)}</span>
            </nav>

            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-1.5 text-sm font-semibold bg-primary text-white rounded-full">
                {getCategoryName(project.category)}
              </span>
              <span className="px-4 py-1.5 text-sm font-semibold bg-white/10 backdrop-blur-sm text-white rounded-full">
                {project.year}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              {project.title}
            </h1>

            <div className="mt-8 flex flex-wrap gap-8 text-white/70">
              <div>
                <p className="text-sm uppercase tracking-wider mb-1">Klijent</p>
                <p className="text-white font-semibold">{project.client}</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wider mb-1">Lokacija</p>
                <p className="text-white font-semibold flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  {project.location}
                </p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wider mb-1">Godina</p>
                <p className="text-white font-semibold">{project.year}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Description */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-dark mb-6">
                O projektu
              </h2>
              <p className="text-lg text-gray leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Products used */}
            {projectProducts.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-dark mb-4">
                  Korišteni proizvodi
                </h3>
                <div className="space-y-3">
                  {projectProducts.map((product) => (
                    <Link
                      key={product!.slug}
                      href={`/proizvodi/${product!.categorySlug}/${product!.slug}`}
                      className="block p-4 bg-light rounded-xl hover:bg-primary/5 transition-colors group"
                    >
                      <p className="font-semibold text-dark group-hover:text-primary transition-colors">
                        {product!.name}
                      </p>
                      <p className="text-sm text-gray mt-1">{product!.category}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Gallery */}
      {project.gallery.length > 1 && (
        <section className="py-16 lg:py-24 bg-light">
          <Container>
            <h2 className="text-2xl sm:text-3xl font-bold text-dark mb-8">
              Galerija projekta
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.gallery.map((img, index) => (
                <div
                  key={index}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden"
                >
                  <Image
                    src={img}
                    alt={`${project.title} - slika ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="bg-primary rounded-3xl p-10 lg:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Imate sličan projekt?
            </h2>
            <p className="mt-4 text-xl text-white/80 max-w-2xl mx-auto">
              Kontaktirajte nas za besplatno savjetovanje i ponudu prilagođenu
              vašim potrebama.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/kontakt" variant="white" size="lg">
                Kontaktirajte nas
              </Button>
              <Button
                href="/projekti"
                variant="outline"
                className="border-white/30 text-white hover:bg-white hover:text-primary"
                size="lg"
              >
                Svi projekti
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Back link */}
      <section className="pb-16">
        <Container>
          <Link
            href="/projekti"
            className="inline-flex items-center text-primary font-semibold hover:underline"
          >
            <svg
              className="mr-2 w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Povratak na projekte
          </Link>
        </Container>
      </section>
    </>
  );
}
