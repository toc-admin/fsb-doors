export const PROJECT_CATEGORIES = [
  {
    slug: "bolnice",
    name: "Bolnice",
    description:
      "Protupožarna rješenja za bolnice i zdravstvene ustanove — od odjela i operacijskih sala do evakuacijskih puteva, uz minimalne smetnje za rad ustanove.",
    image: "/images/fiksne-ostakljene-stijene.webp",
  },
  {
    slug: "hoteli",
    name: "Hoteli",
    description:
      "Vrata koja spajaju sigurnost gostiju i estetiku interijera — rješenja za hotele svih kategorija, uključujući zaštićene i povijesne objekte.",
    image: "/images/ugostiteljstvo.webp",
  },
  {
    slug: "ugostiteljstvo",
    name: "Ugostiteljstvo",
    description:
      "Protupožarna zaštita za restorane, kafiće, wellness i konferencijske centre — sigurnost kuhinja, tehničkih prostora i evakuacijskih izlaza.",
    image: "/images/ugostiteljstvo.webp",
  },
  {
    slug: "stambene-gradevine",
    name: "Stambene građevine",
    description:
      "Rješenja za stambene zgrade i komplekse — ulazna vrata stanova, strojarnice, garaže i zajednički prostori u skladu s propisima protupožarne zaštite.",
    image: "/images/javni-i-stambeni-objekti.webp",
  },
  {
    slug: "poslovne-gradevine",
    name: "Poslovne građevine",
    description:
      "Suvremena protupožarna vrata za urede, poslovne centre, banke i trgovačke centre — sigurnost bez kompromisa u dizajnu.",
    image: "/images/poslovni-objekti.webp",
  },
  {
    slug: "industrijske-gradevine",
    name: "Industrijske građevine",
    description:
      "Robusna rješenja za proizvodne hale, skladišta i energetska postrojenja — čelična vrata najviših klasa otpornosti, uključujući klizne izvedbe.",
    image: "/images/industrija.webp",
  },
  {
    slug: "skole-i-vrtici",
    name: "Škole i vrtići",
    description:
      "Sigurnost najmlađih na prvom mjestu — protupožarna vrata za škole, vrtiće i sportske dvorane, prilagođena svakodnevnom intenzivnom korištenju.",
    image: "/images/javni-i-stambeni-objekti.webp",
  },
  {
    slug: "tuneli",
    name: "Tuneli",
    description:
      "Specijalizirana vrata za cestovne i željezničke tunele — evakuacijski prolazi i tehničke niše u najzahtjevnijim uvjetima eksploatacije.",
    image: "/images/celicna-vrata.webp",
  },
] as const;

export type ProjectCategorySlug = (typeof PROJECT_CATEGORIES)[number]["slug"];
export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

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
  category: ProjectCategorySlug;
}

// NAPOMENA: ogledni sadržaj — reference zamijeniti stvarnim projektima i
// fotografijama klijenta.
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
    category: "hoteli",
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
    category: "poslovne-gradevine",
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
    category: "industrijske-gradevine",
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
    category: "bolnice",
  },
  {
    slug: "restoran-event-centar-zagreb",
    title: "Restoran i event centar, Zagreb",
    description:
      "Protupožarna zaštita ugostiteljskog kompleksa s restoranom, kuhinjom i višenamjenskom dvoranom. Ugrađena su ostakljena protupožarna vrata prema evakuacijskim putevima te čelična vrata za kuhinjske i tehničke prostore, sve izrađeno po mjeri prema izmjeri na lokaciji.",
    client: "Privatni investitor",
    location: "Zagreb, Hrvatska",
    year: "2024",
    image: "/images/ugostiteljstvo.webp",
    gallery: [
      "/images/ugostiteljstvo.webp",
      "/images/ostakljena-vrata.webp",
    ],
    products: ["fgd-1-ostakljena-jednokrilna-vrata", "fsd-1-puna-celicna-jednokrilna-vrata"],
    category: "ugostiteljstvo",
  },
  {
    slug: "stambeni-kompleks-zagreb",
    title: "Stambeni kompleks, Zagreb",
    description:
      "Novogradnja stambenog kompleksa sa 120 stanova. Isporučena i ugrađena protupožarna vrata za strojarnice, spremišta i garažne prostore te revizijska vrata za instalacijske šahtove — sve prema tehničkim shemama potvrđenim s projektantom.",
    client: "Privatni investitor",
    location: "Zagreb, Hrvatska",
    year: "2024",
    image: "/images/javni-i-stambeni-objekti.webp",
    gallery: [
      "/images/javni-i-stambeni-objekti.webp",
      "/images/revizijska-vrata.webp",
    ],
    products: ["fsd-1-puna-celicna-jednokrilna-vrata", "fad-1-zidna-revizijska-vrata"],
    category: "stambene-gradevine",
  },
  {
    slug: "osnovna-skola-split",
    title: "Osnovna škola i sportska dvorana, Split",
    description:
      "Rekonstrukcija školske zgrade s dogradnjom sportske dvorane. Ugrađena protupožarna vrata na evakuacijskim putevima i između požarnih sektora, prilagođena intenzivnom svakodnevnom korištenju u odgojno-obrazovnoj ustanovi.",
    client: "Grad Split",
    location: "Split, Hrvatska",
    year: "2023",
    image: "/images/javni-i-stambeni-objekti.webp",
    gallery: [
      "/images/javni-i-stambeni-objekti.webp",
      "/images/celicna-vrata.webp",
    ],
    products: ["fsd-1-puna-celicna-jednokrilna-vrata", "fgd-1-ostakljena-jednokrilna-vrata"],
    category: "skole-i-vrtici",
  },
  {
    slug: "cestovni-tunel-a1",
    title: "Cestovni tunel, autocesta A1",
    description:
      "Isporuka i ugradnja specijaliziranih čeličnih vrata za evakuacijske prolaze i tehničke niše cestovnog tunela. Vrata su razvijena i ispitana za najzahtjevnije uvjete eksploatacije — povišeni tlak, vlagu i kontinuirano opterećenje prometom.",
    client: "Hrvatske autoceste",
    location: "Autocesta A1, Hrvatska",
    year: "2021",
    image: "/images/celicna-vrata.webp",
    gallery: [
      "/images/celicna-vrata.webp",
      "/images/industrija.webp",
    ],
    products: ["fsd-1-puna-celicna-jednokrilna-vrata", "fsd-2-puna-celicna-dvokrilna-vrata"],
    category: "tuneli",
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

export function getProjectsByCategory(category: ProjectCategorySlug): Project[] {
  return getAllProjects().filter((project) => project.category === category);
}

export function getCategoryBySlug(slug: string): ProjectCategory | undefined {
  return PROJECT_CATEGORIES.find((category) => category.slug === slug);
}

export function getCategoryName(slug: ProjectCategorySlug): string {
  return getCategoryBySlug(slug)?.name ?? slug;
}
