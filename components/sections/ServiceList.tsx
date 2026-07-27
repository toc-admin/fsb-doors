import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import { container, display, hairline, mono } from "@/components/site/tokens";
import { services } from "@/lib/services";

// Usluge kao indeks-redovi tehničkog lista: broj stavke, crno-bijela snimka,
// naslov u display pismu i mono popis stavki opsega.
export default function ServiceList() {
  return (
    <section className="py-16 lg:py-24">
      <div className={container}>
        <ol className={`border-b ${hairline}`}>
          {services.map((service, index) => (
            <li key={service.slug}>
              <Reveal delay={Math.min(index, 3) * 0.08}>
                <article
                  className={`grid gap-8 border-t ${hairline} py-10 lg:grid-cols-12 lg:gap-8 lg:py-14`}
                >
                  {/* Broj stavke */}
                  <div className="lg:col-span-1">
                    <span className={`${mono} text-[11px] uppercase tracking-[0.24em] text-gray`}>
                      Usluga
                    </span>
                    <p className={`${display} mt-1 text-3xl font-medium leading-none text-gray`}>
                      {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>

                  {/* Snimka — arhivski crno-bijeli prikaz */}
                  <div className="lg:col-span-4">
                    <Link
                      href={`/usluge/${service.slug}`}
                      className="group relative block aspect-[4/3] overflow-hidden"
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        className="object-cover grayscale contrast-[1.05] brightness-[0.85] transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-primary/25 mix-blend-multiply"
                      />
                    </Link>
                  </div>

                  {/* Sadržaj */}
                  <div className="lg:col-span-7 lg:pl-4">
                    <h3
                      className={`${display} text-2xl font-medium uppercase leading-tight md:text-3xl`}
                    >
                      <Link
                        href={`/usluge/${service.slug}`}
                        className="transition-colors hover:text-primary"
                      >
                        {service.title}
                      </Link>
                    </h3>
                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray md:text-base">
                      {service.description}
                    </p>

                    {/* Opseg — mono stavke */}
                    <ul className="mt-6 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-baseline gap-3">
                          <span
                            className={`${mono} text-[10px] tracking-[0.16em] text-primary`}
                          >
                            {String(index + 1).padStart(2, "0")}.
                            {featureIndex + 1}
                          </span>
                          <span className="text-sm text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <Link
                        href={`/usluge/${service.slug}`}
                        className={`${mono} border ${hairline} px-5 py-3 text-[12px] uppercase tracking-[0.16em] text-foreground transition-colors hover:border-[#8a8f98]`}
                      >
                        Saznajte više →
                      </Link>
                      <Link
                        href="/kontakt"
                        className={`${mono} text-[11px] uppercase tracking-[0.18em] text-gray underline-offset-4 transition-colors hover:text-foreground hover:underline`}
                      >
                        Zatražite ponudu
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
