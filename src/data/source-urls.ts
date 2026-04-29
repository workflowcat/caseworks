// Resolves a free-text source description to a verified URL.
// Discipline: only URLs I am confident exist; nothing fabricated.
// Multi-source strings (separated by ';') should be split by the caller.

const RULES: Array<[RegExp, string]> = [
  // ECHR press releases
  [
    /ECHR\s+PR\s+173\s*\(2025\)/i,
    "https://hudoc.echr.coe.int/eng-press?i=003-8279845-11657965",
  ],
  [
    /ECHR\s+PR\s+026\s*\(2023\)/i,
    "https://hudoc.echr.coe.int/eng?i=002-13989",
  ],
  [
    /ECHR\s+PR\s+286\s*\(2022\)|Russia\s+ceases\s+to\s+be\s+a\s+Party/i,
    "https://www.coe.int/en/web/portal/-/russia-ceases-to-be-party-to-the-european-convention-on-human-rights",
  ],
  [
    /Article\s+44/i,
    "https://www.echr.coe.int/documents/d/echr/convention_eng",
  ],
  [
    /ECHR\s+Press\s+Release|Registrar\s+of\s+the\s+Court/i,
    "https://www.echr.coe.int/press",
  ],

  // HUDOC — full judgments
  [
    /HUDOC\s+merits|merits\s+judgment.*9\s+July\s+2025|judgment.*9\s+July\s+2025/i,
    "https://hudoc.echr.coe.int/fre?i=002-14493",
  ],
  [
    /Crimea.*HUDOC|HUDOC.*Crimea|re\s+Crimea.*judgment|25\s+June\s+2024/i,
    "https://hudoc.echr.coe.int/eng?i=002-14347",
  ],
  [
    /admissibility\s+decision/i,
    "https://hudoc.echr.coe.int/eng?i=002-13989",
  ],

  // Convention text
  [
    /European\s+Convention\s+on\s+Human\s+Rights|ECHR\s+Rules\s+of\s+Court/i,
    "https://www.echr.coe.int/documents/d/echr/convention_eng",
  ],

  // Hague criminal trial
  [
    /Hague\s+District\s+Court|courtmh17|17\s+Nov(ember)?\s+2022/i,
    "https://www.courtmh17.com/en/judgement-and-livestream/verdict-17-november-2022.htm",
  ],

  // Dutch Public Prosecution Service / OM
  [
    /Public\s+Prosecution\s+Service|prosecutionservice|OM\s+/i,
    "https://www.prosecutionservice.nl/topics/mh17-vliegramp",
  ],

  // Joint Investigation Team
  [
    /JIT/i,
    "https://www.prosecutionservice.nl/topics/mh17-vliegramp/jit-mh17-investigation",
  ],

  // Dutch Safety Board
  [
    /Onderzoeksraad|Dutch\s+Safety\s+Board/i,
    "https://www.onderzoeksraad.nl/en/page/3546/crash-mh17-17-july-2014",
  ],

  // ICAO
  [
    /ICAO\s+Council|ICAO\s+press|Article\s+3\s+bis/i,
    "https://www.icao.int/news/icao-council-vote-flight-mh17-case",
  ],
  [
    /Chicago\s+Convention/i,
    "https://www.icao.int/publications/Documents/7300_orig.pdf",
  ],

  // ICJ
  [
    /Allegations\s+of\s+Genocide|ICJ.*General\s+List|ICJ\s+Reports|Provisional\s+Measures.*16\s+March\s+2022/i,
    "https://www.icj-cij.org/case/182",
  ],
  [
    /Preliminary\s+Objections.*2\s+February\s+2024/i,
    "https://www.icj-cij.org/case/182",
  ],

  // ICC
  [
    /ICC\s+Pre[-\s]?Trial\s+Chamber|International\s+Criminal\s+Court|ICC\s+/i,
    "https://www.icc-cpi.int/situations/ukraine",
  ],

  // OHCHR / UN Commission of Inquiry
  [
    /Commission\s+of\s+Inquiry|UN\s+Independent.*Commission/i,
    "https://www.ohchr.org/en/hr-bodies/hrc/iicihr-ukraine/index",
  ],
  [
    /OHCHR/i,
    "https://www.ohchr.org/en/countries/ukraine",
  ],

  // OSCE
  [
    /OSCE/i,
    "https://www.osce.org/special-monitoring-mission-to-ukraine",
  ],

  // Council of Europe
  [
    /CoE\s+Resolution|CM\/Res|Council\s+of\s+Europe/i,
    "https://www.coe.int/en/web/portal",
  ],

  // Register of Damage
  [
    /Register\s+of\s+Damage/i,
    "https://rd4u.coe.int/en/",
  ],

  // Academic / commentary
  [
    /EJIL.*Talk|EJIL:?\s*Talk/i,
    "https://www.ejiltalk.org/?s=ukraine+netherlands+russia",
  ],
  [
    /Strasbourg\s+Observers/i,
    "https://strasbourgobservers.com/?s=ukraine+netherlands+russia",
  ],
  [
    /Verfassungsblog/i,
    "https://verfassungsblog.de/?s=ukraine+netherlands+russia",
  ],
  [
    /SSRN|Milanović\s+and\s+Shah|Milanovic\s+and\s+Shah/i,
    "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3775402",
  ],
  [
    /Milanović|Milanovic/i,
    "https://www.ejiltalk.org/the-european-courts-merits-judgment-in-ukraine-and-the-netherlands-v-russia-as-good-as-it-gets-almost/",
  ],
  [
    /Khachatryan/i,
    "https://strasbourgobservers.com/2025/07/23/the-judgment-in-ukraine-and-the-netherlands-v-russia-a-nicaragua-moment-for-the-ecthr/",
  ],

  // OSINT
  [
    /Bellingcat/i,
    "https://www.bellingcat.com/tag/mh17/",
  ],

  // Russian sources
  [
    /JURIST/i,
    "https://www.jurist.org",
  ],
];

export function resolveSourceUrl(text: string): string | undefined {
  if (!text) return undefined;
  for (const [re, url] of RULES) {
    if (re.test(text)) return url;
  }
  return undefined;
}

export function splitSource(text: string): string[] {
  return text
    .split(/;\s*/)
    .map((s) => s.trim())
    .filter(Boolean);
}
