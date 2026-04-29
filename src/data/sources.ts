export type Source = {
  id: string;
  title: string;
  authors?: string;
  publication?: string;
  date: string;
  url?: string;
  citation: string; // formatted citation for copy
  group:
    | "primary-court"
    | "primary-press"
    | "primary-instrument"
    | "academic"
    | "journalism";
  notes?: string;
};

export const sources: Source[] = [
  // ECHR primary
  {
    id: "echr-pr-173",
    title:
      "The Court holds Russia accountable for widespread and flagrant abuses of human rights arising from the conflict in Ukraine since 2014",
    authors: "Registrar of the Court",
    publication: "European Court of Human Rights",
    date: "9 July 2025",
    url: "https://hudoc.echr.coe.int/eng-press?i=003-8279845-11657965",
    citation:
      "ECHR Press Release No. 173 (2025), 09.07.2025, Ukraine and the Netherlands v. Russia (apps. 8019/16, 43800/14, 28525/20, 11055/22).",
    group: "primary-press",
    notes:
      "The principal source for the merits judgment on this site, pending full HUDOC text extraction.",
  },
  {
    id: "echr-pr-026",
    title:
      "Eastern Ukraine and flight MH17 case declared partly admissible",
    authors: "Registrar of the Court",
    publication: "European Court of Human Rights",
    date: "25 January 2023",
    url: "https://hudoc.echr.coe.int/eng?i=002-13989",
    citation:
      "ECHR Press Release No. 026 (2023), 25.01.2023, Ukraine and the Netherlands v. Russia (dec.) [GC] (apps. 8019/16, 43800/14, 28525/20).",
    group: "primary-press",
  },
  {
    id: "echr-pr-286",
    title:
      "The Russian Federation ceases to be a Party to the European Convention on Human Rights",
    authors: "Registrar of the Court",
    publication: "European Court of Human Rights",
    date: "16 September 2022",
    url: "https://www.coe.int/en/web/portal/-/russia-ceases-to-be-party-to-the-european-convention-on-human-rights",
    citation:
      "ECHR Press Release No. 286 (2022), 16.09.2022, Russia ceases to be a Party to the ECHR.",
    group: "primary-press",
  },
  {
    id: "hudoc-merits",
    title:
      "Ukraine and the Netherlands v. Russia [GC] — judgment of 9 July 2025",
    publication: "HUDOC",
    date: "9 July 2025",
    url: "https://hudoc.echr.coe.int/fre?i=002-14493",
    citation:
      "Ukraine and the Netherlands v. Russia [GC], apps. 8019/16, 43800/14, 28525/20 and 11055/22, 9 July 2025.",
    group: "primary-court",
  },
  {
    id: "hudoc-admissibility",
    title:
      "Ukraine and the Netherlands v. Russia (dec.) [GC] — admissibility decision",
    publication: "HUDOC",
    date: "25 January 2023",
    url: "https://hudoc.echr.coe.int/eng?i=002-13989",
    citation:
      "Ukraine and the Netherlands v. Russia (dec.) [GC], apps. 8019/16, 43800/14, 28525/20, 25 January 2023.",
    group: "primary-court",
  },
  {
    id: "hudoc-crimea",
    title: "Ukraine v. Russia (re Crimea) [GC] — companion judgment",
    publication: "HUDOC",
    date: "25 June 2024",
    url: "https://hudoc.echr.coe.int/eng?i=002-14347",
    citation:
      "Ukraine v. Russia (re Crimea) [GC], apps. 20958/14 and 38334/18, 25 June 2024.",
    group: "primary-court",
  },

  // ICJ
  {
    id: "icj-pm",
    title:
      "Allegations of Genocide under the Convention on the Prevention and Punishment of the Crime of Genocide (Ukraine v. Russian Federation) — Provisional Measures Order",
    publication: "International Court of Justice",
    date: "16 March 2022",
    url: "https://www.icj-cij.org/case/182/provisional-measures",
    citation:
      "Allegations of Genocide (Ukraine v. Russia), Provisional Measures, Order of 16 March 2022, ICJ Reports 2022, 211.",
    group: "primary-court",
  },
  {
    id: "icj-prelim",
    title:
      "Allegations of Genocide — Preliminary Objections judgment",
    publication: "International Court of Justice",
    date: "2 February 2024",
    url: "https://www.icj-cij.org/case/182",
    citation:
      "Allegations of Genocide (Ukraine v. Russia), Preliminary Objections, Judgment of 2 February 2024.",
    group: "primary-court",
  },
  {
    id: "icj-cerd-icsft",
    title:
      "Application of the ICSFT and CERD (Ukraine v. Russian Federation)",
    publication: "International Court of Justice",
    date: "Judgment 31 January 2024",
    url: "https://www.icj-cij.org/case/166",
    citation:
      "Application of the ICSFT and CERD (Ukraine v. Russian Federation), Judgment of 31 January 2024, ICJ General List No. 166.",
    group: "primary-court",
    notes:
      "Adjacent ICJ case decided in early 2024. Russia found in breach of ICSFT (procedural obligations) and CERD (education in the Ukrainian language in Crimea).",
  },

  // ICAO
  {
    id: "icao-decision",
    title: "ICAO Council vote on the Flight MH17 case",
    publication: "International Civil Aviation Organization",
    date: "12 May 2025",
    url: "https://www.icao.int/news/icao-council-vote-flight-mh17-case",
    citation:
      "ICAO Council, decision under Article 84 of the Chicago Convention, MH17 case, 12 May 2025.",
    group: "primary-court",
  },

  // ICC
  {
    id: "icc-warrants-2023",
    title:
      "Situation in Ukraine — arrest warrants against Vladimir Putin and Maria Lvova-Belova",
    publication: "International Criminal Court",
    date: "17 March 2023",
    url: "https://www.icc-cpi.int/news/situation-ukraine-icc-judges-issue-arrest-warrants-against-vladimir-vladimirovich-putin-and",
    citation:
      "ICC, Pre-Trial Chamber II, Situation in Ukraine, 17 March 2023.",
    group: "primary-court",
  },

  // Dutch criminal trial
  {
    id: "hague-mh17",
    title: "Verdict in the criminal trial concerning the downing of MH17",
    publication: "District Court of The Hague",
    date: "17 November 2022",
    url: "https://www.courtmh17.com/en/judgement-and-livestream/verdict-17-november-2022.htm",
    citation:
      "District Court of The Hague, Public Prosecution Service v. Girkin and others, Judgment of 17 November 2022.",
    group: "primary-court",
  },

  // Instruments
  {
    id: "echr-text",
    title:
      "European Convention on Human Rights and its Protocols",
    publication: "Council of Europe",
    date: "1950 (as amended)",
    url: "https://www.echr.coe.int/documents/d/echr/convention_eng",
    citation:
      "Convention for the Protection of Human Rights and Fundamental Freedoms, Rome, 4 November 1950, 213 UNTS 221.",
    group: "primary-instrument",
  },
  {
    id: "chicago-conv",
    title: "Chicago Convention",
    publication: "International Civil Aviation Organization",
    date: "1944",
    url: "https://www.icao.int/publications/Documents/7300_orig.pdf",
    citation:
      "Convention on International Civil Aviation, Chicago, 7 December 1944, 15 UNTS 295 (Article 3 bis added by Protocol of 10 May 1984).",
    group: "primary-instrument",
  },

  // Academic
  {
    id: "milanovic-2025",
    title:
      "The European Court's Merits Judgment in Ukraine and the Netherlands v. Russia: As Good as It Gets (Almost)",
    authors: "Marko Milanović",
    publication: "EJIL: Talk!",
    date: "10 July 2025",
    url: "https://www.ejiltalk.org/the-european-courts-merits-judgment-in-ukraine-and-the-netherlands-v-russia-as-good-as-it-gets-almost/",
    citation:
      "Marko Milanović, 'The European Court's Merits Judgment in Ukraine and the Netherlands v. Russia: As Good as It Gets (Almost)' EJIL: Talk! (10 July 2025).",
    group: "academic",
  },
  {
    id: "khachatryan-2025",
    title:
      "The Judgment in Ukraine and the Netherlands v. Russia: A 'Nicaragua Moment' for the ECtHR?",
    authors: "Davit Khachatryan",
    publication: "Strasbourg Observers",
    date: "23 July 2025",
    url: "https://strasbourgobservers.com/2025/07/23/the-judgment-in-ukraine-and-the-netherlands-v-russia-a-nicaragua-moment-for-the-ecthr/",
    citation:
      "Davit Khachatryan, 'The Judgment in Ukraine and the Netherlands v. Russia: A \"Nicaragua Moment\" for the ECtHR?' Strasbourg Observers (23 July 2025).",
    group: "academic",
  },
  {
    id: "milanovic-shah-amicus",
    title:
      "Amicus Curiae Brief on behalf of the Human Rights Law Centre, University of Nottingham",
    authors: "Marko Milanović and Sangeeta Shah",
    publication: "SSRN",
    date: "2021",
    url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3775402",
    citation:
      "Marko Milanović and Sangeeta Shah, 'Amicus Curiae Brief on behalf of the Human Rights Law Centre, University of Nottingham' (2021) SSRN 3775402.",
    group: "academic",
  },
  {
    id: "milanovic-2020-six-years",
    title:
      "The Netherlands' inter-State application against Russia six years after MH 17",
    authors: "Marko Milanović",
    publication: "EJIL: Talk!",
    date: "16 July 2020",
    url: "https://www.ejiltalk.org/the-netherlands-inter-state-application-against-russia-six-years-after-mh-17/",
    citation:
      "Marko Milanović, 'The Netherlands' inter-State application against Russia six years after MH 17' EJIL: Talk! (16 July 2020).",
    group: "academic",
  },

  // Journalism / OSINT
  {
    id: "bellingcat-mh17",
    title: "Bellingcat MH17 dossier (collected investigations)",
    authors: "Bellingcat",
    publication: "bellingcat.com",
    date: "2014–present",
    url: "https://www.bellingcat.com/tag/mh17/",
    citation:
      "Bellingcat, MH17 investigations (collected reports, 2014–present).",
    group: "journalism",
  },
];

export const groupLabels: Record<Source["group"], string> = {
  "primary-court": "Primary — court materials",
  "primary-press": "Primary — press releases of the registries",
  "primary-instrument": "Primary — instruments",
  academic: "Academic commentary",
  journalism: "Journalism and OSINT",
};
