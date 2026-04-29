// Single source of truth for the site's section structure.
// Used by the homepage TOC, the persistent top-bar index, the prev/next
// footer, and the command palette.

export type Section = {
  no: string;
  href: string;
  title: string;
  short: string;
  one: string;
  kind: "reading" | "reference";
};

export const sections: Section[] = [
  {
    no: "I",
    href: "/case",
    title: "The case",
    short: "Case",
    one: "Identifier, parties, findings, and the disjoined just-satisfaction track. The canonical page on application 28525/20.",
    kind: "reading",
  },
  {
    no: "II",
    href: "/history",
    title: "Procedural history",
    short: "History",
    one: "Filings, joinder, hearings, judgment, disjoinder. From 13 March 2014 to today.",
    kind: "reading",
  },
  {
    no: "III",
    href: "/judgment",
    title: "Annotated judgment",
    short: "Judgment",
    one: "The merits-judgment press release, section by section, with anchor links to the controlling parts of the public record.",
    kind: "reading",
  },
  {
    no: "IV",
    href: "/witness",
    title: "A reading",
    short: "Reading",
    one: "Six chapters on the case told from the perspective of one of the more than five hundred MH17 relatives who lodged individual ECHR applications.",
    kind: "reading",
  },
  {
    no: "V",
    href: "/quotations",
    title: "Quotations",
    short: "Quotes",
    one: "Direct quotations used on this site, with attribution and a citation that copies to the clipboard.",
    kind: "reference",
  },
  {
    no: "VI",
    href: "/facts",
    title: "Facts",
    short: "Facts",
    one: "Atomic facts curated from primary materials, filtered by topic, sortable, copyable.",
    kind: "reference",
  },
  {
    no: "VII",
    href: "/registers",
    title: "Voices on the record",
    short: "Voices",
    one: "Three event bundles — the downing, the next of kin, the children — rendered through six voices each: Court, Ukraine, the Netherlands, Russia, monitor, academic.",
    kind: "reference",
  },
  {
    no: "VIII",
    href: "/glossary",
    title: "Glossary",
    short: "Glossary",
    one: "Defined terms used on this site: Buk-TELAR, JIT, de facto organ, administrative practice, just satisfaction, Article 3 bis, and others.",
    kind: "reference",
  },
  {
    no: "IX",
    href: "/sources",
    title: "Sources",
    short: "Sources",
    one: "Bibliography of primary documents and secondary commentary cited on this site.",
    kind: "reference",
  },
  {
    no: "X",
    href: "/reading-list",
    title: "Reading list",
    short: "Reading list",
    one: "External materials beyond what is cited here — primary documents, academic commentary, journalism, OSINT — filterable by depth and kind.",
    kind: "reference",
  },
  {
    no: "XI",
    href: "/verify",
    title: "Verify",
    short: "Verify",
    one: "Every claim on the site in one table, with confidence band, source, and link.",
    kind: "reference",
  },
];

export function findSection(href: string) {
  return sections.find((s) => s.href === href);
}

export function neighbours(href: string) {
  const i = sections.findIndex((s) => s.href === href);
  return {
    prev: i > 0 ? sections[i - 1] : undefined,
    next: i >= 0 && i < sections.length - 1 ? sections[i + 1] : undefined,
  };
}
