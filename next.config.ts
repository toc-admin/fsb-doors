import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Kategorija "Primjena" je uklonjena — sadržaj živi pod Projektima.
    return [
      // Usluge i Blog privremeno skriveni (odluka klijenta, 2026-10) —
      // privremeni redirecti jer se sekcije kasnije mogu vratiti.
      {
        source: "/usluge",
        destination: "/",
        permanent: false,
      },
      {
        source: "/usluge/:slug",
        destination: "/",
        permanent: false,
      },
      {
        source: "/blog",
        destination: "/",
        permanent: false,
      },
      {
        source: "/blog/:slug",
        destination: "/",
        permanent: false,
      },
      {
        source: "/primjena",
        destination: "/projekti",
        permanent: true,
      },
      {
        source: "/primjena/ugostiteljstvo",
        destination: "/projekti?kategorija=ugostiteljstvo",
        permanent: true,
      },
      {
        source: "/primjena/poslovni-objekti",
        destination: "/projekti?kategorija=poslovne-gradevine",
        permanent: true,
      },
      {
        source: "/primjena/industrija",
        destination: "/projekti?kategorija=industrijske-gradevine",
        permanent: true,
      },
      {
        source: "/primjena/javni-i-stambeni-objekti",
        destination: "/projekti?kategorija=stambene-gradevine",
        permanent: true,
      },
      // Restrukturiranje proizvodnog programa (2026-09-18): kategorija
      // "Ostakljena vrata" zamijenjena je kategorijom "Aluminijska vrata".
      {
        source: "/proizvodi/ostakljena-vrata",
        destination: "/proizvodi/aluminijska-vrata",
        permanent: true,
      },
      {
        source: "/proizvodi/ostakljena-vrata/:slug",
        destination: "/proizvodi/aluminijska-vrata",
        permanent: true,
      },
      // Stari kataloški slugovi proizvoda vode na svoje nove domove.
      {
        source: "/proizvodi/celicna-vrata/:slug(fsd-.*)",
        destination: "/proizvodi/celicna-vrata",
        permanent: true,
      },
      {
        source: "/proizvodi/fiksne-ostakljene-stijene/:slug(fgw-.*)",
        destination: "/proizvodi/fiksne-ostakljene-stijene",
        permanent: true,
      },
      {
        source: "/proizvodi/revizijska-vrata/fad-1-zidna-revizijska-vrata",
        destination: "/proizvodi/revizijska-vrata/zidna-revizijska-vrata",
        permanent: true,
      },
      {
        source: "/proizvodi/revizijska-vrata/fad-2-stropna-revizijska-vrata",
        destination: "/proizvodi/revizijska-vrata/stropna-revizijska-vrata",
        permanent: true,
      },
      {
        source: "/proizvodi/revizijska-vrata/fad-3-podna-revizijska-vrata",
        destination: "/proizvodi/revizijska-vrata/podna-revizijska-vrata",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
