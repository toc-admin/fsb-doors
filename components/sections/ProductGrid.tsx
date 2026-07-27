import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import { container, display, eyebrow, hairline, mono } from "@/components/site/tokens";

const products = [
  {
    title: "Čelična vrata",
    description:
      "Visokokvalitetna čelična protupožarna vrata s klasama otpornosti od EI30 do EI120. Idealna za industrijske i komercijalne objekte.",
    image: "/images/celicna-vrata.webp",
    href: "/proizvodi/celicna-vrata",
    features: ["EI30 - EI120", "Čelični okvir", "Mineralna ispuna"],
  },
  {
    title: "Ostakljena vrata",
    description:
      "Moderna protupožarna ostakljena vrata koja kombiniraju sigurnost i estetiku. Savršena za poslovne i javne prostore.",
    image: "/images/ostakljena-vrata.webp",
    href: "/proizvodi/ostakljena-vrata",
    features: ["EI30 - EI60", "Vatrostalno staklo", "Aluminij/čelik"],
  },
  {
    title: "Fiksne ostakljene stijene",
    description:
      "Protupožarne staklene pregrade za odvajanje prostora uz održavanje vizualne povezanosti i prirodnog svjetla.",
    image: "/images/fiksne-ostakljene-stijene.webp",
    href: "/proizvodi/fiksne-ostakljene-stijene",
    features: ["Do 4m visine", "Modularni sustav", "Visoka transparentnost"],
  },
  {
    title: "Revizijska vrata",
    description:
      "Specijalizirana protupožarna vrata za pristup tehničkim instalacijama i revizijskim oknima.",
    image: "/images/revizijska-vrata.webp",
    href: "/proizvodi/revizijska-vrata",
    features: ["EI30 - EI90", "Skrivene šarke", "Brzi pristup"],
  },
];

interface ProductGridProps {
  showHeading?: boolean;
  limit?: number;
}

// Tehnički indeks proizvodnog programa — numerirani redovi kataloškog
// lista umjesto kartica, u idiomu koncepta "Inženjering".
export default function ProductGrid({ showHeading = true, limit }: ProductGridProps) {
  const displayProducts = limit ? products.slice(0, limit) : products;

  return (
    <section className="py-20 lg:py-28">
      <div className={container}>
        {showHeading && (
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 pb-10 lg:pb-14">
              <div>
                <p className={eyebrow}>Indeks / Proizvodi</p>
                <h2
                  className={`${display} mt-4 text-4xl font-semibold uppercase leading-none md:text-5xl lg:text-6xl`}
                >
                  Proizvodni program
                </h2>
              </div>
              <p className={`${mono} text-[11px] uppercase tracking-[0.22em] text-gray`}>
                Certificirana protupožarna vrata — izrada po mjeri
              </p>
            </div>
          </Reveal>
        )}

        <Reveal>
          <ul className={`border-b ${hairline}`}>
            {displayProducts.map((product, i) => (
              <li key={product.href}>
                <Link
                  href={product.href}
                  className={`group grid grid-cols-12 items-center gap-x-4 gap-y-3 border-t ${hairline} py-6 transition-colors hover:bg-light md:py-7`}
                >
                  <span className={`${mono} col-span-2 text-sm text-gray md:col-span-1`}>
                    0{i + 1}
                  </span>

                  <span className="relative col-span-10 hidden aspect-[4/3] overflow-hidden md:col-span-2 md:block">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="220px"
                      className="object-cover grayscale contrast-[1.05] brightness-[0.85] transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-primary/25 mix-blend-multiply"
                    />
                  </span>

                  <span className="col-span-10 md:col-span-5 md:pl-2 lg:pl-6">
                    <span
                      className={`${display} block text-2xl font-medium uppercase leading-tight md:text-3xl`}
                    >
                      {product.title}
                    </span>
                    <span className="mt-2 block max-w-lg text-sm leading-relaxed text-gray">
                      {product.description}
                    </span>
                  </span>

                  <span className="col-span-10 col-start-3 flex flex-wrap content-center gap-2 md:col-span-3 md:col-start-auto md:justify-end">
                    {product.features.map((f) => (
                      <span
                        key={f}
                        className={`${mono} border px-2.5 py-1.5 text-[11px] tracking-[0.08em] ${
                          f.startsWith("EI")
                            ? "border-[#b3223d66] text-primary"
                            : `${hairline} text-gray`
                        }`}
                      >
                        {f}
                      </span>
                    ))}
                  </span>

                  <span
                    aria-hidden="true"
                    className={`${mono} col-span-12 hidden text-right text-lg text-gray transition-transform duration-300 group-hover:translate-x-1 group-hover:text-foreground md:col-span-1 md:block`}
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Poveznica na sve proizvode */}
        {showHeading && (
          <Reveal>
            <div className="mt-12 flex justify-center">
              <Link
                href="/proizvodi"
                className={`${mono} inline-flex items-center gap-3 border ${hairline} px-8 py-4 text-[13px] font-medium uppercase tracking-[0.16em] text-foreground transition-colors hover:border-[#8a8f98]`}
              >
                Pogledajte sve proizvode
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
