// Atomic facts curated from primary materials. Each appears once; the source
// is attributed in mono on the back of the card.

export type Fact = {
  id: string;
  text: string;
  date: string; // display
  source: string;
  tag:
    | "MH17"
    | "Crimea"
    | "Donbas"
    | "Invasion"
    | "Procedure"
    | "Money"
    | "Children"
    | "Casualties"
    | "Russia";
};

export const facts: Fact[] = [
  // ---- MH17 ----
  {
    id: "mh17-flight",
    text: "Malaysia Airlines flight MH17 pushed back from Schiphol gate G3 at 12:31 local time, bound for Kuala Lumpur.",
    date: "17 July 2014",
    source: "JIT public statement",
    tag: "MH17",
  },
  {
    id: "mh17-killed",
    text: "298 people on board. None survived.",
    date: "17 July 2014",
    source: "ECHR PR 173 (2025)",
    tag: "MH17",
  },
  {
    id: "mh17-dutch",
    text: "196 of the 298 victims were Dutch nationals.",
    date: "17 July 2014",
    source: "ECHR PR 173 (2025)",
    tag: "MH17",
  },
  {
    id: "mh17-launch",
    text: "The Buk missile was fired from a farm field near Pervomaiskyi, in occupied territory the separatists controlled.",
    date: "17 July 2014",
    source: "Hague District Court verdict, 17 Nov 2022",
    tag: "MH17",
  },
  {
    id: "mh17-recovery",
    text: "Eight months elapsed before all the bodies that could be recovered, were.",
    date: "Through March 2015",
    source: "ECHR PR 173 (2025)",
    tag: "MH17",
  },
  {
    id: "mh17-never",
    text: "Two of the 298 victims' bodies have never been recovered.",
    date: "—",
    source: "ECHR PR 173 (2025)",
    tag: "MH17",
  },
  {
    id: "mh17-conv",
    text: "Three men — Girkin, Dubinskiy, Kharchenko — were sentenced to life imprisonment in absentia for the downing.",
    date: "17 November 2022",
    source: "District Court of The Hague",
    tag: "MH17",
  },
  {
    id: "mh17-acquittal",
    text: "The fourth defendant, Pulatov, the only one represented in court, was acquitted.",
    date: "17 November 2022",
    source: "District Court of The Hague",
    tag: "MH17",
  },
  {
    id: "mh17-icao",
    text: "The ICAO Council found Russia in breach of Article 3 bis of the Chicago Convention. The vote was 22 to 3, with 10 abstentions.",
    date: "12 May 2025",
    source: "ICAO Council decision",
    tag: "MH17",
  },
  {
    id: "mh17-icao-first",
    text: "It was the first decision on the merits of an Article 84 dispute in the ICAO Council's 80-year history.",
    date: "12 May 2025",
    source: "ICAO Council",
    tag: "MH17",
  },
  {
    id: "mh17-pending",
    text: "Four individual ECHR applications, lodged by more than five hundred relatives of MH17 victims, remain pending.",
    date: "As of 9 July 2025",
    source: "ECHR PR 173 (2025)",
    tag: "MH17",
  },

  // ---- Procedure ----
  {
    id: "first-filing",
    text: "Ukraine lodged its first inter-state application against Russia at the ECHR on the same day the Court applied Rule 39 interim measures.",
    date: "13 March 2014",
    source: "ECHR PR 026 (2023)",
    tag: "Procedure",
  },
  {
    id: "jurisdiction-start",
    text: "The Court found Russia exercised jurisdiction over separatist-held territory in eastern Ukraine from 11 May 2014.",
    date: "11 May 2014",
    source: "ECHR PR 026 (2023)",
    tag: "Procedure",
  },
  {
    id: "russia-out",
    text: "The Russian Federation ceased to be a Contracting Party to the European Convention on Human Rights.",
    date: "16 September 2022",
    source: "ECHR PR 286 (2022)",
    tag: "Procedure",
  },
  {
    id: "russia-pending",
    text: "17,450 applications were pending against Russia at the date of cessation.",
    date: "16 September 2022",
    source: "ECHR PR 286 (2022)",
    tag: "Procedure",
  },
  {
    id: "merits-judgment",
    text: "The Grand Chamber merits judgment was delivered unanimously, with no separate opinions.",
    date: "9 July 2025",
    source: "ECHR PR 173 (2025)",
    tag: "Procedure",
  },
  {
    id: "russia-non-participation",
    text: "Russia did not participate in the proceedings on the merits in any of the four joined applications.",
    date: "Through 9 July 2025",
    source: "ECHR PR 173 (2025)",
    tag: "Procedure",
  },
  {
    id: "interveners",
    text: "Twenty-six other Council of Europe states intervened in the case. Poland and the United Kingdom additionally made separate oral submissions.",
    date: "12 June 2024",
    source: "ECHR PR 173 (2025)",
    tag: "Procedure",
  },

  // ---- Casualties ----
  {
    id: "ohchr-2014-22",
    text: "OHCHR recorded 3,405 conflict-related civilian deaths in eastern Ukraine between April 2014 and January 2022.",
    date: "April 2014 – January 2022",
    source: "OHCHR, cited in ECHR judgment",
    tag: "Casualties",
  },
  {
    id: "ohchr-2022",
    text: "OHCHR recorded 6,306 civilian deaths and 9,602 wounded between 24 February and 17 October 2022.",
    date: "Feb – Oct 2022",
    source: "OHCHR, cited in ECHR judgment",
    tag: "Casualties",
  },
  {
    id: "ohchr-caveat",
    text: "The Court itself stated the actual numbers of dead and wounded were likely to be considerably higher than reported.",
    date: "—",
    source: "ECHR PR 173 (2025)",
    tag: "Casualties",
  },
  {
    id: "ohchr-tortured",
    text: "OHCHR estimated 2,500 conflict-related detainees were tortured or ill-treated by separatists in DPR/LPR territory.",
    date: "2014 – 2021",
    source: "OHCHR 2021 report",
    tag: "Casualties",
  },
  {
    id: "ohchr-detentions",
    text: "Between 4,300 and 4,700 conflict-related detentions by separatists were recorded in eastern Ukraine.",
    date: "2014 – 2021",
    source: "OHCHR 2021 report",
    tag: "Casualties",
  },

  // ---- Children ----
  {
    id: "children-7890",
    text: "By the end of September 2022 the Ukrainian Government had recorded that 7,890 children had been removed from Ukraine to Russia.",
    date: "End of September 2022",
    source: "Ukrainian Govt, cited in ECHR judgment",
    tag: "Children",
  },
  {
    id: "children-1985-three",
    text: "Three groups of children — 85 in total — were taken across the Russian border from eastern Ukrainian institutions in summer 2014.",
    date: "Summer 2014",
    source: "ECHR PR 173 (2025)",
    tag: "Children",
  },
  {
    id: "children-icc",
    text: "The ICC issued arrest warrants for Vladimir Putin and Maria Lvova-Belova for the war crimes of unlawful deportation and transfer of Ukrainian children.",
    date: "17 March 2023",
    source: "ICC Pre-Trial Chamber II",
    tag: "Children",
  },
  {
    id: "children-first",
    text: "The warrant for Putin was the first ICC arrest warrant ever issued against the leader of a permanent member of the UN Security Council.",
    date: "17 March 2023",
    source: "ICC",
    tag: "Children",
  },
  {
    id: "children-19553",
    text: "The Ukrainian Government has separately estimated that 19,553 children had been deported or forcibly displaced as of the ICC warrant date.",
    date: "Cumulative since 24 Feb 2022",
    source: "Ukrainian Govt, cited in ICC context",
    tag: "Children",
  },

  // ---- Crimea / Donbas ----
  {
    id: "crimea-2014",
    text: "Russian troops without insignia seized the Crimean parliament on 27 February 2014. Crimea fell within days.",
    date: "27 February 2014",
    source: "Court findings, ECHR re Crimea",
    tag: "Crimea",
  },
  {
    id: "echr-crimea",
    text: "The ECHR delivered its Grand Chamber judgment in Ukraine v. Russia (re Crimea), finding violations of Articles 2, 3, 5, 6, 7, 8, 9, 10, 11, 14, and 18.",
    date: "25 June 2024",
    source: "ECHR Grand Chamber",
    tag: "Crimea",
  },
  {
    id: "russian-law-not-law",
    text: "The Court held that Russian law could not be regarded as 'law' within the meaning of the Convention as imposed in occupied Crimea.",
    date: "25 June 2024",
    source: "ECHR re Crimea",
    tag: "Crimea",
  },
  {
    id: "donbas-2014",
    text: "Russian military personnel were found to have been present in Donbas in active capacity from April 2014.",
    date: "April 2014 onwards",
    source: "ECHR PR 026 (2023)",
    tag: "Donbas",
  },
  {
    id: "donbas-large",
    text: "Large-scale deployment of Russian troops in Donbas began by August 2014 at the latest.",
    date: "August 2014",
    source: "ECHR PR 026 (2023)",
    tag: "Donbas",
  },

  // ---- Invasion ----
  {
    id: "invasion",
    text: "Russia launched a full-scale invasion of Ukraine.",
    date: "24 February 2022",
    source: "Public record",
    tag: "Invasion",
  },
  {
    id: "icj-pm",
    text: "The ICJ ordered Russia to immediately suspend its military operations. The vote was 13 to 2.",
    date: "16 March 2022",
    source: "ICJ provisional measures order",
    tag: "Invasion",
  },
  {
    id: "icj-non-compliance",
    text: "Russia has not complied with the ICJ's provisional-measures order.",
    date: "Continuing",
    source: "Public record",
    tag: "Invasion",
  },
  {
    id: "mariupol-maternity",
    text: "Russian forces struck maternity ward no. 3 in Mariupol — cited in the judgment as compelling evidence of indiscriminate attack.",
    date: "9 March 2022",
    source: "ECHR PR 173 (2025)",
    tag: "Invasion",
  },
  {
    id: "mariupol-theatre",
    text: "Russian forces struck the Mariupol Drama Theatre, where civilians were sheltering. The word 'children' was visible from the air.",
    date: "16 March 2022",
    source: "ECHR PR 173 (2025)",
    tag: "Invasion",
  },
  {
    id: "kramatorsk",
    text: "Russian forces struck Kramatorsk train station, where civilians were evacuating.",
    date: "8 April 2022",
    source: "ECHR PR 173 (2025)",
    tag: "Invasion",
  },

  // ---- Money ----
  {
    id: "naftogaz-5",
    text: "An UNCITRAL/PCA tribunal awarded Naftogaz approximately USD 5 billion for Russia's expropriation of its Crimean oil and gas assets — the largest Crimea-related award against Russia to date.",
    date: "12 April 2023",
    source: "PCA Case No. 2017-16",
    tag: "Money",
  },
  {
    id: "naftogaz-recognition",
    text: "Naftogaz has obtained orders recognising the USD 5 billion award in the United Kingdom, France, Austria, the Netherlands, and the United States.",
    date: "From 5 December 2023",
    source: "Naftogaz public statements",
    tag: "Money",
  },
  {
    id: "oschadbank",
    text: "An UNCITRAL tribunal seated in Paris awarded Oschadbank approximately USD 1.1 billion in damages, with interest bringing the total above USD 1.3 billion.",
    date: "26 November 2018",
    source: "UNCTAD case record",
    tag: "Money",
  },
  {
    id: "oschadbank-paris",
    text: "The Paris Court of Appeal upheld the Oschadbank award, dismissing Russian challenges to arbitrator independence.",
    date: "1 July 2025",
    source: "Paris Court of Appeal",
    tag: "Money",
  },
  {
    id: "scc-2-56",
    text: "Naftogaz won approximately USD 2.56 billion net from Gazprom in the Stockholm Chamber of Commerce gas-supply and transit arbitrations.",
    date: "Through 28 February 2018",
    source: "SCC awards, V2014-078-080 and V2014-129",
    tag: "Money",
  },
  {
    id: "russia-zero",
    text: "Russia has refused voluntary payment in every commercial-arbitration award against it. Collection has proceeded through attachment of state assets in third-party jurisdictions.",
    date: "Continuing",
    source: "Public record",
    tag: "Money",
  },
  {
    id: "register",
    text: "The Council of Europe established the Register of Damage for Ukraine at the Reykjavik Summit. It is headquartered in The Hague.",
    date: "12 May 2023",
    source: "CoE Resolution CM/Res(2023)3",
    tag: "Money",
  },
  {
    id: "register-claims",
    text: "The Register has received more than 80,000 claims.",
    date: "As of 2025",
    source: "Council of Europe",
    tag: "Money",
  },

  // ---- Russia named ----
  {
    id: "icc-2024-march",
    text: "The ICC issued arrest warrants for Lt. Gen. Sergei Kobylash and Adm. Viktor Sokolov for missile strikes on Ukrainian energy infrastructure.",
    date: "5 March 2024",
    source: "ICC Pre-Trial Chamber II",
    tag: "Russia",
  },
  {
    id: "icc-2024-june",
    text: "The ICC issued arrest warrants for former Defence Minister Sergei Shoigu and Chief of the General Staff Valery Gerasimov.",
    date: "24 June 2024",
    source: "ICC Pre-Trial Chamber II",
    tag: "Russia",
  },
  {
    id: "russia-not-state-party",
    text: "Russia is not a State Party to the Rome Statute. None of the named individuals has been arrested.",
    date: "—",
    source: "Public record",
    tag: "Russia",
  },
  {
    id: "russia-icao-appeal",
    text: "Russia called the ICAO Council ruling 'illegitimate' and appealed it to the International Court of Justice.",
    date: "September 2025",
    source: "JURIST, Russian Foreign Ministry",
    tag: "Russia",
  },
  {
    id: "russia-art-38",
    text: "The Court found Russia in violation of Article 38 of the Convention — the obligation to cooperate with the Court — for its 'deplorable failure' to participate.",
    date: "9 July 2025",
    source: "ECHR PR 173 (2025)",
    tag: "Russia",
  },
];
