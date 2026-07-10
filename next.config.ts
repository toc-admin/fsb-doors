import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Kategorija "Primjena" je uklonjena — sadržaj živi pod Projektima.
    return [
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
    ];
  },
};

export default nextConfig;
