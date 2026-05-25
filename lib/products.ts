export interface Product {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  gallery: string[];
  category: string;
  categorySlug: string;
  fireRating: string[];
  features: string[];
  specifications: { label: string; value: string }[];
  badge?: string;
}

export interface ProductCategory {
  slug: string;
  name: string;
  description: string;
  image: string;
  features: string[];
}

export const productCategories: ProductCategory[] = [
  {
    slug: "celicna-vrata",
    name: "Čelična vrata",
    description: "Visokokvalitetna čelična protupožarna vrata s klasama otpornosti od EI30 do EI120. Idealna za industrijske i komercijalne objekte.",
    image: "/images/celicna-vrata.webp",
    features: ["EI30 - EI120", "Čelični okvir", "Mineralna ispuna"],
  },
  {
    slug: "ostakljena-vrata",
    name: "Ostakljena vrata",
    description: "Moderna protupožarna ostakljena vrata koja kombiniraju sigurnost i estetiku. Savršena za poslovne i javne prostore.",
    image: "/images/ostakljena-vrata.webp",
    features: ["EI30 - EI60", "Vatrostalno staklo", "Aluminij/čelik"],
  },
  {
    slug: "fiksne-ostakljene-stijene",
    name: "Fiksne ostakljene stijene",
    description: "Protupožarne staklene pregrade za odvajanje prostora uz održavanje vizualne povezanosti i prirodnog svjetla.",
    image: "/images/fiksne-ostakljene-stijene.webp",
    features: ["Do 4m visine", "Modularni sustav", "Visoka transparentnost"],
  },
  {
    slug: "revizijska-vrata",
    name: "Revizijska vrata",
    description: "Specijalizirana protupožarna vrata za pristup tehničkim instalacijama i revizijskim oknima.",
    image: "/images/revizijska-vrata.webp",
    features: ["EI30 - EI90", "Skrivene šarke", "Brzi pristup"],
  },
];

