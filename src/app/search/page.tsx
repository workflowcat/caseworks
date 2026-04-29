"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  PageFooter,
  PageHeader,
  PageTitle,
} from "@/components/page-chrome";
import { sections } from "@/data/sections";
import { terms, clusterLabels } from "@/data/glossary";
import { sources, groupLabels } from "@/data/sources";
import { reading } from "@/data/reading";
import { quotes } from "@/data/quotes";
import { facts } from "@/data/facts";
import { people, GROUP_LABEL as PEOPLE_GROUP } from "@/data/people";
import {
  conflict,
  KIND_LABEL as CONFLICT_KIND,
} from "@/data/conflict-timeline";
import { judgmentParagraphs } from "@/data/judgment-paragraphs";

type Hit = {
  id: string;
  surface:
    | "Section"
    | "Glossary"
    | "Source"
    | "Reading"
    | "Quote"
    | "Fact"
    | "Person"
    | "Conflict"
    | "Paragraph";
  title: string;
  subtitle: string;
  href: string;
};

function buildIndex(): Hit[] {
  const out: Hit[] = [];
  for (const s of sections) {
    out.push({
      id: `s-${s.href}`,
      surface: "Section",
      title: `${s.no} · ${s.title}`,
      subtitle: s.one,
      href: s.href,
    });
  }
  for (const t of terms) {
    out.push({
      id: `t-${t.id}`,
      surface: "Glossary",
      title: t.term,
      subtitle: t.body.slice(0, 140) + (t.body.length > 140 ? "…" : ""),
      href: `/glossary#${t.id}`,
    });
  }
  for (const s of sources) {
    out.push({
      id: `src-${s.id}`,
      surface: "Source",
      title: s.title,
      subtitle: `${s.authors ?? s.publication ?? ""} · ${s.date}`,
      href: s.url ?? "/sources",
    });
  }
  for (const r of reading) {
    out.push({
      id: `r-${r.id}`,
      surface: "Reading",
      title: r.title,
      subtitle: `${r.authors ?? r.publication} · ${r.date}`,
      href: r.url,
    });
  }
  for (const q of quotes) {
    out.push({
      id: `q-${q.id}`,
      surface: "Quote",
      title: q.text.slice(0, 120) + (q.text.length > 120 ? "…" : ""),
      subtitle: q.attribution,
      href: `/quotations#q-${q.id}`,
    });
  }
  for (const f of facts) {
    out.push({
      id: `f-${f.id}`,
      surface: "Fact",
      title: f.text.slice(0, 140) + (f.text.length > 140 ? "…" : ""),
      subtitle: `${f.tag} · ${f.date} · ${f.source}`,
      href: `/facts#f-${f.id}`,
    });
  }
  for (const p of people) {
    out.push({
      id: `p-${p.id}`,
      surface: "Person",
      title: p.name,
      subtitle: `${p.role}${p.state ? ` · ${p.state}` : ""}`,
      href: "/people",
    });
  }
  for (const c of conflict) {
    out.push({
      id: `c-${c.id}`,
      surface: "Conflict",
      title: c.title,
      subtitle: `${c.display}${c.place ? ` · ${c.place}` : ""}`,
      href: "/timeline",
    });
  }
  for (const p of judgmentParagraphs) {
    out.push({
      id: `j-${p.no}`,
      surface: "Paragraph",
      title: `§ ${p.no}`,
      subtitle: p.text.slice(0, 160) + (p.text.length > 160 ? "…" : ""),
      href: `/judgment/paragraphs#para-${p.no}`,
    });
  }
  return out;
}

const TINT: Record<Hit["surface"], string> = {
  Section: "var(--accent)",
  Glossary: "var(--ink-soft)",
  Source: "var(--ink-soft)",
  Reading: "var(--ink-soft)",
  Quote: "var(--ink-soft)",
  Fact: "var(--ink-soft)",
  Person: "var(--ink-soft)",
  Conflict: "var(--ink-soft)",
  Paragraph: "var(--ink-soft)",
};

