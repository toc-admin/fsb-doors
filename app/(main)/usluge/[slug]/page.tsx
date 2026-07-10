import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import CTA from "@/components/sections/CTA";
import { services, getServiceBySlug } from "@/lib/services";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Usluga nije pronađena | FSB Doors" };
  }

  return {
    title: `${service.title} | FSB Doors`,
    description: service.shortDescription,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-light">
        <Container>
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm mb-8">
              <Link href="/usluge" className="text-gray hover:text-primary transition-colors">
                Usluge
              </Link>
              <span className="text-gray">/</span>
              <span className="text-dark font-medium">{service.title}</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark leading-tight">
              {service.title}
            </h1>
            <p className="mt-6 text-xl text-gray leading-relaxed">
              {service.shortDescription}
            </p>
          </div>
        </Container>
      </section>

      {/* Main Image */}
      <section className="pb-16 lg:pb-20 bg-light">
        <Container>
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main content */}
            <div className="lg:col-span-2">
              <p className="text-lg text-gray leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-dark mb-6">Što uključuje</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-light rounded-xl"
                    >
                      <svg
                        className="h-5 w-5 text-primary shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span className="text-dark font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-light rounded-2xl p-8 sticky top-32">
                <h3 className="text-xl font-bold text-dark mb-6">Prednosti</h3>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        className="h-5 w-5 text-primary shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-gray">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-8 border-t border-gray/10">
                  <Button href="/kontakt" variant="primary" className="w-full justify-center">
                    Zatražite ponudu
                  </Button>
                  <a
                    href="tel:+38513496811"
                    className="mt-4 flex items-center justify-center gap-2 text-gray hover:text-primary transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                    +385 1 3496 811
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTA
        title="Javite nam se s povjerenjem"
        subtitle="Za sva dodatna pitanja, stojimo Vam na raspolaganju."
      />
    </>
  );
}
