import Image from "next/image";
import Link from "next/link";
import { productCategories } from "@/lib/products";
import Reveal from "./Reveal";
import { container, display, eyebrow, hairline, mono } from "./tokens";

// Tehnički indeks proizvoda — redovi kataloškog lista, ne kartice.
export default function Products() {
  return (
    <section id="proizvodi" aria-labelledby="proizvodi-naslov" className="scroll-mt-24 py-20 lg:py-28">
      <div className={container}>
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4 pb-10 lg:pb-14">
            <div>
              <p className={eyebrow}>List 02 / Proizvodi</p>
              <h2
                id="proizvodi-naslov"
                className={`${display} mt-4 text-4xl font-semibold uppercase leading-none md:text-5xl lg:text-6xl`}
              >
                Proizvodni program
              </h2>
            </div>
            <p className={`${mono} text-[11px] uppercase tracking-[0.22em] text-gray`}>
              4 kategorije — izrada po mjeri
            </p>
          </div>
        </Reveal>

        <Reveal>
          <ul className={`border-b ${hairline}`}>
            {productCategories.map((cat, i) => (
              <li key={cat.slug}>
                <Link
                  href={`/proizvodi/${cat.slug}`}
                  className={`group grid grid-cols-12 items-center gap-x-4 gap-y-3 border-t ${hairline} py-6 transition-colors hover:bg-light md:py-7`}
                >
                  <span
                    className={`${mono} col-span-2 text-sm text-gray md:col-span-1`}
                  >
                    0{i + 1}
                  </span>

                  <span className="relative col-span-10 hidden aspect-[4/3] overflow-hidden md:col-span-2 md:block">
                    <Image
                      src={cat.image}
                      alt={cat.name}
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
                      {cat.name}
                    </span>
                    <span className="mt-2 block max-w-lg text-sm leading-relaxed text-gray">
                      {cat.description}
                    </span>
                  </span>

                  <span className="col-span-10 col-start-3 flex flex-wrap content-center gap-2 md:col-span-3 md:col-start-auto md:justify-end">
                    {cat.features.map((f) => (
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
      </div>
    </section>
  );
}
