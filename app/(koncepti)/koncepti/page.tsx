import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Dizajnerski koncepti | FSB Doors",
  description: "Pregled prijedloga vizualnog identiteta nove web stranice.",
  robots: { index: false, follow: false },
};

const concepts = [
  {
    href: "/koncept-1",
    number: "K1",
    name: "Inženjering",
    tagline:
      "Tamna tehnička estetika: sheme vrata, kote i klase otpornosti kao grafički jezik. Komunicira razvoj, ispitivanja i certifikaciju.",
  },
  {
    href: "/koncept-2",
    number: "K2",
    name: "Katalog",
    tagline:
      "Svijetli tehnički katalog: velika tipografija, izložena mreža, šifre proizvoda i numerirana poglavlja. Premium inženjerski katalog.",
  },
  {
    href: "/koncept-3",
    number: "K3",
    name: "Blok",
    tagline:
      "Bordo punom snagom: veliki blokovi boje, duotone fotografija i snažne izjave. Glasno, samouvjereno, pamtljivo.",
  },
];

export default function ConceptsIndexPage() {
  return (
    <div className="min-h-screen bg-[#101112] text-[#edeae4] flex flex-col">
      <header className="px-6 sm:px-10 py-8 flex items-center justify-between border-b border-white/10">
        <Image
          src="/fsb-logo.svg"
          alt="FSB Doors"
          width={120}
          height={48}
          className="h-10 w-auto brightness-0 invert"
        />
        <span className="text-sm uppercase tracking-[0.2em] text-white/50">
          Prijedlozi dizajna
        </span>
      </header>

      <main className="flex-1 px-6 sm:px-10 py-16 max-w-6xl mx-auto w-full">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          Tri smjera za novu stranicu
        </h1>
        <p className="mt-6 text-lg text-white/70 max-w-2xl">
          Svaki koncept koristi isti (ispravljeni) sadržaj, a razlikuje se u
          vizualnom identitetu i načinu prezentacije. Odaberite smjer koji
          najbolje predstavlja FSB Doors — pobjednički koncept zatim
          primjenjujemo na cijelu stranicu.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {concepts.map((concept) => (
            <Link
              key={concept.href}
              href={concept.href}
              className="group border border-white/15 p-8 hover:border-[#b3223d] hover:bg-white/5 transition-colors"
            >
              <span className="text-sm font-mono text-[#b3223d]">
                {concept.number}
              </span>
              <h2 className="mt-4 text-3xl font-bold group-hover:text-[#b3223d] transition-colors">
                {concept.name}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                {concept.tagline}
              </p>
              <span className="mt-8 inline-block text-sm font-semibold text-white/80 group-hover:translate-x-1 transition-transform">
                Otvori koncept →
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-16 text-sm text-white/40">
          Trenutna stranica ostaje dostupna na{" "}
          <Link href="/" className="underline hover:text-white">
            početnoj
          </Link>
          . Koncepti nisu vidljivi tražilicama.
        </p>
      </main>
    </div>
  );
}
