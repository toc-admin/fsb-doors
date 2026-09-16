// Finalna klasifikacija "područja primjene" — dostavio klijent 2026-09-16.
export const PROJECT_CATEGORIES = [
  {
    slug: "bolnice-i-zdravstvene-ustanove",
    name: "Bolnice i zdravstvene ustanove",
    description:
      "Protupožarna rješenja za bolnice i zdravstvene ustanove — od odjela i operacijskih sala do evakuacijskih puteva, uz minimalne smetnje za rad ustanove.",
    image: "/images/fiksne-ostakljene-stijene.webp",
  },
  {
    slug: "odgojno-obrazovne-ustanove",
    name: "Odgojno-obrazovne ustanove",
    description:
      "Sigurnost najmlađih na prvom mjestu — protupožarna vrata za škole, vrtiće, fakultete i sportske dvorane, prilagođena svakodnevnom intenzivnom korištenju.",
    image: "/images/javni-i-stambeni-objekti.webp",
  },
  {
    slug: "hoteli-i-ugostiteljski-objekti",
    name: "Hoteli i ugostiteljski objekti",
    description:
      "Vrata koja spajaju sigurnost gostiju i estetiku interijera — rješenja za hotele, restorane, wellness i konferencijske centre svih kategorija.",
    image: "/images/ugostiteljstvo.webp",
  },
  {
    slug: "industrijski-i-proizvodni-objekti",
    name: "Industrijski i proizvodni objekti",
    description:
      "Robusna rješenja za proizvodne hale, skladišta i energetska postrojenja — čelična vrata najviših klasa otpornosti, uključujući klizne izvedbe.",
    image: "/images/industrija.webp",
  },
  {
    slug: "javni-objekti-i-ustanove",
    name: "Javni objekti i ustanove",
    description:
      "Protupožarna zaštita za objekte javne namjene — uprave, sudove, knjižnice i ustanove s velikim protokom ljudi i strogim zahtjevima evakuacije.",
    image: "/images/javni-i-stambeni-objekti.webp",
  },
  {
    slug: "trgovacki-i-prodajni-centri",
    name: "Trgovački i prodajni centri",
    description:
      "Rješenja za trgovačke centre i prodajne prostore — od velikih kliznih vrata za skladišta do ostakljenih stijena koje ne narušavaju izlog i prolaz kupaca.",
    image: "/images/poslovni-objekti.webp",
  },
  {
    slug: "stambene-i-poslovne-zgrade",
    name: "Stambene i poslovne zgrade i objekti",
    description:
      "Rješenja za stambene i poslovne zgrade — ulazna vrata stanova, uredi, strojarnice, garaže i zajednički prostori u skladu s propisima protupožarne zaštite.",
    image: "/images/poslovni-objekti.webp",
  },
  {
    slug: "povijesni-i-zasticeni-objekti",
    name: "Povijesni i zaštićeni objekti",
    description:
      "Suvremena sigurnost u zaštićenim prostorima — izvedbe po mjeri usklađene s konzervatorskim uvjetima, uz očuvanje povijesnog karaktera objekta.",
    image: "/images/ostakljena-vrata.webp",
  },
  {
    slug: "kulturni-i-sakralni-objekti",
    name: "Kulturni i sakralni objekti",
    description:
      "Protupožarna zaštita za muzeje, kazališta, dvorane i sakralne prostore — diskretna rješenja koja štite posjetitelje i vrijednu baštinu.",
    image: "/images/foto/ostakljena-vrata-atrij.webp",
  },
  {
    slug: "prometna-infrastruktura",
    name: "Prometna infrastruktura",
    description:
      "Specijalizirana vrata za tunele, željeznicu i zračne luke — evakuacijski prolazi i tehničke niše u najzahtjevnijim uvjetima eksploatacije.",
    image: "/images/foto/tunel-vrata-767m.webp",
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
    category: "hoteli-i-ugostiteljski-objekti",
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
    category: "trgovacki-i-prodajni-centri",
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
    category: "industrijski-i-proizvodni-objekti",
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
    category: "bolnice-i-zdravstvene-ustanove",
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
    category: "hoteli-i-ugostiteljski-objekti",
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
    category: "stambene-i-poslovne-zgrade",
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
    category: "odgojno-obrazovne-ustanove",
  },
  {
    slug: "cestovni-tunel-a1",
    title: "Cestovni tunel, autocesta A1",
    description:
      "Isporuka i ugradnja specijaliziranih čeličnih vrata za evakuacijske prolaze i tehničke niše cestovnog tunela. Vrata su razvijena i ispitana za najzahtjevnije uvjete eksploatacije — povišeni tlak, vlagu i kontinuirano opterećenje prometom.",
    client: "Hrvatske autoceste",
    location: "Autocesta A1, Hrvatska",
    year: "2021",
    image: "/images/foto/tunel-siroko.webp",
    gallery: [
      "/images/foto/tunel-vrata-767m.webp",
      "/images/foto/tunel-vrata-frontal.webp",
      "/images/foto/tunel-svjetla.webp",
      "/images/foto/tunel-vrata-detalj.webp",
    ],
    products: ["fsd-1-puna-celicna-jednokrilna-vrata", "fsd-2-puna-celicna-dvokrilna-vrata"],
    category: "prometna-infrastruktura",
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
