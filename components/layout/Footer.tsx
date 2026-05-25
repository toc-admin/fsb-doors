import Link from "next/link";
import Image from "next/image";

const footerNavigation = {
  proizvodi: [
    { name: "Čelična vrata", href: "/proizvodi/celicna-vrata" },
    { name: "Ostakljena vrata", href: "/proizvodi/ostakljena-vrata" },
    { name: "Fiksne ostakljene stijene", href: "/proizvodi/fiksne-ostakljene-stijene" },
    { name: "Revizijska vrata", href: "/proizvodi/revizijska-vrata" },
  ],
  primjena: [
    { name: "Ugostiteljstvo", href: "/primjena/ugostiteljstvo" },
    { name: "Poslovni objekti", href: "/primjena/poslovni-objekti" },
    { name: "Javni i stambeni objekti", href: "/primjena/javni-i-stambeni-objekti" },
    { name: "Industrija", href: "/primjena/industrija" },
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
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo and Contact */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/fsb-logo.svg"
                alt="FSB Doors"
                width={140}
                height={56}
                className="h-14 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-6 text-gray text-sm leading-relaxed max-w-sm">
              Vaš pouzdani partner za protupožarna vrata vrhunske kvalitete.
              Više od 20 godina iskustva u zaštiti vaših prostora.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <svg className="h-5 w-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="text-gray">Samoborska Cesta 91B / Samoborski Odvojak 1<br />10000 Zagreb</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <svg className="h-5 w-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <a href="tel:+38513496811" className="text-gray hover:text-white transition-colors">
                  +385 1 3496 811
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <svg className="h-5 w-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:info@fsb-zagreb.hr" className="text-gray hover:text-white transition-colors">
                  info@fsb-zagreb.hr
                </a>
              </div>
            </div>
          </div>

          {/* Proizvodi */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide uppercase">Proizvodi</h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.proizvodi.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-gray hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Primjena */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide uppercase">Primjena</h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.primjena.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-gray hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tvrtka */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide uppercase">Tvrtka</h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.tvrtka.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-gray hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Partner */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <span className="text-gray">Partner:</span>
            <a
              href="https://protupozarna-zastita.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors"
            >
              protupozarna-zastita.com
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray">
              &copy; {currentYear} FSB DOORS d.o.o. Sva prava pridržana.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray">
              <Link href="/privatnost" className="hover:text-white transition-colors">
                Privatnost
              </Link>
              <Link href="/uvjeti" className="hover:text-white transition-colors">
                Uvjeti korištenja
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
