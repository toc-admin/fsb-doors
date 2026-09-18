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

// Obrazloženje kategorije — sadržaj sekcije "Zašto odabrati..." na
// kategorijskoj stranici.
export interface CategoryWhy {
  eyebrow: string;
  title: string;
  intro: string;
  points: string[];
  image: string;
  imageAlt: string;
  imageCaption: string;
}

export interface ProductCategory {
  slug: string;
  name: string;
  description: string;
  image: string;
  features: string[];
  why: CategoryWhy;
  ctaTitle: string;
}

// Proizvodni program — struktura prema uputama klijenta (2026-09-18):
// čelična vrata, aluminijska vrata, aluminijski prozori, fiksne ostakljene
// stijene, revizijska vrata. Terminologija: "požarna vrata", "razred
// vatrootpornosti".
export const productCategories: ProductCategory[] = [
  {
    slug: "celicna-vrata",
    name: "Čelična vrata",
    description:
      "Požarna vrata od čeličnog lima razreda vatrootpornosti od EI30 do EI120 — puna ili s ostakljenim površinama, s nadsvjetlom ili dosvjetlom.",
    image: "/images/foto/celicna-vrata-katalog-1.webp",
    features: ["EI30 - EI120", "Čelični lim", "Puna ili ostakljena izvedba"],
    why: {
      eyebrow: "Obrazloženje / Čelik",
      title: "Zašto odabrati čelična vrata?",
      intro:
        "Čelična požarna vrata pružaju najvišu razinu zaštite za industrijske i komercijalne objekte. Izrađena od čeličnog lima s mineralnom ispunom, nude izvrsna požarna svojstva i dugotrajnost.",
      points: [
        "Razredi vatrootpornosti od EI30 do EI120",
        "Robusna konstrukcija za intenzivnu upotrebu",
        "Otpornost na mehanička oštećenja",
        "Dugotrajnost i minimalno održavanje",
        "Mogućnost izrade po mjeri",
        "Certifikacija prema europskim standardima",
      ],
      image: "/images/foto/celicna-vrata-dvokrilna.webp",
      imageAlt: "Dvokrilna čelična požarna vrata",
      imageCaption: "Dvokrilna čelična vrata / izvedba po mjeri",
    },
    ctaTitle: "Trebate čelična požarna vrata?",
  },
  {
    slug: "aluminijska-vrata",
    name: "Aluminijska vrata",
    description:
      "Aluminijska požarna vrata — puna, djelomično ili potpuno ostakljena, s nadsvjetlom ili dosvjetlom.",
    image: "/images/foto/ostakljena-vrata-atrij.webp",
    features: ["EI30 - EI60", "Aluminijski profili", "Puna ili ostakljena izvedba"],
    why: {
      eyebrow: "Obrazloženje / Aluminij",
      title: "Zašto odabrati aluminijska vrata?",
      intro:
        "Aluminijska požarna vrata spajaju sigurnost s preciznom i elegantnom konstrukcijom. Izvedbe od pune do potpuno ostakljene omogućuju prilagodbu svakom interijeru — od ureda i hotela do javnih prostora.",
      points: [
        "Puna, djelomično ili potpuno ostakljena izvedba",
        "Nadsvjetlo ili dosvjetlo po mjeri otvora",
        "Vitki profili i precizna izrada",
        "RAL boja ili eloksirani aluminij po izboru",
        "Tihi samozatvarači",
        "Certifikacija prema europskim standardima",
      ],
      image: "/images/foto/ugradnja-atrij-radnici.webp",
      imageAlt: "Ugradnja ostakljene aluminijske stijene s vratima u atriju",
      imageCaption: "Ostakljena izvedba s vratima / ugradnja u atriju",
    },
    ctaTitle: "Trebate aluminijska požarna vrata?",
  },
  {
    slug: "aluminijski-prozori",
    name: "Aluminijski prozori",
    description:
      "Požarni prozori od aluminijskih profila s vatrootpornim ostakljenjem — prirodno svjetlo uz punu požarnu zaštitu.",
    image: "/images/foto/ugradnja-stakla-detalj.webp",
    features: ["EI30 - EI60", "Aluminijski profili", "Vatrostalno staklo"],
    why: {
      eyebrow: "Obrazloženje / Prozori",
      title: "Zašto odabrati aluminijske prozore?",
      intro:
        "Aluminijski požarni prozori omogućuju prirodno svjetlo i vizualnu povezanost prostora bez kompromisa u požarnoj zaštiti — kao samostalni elementi ili u kombinaciji s požarnim vratima i stijenama.",
      points: [
        "Vatrootporno ostakljenje EI30/EI60",
        "Kombinacija s vratima i fiksnim stijenama",
        "Vitki aluminijski profili",
        "RAL boja ili eloksirani aluminij po izboru",
        "Izrada po mjeri otvora",
        "Certifikacija prema europskim standardima",
      ],
      image: "/images/foto/stakleni-toranj.webp",
      imageAlt: "Ostakljena fasada s vatrootpornim staklom",
      imageCaption: "Vatrootporno ostakljenje / izvedba po mjeri",
    },
    ctaTitle: "Trebate aluminijske požarne prozore?",
  },
  {
    slug: "fiksne-ostakljene-stijene",
    name: "Fiksne ostakljene stijene",
    description:
      "Požarne staklene pregrade za odvajanje prostora uz održavanje vizualne povezanosti i prirodnog svjetla.",
    image: "/images/foto/ostakljene-stijene-atrij.webp",
    features: ["Do 4m visine", "Modularni sustav", "Visoka transparentnost"],
    why: {
      eyebrow: "Obrazloženje / Stijene",
      title: "Zašto odabrati fiksne ostakljene stijene?",
      intro:
        "Fiksne ostakljene stijene stvaraju sigurne požarne sektore bez zatvaranja prostora — svjetlo i pogled ostaju, a zaštita je potpuna.",
      points: [
        "Visina do 4 metra",
        "Modularni sustav za fleksibilnost",
        "Kombinacija s vratima",
        "Minimalni profili za maksimalnu transparentnost",
        "Zidna ili stropna montaža",
        "Idealne za atrije i otvorene prostore",
      ],
      image: "/images/foto/ostakljene-stijene-atrij.webp",
      imageAlt: "Fiksna ostakljena stijena u atriju",
      imageCaption: "Ostakljena stijena u atriju / modularna izvedba",
    },
    ctaTitle: "Trebate požarne staklene stijene?",
  },
  {
    slug: "revizijska-vrata",
    name: "Revizijska vrata",
    description:
      "Specijalizirana požarna vrata za pristup tehničkim instalacijama i revizijskim oknima.",
    image: "/images/revizijska-vrata.webp",
    features: ["EI30 - EI90", "Skrivene šarke", "Brzi pristup"],
    why: {
      eyebrow: "Obrazloženje / Revizija",
      title: "Zašto odabrati revizijska vrata?",
      intro:
        "Revizijska vrata omogućuju brz i siguran pristup instalacijama bez narušavanja požarne zaštite — u zidu, stropu ili podu.",
      points: [
        "Zidna, stropna i podna ugradnja",
        "Različiti sustavi zaključavanja",
        "Mogućnost oblaganja",
        "Skrivene ili vidljive šarke",
        "Brz pristup za intervencije",
        "Razredi vatrootpornosti do EI90",
      ],
      image: "/images/revizijska-vrata.webp",
      imageAlt: "Požarna revizijska vrata",
      imageCaption: "Revizijska vrata / zidna ugradnja",
    },
    ctaTitle: "Trebate revizijska požarna vrata?",
  },
];

