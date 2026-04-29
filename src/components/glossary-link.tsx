import Link from "next/link";
import type { ReactNode } from "react";
import { terms } from "@/data/glossary";

// Build an ordered list of (regex, term) pairs once, longest match first so
// "Buk-TELAR" beats "Buk".
const TERM_LINKS: Array<{ re: RegExp; id: string; canonical: string }> = (() => {
  // Each term gets a few candidate spellings.
  const items: Array<{ phrase: string; id: string }> = [];
  for (const t of terms) {
    items.push({ phrase: t.term, id: t.id });
    if (t.short && t.short !== t.term) items.push({ phrase: t.short, id: t.id });
  }
  // Add a few hand-curated synonyms for the high-traffic terms.
  const synonyms: Array<{ phrase: string; id: string }> = [
    { phrase: "Buk missile", id: "buk-telar" },
    { phrase: "Buk-TELAR", id: "buk-telar" },
    { phrase: "Joint Investigation Team", id: "jit" },
    { phrase: "JIT", id: "jit" },
    { phrase: "ECHR", id: "echr" },
    { phrase: "European Convention on Human Rights", id: "echr" },
    { phrase: "European Convention", id: "echr" },
    { phrase: "Convention", id: "echr" },
    { phrase: "ICAO Council", id: "icao" },
    { phrase: "ICAO", id: "icao" },
    { phrase: "ICJ", id: "icj" },
    { phrase: "ICC", id: "icc" },
    { phrase: "OHCHR", id: "ohchr" },
    { phrase: "MH17 Air Disaster Foundation", id: "mh17-foundation" },
    { phrase: "Schiphol Judicial Complex", id: "schiphol-jcs" },
    { phrase: "Pervomaiskyi", id: "pervomaiskyi" },
    { phrase: "Snizhne", id: "snizhne" },
    { phrase: "de facto organ", id: "de-facto-organ" },
    { phrase: "administrative practice", id: "administrative-practice" },
    { phrase: "spatial jurisdiction", id: "spatial-jurisdiction" },
    { phrase: "personal jurisdiction", id: "personal-jurisdiction" },
    { phrase: "international humanitarian law", id: "ihl" },
    { phrase: "IHL", id: "ihl" },
    { phrase: "hors de combat", id: "hors-de-combat" },
    { phrase: "Article 38", id: "art-38" },
    { phrase: "Article 41", id: "art-41" },
    { phrase: "Article 46", id: "art-46" },
    { phrase: "Article 58", id: "art-58" },
    { phrase: "Article 3 bis", id: "chicago-3-bis" },
    { phrase: "Article 13", id: "art-13" },
    { phrase: "Article 3", id: "art-3" },
    { phrase: "Article 2", id: "art-2" },
    { phrase: "Rule 39", id: "rule-39" },
    { phrase: "Joinder", id: "joinder" },
    { phrase: "Disjoinder", id: "disjoinder" },
    { phrase: "Third-party intervention", id: "third-party-intervention" },
  ];
  for (const s of synonyms) {
    if (!items.find((i) => i.phrase.toLowerCase() === s.phrase.toLowerCase())) {
      items.push(s);
    }
  }
  // Sort by length descending so longer phrases match first
  items.sort((a, b) => b.phrase.length - a.phrase.length);

  return items.map((it) => ({
    // Match as a whole word: not part of a longer word
    re: new RegExp(
      `(?<![A-Za-z0-9])(${escapeRegExp(it.phrase)})(?![A-Za-z0-9])`,
      "i",
    ),
    id: it.id,
    canonical: it.phrase,
  }));
})();

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Render a string with the first occurrence of each glossary term linked.
// Skips text inside straight quotes — verbatim source text shouldn't be mutated.
export function GlossaryProse({
  text,
}: {
  text: string;
}): ReactNode {
  const linked = new Set<string>();
  return renderSegment(text, linked);
}

function renderSegment(input: string, linked: Set<string>): ReactNode[] {
  // Split on quoted spans first; render those verbatim.
  const out: ReactNode[] = [];
  const re = /"[^"]*"|"[^"]*"|"[^"]*"/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = re.exec(input)) !== null) {
    const before = input.slice(last, m.index);
    if (before) out.push(...linkifyOutsideQuotes(before, linked, key++));
    out.push(<span key={`q-${key++}`}>{m[0]}</span>);
    last = m.index + m[0].length;
  }
  const tail = input.slice(last);
  if (tail) out.push(...linkifyOutsideQuotes(tail, linked, key++));
  return out;
}

function linkifyOutsideQuotes(
  s: string,
  linked: Set<string>,
  baseKey: number,
): ReactNode[] {
  // Iteratively find the earliest match across all term regexes.
  const out: ReactNode[] = [];
  let cursor = 0;
  let kk = 0;
  while (cursor < s.length) {
    let earliest: {
      idx: number;
      len: number;
      id: string;
      matchText: string;
    } | null = null;
    for (const { re, id } of TERM_LINKS) {
      if (linked.has(id)) continue;
      const r = new RegExp(re.source, re.flags);
      r.lastIndex = 0;
      const sub = s.slice(cursor);
      const mm = r.exec(sub);
      if (mm && (earliest === null || mm.index < earliest.idx)) {
        earliest = {
          idx: mm.index,
          len: mm[0].length,
          id,
          matchText: mm[0],
        };
      }
    }
    if (!earliest) {
      out.push(s.slice(cursor));
      break;
    }
    const before = s.slice(cursor, cursor + earliest.idx);
    if (before) out.push(before);
    out.push(
      <Link
        key={`${baseKey}-${kk++}`}
        href={`/glossary#${earliest.id}`}
        className="underline decoration-dotted decoration-1 underline-offset-2 hover:text-accent"
        title="Open glossary entry"
      >
        {earliest.matchText}
      </Link>,
    );
    linked.add(earliest.id);
    cursor = cursor + earliest.idx + earliest.len;
  }
  return out;
}
