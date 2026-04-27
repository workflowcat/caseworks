"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  cases as allCases,
  forums,
  importance,
  type LandscapeCase,
} from "@/data/types";
import { CasePanel } from "@/components/case-panel";

type SortKey = "date" | "amount" | "forum" | "category" | "status";

const STATUS_ORDER: Record<string, number> = {
  decided: 0,
  preliminary: 1,
  pending: 2,
  withdrawn: 3,
};

export default function GridPage() {
  const [sortKey, setSortKey] = useState<SortKey>("date");
  const [activeId, setActiveId] = useState<string | null>(null);

  const sorted = useMemo(() => {
    const list = [...allCases];
    switch (sortKey) {
      case "date":
        list.sort((a, b) =>
          (b.decided ?? b.filed).localeCompare(a.decided ?? a.filed),
        );
        break;
      case "amount":
        list.sort((a, b) => (b.awardUsdM ?? 0) - (a.awardUsdM ?? 0));
        break;
      case "forum":
        list.sort((a, b) => a.forum.localeCompare(b.forum));
        break;
      case "category":
        list.sort((a, b) => a.category.localeCompare(b.category));
        break;
      case "status":
        list.sort(
          (a, b) =>
            (STATUS_ORDER[a.status] ?? 9) - (STATUS_ORDER[b.status] ?? 9),
        );
        break;
    }
    return list;
  }, [sortKey]);

  return (
    <div className="mode-grid min-h-screen flex flex-col">
      <header className="px-6 lg:px-10 py-5 border-b border-grid-line flex items-baseline gap-8 sticky top-0 bg-grid-bg z-10">
        <Link href="/" className="mono text-xs uppercase tracking-widest">
          ← caseworks
        </Link>
        <p className="label text-grid-soft">Concept 01 · Ledger</p>
        <p className="mono text-[11px] text-grid-soft hidden md:block">
          {allCases.length} cases · sized by gravity
        </p>
        <div className="ml-auto flex items-center gap-1">
          {(
            [
              ["date", "Date"],
              ["amount", "Amount"],
              ["forum", "Forum"],
              ["category", "Type"],
              ["status", "Status"],
            ] as const
          ).map(([k, label]) => (
            <button
              key={k}
              onClick={() => setSortKey(k)}
              className={`mono text-[11px] uppercase tracking-widest px-3 py-2 border ${
                sortKey === k
                  ? "border-grid-accent text-grid-accent"
                  : "border-grid-line text-grid-soft hover:text-grid-fg"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </header>

      <main className="flex-1 p-3">
        <div className="grid grid-cols-12 auto-rows-[80px] gap-1">
          {sorted.map((c) => {
            const span = sizeSpan(c);
            return (
              <button
                key={c.id}
                onClick={() => setActiveId(c.id)}
                className={`relative text-left p-4 border border-grid-line bg-grid-bg hover:border-grid-accent hover:z-10 transition-colors group overflow-hidden ${span.col} ${span.row}`}
              >
                <Tile c={c} />
              </button>
            );
          })}
        </div>
      </main>

      <footer className="px-6 lg:px-10 py-4 border-t border-grid-line flex flex-wrap items-baseline gap-x-6 gap-y-1 mono text-[11px] text-grid-soft">
        <Legend swatch="bg-grid-accent" label="Decided" />
        <Legend
          swatch="border border-grid-fg"
          label="Pending / preliminary"
          empty
        />
        <span className="ml-auto">Sort: {sortKey} · Click a tile to open</span>
      </footer>

      <CasePanel
        caseId={activeId}
        onClose={() => setActiveId(null)}
        variant="dark"
      />
    </div>
  );
}

function Tile({ c }: { c: LandscapeCase }) {
  const f = forums.find((f) => f.id === c.forum);
  const decided = c.status === "decided";
  return (
    <>
      <div
        className={`absolute top-0 left-0 right-0 h-[3px] ${
          decided ? "bg-grid-accent" : "bg-grid-fg/40"
        }`}
      />
      <div className="flex items-baseline justify-between mb-2">
        <span className="mono text-[10px] text-grid-soft">{f?.short}</span>
        <span className="mono text-[10px] text-grid-soft">
          {(c.decided ?? c.filed).slice(0, 7)}
        </span>
      </div>
      <p className="font-medium text-[13px] leading-tight line-clamp-3">
        {c.title}
      </p>
      <p className="mono text-[10px] text-grid-soft mt-2 line-clamp-1">
        {c.parties}
      </p>
      {c.awardUsdM ? (
        <p className="mono text-base text-grid-accent mt-auto pt-3 absolute bottom-3 left-4">
          ${fmt(c.awardUsdM)}
        </p>
      ) : null}
    </>
  );
}

function Legend({
  swatch,
  label,
  empty,
}: {
  swatch: string;
  label: string;
  empty?: boolean;
}) {
  return (
    <span className="flex items-center gap-2">
      <span className={`inline-block w-3 h-3 ${swatch} ${empty ? "" : ""}`} />
      {label}
    </span>
  );
}

function sizeSpan(c: LandscapeCase): { col: string; row: string } {
  const w = importance(c);
  if (w >= 50) return { col: "col-span-6 md:col-span-4", row: "row-span-3" };
  if (w >= 40) return { col: "col-span-6 md:col-span-3", row: "row-span-2" };
  if (w >= 30) return { col: "col-span-4 md:col-span-3", row: "row-span-2" };
  return { col: "col-span-3 md:col-span-2", row: "row-span-2" };
}

function fmt(m: number) {
  if (m >= 1000) {
    const v = m / 1000;
    return `${v.toFixed(v < 10 ? 2 : 1).replace(/\.?0+$/, "")} bn`;
  }
  return `${m.toFixed(0)} m`;
}