const SURFACE_ORDER: Hit["surface"][] = [
  "Section",
  "Paragraph",
  "Quote",
  "Fact",
  "Glossary",
  "Person",
  "Conflict",
  "Source",
  "Reading",
];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [surface, setSurface] = useState<Hit["surface"] | null>(null);

  const all = useMemo(buildIndex, []);

  const counts = useMemo(() => {
    const m = new Map<Hit["surface"], number>();
    for (const h of all) m.set(h.surface, (m.get(h.surface) ?? 0) + 1);
    return m;
  }, [all]);

  const filtered = useMemo(() => {
    let l = all;
    if (surface) l = l.filter((h) => h.surface === surface);
    if (query.trim()) {
      const q = query.toLowerCase();
      l = l.filter(
        (h) =>
          h.title.toLowerCase().includes(q) ||
          h.subtitle.toLowerCase().includes(q),
      );
    }
    return l.slice(0, 400);
  }, [all, query, surface]);

  return (
    <div className="min-h-screen bg-bg text-ink flex flex-col">
      <PageHeader no="✦" title="Search" current="/search" />

      <PageTitle
        kicker="Search"
        title="One search across the site."
        deck="Sections, judgment paragraphs, quotations, facts, glossary, people, conflict events, sources, reading list — searchable in one box."
      >
        <p className="mono text-[11px] text-ink-soft border border-rule px-3 py-2 inline-block">
          Press ⌘K anywhere to open the same search as a palette
          overlay.
        </p>
      </PageTitle>

      <section className="px-8 lg:px-14 pb-6 max-w-5xl">
        <div className="border border-rule grid grid-cols-12 gap-3 px-4 py-3 items-baseline">
          <p className="col-span-12 md:col-span-2 mono text-[10px] uppercase tracking-widest text-ink-soft">
            Search
          </p>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="word, phrase, paragraph number, name…"
            className="col-span-12 md:col-span-10 bg-transparent border-b border-rule outline-none py-1 text-base focus:border-accent"
            autoFocus
          />
        </div>

        <div className="mt-4 flex flex-wrap items-baseline gap-2 mono text-[11px]">
          <span className="uppercase tracking-widest text-ink-soft">
            Surface:
          </span>
          <button
            onClick={() => setSurface(null)}
            className="uppercase tracking-widest px-2 py-1 border"
            style={{
              borderColor:
                surface === null ? "var(--accent)" : "var(--rule)",
              color: surface === null ? "var(--accent)" : "var(--ink)",
            }}
          >
            all ({all.length})
          </button>
          {SURFACE_ORDER.map((s) => {
            const c = counts.get(s) ?? 0;
            if (c === 0) return null;
            return (
              <button
                key={s}
                onClick={() => setSurface(surface === s ? null : s)}
                className="uppercase tracking-widest px-2 py-1 border"
                style={{
                  borderColor:
                    surface === s ? "var(--accent)" : "var(--rule)",
                  color: surface === s ? "var(--accent)" : "var(--ink)",
                }}
              >
                {s} ({c})
              </button>
            );
          })}
        </div>
        <p className="mt-4 mono text-[11px] text-ink-soft">
          Showing {filtered.length} of {all.length}
          {query.trim() ? ` matching “${query}”` : ""}
        </p>
      </section>

      <main className="px-4 lg:px-10 pb-16 max-w-7xl">
        <ol className="border-t border-rule">
          {filtered.length === 0 ? (
            <li className="px-4 py-8 text-sm text-ink-soft">
              No matches.
            </li>
          ) : (
            filtered.map((h) => (
              <li key={h.id} className="border-b border-rule">
                <Link
                  href={h.href}
                  className="grid grid-cols-12 gap-3 px-4 py-3 hover:bg-bg-2 transition-colors"
                >
                  <span
                    className="col-span-12 md:col-span-2 mono text-[10px] uppercase tracking-widest pt-1"
                    style={{ color: TINT[h.surface] }}
                  >
                    {h.surface}
                  </span>
                  <div className="col-span-12 md:col-span-10">
                    <p className="serif text-sm leading-tight">
                      {h.title}
                    </p>
                    <p className="text-xs text-ink-soft mt-1 leading-snug">
                      {h.subtitle}
                    </p>
                  </div>
                </Link>
              </li>
            ))
          )}
        </ol>
      </main>

      <PageFooter current="/search" />
    </div>
  );
}
