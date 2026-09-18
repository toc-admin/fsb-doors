// Finalna klasifikacija "područja primjene" — dostavio klijent 2026-09-16,
// opisi kategorija i stvarne reference — dostavio klijent 2026-09-18.
export const PROJECT_CATEGORIES = [
  {
    slug: "bolnice-i-zdravstvene-ustanove",
    name: "Bolnice i zdravstvene ustanove",
    description:
      "Rješenja pasivne požarne zaštite za postizanje maksimalne sigurnosti uz minimalne smetnje za rad i intenzivnu prohodnost kroz zdravstvene ustanove.",
    image: "/images/fiksne-ostakljene-stijene.webp",
  },
  {
    slug: "odgojno-obrazovne-ustanove",
    name: "Odgojno-obrazovne ustanove",
    description:
      "Požarna vrata za škole, vrtiće, fakultete — prilagođena svakodnevnom intenzivnom korištenju.",
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
      "Robusna rješenja za proizvodne hale, skladišta i energetska postrojenja.",
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
      "Protupožarna rješenja za trgovačke i prodajne prostore koja objedinjuju sigurnost, funkcionalnost i kvalitetnu arhitektonsku integraciju — od skladišnih prostora do ostakljenih sustava u prodajnim zonama.",
    image: "/images/poslovni-objekti.webp",
  },
  {
    slug: "stambene-i-poslovne-zgrade",
    name: "Stambene i poslovne zgrade i objekti",
    description:
      "Požarna vrata i ostali sustavi pasivne požarne zaštite za stambene i poslovne objekte, prilagođeni različitim zahtjevima zaštite — od stambenih i uredskih prostora do garaža, strojarnica i zajedničkih prostora.",
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
      "Protupožarna zaštita za muzeje, kazališta, dvorane i sakralne prostore — diskretna rješenja koja štite posjetitelje i vrijednu baštinu, a pri tome se i estetski stapaju s ostatkom prostora ne narušavajući vizualni dojam.",
    image: "/images/foto/ostakljena-vrata-atrij.webp",
  },
  {
    slug: "prometna-infrastruktura",
    name: "Prometna infrastruktura",
    description:
      "Specijalizirana protupožarna rješenja za tunele i druge objekte prometne infrastrukture, prilagođena visokim zahtjevima sigurnosti u specifičnim uvjetima primjene. Sva vrata u tunelima izrađena su od nehrđajućeg čeličnog lima (inox).",
    image: "/images/foto/tunel-vrata-767m.webp",
  },
] as const;

export type ProjectCategorySlug = (typeof PROJECT_CATEGORIES)[number]["slug"];
export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

// Registar referenci — stvarni projekti prema popisu klijenta. Reference bez
// fotografija i detalja vode se samo kao zapisi; detaljni dosjei (projects
// niže) dodaju se kad klijent dostavi materijale.
export interface Reference {
  name: string;
  location?: string;
  category: ProjectCategorySlug;
  // Slug detaljnog dosjea u `projects`, ako postoji.
  projectSlug?: string;
}

