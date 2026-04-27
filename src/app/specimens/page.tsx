"use client";

import { useState } from "react";
import Link from "next/link";
import { cases as allCases } from "@/data/types";
import { Specimen } from "@/components/specimen";
import { CasePanel } from "@/components/case-panel";

const SPECIMEN_W = 244;
const SPECIMEN_H = 320;

export default function SpecimensPage() {
  const [activeId, setActiveId] = useState<string | null>(null);

  // Sort by category then date so similar specimens cluster on the plate
  const sorted = [...allCases].sort((a, b) => {
    if (a.category !== b.category) return a.category.localeCompare(b.category);
    return (a.decided ?? a.filed).localeCompare(b.decided ?? b.filed);
  });

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "#f3eee2", color: "#1a1816" }}
    >
      <header
        className="px-8 lg:px-14 pt-8 pb-5 flex items-baseline justify-between border-b"
        style={{ borderColor: "#cdc9c0" }}
      >
        <div className="flex items-baseline gap-8">
          <Link
            href="/"
            className="mono text-xs uppercase tracking-widest"
            style={{ color: "#1a1816" }}
          >
            ← caseworks
          </Link>
          <p className="label" style={{ color: "#65615b" }}>
            Concept 06 · Specimens
          </p>
        </div>
        <p
          className="mono text-[11px] hidden md:block"
          style={{ color: "#65615b" }}
        >
          {allCases.length} specimens · pinned by category
        </p>
      </header>

      <section className="px-8 lg:px-14 pt-16 pb-10 max-w-6xl">
        <p
          className="serif italic text-sm mb-6"
          style={{ color: "#65615b" }}
        >
          Plate&nbsp;I — Codex of the Ukraine–Russia Legal Landscape
        </p>
        <h1
          className="serif text-[clamp(3rem,6vw,5.5rem)] leading-[0.95] tracking-tight"
        >
          A drawer of specimens.
        </h1>
        <p
          className="serif italic text-2xl mt-4"
          style={{ color: "#65615b" }}
        >
          Each case rendered as a small plant.
        </p>
        <p className="mt-10 max-w-2xl text-base leading-relaxed">
          Stem height encodes case duration. Petal count encodes the number
          of factual findings. Bloom size scales with money damages where
          they apply. Roots appear when a case is still open. Leaves count
          a case&rsquo;s connections to its siblings. Colour follows
          category. Specimens are pinned in order of category, then by
          date.
        </p>
      </section>

      <main
        className="px-6 lg:px-10 pb-20"
        style={{ background: "#f3eee2" }}
      >
        <div
          className="border-t border-b"
          style={{ borderColor: "#cdc9c0" }}
        >
          <div
            className="grid"
            style={{
              gridTemplateColumns: `repeat(auto-fill, minmax(${SPECIMEN_W}px, 1fr))`,
              gap: 0,
            }}
          >
            {sorted.map((c) => (
              <div
                key={c.id}
                className="border-r border-b"
                style={{
                  borderColor: "#cdc9c0",
                  padding: "12px 8px 0 8px",
                }}
              >
                <Specimen
                  c={c}
                  w={SPECIMEN_W}
                  h={SPECIMEN_H}
                  onClick={() => setActiveId(c.id)}
                />
              </div>
            ))}
          </div>
        </div>

        <Legend />
      </main>

      <footer
        className="px-8 lg:px-14 py-6 border-t mono text-[11px]"
        style={{ borderColor: "#cdc9c0", color: "#65615b" }}
      >
        Click any specimen to read its description. Drawn live in SVG, no
        two specimens identical.
      </footer>

      <CasePanel
        caseId={activeId}
        onClose={() => setActiveId(null)}
        variant="light"
      />
    </div>
  );
}

function Legend() {
  const items: Array<{ label: string; color: string }> = [
    { label: "State responsibility", color: "#8b1e1e" },
    { label: "Individual criminal", color: "#a64a25" },
    { label: "Property & commerce", color: "#3e6939" },
    { label: "Maritime & territory", color: "#2a4a7a" },
    { label: "Reparations & enforcement", color: "#5a3a6e" },
  ];
  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 max-w-3xl">
      <div>
        <p
          className="label mb-3"
          style={{ color: "#65615b" }}
        >
          Encoding
        </p>
        <ul className="space-y-1.5 text-[12px] leading-snug">
          <li className="flex gap-3">
            <span className="mono text-[10px] w-20" style={{ color: "#65615b" }}>
              STEM
            </span>
            <span>Case duration, filing to decision</span>
          </li>
          <li className="flex gap-3">
            <span className="mono text-[10px] w-20" style={{ color: "#65615b" }}>
              PETALS
            </span>
            <span>Number of distinct findings</span>
          </li>
          <li className="flex gap-3">
            <span className="mono text-[10px] w-20" style={{ color: "#65615b" }}>
              BLOOM
            </span>
            <span>Award magnitude, log-scaled</span>
          </li>
          <li className="flex gap-3">
            <span className="mono text-[10px] w-20" style={{ color: "#65615b" }}>
              LEAVES
            </span>
            <span>Cross-references to other cases</span>
          </li>
          <li className="flex gap-3">
            <span className="mono text-[10px] w-20" style={{ color: "#65615b" }}>
              ROOTS
            </span>
            <span>Visible while a case is still pending</span>
          </li>
          <li className="flex gap-3">
            <span className="mono text-[10px] w-20" style={{ color: "#65615b" }}>
              SEEDS
            </span>
            <span>Award size, scattered around the bloom</span>
          </li>
        </ul>
      </div>
      <div>
        <p
          className="label mb-3"
          style={{ color: "#65615b" }}
        >
          Categories
        </p>
        <ul className="space-y-1.5 text-[12px]">
          {items.map((it) => (
            <li key={it.label} className="flex items-center gap-3">
              <span
                className="inline-block w-3 h-3 rounded-full"
                style={{ background: it.color }}
              />
              {it.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
