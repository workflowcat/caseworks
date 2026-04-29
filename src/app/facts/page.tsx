"use client";

import { useMemo, useState } from "react";
import { facts, type Fact } from "@/data/facts";
import {
  PageFooter,
  PageHeader,
  PageTitle,
} from "@/components/page-chrome";
import { CopyButton } from "@/components/copy-button";
import { DistBar } from "@/components/dist-bar";
import { SourceLine } from "@/components/source-link";
import { ConfidenceBadge } from "@/components/confidence-badge";
import { FACT_CONFIDENCE } from "@/data/confidence";
import { GlossaryProse } from "@/components/glossary-link";

export default function FactsPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<string | null>(null);
  const [sortMode, setSortMode] = useState<"file" | "date" | "tag">("file");

  const tags = useMemo(() => {
    const m = new Map<string, number>();
    for (const f of facts) m.set(f.tag, (m.get(f.tag) ?? 0) + 1);
    return Array.from(m.entries()).sort((a, b) => b[1] - a[1]);
  }, []);

  const yearCounts = useMemo(() => {
    const m = new Map<number, number>();
    for (const f of facts) {
      const yMatch = f.date.match(/\b(20\d{2})\b/);
      if (!yMatch) continue;
      const y = Number(yMatch[1]);
      m.set(y, (m.get(y) ?? 0) + 1);
    }
    const years: Array<{ year: number; count: number }> = [];
    for (let y = 2014; y <= 2026; y++) {
      years.push({ year: y, count: m.get(y) ?? 0 });
    }
    return years;
  }, []);

  const list = useMemo(() => {
    let l = [...facts];
    if (filter) l = l.filter((f) => f.tag === filter);
    if (query.trim()) {
      const needle = query.toLowerCase();
      l = l.filter(
        (f) =>
          f.text.toLowerCase().includes(needle) ||
          f.source.toLowerCase().includes(needle) ||
          f.tag.toLowerCase().includes(needle),
      );
    }
    if (sortMode === "date") l.sort((a, b) => a.date.localeCompare(b.date));
    else if (sortMode === "tag")
      l.sort((a, b) => a.tag.localeCompare(b.tag));
    return l;
  }, [filter, sortMode, query]);

  return (
    <div className="min-h-screen bg-bg text-ink flex flex-col">
      <PageHeader no="V" title="Facts" current="/facts" />

      <PageTitle
        kicker="V · Facts"
        title="Atomic, sourced."
        deck="Each fact is one claim, with its primary source and date. Filter, sort, search; copy any fact with its citation."
      >
        <ConfidenceKey />
      </PageTitle>

      <section className="px-8 lg:px-14 pb-4 max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <p className="mono text-[10px] uppercase tracking-widest text-ink-soft mb-3">
            Distribution by tag
          </p>
          <DistBar
            data={tags.map(([label, count]) => ({ label, count }))}
            active={filter}
            onClickItem={(label) =>
              setFilter(filter === label ? null : label)
            }
          />
        </div>
        <div>
          <p className="mono text-[10px] uppercase tracking-widest text-ink-soft mb-3">
            Density by year
          </p>
          <YearDensity years={yearCounts} />
        </div>
      </section>

      <section className="px-8 lg:px-14 pb-6 max-w-5xl mt-6">
        <div className="border border-rule grid grid-cols-12 gap-3 px-4 py-3 items-baseline">
          <p className="col-span-12 md:col-span-2 mono text-[10px] uppercase tracking-widest text-ink-soft">
            Search
          </p>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="word or phrase…"
            className="col-span-12 md:col-span-10 bg-transparent border-b border-rule outline-none py-1 text-base focus:border-accent"
          />
        </div>

        <div className="mt-4 flex flex-wrap items-baseline gap-2 mono text-[11px]">
          <span className="uppercase tracking-widest text-ink-soft">
            Sort:
          </span>
          {(["file", "date", "tag"] as const).map((m) => (
            <button
              key={m}
              onClick={() => setSortMode(m)}
              className="uppercase tracking-widest px-2 py-1 border"
              style={{
                borderColor:
                  sortMode === m ? "var(--accent)" : "var(--rule)",
                color: sortMode === m ? "var(--accent)" : "var(--ink)",
              }}
            >
              {m === "file" ? "File order" : m}
            </button>
          ))}
          <span className="uppercase tracking-widest text-ink-soft ml-4">
            Filter:
          </span>
          <button
            onClick={() => setFilter(null)}
            className="uppercase tracking-widest px-2 py-1 border"
            style={{
              borderColor: filter === null ? "var(--accent)" : "var(--rule)",
              color: filter === null ? "var(--accent)" : "var(--ink)",
            }}
          >
            all ({facts.length})
          </button>
          {tags.map(([t, n]) => (
            <button
              key={t}
              onClick={() => setFilter(filter === t ? null : t)}
              className="uppercase tracking-widest px-2 py-1 border"
              style={{
                borderColor:
                  filter === t ? "var(--accent)" : "var(--rule)",
                color: filter === t ? "var(--accent)" : "var(--ink)",
              }}
            >
              {t} ({n})
            </button>
          ))}
        </div>
        <p className="mt-4 mono text-[11px] text-ink-soft">
          Showing {list.length} of {facts.length}
        </p>
      </section>

      <main className="px-8 lg:px-14 pb-16 max-w-5xl">
        <ol className="border-t border-rule">
          {list.map((f, i) => {
            const citation = `"${f.text}" — ${f.source} (${f.date}).`;
            return (
              <li
                key={f.id}
                id={`f-${f.id}`}
                className="grid grid-cols-12 gap-3 py-5 border-b border-rule scroll-mt-24"
              >
                <p className="col-span-2 md:col-span-1 mono text-[11px] text-ink-soft pt-1">
                  <a
                    href={`#f-${f.id}`}
                    className="hover:text-accent"
                    title="Permalink to this fact"
                  >
                    {String(i + 1).padStart(3, "0")}
                  </a>
                </p>
                <div className="col-span-10 md:col-span-11 space-y-2">
                  <p className="serif text-base lg:text-lg leading-snug max-w-3xl">
                    <GlossaryProse text={f.text} />
                  </p>
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mono text-[11px]">
                    <span className="uppercase tracking-widest text-accent">
                      {f.tag}
                    </span>
                    <span className="text-ink-soft">{f.date}</span>
                    <span className="text-ink-soft italic serif normal-case tracking-normal">
                      <SourceLine source={f.source} />
                    </span>
                    <ConfidenceBadge
                      c={FACT_CONFIDENCE[f.id] ?? "verbatim"}
                    />
                  </div>
                  <CopyButton text={citation} />
                </div>
              </li>
            );
          })}
        </ol>
      </main>

      <PageFooter current="/facts" />
    </div>
  );
}

