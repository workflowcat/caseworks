// Confidence taxonomy for individual claims on the site.
// Used to surface a small status badge next to every quote/fact/finding,
// and to power the /verify fact-checking view.

export type Confidence =
  | "verbatim"
  | "paraphrased"
  | "translated"
  | "secondary"
  | "unverified";

export const CONFIDENCE_BADGE: Record<Confidence, string> = {
  verbatim: "V",
  paraphrased: "P",
  translated: "T",
  secondary: "S",
  unverified: "?",
};

export const CONFIDENCE_LABEL: Record<Confidence, string> = {
  verbatim:
    "Verbatim from a primary source. Reproduced word-for-word.",
  paraphrased:
    "Paraphrased or compressed. The substance is supported by the source; the exact wording is not.",
  translated:
    "Translated from a non-English original. Substance accurate; wording approximate.",
  secondary:
    "Cited via a secondary source — the original was not directly inspected.",
  unverified:
    "The source is identified but not yet verified directly.",
};

export const CONFIDENCE_SHORT: Record<Confidence, string> = {
  verbatim: "Verbatim",
  paraphrased: "Paraphrased",
  translated: "Translated",
  secondary: "Secondary",
  unverified: "Unverified",
};

// Per-id overrides (applies in /quotations, /facts, /registers).
// Anything not listed here defaults to verbatim — i.e. reproduced from a
// primary press-release or judgment source. Below are the items where a
// stricter classification applies.
export const QUOTE_CONFIDENCE: Record<string, Confidence> = {
  // ICJ
  "icj-suspend": "verbatim",
  "icj-no-genocide": "verbatim",

  // Hague verdict — paraphrase note in the original entry
  "hague-life": "paraphrased",

  // ICC
  "icc-warrant-putin": "verbatim",
  "icc-warrant-shoigu": "paraphrased",

  // Russian Foreign Ministry — translated and reported by JURIST
  "russia-illegitimate": "translated",

  // Academic compressions
  "milanovic-as-good": "verbatim",
  "milanovic-double": "paraphrased",
  "khachatryan-nicaragua": "verbatim",
  "khachatryan-ihl": "paraphrased",
};

export const FACT_CONFIDENCE: Record<string, Confidence> = {
  // OHCHR figures reach us via the Court's quotation, not directly
  "ohchr-deaths-2014-22": "secondary",
  "ohchr-wounded-2014-22": "secondary",
  "ohchr-deaths-2022": "secondary",
  "ohchr-wounded-2022": "secondary",
  "ohchr-tortured": "secondary",
  "ohchr-detentions": "secondary",
  "children-7890": "secondary",

  // Compression
  "children-1985-three": "paraphrased",

  // Translated
  "russia-icao-appeal": "translated",
};
