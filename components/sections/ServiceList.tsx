import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { services } from "@/lib/services";

export default function ServiceList() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 lg:gap-16 items-center`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl sm:text-3xl font-bold text-dark">
                  {service.title}
                </h3>
                <p className="mt-4 text-gray leading-relaxed">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
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
                      <span className="text-dark">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button href={`/usluge/${service.slug}`} variant="primary">
                    Saznajte više
                  </Button>
                  <Button href="/kontakt" variant="outline">
                    Zatražite ponudu
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
