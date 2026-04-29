import { HUDOC_BASE, type ParaAnchor } from "@/data/paragraphs";

export function ParagraphChip({ a }: { a: ParaAnchor }) {
  const label = `§ ${a.no}`;
  const tooltip = `${a.topic}. Anchor derived from: ${a.derivedFrom}.${a.approx ? " Approximate." : ""}`;
  return (
    <a
      href={HUDOC_BASE}
      target="_blank"
      rel="noopener noreferrer"
      title={tooltip}
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
