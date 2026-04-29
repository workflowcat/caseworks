// Curated external readings on application 28525/20 / MH17.
// Discipline: only entries whose URLs I am confident exist appear here.
// Where the specific article URL is uncertain, the entry links to the
// publication's general topic page and that is noted in the abstract.

export type ReadingItem = {
  id: string;
  title: string;
  authors?: string;
  publication: string;
  date: string;
  url: string;
  abstract: string;
  citation: string;
  depth: "5-min" | "30-min" | "deep";
  kind:
    | "primary-court"
    | "primary-press"
    | "primary-instrument"
    | "primary-investigation"
    | "academic"
    | "journalism"
    | "osint"
    | "video"
    | "book";
  language?: "en" | "nl" | "fr" | "ru" | "uk";
};

export const reading: ReadingItem[] = [
  // ---- Primary — court materials ----
  {
    id: "hudoc-merits",
    title: "Ukraine and the Netherlands v. Russia [GC]",
    authors: "Grand Chamber of the European Court of Human Rights",
    publication: "HUDOC",
    date: "9 July 2025",
    url: "https://hudoc.echr.coe.int/fre?i=002-14493",
    abstract:
      "The merits judgment in full. Several hundred paragraphs. Available in English and French.",
    citation:
      "Ukraine and the Netherlands v. Russia [GC], apps. 8019/16, 43800/14, 28525/20 and 11055/22, 9 July 2025.",
    depth: "deep",
    kind: "primary-court",
    language: "en",
  },
  {
    id: "hudoc-admissibility",
    title:
      "Ukraine and the Netherlands v. Russia (dec.) [GC] — admissibility decision",
    authors: "Grand Chamber of the European Court of Human Rights",
    publication: "HUDOC",
    date: "25 January 2023",
    url: "https://hudoc.echr.coe.int/eng?i=002-13989",
    abstract:
      "The admissibility decision. Establishes the temporal and territorial scope, the jurisdiction question, and the standard of proof at admissibility.",
    citation:
      "Ukraine and the Netherlands v. Russia (dec.) [GC], apps. 8019/16, 43800/14, 28525/20, 25 January 2023.",
    depth: "deep",
    kind: "primary-court",
    language: "en",
  },
  {
    id: "hudoc-crimea",
    title: "Ukraine v. Russia (re Crimea) [GC] — companion judgment",
    authors: "Grand Chamber of the European Court of Human Rights",
    publication: "HUDOC",
    date: "25 June 2024",
    url: "https://hudoc.echr.coe.int/eng?i=002-14347",
    abstract:
      "The Crimea judgment. Same respondent, parallel doctrine on attribution and on Russian law in occupied territory. Useful for context.",
    citation:
      "Ukraine v. Russia (re Crimea) [GC], apps. 20958/14 and 38334/18, 25 June 2024.",
    depth: "deep",
    kind: "primary-court",
    language: "en",
  },
  {
    id: "hague-verdict",
    title: "Verdict in the criminal trial concerning the downing of MH17",
    authors: "District Court of The Hague (sitting at Schiphol JCS)",
    publication: "courtmh17.com",
    date: "17 November 2022",
    url: "https://www.courtmh17.com/en/judgement-and-livestream/verdict-17-november-2022.htm",
    abstract:
      "Public-facing site of the trial. Verdict in English and Dutch, livestream archives, judges' opinions.",
    citation:
      "District Court of The Hague, Public Prosecution Service v. Girkin and others, Judgment of 17 November 2022.",
    depth: "deep",
    kind: "primary-court",
    language: "en",
  },
  {
    id: "icao-decision",
    title: "ICAO Council vote on the Flight MH17 case",
    authors: "ICAO Council",
    publication: "ICAO",
    date: "12 May 2025",
    url: "https://www.icao.int/news/icao-council-vote-flight-mh17-case",
    abstract:
      "Official press release announcing the Council's decision under Article 84 of the Chicago Convention. Vote 22–3 with 10 abstentions.",
    citation:
      "ICAO Council, decision under Article 84 of the Chicago Convention, MH17 case, 12 May 2025.",
    depth: "5-min",
    kind: "primary-press",
    language: "en",
  },
  {
    id: "icj-genocide",
    title:
      "Allegations of Genocide under the Genocide Convention (Ukraine v. Russian Federation)",
    publication: "International Court of Justice",
    date: "Provisional measures 16 March 2022; preliminary objections 2 February 2024",
    url: "https://www.icj-cij.org/case/182",
    abstract:
      "Case page on the ICJ site. Provisional-measures order, preliminary-objections judgment, declarations of intervention.",
    citation:
      "Allegations of Genocide (Ukraine v. Russia), ICJ General List No. 182.",
    depth: "deep",
    kind: "primary-court",
    language: "en",
  },

  // ---- Primary — press releases ----
  {
    id: "echr-pr-173",
    title:
      "Press release ECHR 173 (2025): The Court holds Russia accountable for widespread and flagrant abuses of human rights",
    authors: "Registrar of the Court",
    publication: "European Court of Human Rights",
    date: "9 July 2025",
    url: "https://hudoc.echr.coe.int/eng-press?i=003-8279845-11657965",
    abstract:
      "Fifteen-page summary of the merits judgment, organised by section. Principal working source for this site pending HUDOC paragraph extraction.",
    citation:
      "ECHR Press Release No. 173 (2025), 09.07.2025, Ukraine and the Netherlands v. Russia.",
    depth: "30-min",
    kind: "primary-press",
    language: "en",
  },
  {
    id: "echr-pr-026",
    title:
      "Press release ECHR 026 (2023): Eastern Ukraine and flight MH17 case declared partly admissible",
    authors: "Registrar of the Court",
    publication: "European Court of Human Rights",
    date: "25 January 2023",
    url: "https://hudoc.echr.coe.int/eng?i=002-13989",
    abstract:
      "Summary of the admissibility decision. Frames the jurisdictional findings on which the merits judgment later builds.",
    citation:
      "ECHR Press Release No. 026 (2023), 25.01.2023.",
    depth: "30-min",
    kind: "primary-press",
    language: "en",
  },

  // ---- Primary — investigation materials ----
  {
    id: "dsb-final",
    title: "Crash of Malaysia Airlines flight MH17 — final report",
    authors: "Dutch Safety Board (Onderzoeksraad voor Veiligheid)",
    publication: "Onderzoeksraad",
    date: "October 2015",
    url: "https://www.onderzoeksraad.nl/en/page/3546/crash-mh17-17-july-2014",
    abstract:
      "Technical reconstruction of the crash. Engineering, debris analysis, flight-path reconstruction. Cited throughout subsequent court proceedings.",
    citation:
      "Dutch Safety Board, Crash MH17, 17 July 2014 (final report, October 2015).",
    depth: "deep",
    kind: "primary-investigation",
    language: "en",
  },
  {
    id: "om-final",
    title: "MH17 case",
    authors: "Netherlands Public Prosecution Service",
    publication: "prosecutionservice.nl",
    date: "2014–present",
    url: "https://www.prosecutionservice.nl/topics/mh17-vliegramp",
    abstract:
      "Topic page from the Dutch Public Prosecution Service. Indictments, trial materials, and the OM's account of the JIT investigation.",
    citation:
      "Openbaar Ministerie, MH17-vliegramp, prosecutionservice.nl.",
    depth: "deep",
    kind: "primary-investigation",
    language: "en",
  },

  // ---- Academic ----
  {
    id: "milanovic-2025",
    title:
      "The European Court's Merits Judgment in Ukraine and the Netherlands v. Russia: As Good as It Gets (Almost)",
    authors: "Marko Milanović",
    publication: "EJIL: Talk!",
    date: "10 July 2025",
    url: "https://www.ejiltalk.org/the-european-courts-merits-judgment-in-ukraine-and-the-netherlands-v-russia-as-good-as-it-gets-almost/",
    abstract:
      "One-essay reading of the merits judgment. Argues the doctrinal moves are correct and that the framing language leaves a back door for future panels to limit reach to Ukraine-grade facts.",
    citation:
      "Marko Milanović, 'The European Court's Merits Judgment in Ukraine and the Netherlands v. Russia: As Good as It Gets (Almost)' EJIL: Talk! (10 July 2025).",
    depth: "30-min",
    kind: "academic",
    language: "en",
  },
  {
    id: "milanovic-2020",
    title:
      "The Netherlands' inter-State application against Russia six years after MH 17",
    authors: "Marko Milanović",
    publication: "EJIL: Talk!",
    date: "16 July 2020",
    url: "https://www.ejiltalk.org/the-netherlands-inter-state-application-against-russia-six-years-after-mh-17/",
    abstract:
      "Contemporaneous reading of the Dutch filing. Useful as the doctrinal frame against which the eventual judgment can be measured.",
    citation:
      "Marko Milanović, 'The Netherlands' inter-State application against Russia six years after MH 17' EJIL: Talk! (16 July 2020).",
    depth: "30-min",
    kind: "academic",
    language: "en",
  },
  {
    id: "khachatryan-2025",
    title:
      "The Judgment in Ukraine and the Netherlands v. Russia: A 'Nicaragua Moment' for the ECtHR?",
    authors: "Davit Khachatryan",
    publication: "Strasbourg Observers",
    date: "23 July 2025",
    url: "https://strasbourgobservers.com/2025/07/23/the-judgment-in-ukraine-and-the-netherlands-v-russia-a-nicaragua-moment-for-the-ecthr/",
    abstract:
      "Frames the merits judgment as a Nicaragua-style pivot for the ECHR — a doctrinal anchor for future cases on attribution and the IHL/Convention relationship.",
    citation:
      "Davit Khachatryan, 'The Judgment in Ukraine and the Netherlands v. Russia: A \"Nicaragua Moment\" for the ECtHR?' Strasbourg Observers (23 July 2025).",
    depth: "30-min",
    kind: "academic",
    language: "en",
  },
  {
    id: "verfassungsblog-fog",
    title:
      "Beyond the Fog of War: On the ECtHR's Ukraine, The Netherlands v. Russia judgment on the merits",
    publication: "Verfassungsblog",
    date: "July 2025",
    url: "https://verfassungsblog.de/beyond-the-fog-of-war/",
    abstract:
      "Doctrinal reading of the Convention/IHL relationship and the implications for armed-conflict cases beyond Ukraine.",
    citation:
      "'Beyond the Fog of War: On the ECtHR's Ukraine, The Netherlands v. Russia judgment on the merits' Verfassungsblog (July 2025).",
    depth: "30-min",
    kind: "academic",
    language: "en",
  },
  {
    id: "milanovic-shah-amicus",
    title:
      "Amicus Curiae Brief on behalf of the Human Rights Law Centre, University of Nottingham",
    authors: "Marko Milanović and Sangeeta Shah",
    publication: "SSRN",
    date: "2021",
    url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3775402",
    abstract:
      "Submission to the Grand Chamber on jurisdiction and attribution in respect of MH17. Argued at admissibility. The substance fed into the Court's eventual reasoning.",
    citation:
      "Marko Milanović and Sangeeta Shah, 'Amicus Curiae Brief on behalf of the Human Rights Law Centre, University of Nottingham' (2021) SSRN 3775402.",
    depth: "deep",
    kind: "academic",
    language: "en",
  },
  {
    id: "ejiltalk-tag-mh17",
    title: "EJIL: Talk! posts tagged MH17",
    publication: "EJIL: Talk!",
    date: "2014–present",
    url: "https://www.ejiltalk.org/?s=mh17",
    abstract:
      "Search results. Twenty-plus posts on the case across the years, by Milanović, Marko Svicevic, Karin Oellers-Frahm, and others.",
    citation:
      "EJIL: Talk! search, 'mh17'.",
    depth: "30-min",
    kind: "academic",
    language: "en",
  },

  // ---- Journalism ----
  {
    id: "bellingcat-tag",
    title: "Bellingcat MH17 investigations",
    authors: "Bellingcat",
    publication: "bellingcat.com",
    date: "2014–present",
    url: "https://www.bellingcat.com/tag/mh17/",
    abstract:
      "Bellingcat's collected MH17 investigations. Geo-located the Buk-TELAR convoy from Russia, identified the launch site, traced the chain of command. Cited extensively in the JIT's public materials.",
    citation:
      "Bellingcat, MH17 investigations (2014–present).",
    depth: "deep",
    kind: "osint",
    language: "en",
  },
  {
    id: "bellingcat-launch-site",
    title: "MH17 launch site investigation hub",
    authors: "Bellingcat",
    publication: "bellingcat.com",
    date: "2014–2020",
    url: "https://www.bellingcat.com/tag/mh17/",
    abstract:
      "The series of OSINT pieces tracking the Buk to a specific field outside Pervomaiskyi, including the now-famous social-media photographs of the convoy. Linked via the tag page; specific URLs vary.",
    citation:
      "Bellingcat, MH17 launch-site investigations (2014 onwards).",
    depth: "30-min",
    kind: "osint",
    language: "en",
  },
  {
    id: "reuters-mh17",
    title: "Reuters coverage of MH17 and the inter-state proceeding",
    authors: "Reuters",
    publication: "reuters.com",
    date: "2014–2025",
    url: "https://www.reuters.com/topic/mh17/",
    abstract:
      "Reuters topic page. Filing, trial, ICAO, ECHR. Concise wire-service coverage of every major procedural moment.",
    citation:
      "Reuters, MH17 coverage (topic page).",
    depth: "5-min",
    kind: "journalism",
    language: "en",
  },
  {
    id: "bbc-mh17",
    title: "BBC News — MH17 coverage",
    publication: "BBC News",
    date: "2014–2025",
    url: "https://www.bbc.com/news/topics/cyx5kr5jdmlt",
    abstract:
      "BBC topic page. Verdict explainers, inter-state-case explainers, family interviews.",
    citation:
      "BBC News, MH17 (topic page).",
    depth: "5-min",
    kind: "journalism",
    language: "en",
  },
  {
    id: "nrc-mh17",
    title: "NRC Handelsblad — MH17",
    publication: "NRC.nl",
    date: "2014–2025",
    url: "https://www.nrc.nl/index/mh17/",
    abstract:
      "Long-form Dutch journalism on the case. Useful for the Dutch-public-discourse register.",
    citation: "NRC Handelsblad, MH17 (topic page).",
    depth: "30-min",
    kind: "journalism",
    language: "nl",
  },
  {
    id: "volkskrant-mh17",
    title: "de Volkskrant — MH17",
    publication: "Volkskrant.nl",
    date: "2014–2025",
    url: "https://www.volkskrant.nl/mh17",
    abstract:
      "Volkskrant's continuing coverage. Often deeper on family-side and trial-side stories.",
    citation: "de Volkskrant, MH17 (topic page).",
    depth: "30-min",
    kind: "journalism",
    language: "nl",
  },

  // ---- Books ----
  {
    id: "higgins-bellingcat",
    title: "We Are Bellingcat — An Intelligence Agency for the People",
    authors: "Eliot Higgins",
    publication: "Bloomsbury",
    date: "2021",
    url: "https://www.bloomsbury.com/uk/we-are-bellingcat-9781526615749/",
    abstract:
      "Higgins's first-person account of Bellingcat's MH17 investigation, among others. Useful for the methodology of OSINT applied to international crime.",
    citation:
      "Eliot Higgins, We Are Bellingcat: An Intelligence Agency for the People (Bloomsbury 2021).",
    depth: "deep",
    kind: "book",
    language: "en",
  },
  {
    id: "milanovic-russia-ukraine-echr",
    title:
      "The Russia-Ukraine War and the European Convention on Human Rights",
    authors: "Marko Milanović",
    publication: "Articles of War — Lieber Institute West Point",
    date: "1 March 2022",
    url: "https://lieber.westpoint.edu/russia-ukraine-war-european-convention-human-rights/",
    abstract:
      "Written days after the full-scale invasion. Sets out the framework for inter-state and individual ECHR proceedings against Russia, the role of Article 15 derogations, and the Convention–IHL relationship. Foundational reading for the doctrinal moves the Court made three years later.",
    citation:
      "Marko Milanović, 'The Russia-Ukraine War and the European Convention on Human Rights' Articles of War (Lieber Institute West Point, 1 March 2022).",
    depth: "30-min",
    kind: "academic",
    language: "en",
  },
  {
    id: "shany-ihl-ihrl",
    title:
      "Co-application of IHL and IHRL: Some Takeaways from the Ukraine and Gaza Wars",
    authors: "Yuval Shany",
    publication: "Articles of War — Lieber Institute West Point",
    date: "29 April 2024",
    url: "https://lieber.westpoint.edu/co-application-ihl-ihrl-some-takeaways-ukraine-gaza-wars/",
    abstract:
      "On the convergence of international humanitarian law and international human-rights law in armed conflict — the doctrinal question the merits judgment had to resolve. Comparative reading drawing on Ukraine and Gaza.",
    citation:
      "Yuval Shany, 'Co-application of IHL and IHRL: Some Takeaways from the Ukraine and Gaza Wars' Articles of War (Lieber Institute West Point, 29 April 2024).",
    depth: "30-min",
    kind: "academic",
    language: "en",
  },
  {
    id: "tkemaladze-aggression",
    title:
      "Litigating the Act of Aggression as Human Rights Claims",
    authors: "Revaz Tkemaladze",
    publication: "Articles of War — Lieber Institute West Point",
    date: "21 February 2025",
    url: "https://lieber.westpoint.edu/litigating-act-aggression-human-rights-claims/",
    abstract:
      "On the structural question of whether and how aggression can be litigated through the human-rights frame — the move the Court ultimately made in the merits judgment. Useful as a doctrinal companion.",
    citation:
      "Revaz Tkemaladze, 'Litigating the Act of Aggression as Human Rights Claims' Articles of War (Lieber Institute West Point, 21 February 2025).",
    depth: "30-min",
    kind: "academic",
    language: "en",
  },
  {
    id: "icj-cerd-icsft",
    title:
      "Application of the International Convention for the Suppression of the Financing of Terrorism and of the International Convention on the Elimination of All Forms of Racial Discrimination (Ukraine v. Russian Federation)",
    publication: "International Court of Justice",
    date: "Application 2017; judgment 31 January 2024",
    url: "https://www.icj-cij.org/case/166",
    abstract:
      "ICJ General List No. 166. Russia found in breach of the ICSFT on the procedural obligation to investigate and freeze funds, and of the CERD in respect of education in the Ukrainian language in Crimea. Adjacent case to the ECHR proceeding; cites overlap in fact-finding.",
    citation:
      "Application of the ICSFT and CERD (Ukraine v. Russian Federation), Judgment of 31 January 2024, ICJ General List No. 166.",
    depth: "deep",
    kind: "primary-court",
    language: "en",
  },
  {
    id: "milanovic-extraterritorial",
    title:
      "Extraterritorial Application of Human Rights Treaties — Law, Principles, and Policy",
    authors: "Marko Milanović",
    publication: "Oxford University Press",
    date: "2011",
    url: "https://global.oup.com/academic/product/extraterritorial-application-of-human-rights-treaties-9780199696208",
    abstract:
      "The doctrinal monograph against which the Court's jurisdictional reasoning in this case can be read. Older but the standard work.",
    citation:
      "Marko Milanović, Extraterritorial Application of Human Rights Treaties: Law, Principles, and Policy (Oxford University Press 2011).",
    depth: "deep",
    kind: "book",
    language: "en",
  },
];

export const KIND_LABEL: Record<ReadingItem["kind"], string> = {
  "primary-court": "Court materials",
  "primary-press": "Registrar press releases",
  "primary-instrument": "Instruments",
  "primary-investigation": "Investigation materials",
  academic: "Academic commentary",
  journalism: "Journalism",
  osint: "OSINT",
  video: "Documentary",
  book: "Books",
};

export const DEPTH_LABEL: Record<ReadingItem["depth"], string> = {
  "5-min": "5-min orientation",
  "30-min": "30-min reading",
  deep: "Deep dive",
};
