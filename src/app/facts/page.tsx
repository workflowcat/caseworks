"use client";

import { useMemo, useState } from "react";
import { facts, type Fact } from "@/data/facts";
import {
  PageFooter,
  PageHeader,
  PageTitle,
} from "@/components/page-chrome";
import { CopyButton } from "@/components/copy-button";

export default function FactsPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<string | null>(null);
  const [sortMode, setSortMode] = useState<"file" | "date" | "tag">("file");

  const tags = useMemo(() => {
    const m = new Map<string, number>();
    for (const f of facts) m.set(f.tag, (m.get(f.tag) ?? 0) + 1);
    return Array.from(m.entries()).sort((a, b) => b[1] - a[1]);
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
      <PageHeader no="VI" title="Facts" />

      <PageTitle
        kicker="VI · Facts"
        title="Atomic, sourced."
        deck="Each fact is one claim, with its primary source and date. Filter, sort, search; copy any fact with its citation."
      />

      <section className="px-8 lg:px-14 pb-6 max-w-5xl">
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
                className="grid grid-cols-12 gap-3 py-5 border-b border-rule"
              >
                <p className="col-span-2 md:col-span-1 mono text-[11px] text-ink-soft pt-1">
                  {String(i + 1).padStart(3, "0")}
                </p>
                <div className="col-span-10 md:col-span-11 space-y-2">
                  <p className="serif text-base lg:text-lg leading-snug max-w-3xl">
                    {f.text}
                  </p>
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mono text-[11px]">
                    <span className="uppercase tracking-widest text-accent">
                      {f.tag}
                    </span>
                    <span className="text-ink-soft">{f.date}</span>
                    <span className="text-ink-soft italic serif normal-case tracking-normal">
                      {f.source}
                    </span>
                  </div>
                  <CopyButton text={citation} />
                </div>
              </li>
            );
          })}
        </ol>
      </main>

      <PageFooter
        next={{ href: "/registers", title: "Voices on the record" }}
      />
    </div>
  );
}
