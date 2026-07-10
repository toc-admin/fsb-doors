import Link from "next/link";

const NAV_LINKS = [
  { href: "#proizvodi", label: "Proizvodi" },
  { href: "#proces", label: "Proces" },
  { href: "#razvoj", label: "Razvoj" },
  { href: "#projekti", label: "Projekti" },
];

export default function BoldHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-light/15 bg-dark">
      <div className="flex h-16 items-stretch justify-between">
        <div className="flex items-stretch">
          <Link
            href="/koncepti"
            className="hidden items-center border-r border-light/15 px-4 text-[11px] uppercase tracking-widest text-light/70 transition-colors hover:text-light focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-light sm:flex [font-family:var(--font-mono-blok)]"
          >
            &larr;&nbsp;Koncepti
          </Link>
          <Link
            href="#vrh"
            aria-label="FSB Doors — na vrh stranice"
            className="flex items-center px-4 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-light sm:px-6"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/fsb-logo.svg"
              alt="FSB Doors"
              className="h-7 w-auto brightness-0 invert"
            />
          </Link>
        </div>

        <nav aria-label="Glavna navigacija" className="hidden items-stretch md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex items-center border-l border-light/15 px-5 text-[11px] uppercase tracking-widest text-light/80 transition-colors hover:bg-light/10 hover:text-light focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-light [font-family:var(--font-mono-blok)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Link
          href="/kontakt"
          className="flex items-center bg-primary px-5 text-sm font-bold uppercase tracking-wide text-light transition-colors hover:bg-primary-dark focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-light sm:px-8"
        >
          Zatražite ponudu
        </Link>
      </div>
    </header>
  );
}
