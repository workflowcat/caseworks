// Paragraph anchors into the merits judgment of 9 July 2025.
//
// Honest constraint: the full HUDOC text is not easily extractable
// programmatically. The mappings below are hand-curated from secondary
// commentary that quotes specific paragraph numbers — primarily Marko
// Milanović's EJIL:Talk! reading of 10 July 2025, Davit Khachatryan's
// Strasbourg Observers piece of 23 July 2025, and the press release.
// Mappings flagged as `approx: true` are the editor's best inference
// from the press-release section where the original commentary did not
// pin a specific paragraph.

export type ParaAnchor = {
  no: number | string; // single paragraph or e.g. "458–461"
  topic: string;
  derivedFrom: string;
  approx?: boolean;
};

// Quote id (from quotes.ts) → paragraph anchor(s)
export const QUOTE_PARAGRAPHS: Record<string, ParaAnchor[]> = {
  "court-flagrant": [
    {
      no: "348–349",
      topic: "Threat to peace in Europe; near universal condemnation",
      derivedFrom: "Milanović, EJIL:Talk! 10 July 2025",
    },
  ],
  "court-strategically": [
    {
      no: "360–361",
      topic: "Personal jurisdiction; territorial acquisition",
      derivedFrom: "Milanović, EJIL:Talk! 10 July 2025",
    },
  ],
  "court-not-lawful": [
    {
      no: 461,
      topic:
        "MH17 — IHL principles of distinction and precautions; not a lawful act of war",
      derivedFrom: "Web search corroboration · 2025",
    },
  ],
  "court-cavalier": [
    {
      no: "458–461",
      topic: "MH17 — Buk-TELAR deployment; failure to take measures",
      derivedFrom: "Milanović, EJIL:Talk! 10 July 2025",
    },
  ],
  "court-fabrication": [
    {
      no: "470–478",
      topic: "MH17 — failure to investigate; Russian disclosures",
      derivedFrom: "Editor's inference from PR 173 (2025) section",
      approx: true,
    },
  ],
  "court-bodies": [
    {
      no: "488–500",
      topic: "MH17 — suffering of next of kin under Article 3",
      derivedFrom: "Editor's inference from PR 173 (2025) section",
      approx: true,
    },
  ],
  "court-fanciful": [
    {
      no: "501–510",
      topic: "Article 13 — no effective remedy in Russia",
      derivedFrom: "Editor's inference from PR 173 (2025) section",
      approx: true,
    },
  ],
  "court-pattern": [
    {
      no: "757–762",
      topic: "Pattern or system of violations; burden of proof",
      derivedFrom: "Milanović, EJIL:Talk! 10 July 2025",
    },
  ],
  "court-eight-years": [
    {
      no: "757–762",
      topic: "Official tolerance; eight-year pattern",
      derivedFrom: "Milanović, EJIL:Talk! 10 July 2025",
    },
  ],
  "court-deplorable": [
    {
      no: "177–179",
      topic: "Article 38; values framework; Russia's non-participation",
      derivedFrom: "Milanović, EJIL:Talk! 10 July 2025",
    },
  ],
  "court-context": [
    {
      no: "177–179",
      topic: "Russia's actions unprecedented in CoE history",
      derivedFrom: "Milanović, EJIL:Talk! 10 July 2025",
    },
  ],
  "court-jurisdiction-from": [
    {
      no: "320–340",
      topic: "Spatial jurisdiction over separatist territory",
      derivedFrom: "Editor's inference from admissibility decision",
      approx: true,
    },
  ],
};

// Press-release section id → paragraph anchor(s). Used on /judgment.
export const SECTION_PARAGRAPHS: Record<string, ParaAnchor[]> = {
  scope: [
    {
      no: "1–10",
      topic: "Composition and scope",
      derivedFrom: "Standard judgment structure",
      approx: true,
    },
  ],
  "russia-non-participation": [
    {
      no: "150–179",
      topic: "Russia's non-participation; Article 38",
      derivedFrom: "Milanović, EJIL:Talk!",
    },
  ],
  jurisdiction: [
    {
      no: "320–366",
      topic: "Jurisdiction; effective control; de facto organ",
      derivedFrom: "Milanović, EJIL:Talk!",
    },
  ],
  ihl: [
    {
      no: "427–429",
      topic: "Convention–IHL relationship",
      derivedFrom: "Khachatryan, Strasbourg Observers (paraphrase)",
    },
  ],
  "mh17-art-2-substantive": [
    {
      no: "458–469",
      topic: "MH17 — Article 2 substantive",
      derivedFrom: "Milanović, EJIL:Talk!",
    },
  ],
  "mh17-art-2-procedural": [
    {
      no: "470–487",
      topic: "MH17 — Article 2 procedural",
      derivedFrom: "Editor's inference from PR 173 section",
      approx: true,
    },
  ],
  "mh17-art-3": [
    {
      no: "488–500",
      topic: "MH17 — Article 3 next of kin",
      derivedFrom: "Editor's inference from PR 173 section",
      approx: true,
    },
  ],
  "mh17-art-13": [
    {
      no: "501–510",
      topic: "MH17 — Article 13",
      derivedFrom: "Editor's inference from PR 173 section",
      approx: true,
    },
  ],
  "just-satisfaction": [
    {
      no: "1500+",
      topic: "Article 41 disjoinder",
      derivedFrom: "Editor's inference; final operative paragraphs",
      approx: true,
    },
  ],
  "article-46": [
    {
      no: "1490+",
      topic: "Article 46 measures",
      derivedFrom: "Editor's inference; final operative paragraphs",
      approx: true,
    },
  ],
};

export const HUDOC_BASE = "https://hudoc.echr.coe.int/fre?i=002-14493";