export const products: Product[] = [
  // Čelična vrata
  {
    slug: "fsd-1-puna-celicna-jednokrilna-vrata",
    name: "FSD-1 Puna čelična jednokrilna vrata",
    shortDescription: "Standardna jednokrilna čelična protupožarna vrata za industrijske i komercijalne objekte.",
    description: "FSD-1 su naša najprodavanija jednokrilna čelična protupožarna vrata. Izrađena od visokokvalitetnog čeličnog lima s mineralnom ispunom, ova vrata pružaju izvrsnu protupožarnu zaštitu do 120 minuta. Idealna su za industrijske objekte, skladišta, tehničke prostore i sve lokacije gdje je potrebna pouzdana protupožarna barijera.",
    image: "/images/celicna-vrata.webp",
    gallery: [
      "/images/celicna-vrata.webp",
    ],
    category: "Čelična vrata",
    categorySlug: "celicna-vrata",
    fireRating: ["EI30", "EI60", "EI90", "EI120"],
    features: [
      "Jednokrilna izvedba",
      "Čelični okvir i krilo",
      "Integrirana intumescentna brtva",
      "Samozatvarač s podešavanjem",
      "Trostruke šarke",
      "Prašno lakiranje RAL po izboru",
    ],
    specifications: [
      { label: "Dimenzije (Š x V)", value: "700-1100 x 1900-2200 mm" },
      { label: "Debljina krila", value: "54 mm (EI30/60), 72 mm (EI90/120)" },
      { label: "Okvir", value: "Čelični kutni profil 50x30x1.5 mm" },
      { label: "Ispuna", value: "Mineralna vuna 120 kg/m³" },
      { label: "Završna obrada", value: "Prašno lakiranje RAL" },
      { label: "Težina", value: "35-65 kg ovisno o dimenzijama" },
      { label: "Certifikacija", value: "EN 1634-1, CE oznaka" },
    ],
    badge: "Najprodavanije",
  },
  {
    slug: "fsd-2-puna-celicna-dvokrilna-vrata",
    name: "FSD-2 Puna čelična dvokrilna vrata",
    shortDescription: "Dvokrilna čelična protupožarna vrata za šire prolaze i veće otvore.",
    description: "FSD-2 dvokrilna čelična vrata projektirana su za šire prolaze gdje je potrebna protupožarna zaštita. S asimetričnom ili simetričnom podjelom krila, ova vrata omogućuju fleksibilnost u svakodnevnom korištenju uz punu protupožarnu funkcionalnost.",
    image: "/images/celicna-vrata.webp",
    gallery: [
      "/images/celicna-vrata.webp",
    ],
    category: "Čelična vrata",
    categorySlug: "celicna-vrata",
    fireRating: ["EI30", "EI60", "EI90"],
    features: [
      "Dvokrilna izvedba",
      "Simetrična ili asimetrična podjela",
      "Koordinator zatvaranja",
      "Panik okov opcija",
      "Elektromagnetno držanje opcija",
    ],
    specifications: [
      { label: "Dimenzije (Š x V)", value: "1200-2400 x 1900-2500 mm" },
      { label: "Debljina krila", value: "54 mm (EI30/60), 72 mm (EI90)" },
      { label: "Okvir", value: "Čelični kutni profil 50x40x2 mm" },
      { label: "Ispuna", value: "Mineralna vuna 120 kg/m³" },
      { label: "Završna obrada", value: "Prašno lakiranje RAL" },
      { label: "Težina", value: "70-120 kg" },
      { label: "Certifikacija", value: "EN 1634-1, CE oznaka" },
    ],
  },
  {
    slug: "fsd-3-celicna-vrata-s-prozorom",
    name: "FSD-3 Čelična vrata s prozorom",
    shortDescription: "Čelična protupožarna vrata s integriranim vatrostalnim prozorom za vizualnu kontrolu.",
    description: "FSD-3 kombinira robusnost čeličnih vrata s praktičnošću vatrostalnog prozora. Idealna za prostore gdje je potrebna vizualna kontrola uz održavanje protupožarne zaštite, poput kuhinja restorana, tehničkih prostora i industrijskih pogona.",
    image: "/images/celicna-vrata.webp",
    gallery: [
      "/images/celicna-vrata.webp",
    ],
    category: "Čelična vrata",
    categorySlug: "celicna-vrata",
    fireRating: ["EI30", "EI60"],
    features: [
      "Integrirani vatrostalni prozor",
      "Različite veličine prozora",
      "Jednokrilna ili dvokrilna izvedba",
      "Prozirno ili mat staklo",
    ],
    specifications: [
      { label: "Dimenzije (Š x V)", value: "800-1200 x 2000-2200 mm" },
      { label: "Prozor", value: "300x300 do 600x400 mm" },
      { label: "Staklo", value: "Vatrostalno EI30/EI60" },
      { label: "Debljina krila", value: "54 mm" },
      { label: "Završna obrada", value: "Prašno lakiranje RAL" },
      { label: "Certifikacija", value: "EN 1634-1, CE oznaka" },
    ],
  },
  {
    slug: "fsd-4-celicna-klizna-vrata",
    name: "FSD-4 Čelična klizna protupožarna vrata",
    shortDescription: "Klizna čelična vrata za velike industrijske otvore s automatskim zatvaranjem.",
    description: "FSD-4 klizna protupožarna vrata idealna su za velike industrijske otvore gdje standardna okretna vrata nisu praktična. S automatskim sustavom zatvaranja u slučaju požara, ova vrata osiguravaju sigurnost bez kompromisa u funkcionalnosti.",
    image: "/images/celicna-vrata.webp",
    gallery: [
      "/images/celicna-vrata.webp",
    ],
    category: "Čelična vrata",
    categorySlug: "celicna-vrata",
    fireRating: ["EI60", "EI90"],
    features: [
      "Klizni mehanizam",
      "Automatsko zatvaranje",
      "Za velike otvore",
      "Elektromotorni pogon opcija",
      "Povezivanje s vatrodojavom",
    ],
    specifications: [
      { label: "Dimenzije (Š x V)", value: "Do 4000 x 4000 mm" },
      { label: "Debljina krila", value: "72 mm" },
      { label: "Vodilica", value: "Gornja čelična vodilica" },
      { label: "Pogon", value: "Gravitacijski ili elektromotorni" },
      { label: "Certifikacija", value: "EN 1634-1, CE oznaka" },
    ],
    badge: "Za industriju",
  },

  // Ostakljena vrata
  {
    slug: "fgd-1-ostakljena-jednokrilna-vrata",
    name: "FGD-1 Ostakljena jednokrilna vrata",
    shortDescription: "Elegantna jednokrilna protupožarna vrata s punim ostakljenjem za poslovne prostore.",
    description: "FGD-1 ostakljena vrata kombiniraju sigurnost i estetiku. S punim ostakljenjem od poda do stropa, ova vrata stvaraju osjećaj prostora i svjetla uz punu protupožarnu zaštitu. Idealna za moderne urede, hotelske hodnike i javne prostore.",
    image: "/images/ostakljena-vrata.webp",
    gallery: [
      "/images/ostakljena-vrata.webp",
    ],
    category: "Ostakljena vrata",
    categorySlug: "ostakljena-vrata",
    fireRating: ["EI30", "EI60"],
    features: [
      "Puno ostakljenje",
      "Aluminijski ili čelični okvir",
      "Minimalistički dizajn",
      "Tihi samozatvarač",
      "Različite boje okvira",
    ],
    specifications: [
      { label: "Dimenzije (Š x V)", value: "800-1200 x 2100-2500 mm" },
      { label: "Staklo", value: "Vatrostalno EI30/EI60, 21-33 mm" },
      { label: "Okvir", value: "Aluminij ili čelik, 50 mm" },
      { label: "Boja", value: "RAL po izboru ili eloksirani aluminij" },
      { label: "Certifikacija", value: "EN 1634-1, CE oznaka" },
    ],
    badge: "Premium",
  },
  {
    slug: "fgd-2-ostakljena-dvokrilna-vrata",
    name: "FGD-2 Ostakljena dvokrilna vrata",
    shortDescription: "Reprezentativna dvokrilna ostakljena vrata za glavne ulaze i reprezentativne prostore.",
    description: "FGD-2 dvokrilna ostakljena vrata idealna su za reprezentativne ulaze, konferencijske centre i luksuzne hotele. S elegantnim dizajnom i vrhunskom vatrostalnom zaštitom, ova vrata čine snažan vizualni dojam.",
    image: "/images/ostakljena-vrata.webp",
    gallery: [
      "/images/ostakljena-vrata.webp",
    ],
    category: "Ostakljena vrata",
    categorySlug: "ostakljena-vrata",
    fireRating: ["EI30", "EI60"],
    features: [
      "Dvokrilna izvedba",
      "Simetrična podjela",
      "Električno otvaranje opcija",
      "Panik okov",
      "Koordinator zatvaranja",
    ],
    specifications: [
      { label: "Dimenzije (Š x V)", value: "1400-2400 x 2100-3000 mm" },
      { label: "Staklo", value: "Vatrostalno EI30/EI60" },
      { label: "Okvir", value: "Aluminij ili čelik" },
      { label: "Okov", value: "Inox ili eloksirani aluminij" },
      { label: "Certifikacija", value: "EN 1634-1, CE oznaka" },
    ],
  },
  {
    slug: "fgd-3-ostakljena-vrata-s-fiksnim-bokorom",
    name: "FGD-3 Ostakljena vrata s fiksnim bokorom",
    shortDescription: "Ostakljena vrata s bočnim fiksnim elementom za šire otvore.",
    description: "FGD-3 kombinira funkcionalna ostakljena vrata s fiksnim bočnim elementom. Ovo rješenje idealno je za šire otvore gdje je potrebna kombinacija prolaza i fiksne staklene površine.",
    image: "/images/ostakljena-vrata.webp",
    gallery: [
      "/images/ostakljena-vrata.webp",
    ],
    category: "Ostakljena vrata",
    categorySlug: "ostakljena-vrata",
    fireRating: ["EI30", "EI60"],
    features: [
      "Vrata + fiksni bokor",
      "Fleksibilne dimenzije",
      "Kontinuirana staklena površina",
      "Isti profil za vrata i bokor",
    ],
    specifications: [
      { label: "Dimenzije (Š x V)", value: "1200-3000 x 2100-3000 mm" },
      { label: "Vrata", value: "800-1200 mm širine" },
      { label: "Bokor", value: "400-1800 mm širine" },
      { label: "Staklo", value: "Vatrostalno EI30/EI60" },
      { label: "Certifikacija", value: "EN 1634-1, CE oznaka" },
    ],
  },

  // Fiksne ostakljene stijene
  {
    slug: "fgw-1-fiksna-staklena-stijena",
    name: "FGW-1 Fiksna staklena stijena",
    shortDescription: "Modularna protupožarna staklena stijena za odvajanje prostora.",
    description: "FGW-1 fiksne staklene stijene omogućuju stvaranje sigurnosnih zona uz održavanje vizualne povezanosti. Modularni sustav omogućuje prilagodbu različitim dimenzijama i konfiguracijama prostora.",
    image: "/images/fiksne-ostakljene-stijene.webp",
    gallery: [
      "/images/fiksne-ostakljene-stijene.webp",
    ],
    category: "Fiksne ostakljene stijene",
    categorySlug: "fiksne-ostakljene-stijene",
    fireRating: ["EI30", "EI60"],
    features: [
      "Modularni sustav",
      "Visina do 4000 mm",
      "Minimalni profili",
      "Kombinacija s vratima",
      "Stropna ili zidna montaža",
    ],
    specifications: [
      { label: "Max. visina", value: "4000 mm" },
      { label: "Širina modula", value: "400-1500 mm" },
      { label: "Staklo", value: "Vatrostalno EI30/EI60" },
      { label: "Profil", value: "Aluminij ili čelik, 50 mm" },
      { label: "Montaža", value: "Zidna ili stropna" },
      { label: "Certifikacija", value: "EN 1634-1, CE oznaka" },
    ],
  },
  {
    slug: "fgw-2-zakrivljena-staklena-stijena",
    name: "FGW-2 Zakrivljena staklena stijena",
    shortDescription: "Protupožarna staklena stijena za zakrivljene i radijalne prostore.",
    description: "FGW-2 omogućuje stvaranje zakrivljenih protupožarnih staklenih pregrada. Idealna za atrije, recepcije i prostore s nelinearnim dizajnom.",
    image: "/images/fiksne-ostakljene-stijene.webp",
    gallery: [
      "/images/fiksne-ostakljene-stijene.webp",
    ],
    category: "Fiksne ostakljene stijene",
    categorySlug: "fiksne-ostakljene-stijene",
    fireRating: ["EI30", "EI60"],
    features: [
      "Zakrivljena izvedba",
      "Minimalni radijus 2000 mm",
      "Posebno oblikovano staklo",
      "Prilagođeni profili",
    ],
    specifications: [
      { label: "Min. radijus", value: "2000 mm" },
      { label: "Max. visina", value: "3500 mm" },
      { label: "Staklo", value: "Zakrivljeno vatrostalno" },
      { label: "Profil", value: "Aluminij, savijeni" },
      { label: "Certifikacija", value: "EN 1634-1, CE oznaka" },
    ],
    badge: "Specijalno",
  },

  // Revizijska vrata
  {
    slug: "fad-1-zidna-revizijska-vrata",
    name: "FAD-1 Zidna revizijska vrata",
    shortDescription: "Kompaktna revizijska vrata za pristup instalacijama u zidovima.",
    description: "FAD-1 zidna revizijska vrata omogućuju siguran pristup instalacijskim kanalima, ventilima i drugim tehničkim elementima skrivenim u zidovima, bez narušavanja protupožarne zaštite.",
    image: "/images/revizijska-vrata.webp",
    gallery: [
      "/images/revizijska-vrata.webp",
    ],
    category: "Revizijska vrata",
    categorySlug: "revizijska-vrata",
    fireRating: ["EI30", "EI60", "EI90"],
    features: [
      "Zidna ugradnja",
      "Skrivene šarke opcija",
      "Različiti sustavi zaključavanja",
      "Mogućnost oblaganja",
      "Brtvljenje dimom",
    ],
    specifications: [
      { label: "Dimenzije", value: "300x300 do 1000x2000 mm" },
      { label: "Debljina", value: "40-60 mm" },
      { label: "Materijal", value: "Čelični lim" },
      { label: "Zaključavanje", value: "Ključ, četverokut, magnet" },
      { label: "Certifikacija", value: "EN 1634-1, CE oznaka" },
    ],
  },
  {
    slug: "fad-2-stropna-revizijska-vrata",
    name: "FAD-2 Stropna revizijska vrata",
    shortDescription: "Revizijska vrata za pristup instalacijama u spuštenim stropovima.",
    description: "FAD-2 stropna revizijska vrata dizajnirana su za siguran pristup tehničkim instalacijama iznad spuštenih stropova. S posebnim mehanizmom otvaranja i zatvaranja, ova vrata osiguravaju praktičnost i sigurnost.",
    image: "/images/revizijska-vrata.webp",
    gallery: [
      "/images/revizijska-vrata.webp",
    ],
    category: "Revizijska vrata",
    categorySlug: "revizijska-vrata",
    fireRating: ["EI30", "EI60"],
    features: [
      "Stropna ugradnja",
      "Sigurnosni zasun",
      "Nosivost poklopca",
      "Integrirano brtvljenje",
    ],
    specifications: [
      { label: "Dimenzije", value: "400x400 do 1200x600 mm" },
      { label: "Debljina", value: "50 mm" },
      { label: "Nosivost", value: "Do 15 kg/m²" },
      { label: "Materijal", value: "Čelični lim + izolacija" },
      { label: "Certifikacija", value: "EN 1634-1, CE oznaka" },
    ],
  },
  {
    slug: "fad-3-podna-revizijska-vrata",
    name: "FAD-3 Podna revizijska vrata",
    shortDescription: "Revizijska vrata za pristup podnim instalacijama i kanalima.",
    description: "FAD-3 podna revizijska vrata omogućuju pristup podnim instalacijama, kabelskim kanalima i tehničkim prostorijama ispod razine poda. S visokom nosivošću i protupožarnom zaštitom.",
    image: "/images/revizijska-vrata.webp",
    gallery: [
      "/images/revizijska-vrata.webp",
    ],
    category: "Revizijska vrata",
    categorySlug: "revizijska-vrata",
    fireRating: ["EI30", "EI60", "EI90"],
    features: [
      "Podna ugradnja",
      "Visoka nosivost",
      "Plinska opruga za otvaranje",
      "Protuklizna površina",
    ],
    specifications: [
      { label: "Dimenzije", value: "500x500 do 1500x1000 mm" },
      { label: "Nosivost", value: "Do 500 kg/m²" },
      { label: "Debljina", value: "60 mm" },
      { label: "Materijal", value: "Čelični lim, ojačani" },
      { label: "Certifikacija", value: "EN 1634-1, CE oznaka" },
    ],
  },
];

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter(p => p.categorySlug === categorySlug);
}

export function getProductBySlug(categorySlug: string, productSlug: string): Product | undefined {
  return products.find(p => p.categorySlug === categorySlug && p.slug === productSlug);
}

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return productCategories.find(c => c.slug === slug);
}
