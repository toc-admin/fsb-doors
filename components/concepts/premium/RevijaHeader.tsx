import Image from "next/image";
import Link from "next/link";
import { caps, container, hairline, focusRing } from "./tokens";

const NAV = [
  { href: "#proizvodi", label: "Proizvodi" },
  { href: "#proces", label: "Proces" },
  { href: "#razvoj", label: "Razvoj" },
  { href: "#projekti", label: "Projekti" },
];

// Zaglavlje revije: uska impresum-traka, ispod nje prozračna glava s logom,
// sidrenom navigacijom i suzdržanim pozivom na ponudu. Jedna tanka linija dolje.
export default function RevijaHeader() {
  return (
    <header className={`border-b ${hairline}`}>
      <div
        className={`${container} flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-2.5`}
      >
        <Link
          href="/koncepti"
          className={`${caps} text-gray transition-colors hover:text-primary ${focusRing}`}
        >
          ← Koncepti
        </Link>
        <p className={`${caps} text-accent`}>Revija · Koncept 3</p>
      </div>

      <div className={`border-t ${hairline}`}>
        <div
          className={`${container} flex flex-wrap items-center justify-between gap-x-10 gap-y-5 py-5 md:py-6`}
        >
          <Link href="/" className={`shrink-0 ${focusRing}`}>
            <Image
              src="/fsb-logo.svg"
              alt="FSB Doors — početna stranica"
              width={100}
              height={49}
              priority
            />
          </Link>

          <nav aria-label="Rubrike revije" className="order-last w-full md:order-none md:w-auto">
            <ul className="flex flex-wrap items-center gap-x-8 gap-y-2">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`${caps} text-foreground transition-colors hover:text-primary ${focusRing}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <Link
            href="/kontakt"
            className={`${caps} border px-6 py-3 text-foreground transition-colors hover:border-primary hover:text-primary ${hairline} ${focusRing}`}
          >
            Zatražite ponudu
          </Link>
        </div>
      </div>
    </header>
  );
}
