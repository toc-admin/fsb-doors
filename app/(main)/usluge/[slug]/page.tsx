import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import CTA from "@/components/sections/CTA";
import Reveal from "@/components/site/Reveal";
import SectionRule from "@/components/site/SectionRule";
import { container, display, eyebrow, hairline, mono } from "@/components/site/tokens";
import { services, getServiceBySlug } from "@/lib/services";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

// Terenske snimke koje generički odgovaraju pojedinim uslugama.
const SERVICE_PHOTOS: Record<string, string> = {
  "savjetovanje-o-protupozarnoj-zastiti": "/images/foto/ltm-inzenjeri-monitor.webp",
  "ugradnja-protupozarnih-vrata": "/images/foto/ugradnja-stakla-detalj.webp",
};

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

  const serviceIndex = services.findIndex((s) => s.slug === service.slug);
  const serviceNumber = String(serviceIndex + 1).padStart(2, "0");
  const heroImage = SERVICE_PHOTOS[service.slug] ?? service.image;

  return (
    <>
      {/* Zaglavlje lista usluge */}
      <section className="pt-12 md:pt-16">
        <div className={container}>
          <Reveal>
            {/* Krušne mrvice */}
            <nav
              aria-label="Navigacijski put"
              className={`${mono} flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-gray`}
            >
              <Link href="/usluge" className="transition-colors hover:text-foreground">
                Usluge
              </Link>
              <span aria-hidden>/</span>
              <span className="text-foreground">{service.title}</span>
            </nav>

            <p className={`${eyebrow} mt-8`}>List U—{serviceNumber} / Usluga</p>
            <h1
              className={`${display} mt-4 max-w-4xl text-4xl font-semibold uppercase leading-none md:text-5xl lg:text-6xl`}
            >
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray md:text-lg">
              {service.shortDescription}
            </p>
          </Reveal>

          {/* Snimka — arhivski crno-bijeli prikaz */}
          <Reveal delay={0.08}>
            <figure className={`mt-10 border ${hairline} lg:mt-14`}>
              <div className="relative aspect-[16/9] overflow-hidden md:aspect-[21/9]">
                <Image
                  src={heroImage}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1440px) 1344px, 100vw"
                  className="object-cover grayscale contrast-[1.05] brightness-[0.85]"
                  priority
                />
                <span
                  aria-hidden
                  className="absolute inset-0 bg-primary/25 mix-blend-multiply"
                />
              </div>
              <figcaption
                className={`${mono} flex items-baseline justify-between gap-4 px-4 py-3 text-[10px] uppercase tracking-[0.2em] text-gray`}
              >
                <span>List U—{serviceNumber}</span>
                <span>{service.title}</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* Sadržaj */}
      <section className="py-16 lg:py-24">
        <div className={container}>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
            {/* Glavni sadržaj */}
            <div className="lg:col-span-7">
              <Reveal>
                <p className={`${mono} pb-4 text-[11px] uppercase tracking-[0.24em] text-gray`}>
                  Opis usluge
                </p>
                <p className="max-w-2xl text-base leading-relaxed text-gray md:text-lg">
                  {service.description}
                </p>
              </Reveal>

              {/* Opseg usluge */}
              <Reveal delay={0.08}>
                <div className="mt-12">
                  <h2
                    className={`${display} text-2xl font-medium uppercase leading-tight md:text-3xl`}
                  >
                    Što uključuje
                  </h2>
                  <div className={`mt-6 grid border-l border-t ${hairline} sm:grid-cols-2`}>
                    {service.features.map((feature, index) => (
                      <div
                        key={index}
                        className={`border-b border-r ${hairline} p-5`}
                      >
                        <span className={`${mono} text-[10px] tracking-[0.16em] text-primary`}>
                          {serviceNumber}.{index + 1}
                        </span>
                        <p className="mt-2 text-sm text-foreground md:text-base">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Bočni stupac — prednosti i kontakt */}
            <Reveal delay={0.16} className="lg:col-span-4 lg:col-start-9">
              <div className="lg:sticky lg:top-24">
                <p className={`${mono} pb-4 text-[11px] uppercase tracking-[0.24em] text-gray`}>
                  Prednosti
                </p>
                <ul className={`border-t ${hairline}`}>
                  {service.benefits.map((benefit, index) => (
                    <li
                      key={index}
                      className={`flex items-baseline gap-4 border-b ${hairline} py-3.5`}
                    >
                      <span className={`${mono} text-[11px] tracking-[0.16em] text-gray`}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm leading-relaxed text-foreground">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button href="/kontakt" variant="primary" className="w-full justify-center">
                    Zatražite ponudu
                  </Button>
                  <a
                    href="tel:+38513496811"
                    className={`${mono} mt-4 flex items-center justify-center gap-2 border ${hairline} px-6 py-3.5 text-[12px] uppercase tracking-[0.16em] text-gray transition-colors hover:border-[#8a8f98] hover:text-foreground`}
                  >
                    Tel — +385 1 3496 811
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <SectionRule code="U—U / 03" />

      <CTA
        title="Javite nam se s povjerenjem"
        subtitle="Za sva dodatna pitanja, stojimo Vam na raspolaganju."
      />
    </>
  );
}
