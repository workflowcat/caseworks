// People named in the public record of the case — the panels that decided it
// and the individuals named in the resulting indictments and warrants.
// Each entry sourced. Counsel and unnamed JIT investigators are deliberately
// omitted because the press releases do not name them.

export type Person = {
  id: string;
  name: string;
  role: string;
  state?: string;
  group:
    | "merits-bench"
    | "admissibility-bench"
    | "registrar"
    | "hague-defendant"
    | "icc-warrant"
    | "applicant-foundation";
  notes?: string;
  source: string;
};

export const people: Person[] = [
  // Merits Grand Chamber — 9 July 2025
  {
    id: "guyomar",
    name: "Mattias Guyomar",
    role: "President of the Grand Chamber",
    state: "France",
    group: "merits-bench",
    source: "ECHR PR 173 (2025)",
  },
  {
    id: "oleary-merits",
    name: "Síofra O'Leary",
    role: "Judge",
    state: "Ireland",
    group: "merits-bench",
    notes:
      "Was President of the admissibility Grand Chamber (Jan 2022 hearing).",
    source: "ECHR PR 173 (2025)",
  },
  {
    id: "bardsen",
    name: "Arnfinn Bårdsen",
    role: "Judge",
    state: "Norway",
    group: "merits-bench",
    source: "ECHR PR 173 (2025)",
  },
  {
    id: "ktistakis",
    name: "Ioannis Ktistakis",
    role: "Judge",
    state: "Greece",
    group: "merits-bench",
    source: "ECHR PR 173 (2025)",
  },
  {
    id: "kucsko-stadlmayer",
    name: "Gabriele Kucsko-Stadlmayer",
    role: "Judge",
    state: "Austria",
    group: "merits-bench",
    source: "ECHR PR 173 (2025)",
  },
  {
    id: "wojtyczek",
    name: "Krzysztof Wojtyczek",
    role: "Judge",
    state: "Poland",
    group: "merits-bench",
    source: "ECHR PR 173 (2025)",
  },
  {
    id: "vehabovic",
    name: "Faris Vehabović",
    role: "Judge",
    state: "Bosnia and Herzegovina",
    group: "merits-bench",
    source: "ECHR PR 173 (2025)",
  },
  {
    id: "mourou-vikstrom",
    name: "Stéphanie Mourou-Vikström",
    role: "Judge",
    state: "Monaco",
    group: "merits-bench",
    source: "ECHR PR 173 (2025)",
  },
  {
    id: "serghides",
    name: "Georgios A. Serghides",
    role: "Judge",
    state: "Cyprus",
    group: "merits-bench",
    source: "ECHR PR 173 (2025)",
  },
  {
    id: "eicke",
    name: "Tim Eicke",
    role: "Judge",
    state: "United Kingdom",
    group: "merits-bench",
    source: "ECHR PR 173 (2025)",
  },
  {
    id: "huseynov",
    name: "Lətif Hüseynov",
    role: "Judge",
    state: "Azerbaijan",
    group: "merits-bench",
    source: "ECHR PR 173 (2025)",
  },
  {
    id: "ilievski",
    name: "Jovan Ilievski",
    role: "Judge",
    state: "North Macedonia",
    group: "merits-bench",
    source: "ECHR PR 173 (2025)",
  },
  {
    id: "schukking",
    name: "Jolien Schukking",
    role: "Judge",
    state: "Netherlands",
    group: "merits-bench",
    source: "ECHR PR 173 (2025)",
  },
  {
    id: "wennerstrom",
    name: "Erik Wennerström",
    role: "Judge",
    state: "Sweden",
    group: "merits-bench",
    source: "ECHR PR 173 (2025)",
  },
  {
    id: "seibert-fohr",
    name: "Anja Seibert-Fohr",
    role: "Judge",
    state: "Germany",
    group: "merits-bench",
    source: "ECHR PR 173 (2025)",
  },
  {
    id: "sarcu",
    name: "Diana Sârcu",
    role: "Judge",
    state: "Republic of Moldova",
    group: "merits-bench",
    source: "ECHR PR 173 (2025)",
  },
  {
    id: "gnatovskyy",
    name: "Mykola Gnatovskyy",
    role: "Judge",
    state: "Ukraine",
    group: "merits-bench",
    source: "ECHR PR 173 (2025)",
  },
  {
    id: "campos",
    name: "Abel Campos",
    role: "Deputy Registrar",
    group: "registrar",
    notes: "Acted as registrar for the merits judgment.",
    source: "ECHR PR 173 (2025)",
  },

  // Admissibility Grand Chamber — 25 January 2023 (delivery; adopted 30 Nov 2022)
  {
    id: "oleary-adm",
    name: "Síofra O'Leary",
    role: "President of the Grand Chamber",
    state: "Ireland",
    group: "admissibility-bench",
    source: "ECHR PR 026 (2023)",
  },
  {
    id: "ravarani",
    name: "Georges Ravarani",
    role: "Judge",
    state: "Luxembourg",
    group: "admissibility-bench",
    source: "ECHR PR 026 (2023)",
  },
  {
    id: "bosnjak",
    name: "Marko Bošnjak",
    role: "Judge",
    state: "Slovenia",
    group: "admissibility-bench",
    source: "ECHR PR 026 (2023)",
  },
  {
    id: "pastor-vilanova",
    name: "Pere Pastor Vilanova",
    role: "Judge",
    state: "Andorra",
    group: "admissibility-bench",
    source: "ECHR PR 026 (2023)",
  },
  {
    id: "yudkivska",
    name: "Ganna Yudkivska",
    role: "Judge",
    state: "Ukraine",
    group: "admissibility-bench",
    source: "ECHR PR 026 (2023)",
  },
  {
    id: "motoc",
    name: "Iulia Antoanella Motoc",
    role: "Judge",
    state: "Romania",
    group: "admissibility-bench",
    source: "ECHR PR 026 (2023)",
  },
  {
    id: "kjolbro",
    name: "Jon Fridrik Kjølbro",
    role: "Judge",
    state: "Denmark",
    group: "admissibility-bench",
    source: "ECHR PR 026 (2023)",
  },
  {
    id: "grozev",
    name: "Yonko Grozev",
    role: "Judge",
    state: "Bulgaria",
    group: "admissibility-bench",
    source: "ECHR PR 026 (2023)",
  },
  {
    id: "prebensen",
    name: "Søren Prebensen",
    role: "Deputy Grand Chamber Registrar",
    group: "registrar",
    notes:
      "Acted as registrar for the admissibility decision (Jan 2023). Several merits judges sat on this panel as well.",
    source: "ECHR PR 026 (2023)",
  },

  // Hague District Court verdict — 17 November 2022
  {
    id: "girkin",
    name: "Igor Girkin (Strelkov)",
    role: "Convicted in absentia of causing the crash and the murder of all 298 on board",
    group: "hague-defendant",
    notes:
      "Former FSB officer; acted as 'defence minister' of the self-declared 'DPR' in 2014. Sentenced to life imprisonment. Not in custody.",
    source: "District Court of The Hague verdict, 17 November 2022",
  },
  {
    id: "dubinskiy",
    name: "Sergey Dubinskiy",
    role: "Convicted in absentia of causing the crash and the murder of all 298 on board",
    group: "hague-defendant",
    notes:
      "Field commander; acted as 'head of intelligence' for the 'DPR' in summer 2014. Sentenced to life imprisonment. Not in custody.",
    source: "District Court of The Hague verdict, 17 November 2022",
  },
  {
    id: "kharchenko",
    name: "Leonid Kharchenko",
    role: "Convicted in absentia of causing the crash and the murder of all 298 on board",
    group: "hague-defendant",
    notes:
      "Field commander. Sentenced to life imprisonment. Not in custody.",
    source: "District Court of The Hague verdict, 17 November 2022",
  },
  {
    id: "pulatov",
    name: "Oleg Pulatov",
    role: "Acquitted",
    group: "hague-defendant",
    notes:
      "The only defendant represented in court. Acquitted on the ground that the evidence did not place him in the immediate vicinity of the launch.",
    source: "District Court of The Hague verdict, 17 November 2022",
  },

  // ICC arrest warrants
  {
    id: "putin",
    name: "Vladimir Putin",
    role: "Subject of ICC arrest warrant — unlawful deportation and transfer of Ukrainian children",
    group: "icc-warrant",
    notes:
      "Issued by ICC Pre-Trial Chamber II, 17 March 2023. First ICC arrest warrant ever issued against the leader of a permanent member of the UN Security Council.",
    source: "ICC Pre-Trial Chamber II, 17 March 2023",
  },
  {
    id: "lvova-belova",
    name: "Maria Lvova-Belova",
    role: "Subject of ICC arrest warrant — unlawful deportation and transfer of Ukrainian children",
    group: "icc-warrant",
    notes:
      "Russian Commissioner for Children's Rights. Adopted a child from Mariupol after the 2022 invasion (per the ECHR judgment).",
    source: "ICC Pre-Trial Chamber II, 17 March 2023",
  },
  {
    id: "kobylash",
    name: "Sergei Kobylash",
    role: "Subject of ICC arrest warrant — missile strikes on Ukrainian energy infrastructure",
    group: "icc-warrant",
    notes:
      "Lieutenant General; commanded Russian Long-Range Aviation. Warrant issued 5 March 2024.",
    source: "ICC Pre-Trial Chamber II, 5 March 2024",
  },
  {
    id: "sokolov",
    name: "Viktor Sokolov",
    role: "Subject of ICC arrest warrant — missile strikes on Ukrainian energy infrastructure",
    group: "icc-warrant",
    notes:
      "Admiral; commanded the Russian Black Sea Fleet. Warrant issued 5 March 2024.",
    source: "ICC Pre-Trial Chamber II, 5 March 2024",
  },
  {
    id: "shoigu",
    name: "Sergei Shoigu",
    role: "Subject of ICC arrest warrant — missile strikes on Ukrainian energy infrastructure",
    group: "icc-warrant",
    notes:
      "Former Russian Defence Minister. Warrant issued 24 June 2024.",
    source: "ICC Pre-Trial Chamber II, 24 June 2024",
  },
  {
    id: "gerasimov",
    name: "Valery Gerasimov",
    role: "Subject of ICC arrest warrant — missile strikes on Ukrainian energy infrastructure",
    group: "icc-warrant",
    notes:
      "Chief of the General Staff of the Russian Armed Forces. Warrant issued 24 June 2024.",
    source: "ICC Pre-Trial Chamber II, 24 June 2024",
  },
];

export const GROUP_LABEL: Record<Person["group"], string> = {
  "merits-bench": "Grand Chamber — merits judgment, 9 July 2025",
  "admissibility-bench": "Grand Chamber — admissibility decision, 25 January 2023",
  registrar: "Court registrars",
  "hague-defendant": "District Court of The Hague — defendants",
  "icc-warrant": "ICC arrest warrants",
  "applicant-foundation": "Applicant-side organisations",
};

export const GROUP_ORDER: Person["group"][] = [
  "merits-bench",
  "admissibility-bench",
  "registrar",
  "hague-defendant",
  "icc-warrant",
  "applicant-foundation",
];
