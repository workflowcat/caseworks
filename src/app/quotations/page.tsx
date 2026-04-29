"use client";

import { useMemo, useState } from "react";
import { quotes } from "@/data/quotes";
import {
  PageFooter,
  PageHeader,
  PageTitle,
} from "@/components/page-chrome";
import { CopyButton } from "@/components/copy-button";
import { DistBar } from "@/components/dist-bar";
import { SourceLine } from "@/components/source-link";
import { ConfidenceBadge } from "@/components/confidence-badge";
import { QUOTE_CONFIDENCE } from "@/data/confidence";

export default function QuotationsPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<string | null>(null);

  const clusters = useMemo(() => {
    const m = new Map<string, number>();
    for (const q of quotes) {
      const key = clusterFor(q.attribution);
      m.set(key, (m.get(key) ?? 0) + 1);
    }
    return Array.from(m.entries()).sort((a, b) => b[1] - a[1]);
  }, []);

  const filtered = useMemo(() => {
    let l = quotes;
    if (filter) l = l.filter((q) => clusterFor(q.attribution) === filter);
    if (query.trim()) {
      const needle = query.toLowerCase();
      l = l.filter(
        (q) =>
          q.text.toLowerCase().includes(needle) ||
          q.attribution.toLowerCase().includes(needle) ||
          (q.context ?? "").toLowerCase().includes(needle),
      );
    }
    return l;
  }, [query, filter]);

  return (
    <div className="min-h-screen bg-bg text-ink flex flex-col">
      <PageHeader no="V" title="Quotations" />

      <PageTitle
        kicker="V · Quotations"
        title="On the record."
        deck="Each quotation is reproduced verbatim where possible. Where compression was necessary, that is marked. Press the copy button on any entry to put a formatted citation on your clipboard."
      >
        <ConfidenceKey />
      </PageTitle>

      <section className="px-8 lg:px-14 pb-4 max-w-5xl">
        <p className="mono text-[10px] uppercase tracking-widest text-ink-soft mb-3">
          Distribution by source
        </p>
        <DistBar
          data={clusters.map(([label, count]) => ({ label, count }))}
          active={filter}
          onClickItem={(label) => setFilter(filter === label ? null : label)}
        />
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
            Filter:
          </span>
          <button
            onClick={() => setFilter(null)}
            className="uppercase tracking-widest px-2 py-1 border"
            style={{
              borderColor:
                filter === null ? "var(--accent)" : "var(--rule)",
              color: filter === null ? "var(--accent)" : "var(--ink)",
            }}
          >
            all ({quotes.length})
          </button>
          {clusters.map(([k, n]) => (
            <button
              key={k}
              onClick={() => setFilter(filter === k ? null : k)}
              className="uppercase tracking-widest px-2 py-1 border"
              style={{
                borderColor:
                  filter === k ? "var(--accent)" : "var(--rule)",
                color: filter === k ? "var(--accent)" : "var(--ink)",
              }}
            >
              {k} ({n})
            </button>
          ))}
        </div>
        <p className="mt-4 mono text-[11px] text-ink-soft">
          Showing {filtered.length} of {quotes.length}
        </p>
      </section>

      <main className="px-8 lg:px-14 pb-16 max-w-5xl">
        <ol className="border-t border-rule">
          {filtered.map((q, i) => {
            const citation = `"${q.text}" — ${q.attribution}${
              q.context ? ` (${q.context})` : ""
            }.`;
            return (
              <li
                key={q.id}
                id={`q-${q.id}`}
                className="grid grid-cols-12 gap-3 py-7 border-b border-rule scroll-mt-24"
              >
                <p className="col-span-2 md:col-span-1 mono text-[11px] text-ink-soft pt-1">
                  <a
                    href={`#q-${q.id}`}
                    className="hover:text-accent"
                    title="Permalink to this quotation"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </a>
                </p>
                <div className="col-span-10 md:col-span-11 space-y-3">
                  <blockquote className="serif text-[1.15rem] lg:text-[1.3rem] leading-snug max-w-3xl">
                    <span className="text-accent">&ldquo;</span>
                    {q.text}
                    <span className="text-accent">&rdquo;</span>
                  </blockquote>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <p className="mono text-[11px] uppercase tracking-widest text-accent">
                      {q.attribution}
                    </p>
                    <ConfidenceBadge
                      c={QUOTE_CONFIDENCE[q.id] ?? "verbatim"}
                    />
                  </div>
                  {q.context ? (
                    <p className="serif italic text-sm text-ink-soft">
                      <SourceLine source={q.context} />
                    </p>
                  ) : null}
                  <CopyButton text={citation} />
                </div>
              </li>
            );
          })}
        </ol>
      </main>

      <PageFooter next={{ href: "/facts", title: "Facts" }} />
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

function clusterFor(attribution: string): string {
  const a = attribution.toLowerCase();
  if (a.includes("european court")) return "ECHR";
  if (a.includes("hague")) return "Hague";
  if (a.includes("icj") || a.includes("court of justice")) return "ICJ";
  if (a.includes("icao")) return "ICAO";
  if (a.includes("icc") || a.includes("criminal court")) return "ICC";
  if (a.includes("milan")) return "Academic";
  if (a.includes("khachatryan")) return "Academic";
  if (a.includes("strasbourg observers")) return "Academic";
  if (a.includes("verfassung")) return "Academic";
  if (a.includes("naftogaz")) return "Party";
  if (a.includes("foreign ministry")) return "Party";
  if (a.includes("ukrainian")) return "Party";
  if (a.includes("netherlands")) return "Party";
  if (a.includes("article 44")) return "Instrument";
  if (a.includes("registrar")) return "ECHR";
  return "Other";
}
