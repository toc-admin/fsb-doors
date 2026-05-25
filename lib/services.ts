export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  features: string[];
  benefits: string[];
}

export const services: Service[] = [
  {
    slug: "savjetovanje-o-protupozarnoj-zastiti",
    title: "Savjetovanje o protupožarnoj zaštiti",
    shortDescription: "Stručno savjetovanje za optimalna rješenja protupožarne zaštite vašeg objekta.",
    description: "Naši stručnjaci analiziraju vaše potrebe i predlažu optimalna rješenja za protupožarnu zaštitu. Pružamo tehničku podršku od ideje do realizacije, uzimajući u obzir specifičnosti vašeg prostora i zakonske zahtjeve. Svaki projekt započinjemo detaljnom analizom kako bismo razumjeli vaše potrebe i pružili rješenja koja će dugoročno štititi vaš prostor i ljude u njemu.",
    image: "/images/savjetovanje-o-protupozarnoj-zastiti.webp",
    features: [
      "Analiza postojećeg stanja",
      "Prijedlog optimalnih rješenja",
      "Tehnička dokumentacija",
      "Usklađenost s propisima",
    ],
    benefits: [
      "Besplatna inicijalna konzultacija",
      "Individualni pristup svakom projektu",
      "Poznavanje lokalnih propisa i standarda",
      "Dugoročna podrška i savjetovanje",
      "Optimizacija troškova kroz pravilno planiranje",
    ],
  },
  {
    slug: "planiranje-protupozarne-zastite",
    title: "Planiranje protupožarne zaštite",
    shortDescription: "Sveobuhvatni planovi protupožarne zaštite prilagođeni specifičnostima vašeg objekta.",
    description: "Razvijamo sveobuhvatne planove protupožarne zaštite prilagođene specifičnostima vašeg objekta. Surađujemo s arhitektima i projektantima kako bismo osigurali optimalnu integraciju protupožarnih elemenata u vaš projekt. Naš tim ima iskustvo u radu na projektima različitih veličina i složenosti, od manjih poslovnih prostora do velikih industrijskih kompleksa.",
    image: "/images/planiranje-protupozarne-zastite.webp",
    features: [
      "Projektiranje sustava",
      "Suradnja s projektantima",
      "Optimizacija troškova",
      "Kompletna dokumentacija",
    ],
    benefits: [
      "Integracija u sve faze projekta",
      "Koordinacija s ostalim sustavima",
      "Usklađenost s građevinskim propisima",
      "Detaljna projektna dokumentacija",
      "Podrška pri ishođenju dozvola",
    ],
  },
  {
    slug: "ugradnja-protupozarnih-vrata",
    title: "Ugradnja protupožarnih vrata",
    shortDescription: "Profesionalna ugradnja od strane certificiranih tehničara s garantiranom kvalitetom.",
    description: "Profesionalna ugradnja protupožarnih vrata od strane certificiranih tehničara. Garantiramo preciznost izvedbe i usklađenost s tehničkim specifikacijama proizvođača. Naši tehničari prolaze redovite edukacije kako bi bili u tijeku s najnovijim tehnologijama i standardima u industriji protupožarne zaštite.",
    image: "/images/ugradnja-protupozarnih-vrata.webp",
    features: [
      "Certificirani tehničari",
      "Precizna ugradnja",
      "Testiranje funkcionalnosti",
      "Garantirani rezultati",
    ],
    benefits: [
      "Brza i efikasna ugradnja",
      "Minimalne smetnje za vaše poslovanje",
      "Jamstvo na izvedene radove",
      "Dokumentacija o ugradnji",
      "Obuka korisnika",
    ],
  },
  {
    slug: "odrzavanje-protupozarnih-vrata",
    title: "Održavanje protupožarnih vrata",
    shortDescription: "Kvalitetno održavanje za trajnu funkcionalnost i usklađenost s propisima o požarnoj sigurnosti.",
    description: "Nakon uspješne ugradnje protupožarnih vrata, kako bi se osigurala njihova neprekidna stopostotna funkcionalnost, ona zahtijevaju kontinuirano održavanje. Naš tim ne samo da provodi ugradnju, već i pruža redovite preglede i servisiranje, odnosno održavanje i provjeru. Kako bi bili sigurni da vaša protupožarna vrata i dalje zadovoljavaju visoke standarde vatrootpornosti i da korisnicima u prostoru pružaju nepokolebljivu zaštitu od požara, naš tim će provjeriti svaki element protupožarnih vrata i osigurati da svi dijelovi rade ispravno i u skladu s propisanim standardima.",
    image: "/images/odrzavanje-protupozarnih-vrata.webp",
    features: [
      "Redoviti pregledi",
      "Preventivno održavanje",
      "Brzi popravci",
      "Godišnji ugovori",
    ],
    benefits: [
      "Produljenje vijeka trajanja vrata",
      "Održavanje certifikacije",
      "Smanjenje rizika od kvarova",
      "Fleksibilni termini servisa",
      "Prioritetna intervencija za ugovorne klijente",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug);
}
