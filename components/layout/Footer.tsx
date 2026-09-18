import Link from "next/link";
import Image from "next/image";
import { container, display, hairline, mono } from "@/components/site/tokens";

const FOOTER_NAV = {
  proizvodi: [
    { name: "Čelična vrata", href: "/proizvodi/celicna-vrata" },
    { name: "Aluminijska vrata", href: "/proizvodi/aluminijska-vrata" },
    { name: "Aluminijski prozori", href: "/proizvodi/aluminijski-prozori" },
    { name: "Fiksne ostakljene stijene", href: "/proizvodi/fiksne-ostakljene-stijene" },
    { name: "Revizijska vrata", href: "/proizvodi/revizijska-vrata" },
  ],
  podrucja: [
    { name: "Bolnice i zdravstvene ustanove", href: "/projekti?kategorija=bolnice-i-zdravstvene-ustanove" },
    { name: "Hoteli i ugostiteljski objekti", href: "/projekti?kategorija=hoteli-i-ugostiteljski-objekti" },
    { name: "Industrijski i proizvodni objekti", href: "/projekti?kategorija=industrijski-i-proizvodni-objekti" },
    { name: "Stambene i poslovne zgrade", href: "/projekti?kategorija=stambene-i-poslovne-zgrade" },
    { name: "Trgovački i prodajni centri", href: "/projekti?kategorija=trgovacki-i-prodajni-centri" },
    { name: "Prometna infrastruktura", href: "/projekti?kategorija=prometna-infrastruktura" },
  ],
  tvrtka: [
    { name: "O nama", href: "/o-nama" },
    { name: "Usluge", href: "/usluge" },
    { name: "Projekti", href: "/projekti" },
    { name: "Blog", href: "/blog" },
    { name: "Karijera", href: "/karijera" },
    { name: "Kontakt", href: "/kontakt" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={`border-t ${hairline} bg-dark`}>
      {/* Potpis brenda — brend je proizvod koliko i vrata */}
      <div className={`${container} border-b ${hairline} py-10 lg:py-14`}>
        <p
          aria-hidden="true"
          className={`${display} text-[13vw] font-semibold uppercase leading-[0.85] tracking-[0.01em] text-[#191b1d] select-none sm:text-8xl lg:text-[9rem]`}
        >
          FSB Doors
        </p>
        <p className={`${mono} mt-4 text-[11px] uppercase tracking-[0.28em] text-gray`}>
          Vrata za budućnost — vlastiti razvoj, proizvodnja i ugradnja
        </p>
      </div>

      <div className={`${container} grid gap-12 py-12 md:grid-cols-2 lg:grid-cols-12 lg:py-16`}>
        {/* Kontakt */}
        <div className="lg:col-span-4">
          <Link href="/" className="inline-block">
            <Image
              src="/fsb-logo.svg"
              alt="FSB Doors"
              width={80}
              height={40}
              className="brightness-0 invert"
            />
          </Link>
          <address
            className={`${mono} mt-7 flex flex-col gap-3 text-[12px] not-italic leading-relaxed tracking-[0.1em] text-gray`}
          >
            <span>
              Samoborska cesta 91B / Samoborski odvojak 1
              <br />
              10000 Zagreb, Hrvatska
            </span>
            <a href="tel:+38513496811" className="transition-colors hover:text-foreground">
              +385 1 3496 811
            </a>
            <a
              href="mailto:info@fsb-zagreb.hr"
              className="transition-colors hover:text-foreground"
            >
              info@fsb-zagreb.hr
            </a>
          </address>
          <p className={`${mono} mt-7 text-[11px] tracking-[0.12em] text-gray`}>
            Partner:{" "}
            <a
              href="https://protupozarna-zastita.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
            >
              protupozarna-zastita.com ↗
            </a>
          </p>
        </div>

        {/* Indeksi */}
        {(
          [
            ["Proizvodi", FOOTER_NAV.proizvodi],
            ["Područja primjene", FOOTER_NAV.podrucja],
            ["Tvrtka", FOOTER_NAV.tvrtka],
          ] as const
        ).map(([title, items], col) => (
          <nav key={title} aria-label={title} className="lg:col-span-2 lg:col-start-auto">
            <p className={`${mono} text-[11px] uppercase tracking-[0.28em] text-gray`}>
              {String(col + 1).padStart(2, "0")} / {title}
            </p>
            <ul className={`mt-4 border-t ${hairline}`}>
              {items.map((item) => (
                <li key={item.name} className={`border-b ${hairline}`}>
                  <Link
                    href={item.href}
                    className="block py-2.5 text-sm text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      {/* Donja traka */}
      <div className={`border-t ${hairline}`}>
        <div
          className={`${container} flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between`}
        >
          <p className={`${mono} text-[11px] tracking-[0.14em] text-gray`}>
            © {year} FSB DOORS d.o.o. — Sva prava pridržana.
          </p>
          <div className={`${mono} flex items-center gap-6 text-[11px] tracking-[0.14em] text-gray`}>
            <Link href="/privatnost" className="transition-colors hover:text-foreground">
              Privatnost
            </Link>
            <Link href="/uvjeti" className="transition-colors hover:text-foreground">
              Uvjeti korištenja
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
