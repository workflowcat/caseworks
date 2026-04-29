"use client";

import { useEffect, useState } from "react";

type Item = { id: string; number: string; heading: string };

export function SectionRail({ items }: { items: Item[] }) {
  const [activeId, setActiveId] = useState<string | null>(items[0]?.id ?? null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const sections = items
      .map((it) => document.getElementById(it.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (sections.length === 0) return;

    let visible = new Set<string>();
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.add(e.target.id);
          else visible.delete(e.target.id);
        }
        // Pick the topmost visible
        const ordered = items.map((i) => i.id).filter((id) => visible.has(id));
        if (ordered[0]) setActiveId(ordered[0]);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    for (const s of sections) obs.observe(s);
    observers.push(obs);
    return () => {
      for (const o of observers) o.disconnect();
    };
  }, [items]);

  return (
    <nav
      aria-label="Section rail"
      className="hidden xl:block sticky top-24 self-start"
    >
      <ol className="space-y-1 border-l border-rule pl-3">
        {items.map((it) => {
          const active = activeId === it.id;
          return (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                className="flex items-baseline gap-2 py-1 text-[12px] leading-tight transition-colors"
                style={{
                  color: active ? "var(--accent)" : "var(--ink-soft)",
                }}
              >
                <span
                  className="mono text-[10px]"
                  style={{
                    color: active ? "var(--accent)" : "var(--ink-soft)",
                  }}
                >
                  {it.number}
                </span>
                <span
                  className="serif"
                  style={{
                    color: active ? "var(--ink)" : "var(--ink-soft)",
                  }}
                >
                  {it.heading}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
