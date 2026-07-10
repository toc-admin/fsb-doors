import Image from "next/image";
import Link from "next/link";
import { mono, hairline, container } from "./tokens";

const NAV = [
  { href: "#proizvodi", label: "Proizvodi" },
  { href: "#proces", label: "Proces" },
  { href: "#razvoj", label: "Razvoj" },
  { href: "#projekti", label: "Projekti" },
];

const navLink = `${mono} text-xs uppercase tracking-[0.14em] text-foreground transition-colors hover:text-primary`;

export default function EditorialHeader() {
  return (
    <header
      className={`sticky top-0 z-50 border-b bg-background/92 backdrop-blur-sm ${hairline}`}
    >
      <div className={`${container} flex h-16 items-center gap-5 md:gap-8`}>
        <Link
          href="/koncepti"
          className={`${mono} shrink-0 text-xs text-gray transition-colors hover:text-foreground`}
        >
          &larr;&nbsp;Koncepti
        </Link>
        <Link href="/koncept-2" className="shrink-0" aria-label="FSB Doors — početak stranice">
          <Image
            src="/fsb-logo.svg"
            alt="FSB Doors"
            width={73}
            height={36}
            priority
          />
        </Link>
        <nav
          aria-label="Poglavlja kataloga"
          className="ml-auto hidden items-center gap-7 md:flex"
        >
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className={navLink}>
              {item.label}
            </a>
          ))}
        </nav>
        <Link
          href="/kontakt"
          className={`${mono} ml-auto shrink-0 border border-foreground px-4 py-2.5 text-xs uppercase tracking-[0.1em] text-foreground transition-colors hover:bg-foreground hover:text-background md:ml-0`}
        >
          Zatražite ponudu
        </Link>
      </div>
      {/* Mobilni indeks poglavlja */}
      <nav
        aria-label="Poglavlja kataloga (mobilno)"
        className={`border-t md:hidden ${hairline}`}
      >
        <div className={`${container} flex gap-6 overflow-x-auto py-2.5`}>
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`${navLink} whitespace-nowrap`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
