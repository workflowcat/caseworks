// Mapping from cases to the legal instruments they invoke.
// Curated; non-exhaustive but consistent with the press releases and primary materials.

export type Instrument = {
  id: string;
  short: string;
  full: string;
  group: "human-rights" | "humanitarian" | "criminal" | "investment" | "aviation" | "maritime" | "reparations";
};

export const instruments: Instrument[] = [
  { id: "echr-2", short: "ECHR Art. 2", full: "European Convention on Human Rights, Art. 2 — Right to life", group: "human-rights" },
  { id: "echr-3", short: "ECHR Art. 3", full: "European Convention on Human Rights, Art. 3 — Prohibition of torture", group: "human-rights" },
  { id: "echr-4-5-8-9-10-11", short: "ECHR Arts. 4–11", full: "European Convention on Human Rights, Arts. 4 § 2, 5, 8, 9, 10, 11", group: "human-rights" },
  { id: "echr-13", short: "ECHR Art. 13", full: "European Convention on Human Rights, Art. 13 — Right to an effective remedy", group: "human-rights" },
  { id: "echr-14", short: "ECHR Art. 14", full: "European Convention on Human Rights, Art. 14 — Prohibition of discrimination", group: "human-rights" },
  { id: "echr-38", short: "ECHR Art. 38", full: "European Convention on Human Rights, Art. 38 — Cooperation with the Court", group: "human-rights" },
  { id: "echr-p1-1", short: "ECHR P1-1", full: "Protocol No. 1, Art. 1 — Protection of property", group: "human-rights" },
  { id: "echr-p1-2", short: "ECHR P1-2", full: "Protocol No. 1, Art. 2 — Right to education", group: "human-rights" },
  { id: "ihl", short: "IHL", full: "International humanitarian law (Geneva Conventions, customary IHL)", group: "humanitarian" },
  { id: "genocide", short: "Genocide Conv.", full: "Convention on the Prevention and Punishment of the Crime of Genocide", group: "criminal" },
  { id: "rome-8-2-a-vii", short: "Rome 8(2)(a)(vii)", full: "Rome Statute Art. 8(2)(a)(vii) — Unlawful deportation of population", group: "criminal" },
  { id: "rome-8-2-b-viii", short: "Rome 8(2)(b)(viii)", full: "Rome Statute Art. 8(2)(b)(viii) — Unlawful transfer of population", group: "criminal" },
  { id: "rome-8-civilian-objects", short: "Rome 8 — civilian", full: "Rome Statute Art. 8 — Attacks on civilian objects", group: "criminal" },
  { id: "ru-ua-bit", short: "Russia–Ukraine BIT", full: "1998 Russia–Ukraine Bilateral Investment Treaty", group: "investment" },
  { id: "chicago-3bis", short: "Chicago 3 bis", full: "Chicago Convention, Art. 3 bis — Prohibition on use of weapons against civil aircraft", group: "aviation" },
  { id: "unclos-annex-vii", short: "UNCLOS Annex VII", full: "United Nations Convention on the Law of the Sea, Annex VII arbitration", group: "maritime" },
  { id: "icj-statute", short: "ICJ Statute", full: "Statute of the International Court of Justice", group: "criminal" },
  { id: "register-cm-res-2023-3", short: "CM/Res(2023)3", full: "Council of Europe Resolution establishing the Register of Damage", group: "reparations" },
  { id: "dutch-criminal-code", short: "NL Penal Code", full: "Dutch Penal Code (homicide and aviation offences)", group: "criminal" },
];

// caseId → instrumentId[]
export const caseToInstruments: Record<string, string[]> = {
  "echr-merits": [
    "echr-2",
    "echr-3",
    "echr-4-5-8-9-10-11",
    "echr-13",
    "echr-14",
    "echr-38",
    "echr-p1-1",
    "echr-p1-2",
    "ihl",
  ],
  "echr-crimea": [
    "echr-2",
    "echr-3",
    "echr-4-5-8-9-10-11",
    "echr-13",
    "echr-14",
    "ihl",
  ],
  "echr-pending": ["echr-2", "echr-3", "echr-4-5-8-9-10-11", "ihl"],
  "icj-genocide": ["genocide", "icj-statute"],
  "icj-icao-appeal": ["chicago-3bis", "icj-statute"],
  "icc-ukraine": [
    "rome-8-2-a-vii",
    "rome-8-2-b-viii",
    "rome-8-civilian-objects",
  ],
  "icao-mh17": ["chicago-3bis"],
  "itlos-naval": ["unclos-annex-vii"],
  "pca-coastal": ["unclos-annex-vii"],
  "pca-naval": ["unclos-annex-vii"],
  "dutch-mh17": ["dutch-criminal-code", "ihl"],
  "coe-register": ["register-cm-res-2023-3"],
  "naftogaz-pca": ["ru-ua-bit"],
  "oschadbank": ["ru-ua-bit"],
  "everest": ["ru-ua-bit"],
  "stabil": ["ru-ua-bit"],
  "ukrnafta": ["ru-ua-bit"],
  "privatbank": ["ru-ua-bit"],
  "scc-naftogaz-gazprom": [],
};

export const groupLabels: Record<Instrument["group"], string> = {
  "human-rights": "Human-rights",
  humanitarian: "Humanitarian law",
  criminal: "Criminal",
  investment: "Investment",
  aviation: "Civil aviation",
  maritime: "Law of the sea",
  reparations: "Reparations",
};
