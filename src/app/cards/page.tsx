"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { facts, type Fact } from "@/data/facts";

const PALETTE = {
  bg: "#e8e3d4",
  card: "#fbf7ec",
  ink: "#1a1816",
  soft: "#65615b",
  rule: "#b6b1a6",
  accent: "#8b1e1e",
  red: "#a62a2a",
};

const TAG_COLOR: Record<string, string> = {
  MH17: "#a62a2a",
  Crimea: "#7a3a8a",
  Donbas: "#3a6a8a",
  Invasion: "#a64a25",
  Procedure: "#3e6939",
  Money: "#7a6a1f",
  Children: "#9a3a4a",
  Casualties: "#5a5a5a",
  Russia: "#1a1816",
};

export default function CardsPage() {
  const [filter, setFilter] = useState<string | null>(null);
  const [sortMode, setSortMode] = useState<"file" | "date" | "tag">("file");
  const [activeId, setActiveId] = useState<string | null>(null);

  const list = useMemo(() => {
    let l = [...facts];
    if (filter) l = l.filter((f) => f.tag === filter);
    if (sortMode === "date") {
      l.sort((a, b) => a.date.localeCompare(b.date));
    } else if (sortMode === "tag") {
      l.sort((a, b) => a.tag.localeCompare(b.tag));
    }
    return l;
  }, [filter, sortMode]);

  const tags = Array.from(new Set(facts.map((f) => f.tag)));

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: PALETTE.bg, color: PALETTE.ink }}
    >
      <header
        className="px-8 lg:px-14 pt-7 pb-5 flex items-baseline justify-between border-b sticky top-0 z-10"
        style={{ borderColor: PALETTE.rule, background: PALETTE.bg }}
      >
        <div className="flex items-baseline gap-8">
          <Link
            href="/"
            className="mono text-xs uppercase tracking-widest"
          >
            ← caseworks
          </Link>
          <p className="label" style={{ color: PALETTE.soft }}>
            Concept 12 · Index Cards
          </p>
        </div>
        <p
          className="mono text-[11px] hidden md:block"
          style={{ color: PALETTE.soft }}
        >
          {list.length} of {facts.length} cards
        </p>
      </header>

      <section className="px-8 lg:px-14 pt-12 pb-8 max-w-5xl">
        <h1 className="serif text-[clamp(2.6rem,5.5vw,5.5rem)] leading-[0.95] tracking-tight">
          Reorder the cards.
          <br />
          <span className="italic" style={{ color: PALETTE.soft }}>
            Make your own argument.
          </span>
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-relaxed">
          Every fact, every finding, every figure rendered as a single
          card. The cards are atomic — they don&rsquo;t need a paragraph
          around them. The default order is the order of filing. The
          reader builds the case.
        </p>
      </section>

      <section
        className="px-8 lg:px-14 py-4 border-y mono text-[11px] flex flex-wrap items-baseline gap-4"
        style={{ borderColor: PALETTE.rule, color: PALETTE.soft }}
      >
        <span className="uppercase tracking-widest">Sort:</span>
        {(["file", "date", "tag"] as const).map((m) => (
          <button
            key={m}
            onClick={() => setSortMode(m)}
            className="uppercase tracking-widest px-2 py-1 border"
            style={{
              borderColor:
                sortMode === m ? PALETTE.accent : PALETTE.rule,
              color: sortMode === m ? PALETTE.accent : PALETTE.ink,
            }}
          >
            {m === "file" ? "File order" : m}
          </button>
        ))}
        <span className="uppercase tracking-widest ml-6">Filter:</span>
        <button
          onClick={() => setFilter(null)}
          className="uppercase tracking-widest px-2 py-1 border"
          style={{
            borderColor: filter === null ? PALETTE.accent : PALETTE.rule,
            color: filter === null ? PALETTE.accent : PALETTE.ink,
          }}
        >
          all
        </button>
        {tags.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(filter === t ? null : t)}
            className="uppercase tracking-widest px-2 py-1 border"
            style={{
              borderColor: filter === t ? TAG_COLOR[t] : PALETTE.rule,
              color: filter === t ? TAG_COLOR[t] : PALETTE.ink,
            }}
          >
            {t}
          </button>
        ))}
      </section>

      <main className="flex-1 px-6 lg:px-12 pt-12 pb-24">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {list.map((f, i) => (
            <li key={f.id}>
              <Card
                f={f}
                idx={i}
                flipped={activeId === f.id}
                onClick={() =>
                  setActiveId(activeId === f.id ? null : f.id)
                }
              />
            </li>
          ))}
        </ul>
      </main>

      <footer
        className="px-8 lg:px-14 py-8 border-t mono text-[11px]"
        style={{ borderColor: PALETTE.rule, color: PALETTE.soft }}
      >
        Click a card to read its source. Cards are atomic — each
        reproduces a single fact, sourced.
      </footer>
    </div>
  );
}

function Card({
  f,
  idx,
  flipped,
  onClick,
}: {
  f: Fact;
  idx: number;
  flipped: boolean;
  onClick: () => void;
}) {
  // Slight rotation per card, deterministic by id
  const rot =
    (((hash(f.id) % 100) - 50) / 50) * 1.4 + (idx % 5 === 0 ? 0.2 : 0);

  const tagColor = TAG_COLOR[f.tag];

  return (
    <button
      type="button"
      onClick={onClick}
      className="block text-left w-full transition-transform"
      style={{
        transform: `rotate(${rot}deg) translateY(${
          (idx % 7) - 3
        }px)`,
      }}
    >
      <article
        className="border p-5 min-h-[200px] flex flex-col relative"
        style={{
          borderColor: PALETTE.rule,
          background: PALETTE.card,
          boxShadow: "0 1px 0 rgba(26,24,22,0.06)",
        }}
      >
        {/* hole-punch */}
        <span
          className="absolute"
          style={{
            top: 18,
            left: 18,
            width: 8,
            height: 8,
            borderRadius: 999,
            background: PALETTE.bg,
            boxShadow: `inset 0 0 0 1px ${PALETTE.rule}`,
          }}
        />
        {/* header rule */}
        <div className="flex items-baseline justify-between pb-2 mb-3 border-b ml-7" style={{ borderColor: PALETTE.rule }}>
          <p
            className="mono text-[10px] uppercase tracking-widest"
            style={{ color: tagColor }}
          >
            {f.tag}
          </p>
          <p
            className="mono text-[10px]"
            style={{ color: PALETTE.soft }}
          >
            #{String(idx + 1).padStart(3, "0")}
          </p>
        </div>

        {!flipped ? (
          <>
            <p
              className="serif text-base leading-snug"
              style={{ color: PALETTE.ink }}
            >
              {f.text}
            </p>
            <p
              className="mono text-[10px] mt-auto pt-4 italic"
              style={{ color: PALETTE.soft }}
            >
              {f.date}
            </p>
          </>
        ) : (
          <div className="space-y-3">
            <p className="mono text-[10px] uppercase tracking-widest" style={{ color: PALETTE.soft }}>
              Source
            </p>
            <p className="serif text-base italic" style={{ color: PALETTE.accent }}>
              {f.source}
            </p>
            <p className="mono text-[10px]" style={{ color: PALETTE.soft }}>
              filed under: {f.tag} · {f.date}
            </p>
            <p className="mono text-[10px] mt-auto pt-2" style={{ color: PALETTE.soft }}>
              click to flip back
            </p>
          </div>
        )}
      </article>
    </button>
  );
}

function hash(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}
