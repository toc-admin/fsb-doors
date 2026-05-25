export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "kako-odabrati-prava-protupozarna-vrata",
    title: "Kako odabrati prava protupožarna vrata",
    excerpt:
      "Vodič kroz ključne faktore pri odabiru protupožarnih vrata za vaš objekt - od klase otpornosti do materijala i certifikacija.",
    content: `
## Zašto su protupožarna vrata važna?

Protupožarna vrata su ključni element pasivne protupožarne zaštite svakog objekta. Njihova primarna funkcija je spriječiti širenje vatre i dima između različitih zona u zgradi, čime se osigurava siguran evakuacijski put i smanjuje materijalna šteta.

## Klase otpornosti na požar

Pri odabiru protupožarnih vrata, prvo što trebate razumjeti su klase otpornosti:

- **EI30** - Otpornost 30 minuta, idealna za stambene objekte
- **EI60** - Otpornost 60 minuta, standard za poslovne prostore
- **EI90** - Otpornost 90 minuta, za industrijske objekte
- **EI120** - Otpornost 120 minuta, za visokorizične prostore

## Materijali

### Čelična vrata
Najpopularniji izbor za industrijske i komercijalne objekte. Nude izvrsnu otpornost i dugotrajnost.

### Ostakljena vrata
Kombinacija sigurnosti i estetike. Idealna za poslovne prostore gdje je važna vizualna komunikacija.

### Drvena vrata
Estetski privlačna opcija za stambene i hotelske objekte, s modernim vatrostalnim ispunama.

## Certifikacija

Uvijek provjerite da vrata posjeduju:
- CE oznaku
- Certifikat prema EN 1634-1
- Izvještaj o ispitivanju od akreditiranog laboratorija

## Savjet stručnjaka

Prije konačne odluke, konzultirajte se sa stručnjakom koji će analizirati specifične zahtjeve vašeg objekta i predložiti optimalno rješenje.
    `,
    image: "/images/celicna-vrata.webp",
    author: "FSB DOORS tim",
    date: "2024-03-15",
    category: "Vodič",
    readTime: "5 min",
  },
  {
    slug: "nova-eu-regulativa-za-protupozarnu-zastitu-2024",
    title: "Nova EU regulativa za protupožarnu zaštitu 2024",
    excerpt:
      "Pregled najnovijih izmjena europskih propisa vezanih uz protupožarnu zaštitu i što to znači za investitore i projektante.",
    content: `
## Pregled novih propisa

Europska unija kontinuirano unapređuje standarde protupožarne zaštite. U 2024. godini stupile su na snagu nove smjernice koje utječu na projektiranje i ugradnju protupožarnih sustava.

## Ključne promjene

### 1. Stroži zahtjevi za visoke zgrade

Za zgrade iznad 22 metra visine sada se zahtijeva:
- Minimalna klasa otpornosti EI60 za sve požarne sektore
- Obvezna automatska detekcija dima
- Poboljšani evakuacijski putevi

### 2. Nova pravila za javne objekte

Škole, bolnice i trgovački centri moraju:
- Implementirati zoniranje s minimalnim EI30 vratima
- Osigurati pristupačnost evakuacijskih puteva za osobe s invaliditetom
- Provoditi redovite inspekcije protupožarnih sustava

### 3. Certifikacija i dokumentacija

Novi zahtjevi za dokumentaciju uključuju:
- Digitalni zapisnik o ugradnji
- QR kodovi za provjeru certifikata
- Obvezna evidencija održavanja

## Što to znači za vas?

Investitori i projektanti trebaju:
1. Provjeriti usklađenost postojećih planova s novim propisima
2. Konzultirati se s certificiranim stručnjacima
3. Planirati budžet za eventualne nadogradnje

## Prijelazni period

EU daje rok od 24 mjeseca za usklađivanje postojećih objekata s novim zahtjevima. Novi projekti moraju odmah primjenjivati nove standarde.
    `,
    image: "/images/poslovni-objekti.webp",
    author: "FSB DOORS tim",
    date: "2024-02-20",
    category: "Propisi",
    readTime: "7 min",
  },
  {
    slug: "5-najcescih-gresaka-pri-ugradnji-protupozarnih-vrata",
    title: "5 najčešćih grešaka pri ugradnji protupožarnih vrata",
    excerpt:
      "Izbjegnite ove uobičajene greške koje mogu ugroziti funkcionalnost vaših protupožarnih vrata i sigurnost objekta.",
    content: `
## Uvod

Čak i najbolja protupožarna vrata neće ispuniti svoju funkciju ako su nepravilno ugrađena. Evo pet najčešćih grešaka koje vidimo na terenu.

## 1. Nepravilno brtvljenje

**Problem:** Praznine između okvira i zida omogućuju prolaz dima i vatre.

**Rješenje:** Koristite certificirane protupožarne brtvene mase i ekspandirajuće trake. Nikada ne improvizirati s običnim materijalima.

## 2. Korištenje necertificiranog okvira

**Problem:** Mnogi pokušavaju uštedjeti koristeći standardni okvir za protupožarna vrata.

**Rješenje:** Uvijek koristite certificirani okvir koji je testiran zajedno s vratima. Protupožarna vrata su sustav - vrata i okvir moraju biti usklađeni.

## 3. Blokiranje samozatvarača

**Problem:** Često vidimo da korisnici blokiraju samozatvarač kako bi vrata ostala otvorena.

**Rješenje:** Ako trebate držati vrata otvorena, ugradite elektromagnetni držač povezan s vatrodojavom koji će pustiti vrata da se zatvore u slučaju alarma.

## 4. Pogrešne dimenzije otvora

**Problem:** Preveliki ili premali otvor zahtijeva improvizaciju koja narušava certificirani sustav.

**Rješenje:** Precizno izmjerite otvor prije narudžbe. U slučaju odstupanja, konzultirajte se s proizvođačem.

## 5. Zanemarivanje redovitog održavanja

**Problem:** Protupožarna vrata koja nisu održavana gube svoju funkcionalnost.

**Rješenje:** Provodite kvartalne provjere i godišnji servis. Dokumentirajte sve radove.

## Zaključak

Ispravna ugradnja je jednako važna kao i kvaliteta samih vrata. Uvijek angažirajte certificirane montere i inzistirajte na dokumentaciji o ugradnji.
    `,
    image: "/images/ugradnja-protupozarnih-vrata.webp",
    author: "FSB DOORS tim",
    date: "2024-01-10",
    category: "Savjeti",
    readTime: "6 min",
  },
  {
    slug: "odrzavanje-protupozarnih-vrata-vodic",
    title: "Održavanje protupožarnih vrata - vodič",
    excerpt:
      "Kompletan vodič za pravilno održavanje protupožarnih vrata kako bi zadržala svoju funkcionalnost i certifikaciju.",
    content: `
## Zašto je održavanje važno?

Redovito održavanje protupožarnih vrata nije samo zakonska obveza - to je pitanje sigurnosti. Zanemarena vrata mogu zatajiti upravo kada su najpotrebnija.

## Mjesečne provjere (korisnik)

Svaki mjesec provjerite:

1. **Zatvaranje vrata** - Vrata se moraju potpuno zatvoriti bez pomoći
2. **Brtve** - Vizualno provjerite jesu li brtve neoštećene
3. **Samozatvarač** - Mora raditi glatko, bez zastajkivanja
4. **Okov** - Kvake i brave moraju funkcionirati bez problema
5. **Vidljiva oštećenja** - Udubljenja, ogrebotine, deformacije

## Kvartalne provjere (održavatelj)

Svaka tri mjeseca stručna osoba treba:

- Podmazati šarke i mehanizme
- Prilagoditi samozatvarač ako je potrebno
- Provjeriti intumescentne brtve
- Testirati bravu i panik okov
- Dokumentirati stanje

## Godišnji servis (certificirani serviser)

Jednom godišnje obvezno:

- Kompletna inspekcija svih komponenti
- Zamjena istrošenih dijelova
- Provjera usklađenosti s certifikatom
- Izdavanje izvještaja o pregledu
- Ažuriranje dokumentacije

## Kada zamijeniti komponente?

Znakovi da je potrebna zamjena:
- Samozatvarač ne zatvara vrata potpuno
- Brtve su vidljivo oštećene ili nedostaju
- Šarke su labave ili hrđaju
- Vrata su deformirana

## Dokumentacija

Vodite evidenciju koja uključuje:
- Datume svih pregleda
- Provedene radove
- Zamijenjene dijelove
- Ime i certifikat servisera

## Zakonski okvir

Prema hrvatskim propisima, vlasnik objekta odgovoran je za održavanje protupožarne opreme. Neodržavana oprema može rezultirati kaznama i poništenjem osiguranja.
    `,
    image: "/images/odrzavanje-protupozarnih-vrata.webp",
    author: "FSB DOORS tim",
    date: "2023-12-05",
    category: "Održavanje",
    readTime: "8 min",
  },
];

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getLatestBlogPosts(count: number = 3): BlogPost[] {
  return getAllBlogPosts().slice(0, count);
}