export const products: Product[] = [
  // Čelična vrata
  {
    slug: "puna-celicna-pozarna-vrata",
    name: "Puna čelična požarna vrata",
    shortDescription:
      "Jednokrilna i dvokrilna puna čelična požarna vrata razreda vatrootpornosti od EI30 do EI120.",
    description:
      "Puna čelična požarna vrata izrađena su od čeličnog lima s mineralnom ispunom, u jednokrilnoj i dvokrilnoj izvedbi. S razredima vatrootpornosti od EI30 do EI120 pouzdana su požarna barijera za industrijske objekte, skladišta, tehničke prostore te stambene i poslovne zgrade. Za tunele i posebne uvjete eksploatacije izrađuju se od nehrđajućeg čeličnog lima (inox).",
    image: "/images/foto/celicna-vrata-katalog-1.webp",
    gallery: [
      "/images/foto/celicna-vrata-katalog-1.webp",
      "/images/foto/celicna-vrata-katalog-2.webp",
      "/images/foto/celicna-vrata-dvokrilna.webp",
      "/images/foto/celicna-vrata-zelena-fasada.webp",
    ],
    category: "Čelična vrata",
    categorySlug: "celicna-vrata",
    fireRating: ["EI30", "EI60", "EI90", "EI120"],
    features: [
      "Jednokrilna i dvokrilna izvedba",
      "Čelični okvir i krilo s mineralnom ispunom",
      "Integrirana intumescentna brtva",
      "Samozatvarač s podešavanjem",
      "Panik okov i elektromagnetno držanje po izboru",
      "Izvedba od nehrđajućeg čeličnog lima (inox) za tunele",
      "Prašno lakiranje RAL po izboru",
    ],
    specifications: [
      { label: "Izvedba", value: "Jednokrilna ili dvokrilna" },
      { label: "Razred vatrootpornosti", value: "EI30, EI60, EI90, EI120" },
      { label: "Materijal", value: "Čelični lim, opcija inox" },
      { label: "Ispuna", value: "Mineralna vuna" },
      { label: "Završna obrada", value: "Prašno lakiranje RAL" },
      { label: "Certifikacija", value: "EN 1634-1, CE oznaka" },
    ],
    badge: "Najprodavanije",
  },
  {
    slug: "celicna-pozarna-vrata-s-ostakljenjem",
    name: "Čelična požarna vrata s ostakljenjem",
    shortDescription:
      "Čelična požarna vrata s ostakljenim površinama — djelomično ostakljena, s nadsvjetlom ili dosvjetlom.",
    description:
      "Čelična požarna vrata s ostakljenjem kombiniraju robusnost čelika s prirodnim svjetlom i vizualnom kontrolom prolaza. Krilo može biti djelomično ostakljeno, a stijena se izvodi i s nadsvjetlom ili dosvjetlom — po mjeri svakog otvora. Idealna za hodnike, kuhinje restorana, tehničke prostore i sve lokacije gdje je uz zaštitu potreban i pogled.",
    image: "/images/foto/tunel-vrata-detalj.webp",
    gallery: [
      "/images/foto/tunel-vrata-detalj.webp",
      "/images/foto/ugradnja-stakla-detalj.webp",
    ],
    category: "Čelična vrata",
    categorySlug: "celicna-vrata",
    fireRating: ["EI30", "EI60"],
    features: [
      "Djelomično ostakljeno krilo",
      "Nadsvjetlo ili dosvjetlo po mjeri",
      "Vatrostalno staklo",
      "Jednokrilna ili dvokrilna izvedba",
      "Prašno lakiranje RAL po izboru",
    ],
    specifications: [
      { label: "Izvedba", value: "Djelomično ostakljena, s nadsvjetlom ili dosvjetlom" },
      { label: "Razred vatrootpornosti", value: "EI30, EI60" },
      { label: "Staklo", value: "Vatrostalno" },
      { label: "Materijal", value: "Čelični lim" },
      { label: "Završna obrada", value: "Prašno lakiranje RAL" },
      { label: "Certifikacija", value: "EN 1634-1, CE oznaka" },
    ],
  },

  // Aluminijska vrata
  {
    slug: "puna-aluminijska-pozarna-vrata",
    name: "Puna aluminijska požarna vrata",
    shortDescription:
      "Puna aluminijska požarna vrata preciznih profila za poslovne i javne prostore.",
    description:
      "Puna aluminijska požarna vrata spajaju sigurnost s laganom i preciznom konstrukcijom. Izrađuju se po mjeri, s nadsvjetlom ili dosvjetlom po potrebi, u boji po izboru — za urede, hotele, stambene i javne prostore u kojima je važan i dojam interijera.",
    image: "/images/ostakljena-vrata.webp",
    gallery: ["/images/ostakljena-vrata.webp"],
    category: "Aluminijska vrata",
    categorySlug: "aluminijska-vrata",
    fireRating: ["EI30", "EI60"],
    features: [
      "Puna izvedba bez ostakljenja",
      "Nadsvjetlo ili dosvjetlo po mjeri",
      "Jednokrilna ili dvokrilna izvedba",
      "Tihi samozatvarač",
      "RAL boja ili eloksirani aluminij",
    ],
    specifications: [
      { label: "Izvedba", value: "Puna, s nadsvjetlom ili dosvjetlom" },
      { label: "Razred vatrootpornosti", value: "EI30, EI60" },
      { label: "Materijal", value: "Aluminijski profili" },
      { label: "Završna obrada", value: "RAL ili eloksirani aluminij" },
      { label: "Certifikacija", value: "EN 1634-1, CE oznaka" },
    ],
  },
  {
    slug: "djelomicno-ostakljena-aluminijska-vrata",
    name: "Djelomično ostakljena aluminijska vrata",
    shortDescription:
      "Aluminijska požarna vrata s djelomičnim ostakljenjem — svjetlo i vizualna kontrola uz punu zaštitu.",
    description:
      "Djelomično ostakljena aluminijska požarna vrata unose prirodno svjetlo i omogućuju vizualnu kontrolu prolaza, a puni dio krila zadržava robusnost i privatnost. Izvode se s nadsvjetlom ili dosvjetlom, po mjeri svakog otvora.",
    image: "/images/foto/ostakljena-vrata-atrij.webp",
    gallery: [
      "/images/foto/ostakljena-vrata-atrij.webp",
      "/images/foto/ugradnja-stakla-detalj.webp",
    ],
    category: "Aluminijska vrata",
    categorySlug: "aluminijska-vrata",
    fireRating: ["EI30", "EI60"],
    features: [
      "Djelomično ostakljeno krilo",
      "Nadsvjetlo ili dosvjetlo po mjeri",
      "Vatrostalno staklo",
      "Jednokrilna ili dvokrilna izvedba",
      "RAL boja ili eloksirani aluminij",
    ],
    specifications: [
      { label: "Izvedba", value: "Djelomično ostakljena, s nadsvjetlom ili dosvjetlom" },
      { label: "Razred vatrootpornosti", value: "EI30, EI60" },
      { label: "Staklo", value: "Vatrostalno" },
      { label: "Materijal", value: "Aluminijski profili" },
      { label: "Certifikacija", value: "EN 1634-1, CE oznaka" },
    ],
  },
  {
    slug: "potpuno-ostakljena-aluminijska-vrata",
    name: "Potpuno ostakljena aluminijska vrata",
    shortDescription:
      "Potpuno ostakljena aluminijska požarna vrata za reprezentativne i javne prostore.",
    description:
      "Potpuno ostakljena aluminijska požarna vrata stvaraju osjećaj prostora i svjetla uz punu požarnu zaštitu. S vitkim profilima i staklom od poda do vrha krila, idealna su za moderne urede, hotelske hodnike, reprezentativne ulaze i javne prostore. Izvode se i s nadsvjetlom ili dosvjetlom te u kombinaciji s fiksnim ostakljenim stijenama.",
    image: "/images/foto/ostakljena-vrata-atrij.webp",
    gallery: [
      "/images/foto/ostakljena-vrata-atrij.webp",
      "/images/foto/ugradnja-atrij-radnici.webp",
    ],
    category: "Aluminijska vrata",
    categorySlug: "aluminijska-vrata",
    fireRating: ["EI30", "EI60"],
    features: [
      "Potpuno ostakljeno krilo",
      "Nadsvjetlo ili dosvjetlo po mjeri",
      "Kombinacija s fiksnim stijenama",
      "Jednokrilna ili dvokrilna izvedba",
      "Panik okov po izboru",
    ],
    specifications: [
      { label: "Izvedba", value: "Potpuno ostakljena, s nadsvjetlom ili dosvjetlom" },
      { label: "Razred vatrootpornosti", value: "EI30, EI60" },
      { label: "Staklo", value: "Vatrostalno" },
      { label: "Materijal", value: "Aluminijski profili" },
      { label: "Certifikacija", value: "EN 1634-1, CE oznaka" },
    ],
    badge: "Premium",
  },

  // Aluminijski prozori
  {
    slug: "aluminijski-pozarni-prozor",
    name: "Aluminijski požarni prozor",
    shortDescription:
      "Požarni prozor od aluminijskih profila s vatrootpornim ostakljenjem, izrađen po mjeri otvora.",
    description:
      "Aluminijski požarni prozori omogućuju prirodno svjetlo i vizualnu povezanost prostora bez kompromisa u požarnoj zaštiti. Izrađuju se po mjeri otvora, kao samostalni elementi ili u kombinaciji s požarnim vratima i fiksnim ostakljenim stijenama.",
    image: "/images/foto/ugradnja-stakla-detalj.webp",
    gallery: [
      "/images/foto/ugradnja-stakla-detalj.webp",
      "/images/foto/stakleni-toranj.webp",
    ],
    category: "Aluminijski prozori",
    categorySlug: "aluminijski-prozori",
    fireRating: ["EI30", "EI60"],
    features: [
      "Vatrootporno ostakljenje",
      "Vitki aluminijski profili",
      "Kombinacija s vratima i stijenama",
      "Izrada po mjeri otvora",
      "RAL boja ili eloksirani aluminij",
    ],
    specifications: [
      { label: "Razred vatrootpornosti", value: "EI30, EI60" },
      { label: "Staklo", value: "Vatrostalno" },
      { label: "Materijal", value: "Aluminijski profili" },
      { label: "Završna obrada", value: "RAL ili eloksirani aluminij" },
      { label: "Certifikacija", value: "EN 1634-1, CE oznaka" },
    ],
  },

  // Fiksne ostakljene stijene
  {
    slug: "fiksna-ostakljena-stijena",
    name: "Fiksna ostakljena stijena",
    shortDescription: "Modularna požarna staklena stijena za odvajanje prostora.",
    description:
      "Fiksne ostakljene stijene omogućuju stvaranje sigurnih požarnih sektora uz održavanje vizualne povezanosti. Modularni sustav omogućuje prilagodbu različitim dimenzijama i konfiguracijama prostora, uključujući kombinaciju s požarnim vratima.",
    image: "/images/foto/ostakljene-stijene-atrij.webp",
    gallery: [
      "/images/foto/ostakljene-stijene-atrij.webp",
      "/images/foto/stakleni-toranj.webp",
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
      { label: "Razred vatrootpornosti", value: "EI30, EI60" },
      { label: "Staklo", value: "Vatrostalno" },
      { label: "Profil", value: "Aluminij ili čelik" },
      { label: "Montaža", value: "Zidna ili stropna" },
      { label: "Certifikacija", value: "EN 1634-1, CE oznaka" },
    ],
  },
  {
    slug: "zakrivljena-ostakljena-stijena",
    name: "Zakrivljena ostakljena stijena",
    shortDescription: "Požarna staklena stijena za zakrivljene i radijalne prostore.",
    description:
      "Zakrivljena ostakljena stijena omogućuje stvaranje zakrivljenih požarnih staklenih pregrada. Idealna za atrije, recepcije i prostore s nelinearnim dizajnom.",
    image: "/images/foto/stakleni-toranj.webp",
    gallery: [
      "/images/foto/stakleni-toranj.webp",
      "/images/foto/ugradnja-atrij-radnici.webp",
    ],
    category: "Fiksne ostakljene stijene",
    categorySlug: "fiksne-ostakljene-stijene",
    fireRating: ["EI30", "EI60"],
    features: [
      "Zakrivljena izvedba",
      "Posebno oblikovano staklo",
      "Prilagođeni profili",
      "Kombinacija s ravnim modulima",
    ],
    specifications: [
      { label: "Razred vatrootpornosti", value: "EI30, EI60" },
      { label: "Staklo", value: "Zakrivljeno vatrostalno" },
      { label: "Profil", value: "Aluminij, savijeni" },
      { label: "Certifikacija", value: "EN 1634-1, CE oznaka" },
    ],
    badge: "Specijalno",
  },

  // Revizijska vrata
  {
    slug: "zidna-revizijska-vrata",
    name: "Zidna revizijska vrata",
    shortDescription: "Kompaktna revizijska vrata za pristup instalacijama u zidovima.",
    description:
      "Zidna revizijska vrata omogućuju siguran pristup instalacijskim kanalima, ventilima i drugim tehničkim elementima skrivenim u zidovima, bez narušavanja požarne zaštite.",
    image: "/images/revizijska-vrata.webp",
    gallery: ["/images/revizijska-vrata.webp"],
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
      { label: "Razred vatrootpornosti", value: "EI30, EI60, EI90" },
      { label: "Materijal", value: "Čelični lim" },
      { label: "Zaključavanje", value: "Ključ, četverokut, magnet" },
      { label: "Certifikacija", value: "EN 1634-1, CE oznaka" },
    ],
  },
  {
    slug: "stropna-revizijska-vrata",
    name: "Stropna revizijska vrata",
    shortDescription: "Revizijska vrata za pristup instalacijama u spuštenim stropovima.",
    description:
      "Stropna revizijska vrata dizajnirana su za siguran pristup tehničkim instalacijama iznad spuštenih stropova. S posebnim mehanizmom otvaranja i zatvaranja osiguravaju praktičnost i sigurnost.",
    image: "/images/revizijska-vrata.webp",
    gallery: ["/images/revizijska-vrata.webp"],
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
      { label: "Razred vatrootpornosti", value: "EI30, EI60" },
      { label: "Materijal", value: "Čelični lim + izolacija" },
      { label: "Certifikacija", value: "EN 1634-1, CE oznaka" },
    ],
  },
  {
    slug: "podna-revizijska-vrata",
    name: "Podna revizijska vrata",
    shortDescription: "Revizijska vrata za pristup podnim instalacijama i kanalima.",
    description:
      "Podna revizijska vrata omogućuju pristup podnim instalacijama, kabelskim kanalima i tehničkim prostorijama ispod razine poda. S visokom nosivošću i požarnom zaštitom.",
    image: "/images/revizijska-vrata.webp",
    gallery: ["/images/revizijska-vrata.webp"],
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
      { label: "Razred vatrootpornosti", value: "EI30, EI60, EI90" },
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
