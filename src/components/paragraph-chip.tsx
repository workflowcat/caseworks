import { HUDOC_BASE, type ParaAnchor } from "@/data/paragraphs";

function paraHref(no: number | string): string {
  // If a single integer, deep-link into our viewer; otherwise HUDOC.
  if (typeof no === "number") return `/judgment/paragraphs#para-${no}`;
  if (/^\d+$/.test(String(no))) return `/judgment/paragraphs#para-${no}`;
  return HUDOC_BASE;
}

export function ParagraphChip({ a }: { a: ParaAnchor }) {
  const label = `§ ${a.no}`;
  const tooltip = `${a.topic}. Anchor derived from: ${a.derivedFrom}.${
    a.approx ? " Approximate." : ""
  }`;
  const href = paraHref(a.no);
  const internal = href.startsWith("/");
  return (
    <a
      href={href}
      target={internal ? undefined : "_blank"}
      rel={internal ? undefined : "noopener noreferrer"}
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
