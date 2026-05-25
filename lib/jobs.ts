export interface JobPosition {
  id: string;
  title: string;
  department: string;
  type: string;
  description: string;
  requirements: string[];
  isActive: boolean;
}

export const jobs: JobPosition[] = [
  {
    id: "monter-protupozarnih-vrata",
    title: "Monter protupožarnih vrata",
    department: "Proizvodnja i ugradnja",
    type: "Puno radno vrijeme",
    description:
      "Tražimo iskusnog montera za ugradnju protupožarnih vrata na različitim lokacijama diljem Hrvatske. Rad uključuje ugradnju čeličnih, ostakljenih i revizijskih protupožarnih vrata u stambene, poslovne i industrijske objekte.",
    requirements: [
      "Minimalno 2 godine iskustva u ugradnji vrata ili sličnim poslovima",
      "Sposobnost čitanja tehničke dokumentacije",
      "Vozačka dozvola B kategorije",
      "Spremnost na putovanja",
      "Fizička kondicija za rad na terenu",
      "Preciznost i pažnja prema detaljima",
    ],
    isActive: true,
  },
  {
    id: "prodajni-predstavnik",
    title: "Prodajni predstavnik",
    department: "Prodaja",
    type: "Puno radno vrijeme",
    description:
      "Pridružite se našem prodajnom timu i pomozite nam širiti mrežu zadovoljnih klijenata. Radite na akviziciji novih kupaca, održavanju odnosa s postojećim klijentima i predstavljanju naših proizvoda na tržištu.",
    requirements: [
      "Iskustvo u B2B prodaji, poželjno u građevinskoj industriji",
      "Izvrsne komunikacijske i prezentacijske vještine",
      "Vozačka dozvola B kategorije",
      "Poznavanje MS Office paketa",
      "Samoinicijativnost i orijentiranost na rezultate",
      "Poznavanje engleskog jezika",
    ],
    isActive: true,
  },
  {
    id: "projektant-protupozarne-zastite",
    title: "Projektant protupožarne zaštite",
    department: "Projektiranje",
    type: "Puno radno vrijeme",
    description:
      "Tražimo inženjera za projektiranje sustava protupožarne zaštite. Rad uključuje izradu projekata, savjetovanje klijenata i suradnju s arhitektima i investitorima na kompleksnim projektima.",
    requirements: [
      "VSS/VŠS tehnički smjer (strojarstvo, arhitektura ili slično)",
      "Poznavanje propisa iz područja zaštite od požara",
      "Iskustvo u radu s CAD alatima",
      "Analitičke sposobnosti i pažnja prema detaljima",
      "Sposobnost rada u timu",
      "Poznavanje engleskog jezika u govoru i pismu",
    ],
    isActive: true,
  },
];

export function getActiveJobs(): JobPosition[] {
  return jobs.filter((job) => job.isActive);
}

export function getJobById(id: string): JobPosition | undefined {
  return jobs.find((job) => job.id === id);
}
