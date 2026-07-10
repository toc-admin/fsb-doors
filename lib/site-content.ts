// Jedinstveni izvor sadržaja koji dijele trenutna stranica i svi dizajnerski
// koncepti — ispravke iz povratnih informacija klijenta žive samo ovdje.

export interface TrustStat {
  value: string;
  label: string;
}

// Hero: bez paušalnih "100%" tvrdnji — samo provjerljivi podaci.
export const HERO_TRUST_STATS: TrustStat[] = [
  { value: "20+", label: "godina iskustva" },
  { value: "5000+", label: "ugrađenih vrata" },
  { value: "EI120", label: "najviša klasa otpornosti" },
];

export interface CompanyStat {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export const COMPANY_STATS: CompanyStat[] = [
  {
    value: 20,
    suffix: "+",
    label: "Godina iskustva",
    description: "Na hrvatskom tržištu",
  },
  {
    value: 5000,
    suffix: "+",
    label: "Ugrađenih vrata",
    description: "Diljem Hrvatske",
  },
  {
    value: 120,
    suffix: "",
    label: "Minuta vatrootpornosti",
    description: "Najviša klasa EI120",
  },
  {
    value: 8,
    suffix: "",
    label: "Sektora primjene",
    description: "Od bolnica do tunela",
  },
];

export interface Feature {
  id: string;
  title: string;
  description: string;
}

export const FEATURES: Feature[] = [
  {
    id: "razvoj-i-certifikacija",
    title: "Razvoj i certifikacija",
    description:
      "Vlastiti razvojni tim kontinuirano razvija i unapređuje naša rješenja, a proizvode kroz ispitivanja u akreditiranim institucijama vodimo do potrebnih certifikata.",
  },
  {
    id: "strucno-savjetovanje",
    title: "Stručno savjetovanje",
    description:
      "Naš tim stručnjaka pruža profesionalno savjetovanje i podršku u odabiru optimalnog rješenja za vaše potrebe.",
  },
  {
    id: "profesionalna-ugradnja",
    title: "Profesionalna ugradnja",
    description:
      "Garantiramo preciznu ugradnju od strane certificiranih tehničara s dugogodišnjim iskustvom.",
  },
  {
    id: "vlastita-proizvodnja",
    title: "Vlastita proizvodnja",
    description:
      "Sva vrata izrađujemo po mjeri u vlastitom pogonu, prema izmjeri i zahtjevima svakog projekta.",
  },
  {
    id: "jamstvo-kvalitete",
    title: "Jamstvo kvalitete",
    description:
      "Nudimo višegodišnje jamstvo na sve naše proizvode i usluge uz redovito održavanje.",
  },
  {
    id: "prilagodena-rjesenja",
    title: "Prilagođena rješenja",
    description:
      "Nestandardne dimenzije, posebne izvedbe i specifični zahtjevi projekta za nas su pravilo, a ne iznimka.",
  },
];

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "konzultacije",
    number: "01",
    title: "Konzultacije",
    description:
      "Analiziramo vaše potrebe i zahtjeve projekta te savjetujemo o optimalnim rješenjima i tehničkim specifikacijama.",
  },
  {
    id: "izmjera",
    number: "02",
    title: "Izmjera na lokaciji",
    description:
      "Izlazimo na lokaciju i obavljamo preciznu izmjeru svih otvora kako bi svaki proizvod savršeno odgovarao vašem objektu.",
  },
  {
    id: "sheme",
    number: "03",
    title: "Ponuda i tehničke sheme",
    description:
      "Izrađujemo detaljnu ponudu i tehničke sheme. Nakon vaše potvrde shema, proizvod ide u proizvodnju.",
  },
  {
    id: "proizvodnja",
    number: "04",
    title: "Proizvodnja",
    description:
      "Svaki proizvod izrađujemo po mjeri u vlastitom pogonu, uz strogu kontrolu kvalitete u svim fazama proizvodnje.",
  },
  {
    id: "ugradnja",
    number: "05",
    title: "Ugradnja i primopredaja",
    description:
      "Certificirani tehničari ugrađuju vrata prema standardima. Projekt predajemo s kompletnom dokumentacijom.",
  },
];

export const RND_CERTIFICATION = {
  label: "Razvoj i certifikacija",
  title: "Vlastiti razvoj, ispitano i certificirano",
  paragraphs: [
    "FSB Doors ima vlastiti razvojni tim koji kontinuirano razvija i unapređuje naša protupožarna rješenja — od konstrukcije i materijala do najsitnijih detalja izvedbe.",
    "Svaki proizvod prolazi ispitivanja u akreditiranim institucijama (LTM, Institut IGH i dr.), a naš tim vodi ga kroz cijeli proces certifikacije do potrebnih oznaka i klasa otpornosti.",
  ],
  points: [
    "Vlastiti razvojni tim i kontinuirano unapređenje proizvoda",
    "Ispitivanja u akreditiranim institucijama (LTM, Institut IGH i dr.)",
    "Vođenje proizvoda kroz cijeli proces certifikacije",
    "Klase otpornosti od EI30 do EI120",
  ],
};

export const MARQUEE_ITEMS = [
  "Vrata za budućnost",
  "Sigurnost",
  "Kvaliteta",
  "Pouzdanost",
  "20+ godina iskustva",
  "Certificirani proizvodi",
  "Vlastiti razvoj i proizvodnja",
  "Stručna ugradnja",
  "Protupožarna zaštita",
];
