import Link from "next/link";
import { mono, hairline, container } from "./tokens";

const NAV = [
  { href: "#proizvodi", label: "Proizvodi" },
  { href: "#proces", label: "Proces" },
  { href: "#razvoj", label: "Razvoj" },
  { href: "#projekti", label: "Projekti" },
];

export default function EditorialFooter() {
  return (
    <footer className={`border-t ${hairline}`}>
      <div
        className={`${container} ${mono} grid gap-8 py-10 text-xs leading-relaxed text-gray md:grid-cols-12`}
      >
        <div className="md:col-span-4">
          <p className="font-medium text-foreground">FSB DOORS d.o.o.</p>
          <p className="mt-1">Samoborska cesta 91B, Zagreb</p>
        </div>
        <div className="md:col-span-4">
          <p>
            <a
              href="tel:+38513496811"
              className="transition-colors hover:text-primary"
            >
              +385 1 3496 811
            </a>
          </p>
          <p className="mt-1">
            <a
              href="mailto:info@fsb-zagreb.hr"
              className="transition-colors hover:text-primary"
            >
              info@fsb-zagreb.hr
            </a>
          </p>
        </div>
        <div className="md:col-span-4">
          <ul className="flex flex-wrap gap-x-5 gap-y-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-3">
            <Link
              href="/koncepti"
              className="transition-colors hover:text-primary"
            >
              &larr;&nbsp;Svi koncepti
            </Link>
          </p>
        </div>
      </div>
      <div className={`border-t ${hairline}`}>
        <p
          className={`${container} ${mono} py-4 text-[11px] text-gray`}
        >
          &copy; {new Date().getFullYear()} FSB DOORS d.o.o.
        </p>
      </div>
    </footer>
  );
}
