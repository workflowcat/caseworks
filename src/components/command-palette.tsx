"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { sections } from "@/data/sections";
import { terms } from "@/data/glossary";
import { sources } from "@/data/sources";
import { reading } from "@/data/reading";
import { quotes } from "@/data/quotes";
import { facts } from "@/data/facts";

type Item = {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  group: "Section" | "Glossary" | "Source" | "Reading" | "Quote" | "Fact";
};

function buildIndex(): Item[] {
  const items: Item[] = [];
  for (const s of sections) {
    items.push({
      id: `s-${s.href}`,
      title: `${s.no} · ${s.title}`,
      subtitle: s.one,
      href: s.href,
      group: "Section",
    });
  }
  for (const t of terms) {
    items.push({
      id: `t-${t.id}`,
      title: t.term,
      subtitle: t.body.slice(0, 110) + (t.body.length > 110 ? "…" : ""),
      href: `/glossary#${t.id}`,
      group: "Glossary",
    });
  }
  for (const s of sources) {
    items.push({
      id: `src-${s.id}`,
      title: s.title,
      subtitle: `${s.publication ?? ""} · ${s.date}`,
      href: s.url ?? "/sources",
      group: "Source",
    });
  }
  for (const r of reading.slice(0, 30)) {
    items.push({
      id: `r-${r.id}`,
      title: r.title,
      subtitle: `${r.authors ?? r.publication} · ${r.date}`,
      href: r.url,
      group: "Reading",
    });
  }
  for (const q of quotes.slice(0, 60)) {
    items.push({
      id: `q-${q.id}`,
      title: `"${q.text.slice(0, 90)}${q.text.length > 90 ? "…" : ""}"`,
      subtitle: q.attribution,
      href: `/quotations#q-${q.id}`,
      group: "Quote",
    });
  }
  for (const f of facts) {
    items.push({
      id: `f-${f.id}`,
      title: f.text.slice(0, 110) + (f.text.length > 110 ? "…" : ""),
      subtitle: `${f.tag} · ${f.date} · ${f.source}`,
      href: `/facts#f-${f.id}`,
      group: "Fact",
    });
  }
  return items;
}

const GROUP_TINT: Record<Item["group"], string> = {
  Section: "var(--accent)",
  Glossary: "var(--ink-soft)",
  Source: "var(--ink-soft)",
  Reading: "var(--ink-soft)",
  Quote: "var(--ink-soft)",
  Fact: "var(--ink-soft)",
};

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLOListElement>(null);

  const index = useMemo(buildIndex, []);

  const results = useMemo(() => {
    if (!query.trim()) {
      return index.filter((i) => i.group === "Section").slice(0, 50);
    }
    const needle = query.toLowerCase();
    return index
      .filter(
        (i) =>
          i.title.toLowerCase().includes(needle) ||
          i.subtitle.toLowerCase().includes(needle),
      )
      .slice(0, 80);
  }, [query, index]);

  useEffect(() => {
    setActive(0);
  }, [query, open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const meta = e.metaKey || e.ctrlKey;
      if (meta && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
        return;
      }
      if (!open) return;
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setActive((a) => Math.min(a + 1, results.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActive((a) => Math.max(a - 1, 0));
      } else if (e.key === "Enter") {
        const item = results[active];
        if (item) {
          window.location.href = item.href;
        }
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, results, active]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 30);
    }
  }, [open]);

  useEffect(() => {
    if (!listRef.current) return;
    const el = listRef.current.querySelector<HTMLElement>(
      `[data-idx="${active}"]`,
    );
    el?.scrollIntoView({ block: "nearest" });
  }, [active]);

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-4 right-4 z-50 mono text-[10px] uppercase tracking-widest border border-rule bg-bg px-3 py-2 hover:border-accent hover:text-accent transition-colors"
        title="Open command palette (⌘K)"
      >
        ⌘K · search
      </button>
    );
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4"
      onClick={() => setOpen(false)}
    >
      <div className="absolute inset-0 bg-black/35" aria-hidden />
      <div
        className="relative w-full max-w-2xl bg-bg border border-rule shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border-b border-rule px-4 py-3 flex items-center gap-3">
          <span className="mono text-[11px] uppercase tracking-widest text-ink-soft">
            ⌘K
          </span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Section, term, source, quote, fact…"
            className="flex-1 bg-transparent outline-none text-base"
          />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="mono text-[10px] uppercase tracking-widest text-ink-soft hover:text-accent"
          >
            esc
          </button>
        </div>
        <ol
          ref={listRef}
          className="max-h-[60vh] overflow-y-auto"
        >
          {results.length === 0 ? (
            <li className="px-4 py-6 text-sm text-ink-soft">
              No matches.
            </li>
          ) : (
            results.map((item, i) => {
              const isActive = i === active;
              return (
                <li
                  key={item.id}
                  data-idx={i}
                  className="border-b border-rule"
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="grid grid-cols-12 gap-3 px-4 py-3 transition-colors"
                    style={{
                      background: isActive ? "var(--bg-2)" : "transparent",
                    }}
                  >
                    <span
                      className="col-span-12 md:col-span-2 mono text-[10px] uppercase tracking-widest pt-1"
                      style={{ color: GROUP_TINT[item.group] }}
                    >
                      {item.group}
                    </span>
                    <div className="col-span-12 md:col-span-10">
                      <p className="serif text-sm leading-tight">
                        {item.title}
                      </p>
                      <p className="text-xs text-ink-soft mt-1">
                        {item.subtitle}
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })
          )}
        </ol>
        <div className="border-t border-rule px-4 py-2 mono text-[10px] uppercase tracking-widest text-ink-soft flex justify-between">
          <span>↑ ↓ navigate · ↵ open · esc close</span>
          <span>{results.length} results</span>
        </div>
      </div>
    </div>
  );
}
