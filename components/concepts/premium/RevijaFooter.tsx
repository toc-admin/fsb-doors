import Link from "next/link";
import { caps, container, hairline, focusRing } from "./tokens";

// Podnožje revije: jedna tanka linija i verzalni kolofon u jednom retku.
export default function RevijaFooter() {
  return (
    <footer className={`border-t ${hairline}`}>
      <p
        className={`${container} ${caps} flex flex-wrap items-baseline gap-x-8 gap-y-2.5 py-8 text-gray`}
      >
        <span>Samoborska cesta 91B, Zagreb</span>
        <a
          href="tel:+38513496811"
          className={`transition-colors hover:text-primary ${focusRing}`}
        >
          +385 1 3496 811
        </a>
        <a
          href="mailto:info@fsb-zagreb.hr"
          className={`transition-colors hover:text-primary ${focusRing}`}
        >
          info@fsb-zagreb.hr
        </a>
        <span className="text-accent">© FSB DOORS d.o.o.</span>
        <Link
          href="/koncepti"
          className={`ml-auto transition-colors hover:text-primary ${focusRing}`}
        >
          ← Svi koncepti
        </Link>
      </p>
    </footer>
  );
}