function ConfidenceKey() {
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-2 mt-2">
      {(["verbatim", "paraphrased", "translated", "secondary"] as const).map(
        (c) => (
          <ConfidenceBadge key={c} c={c} showLabel />
        ),
      )}
    </div>
  );
}

function YearDensity({
  years,
}: {
  years: Array<{ year: number; count: number }>;
}) {
  const max = Math.max(...years.map((y) => y.count), 1);
  return (
    <div className="border border-rule bg-bg p-3">
      <div className="grid grid-cols-13 gap-1 items-end h-16">
        {years.map((y) => {
          const h = (y.count / max) * 100;
          return (
            <div
              key={y.year}
              className="flex flex-col items-center justify-end h-full"
              title={`${y.year}: ${y.count}`}
            >
              <div
                className="w-full"
                style={{
                  height: `${Math.max(2, h)}%`,
                  background:
                    y.count > 0 ? "var(--accent)" : "var(--rule)",
                  opacity: y.count > 0 ? 0.85 : 0.5,
                }}
              />
            </div>
          );
        })}
      </div>
      <div className="mt-2 grid grid-cols-13 gap-1 text-center mono text-[9px] text-ink-soft">
        {years.map((y) => (
          <span key={y.year}>{String(y.year).slice(-2)}</span>
        ))}
      </div>
    </div>
  );
}