export const REFERENCES: Reference[] = [
  // Prometna infrastruktura
  {
    name: "Tunel Plasina",
    location: "Autocesta A1",
    category: "prometna-infrastruktura",
    projectSlug: "tunel-plasina",
  },
  { name: "Tunel Lučice", location: "Autocesta A6", category: "prometna-infrastruktura" },
  { name: "Tunel Grič", location: "Autocesta A1", category: "prometna-infrastruktura" },
  { name: "Tunel Brezik", location: "Autocesta A1", category: "prometna-infrastruktura" },
  { name: "Tunel Brinje", location: "Autocesta A1", category: "prometna-infrastruktura" },
  { name: "Tunel Mala Kapela", location: "Autocesta A1", category: "prometna-infrastruktura" },
  { name: "Tunel Sveti Rok", location: "Autocesta A1", category: "prometna-infrastruktura" },
  // Kulturni i sakralni objekti
  {
    name: "Nadbiskupski dvor",
    location: "Kaptol 31, Zagreb",
    category: "kulturni-i-sakralni-objekti",
  },
  {
    name: "Crkva sv. Franje Asiškog s franjevačkim samostanom",
    location: "Kaptol 9, Zagreb",
    category: "kulturni-i-sakralni-objekti",
  },
  { name: "Gliptoteka HAZU", location: "Zagreb", category: "kulturni-i-sakralni-objekti" },
  { name: "Meštrovićev paviljon HDLU", location: "Zagreb", category: "kulturni-i-sakralni-objekti" },
  // Povijesni i zaštićeni objekti
  { name: "Palača VOKR", location: "Zagreb", category: "povijesni-i-zasticeni-objekti" },
  // Trgovački i prodajni centri
  { name: "HEY Park Ogulin", location: "Ogulin", category: "trgovacki-i-prodajni-centri" },
  { name: "HEY Park Buzet", location: "Buzet", category: "trgovacki-i-prodajni-centri" },
  { name: "HEY Park Prelog", location: "Prelog", category: "trgovacki-i-prodajni-centri" },
  { name: "Supernova Varaždin", location: "Varaždin", category: "trgovacki-i-prodajni-centri" },
  // Industrijski i proizvodni objekti
  { name: "RHE Velebit", location: "Muškovci", category: "industrijski-i-proizvodni-objekti" },
  // Odgojno-obrazovne ustanove
  { name: "OŠ Jure Kaštelana", location: "Zagreb", category: "odgojno-obrazovne-ustanove" },
  { name: "OŠ Petar Zrinski", location: "Zagreb", category: "odgojno-obrazovne-ustanove" },
  { name: "OŠ Horvati", location: "Zagreb", category: "odgojno-obrazovne-ustanove" },
  { name: "DV Lekenik", location: "Lekenik", category: "odgojno-obrazovne-ustanove" },
  { name: "DV Zelina", location: "Sveti Ivan Zelina", category: "odgojno-obrazovne-ustanove" },
  { name: "DV Zmijavci", location: "Zmijavci", category: "odgojno-obrazovne-ustanove" },
  // Bolnice i zdravstvene ustanove
  { name: "KBC Osijek", location: "Osijek", category: "bolnice-i-zdravstvene-ustanove" },
  {
    name: "Klinika za infektivne bolesti dr. Fran Mihaljević",
    location: "Zagreb",
    category: "bolnice-i-zdravstvene-ustanove",
  },
];

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

// Detaljni dosjei projekata — samo projekti s dokumentarnim fotografijama.
export const projects: Project[] = [
  {
    slug: "tunel-plasina",
    title: "Tunel Plasina",
    description:
      "Isporuka i ugradnja specijaliziranih vrata od nehrđajućeg čeličnog lima (inox) za SOS niše i evakuacijske prolaze cestovnog tunela Plasina. Vrata su razvijena i ispitana za najzahtjevnije uvjete eksploatacije — povišeni tlak, vlagu i kontinuirano opterećenje prometom.",
    client: "Hrvatske autoceste",
    location: "Autocesta A1",
    year: "2024",
    image: "/images/foto/tunel-siroko.webp",
    gallery: [
      "/images/foto/tunel-vrata-767m.webp",
      "/images/foto/tunel-vrata-frontal.webp",
      "/images/foto/tunel-svjetla.webp",
      "/images/foto/tunel-vrata-detalj.webp",
    ],
    products: ["puna-celicna-pozarna-vrata"],
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

export function getReferencesByCategory(category: ProjectCategorySlug): Reference[] {
  return REFERENCES.filter((reference) => reference.category === category);
}

export function getCategoryBySlug(slug: string): ProjectCategory | undefined {
  return PROJECT_CATEGORIES.find((category) => category.slug === slug);
}

export function getCategoryName(slug: ProjectCategorySlug): string {
  return getCategoryBySlug(slug)?.name ?? slug;
}
