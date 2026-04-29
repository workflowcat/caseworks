"use client";

import { HUDOC_BASE, type ParaAnchor } from "@/data/paragraphs";
import { HoverPreview } from "./hover-preview";
import {
  judgmentParagraphs,
  type JudgmentParagraph,
} from "@/data/judgment-paragraphs";

function paraHref(no: number | string): string {
  if (typeof no === "number") return `/judgment/paragraphs#para-${no}`;
  if (/^\d+$/.test(String(no))) return `/judgment/paragraphs#para-${no}`;
  return HUDOC_BASE;
}

function lookupExcerpt(no: ParaAnchor["no"]): JudgmentParagraph | undefined {
  if (typeof no === "number") {
    return judgmentParagraphs.find((p) => p.no === no);
  }
  // For ranges like "488–510", show the first paragraph in the range.
  const m = String(no).match(/^(\d+)/);
  if (m) {
    const first = parseInt(m[1], 10);
    return judgmentParagraphs.find((p) => p.no === first);
  }
  return undefined;
}

export function ParagraphChip({ a }: { a: ParaAnchor }) {
  const label = `§ ${a.no}`;
  const href = paraHref(a.no);
  const internal = href.startsWith("/");
  const excerpt = lookupExcerpt(a.no);

  const trigger = (
    <a
      href={href}
      target={internal ? undefined : "_blank"}
      rel={internal ? undefined : "noopener noreferrer"}
      className="inline-flex items-center gap-1 mono text-[10px] uppercase tracking-widest border px-1.5 py-0.5 hover:text-accent hover:border-accent transition-colors"
      style={{
        borderColor: "var(--rule)",
        color: a.approx ? "var(--ink-soft)" : "var(--accent)",
      }}
    >
      {label}
      {a.approx ? <span aria-hidden>≈</span> : null}
    </a>
  );

  if (!excerpt) {
    return (
      <HoverPreview
        trigger={trigger}
        title={`Paragraph ${a.no}`}
        body={a.topic}
        meta={`Anchor: ${a.derivedFrom}${a.approx ? " · approximate" : ""}`}
      />
    );
  }

  return (
    <HoverPreview
      trigger={trigger}
      title={`§ ${excerpt.no}${excerpt.chapter ? ` · ${excerpt.chapter.split(/\.\s/)[0]}` : ""}`}
      body={excerpt.text}
      meta={`HUDOC merits judgment, item 001-244292 — full text on hover-click`}
    />
  );
}

export function ParagraphChips({ list }: { list: ParaAnchor[] }) {
  if (!list || list.length === 0) return null;
  return (
    <span className="inline-flex flex-wrap items-center gap-1">
      {list.map((a, i) => (
        <ParagraphChip key={i} a={a} />
      ))}
    </span>
  );
}
