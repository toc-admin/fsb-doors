export interface Project {
  slug: string;
  title: string;
  description: string;
  client: string;
  location: string;
  year: string;
  image: string;
  gallery: string[];
  products: string[];
  category: string;
}

export const projects: Project[] = [
  {
    slug: "hotel-esplanade-zagreb",
    title: "Hotel Esplanade Zagreb",
    description:
      "Kompletna rekonstrukcija protupožarnog sustava u legendarnom hotelu Esplanade. Projekt je uključivao ugradnju 45 ostakljenih protupožarnih vrata klase EI60 koja savršeno nadopunjuju art deco interijere hotela, uz potpuno očuvanje povijesnog karaktera prostora. Poseban izazov bio je uskladiti moderne sigurnosne zahtjeve s konzervatorskim uvjetima.",
    client: "Hotel Esplanade Zagreb d.d.",
    location: "Zagreb, Hrvatska",
    year: "2023",
    image: "/images/ostakljena-vrata.webp",
    gallery: [
      "/images/ostakljena-vrata.webp",
      "/images/poslovni-objekti.webp",
    ],
    products: ["fgd-1-ostakljena-jednokrilna-vrata", "fgd-2-ostakljena-dvokrilna-vrata"],
    category: "Ugostiteljstvo",
  },
  {
    slug: "arena-centar-zagreb",
    title: "Arena Centar Zagreb",
    description:
      "Jedan od najvećih trgovačkih centara u regiji zahtijevao je sveobuhvatan pristup protupožarnoj zaštiti. Ugradili smo preko 120 protupožarnih vrata različitih tipova - od velikih čeličnih kliznih vrata za skladišne prostore do elegantnih ostakljenih vrata za trgovine. Projekt je realiziran u fazama tijekom renovacije centra bez prekida rada.",
    client: "Arena Centar d.o.o.",
    location: "Zagreb, Hrvatska",
    year: "2023",
    image: "/images/poslovni-objekti.webp",
    gallery: [
      "/images/poslovni-objekti.webp",
      "/images/celicna-vrata.webp",
    ],
    products: ["fsd-1-puna-celicna-jednokrilna-vrata", "fsd-4-celicna-klizna-vrata", "fgd-1-ostakljena-jednokrilna-vrata"],
    category: "Poslovni objekti",
  },
  {
    slug: "podravka-tvornica",
    title: "Podravka - proizvodni pogon",
    description:
      "Modernizacija protupožarne zaštite u proizvodnom pogonu Podravke u Koprivnici. Projekt je obuhvatio ugradnju 85 čeličnih protupožarnih vrata klase EI90 i EI120 za odvajanje proizvodnih zona, skladišta i tehničkih prostora. Sva vrata su opremljena elektromagnetnim držačima povezanim s centralnim sustavom vatrodojave.",
    client: "Podravka d.d.",
    location: "Koprivnica, Hrvatska",
    year: "2022",
    image: "/images/celicna-vrata.webp",
    gallery: [
      "/images/celicna-vrata.webp",
      "/images/industrija.webp",
    ],
    products: ["fsd-1-puna-celicna-jednokrilna-vrata", "fsd-2-puna-celicna-dvokrilna-vrata", "fsd-4-celicna-klizna-vrata"],
    category: "Industrija",
  },
  {
    slug: "klinicka-bolnica-dubrava",
    title: "Klinička bolnica Dubrava",
    description:
      "Sveobuhvatan projekt protupožarne zaštite za jednu od najvećih bolnica u Hrvatskoj. Ugradili smo preko 200 protupožarnih vrata kroz sve odjele bolnice, uključujući specijalizirana rješenja za operacijske sale, intenzivnu njegu i evakuacijske puteve. Projekt je realiziran uz minimalne smetnje za rad bolnice.",
    client: "KB Dubrava",
    location: "Zagreb, Hrvatska",
    year: "2022",
    image: "/images/fiksne-ostakljene-stijene.webp",
    gallery: [
      "/images/fiksne-ostakljene-stijene.webp",
      "/images/ostakljena-vrata.webp",
    ],
    products: ["fgd-1-ostakljena-jednokrilna-vrata", "fgw-1-fiksna-staklena-stijena", "fsd-1-puna-celicna-jednokrilna-vrata"],
    category: "Javni objekti",
  },
];

export function getAllProjects(): Project[] {
  return projects.sort((a, b) => parseInt(b.year) - parseInt(a.year));
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(count: number = 4): Project[] {
  return getAllProjects().slice(0, count);
}

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter((project) => project.category === category);
}
