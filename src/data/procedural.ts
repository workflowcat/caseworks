// Procedural history of application no. 28525/20 (Netherlands v. Russia, MH17),
// from the broader case-context entries to today.

export type Step = {
  date: string; // YYYY-MM-DD
  display: string;
  title: string;
  body: string;
  source: string;
  kind: "event" | "filing" | "court" | "external";
};

export const procedural: Step[] = [
  {
    date: "2014-07-17",
    display: "17 July 2014",
    title: "MH17 shot down near Snizhne, Donetsk Oblast",
    body: "Malaysia Airlines flight MH17, en route from Amsterdam to Kuala Lumpur, struck by a Buk surface-to-air missile fired from a farm field near Pervomaiskyi, in territory controlled by separatist forces. 298 dead, 196 of whom Dutch nationals.",
    source: "ECHR PR 173 (2025); Hague District Court verdict, 17 Nov 2022",
    kind: "event",
  },
  {
    date: "2014-08-07",
    display: "August 2014",
    title: "Joint Investigation Team established",
    body: "Five-state JIT formed under the Netherlands Public Prosecution Service: Netherlands, Australia, Belgium, Malaysia, Ukraine.",
    source: "JIT public materials",
    kind: "external",
  },
  {
    date: "2020-07-10",
    display: "10 July 2020",
    title: "The Netherlands lodges application no. 28525/20",
    body: "Inter-state application against the Russian Federation under the European Convention on Human Rights. Alleges violations of Articles 2, 3, and 13. Six years after the downing.",
    source: "ECHR PR of 15 July 2020",
    kind: "filing",
  },
  {
    date: "2020-11-27",
    display: "27 November 2020",
    title: "Joinder of three inter-state applications",
    body: "The Grand Chamber joins 28525/20 to Ukraine v. Russia (re Eastern Ukraine) (no. 8019/16) and Ukraine v. Russia (II) (no. 43800/14), under Rules 42 § 1 and 71 § 1 of the Rules of Court.",
    source: "ECHR PR of 04 December 2020",
    kind: "court",
  },
  {
    date: "2022-01-26",
    display: "26 January 2022",
    title: "Grand Chamber admissibility hearing",
    body: "Representatives of the three Governments appear and make oral submissions. The Chair of the MH17 Air Disaster Foundation is included in the Dutch delegation and addresses the Court.",
    source: "ECHR PR 026 (2023)",
    kind: "court",
  },
  {
    date: "2022-02-24",
    display: "24 February 2022",
    title: "Russia launches the full-scale invasion of Ukraine",
    body: "The conflict escalates. Ukraine lodges application no. 11055/22 four days later; it will subsequently be joined to the case.",
    source: "Public record",
    kind: "event",
  },
  {
    date: "2022-03-16",
    display: "16 March 2022",
    title: "Council of Europe expels Russia",
    body: "Resolution CM/Res(2022)2 adopted by the Committee of Ministers.",
    source: "CoE",
    kind: "external",
  },
  {
    date: "2022-09-16",
    display: "16 September 2022",
    title: "Russia ceases to be a Contracting Party",
    body: "Cessation effective. The Court retains jurisdiction over acts and omissions occurring up to this date. 17,450 applications against Russia were pending.",
    source: "ECHR PR 286 (2022)",
    kind: "court",
  },
  {
    date: "2022-11-17",
    display: "17 November 2022",
    title: "Hague District Court verdict in MH17 criminal trial",
    body: "Igor Girkin, Sergey Dubinskiy, and Leonid Kharchenko convicted in absentia of causing the crash and the murder of all 298 on board, sentenced to life imprisonment. Oleg Pulatov acquitted.",
    source: "courtmh17.com; ECHR PR 173 (2025) §§ on attribution",
    kind: "external",
  },
  {
    date: "2022-11-30",
    display: "30 November 2022",
    title: "Grand Chamber adopts admissibility decision",
    body: "The decision is adopted in deliberation. It will be delivered publicly two months later.",
    source: "ECHR PR 026 (2023)",
    kind: "court",
  },
  {
    date: "2023-01-25",
    display: "25 January 2023",
    title: "Admissibility decision delivered",
    body: "Grand Chamber declares the applications partly admissible. As regards 28525/20, the decision finds the downing fell within Russia's spatial jurisdiction, and the complaints under Articles 2, 3, and 13 are sufficiently substantiated for admissibility purposes.",
    source: "ECHR PR 026 (2023)",
    kind: "court",
  },
  {
    date: "2023-02-17",
    display: "17 February 2023",
    title: "Joinder of the full-scale-invasion application",
    body: "The Grand Chamber joins Ukraine v. Russia (no. 11055/22) to the case and decides to examine its admissibility and merits jointly under Article 29 § 2.",
    source: "ECHR PR of 17 March 2023",
    kind: "court",
  },
  {
    date: "2023-03-17",
    display: "17 March 2023",
    title: "Third-party intervention requests granted",
    body: "26 State Parties granted leave to make written submissions. The Geneva Academy of International Humanitarian Law and Human Rights, the Human Rights Law Centre of the University of Nottingham, the MH17 Air Disaster Foundation, and the individual applicants in four cases lodged by relatives of MH17 victims, are granted leave to submit written interventions on the merits.",
    source: "ECHR PR of 17 March 2023",
    kind: "court",
  },
  {
    date: "2024-06-12",
    display: "12 June 2024",
    title: "Grand Chamber merits hearing",
    body: "Held in the Human Rights Building, Strasbourg. The 26 State Parties deliver a common oral intervention; Poland and the United Kingdom make additional separate oral submissions. Russia does not participate.",
    source: "ECHR PR 173 (2025)",
    kind: "court",
  },
  {
    date: "2025-05-12",
    display: "12 May 2025",
    title: "ICAO Council finds Russia in breach of Article 3 bis",
    body: "Council decides Russia breached Article 3 bis of the Chicago Convention by use of weapons against civil aircraft in flight. Vote 22–3 with 10 abstentions. First decision on the merits of an Article 84 dispute in the Council's history.",
    source: "ICAO press release, 12 May 2025",
    kind: "external",
  },
  {
    date: "2025-07-09",
    display: "9 July 2025",
    title: "Grand Chamber merits judgment",
    body: "Unanimous. Substantive and procedural violations of Articles 2, 3, and 13 in respect of MH17 (application 28525/20). Article 38 violation across the case. The question of just satisfaction (Article 41) is adjourned, and 28525/20 is disjoined from the rest of the case to permit the just-satisfaction question to proceed separately.",
    source: "ECHR PR 173 (2025)",
    kind: "court",
  },
  {
    date: "2025-09-01",
    display: "September 2025",
    title: "Russia files at the ICJ",
    body: "Russia appeals the ICAO Council decision to the International Court of Justice under Article 84 of the Chicago Convention.",
    source: "Russian Foreign Ministry; JURIST 2025",
    kind: "external",
  },
];
