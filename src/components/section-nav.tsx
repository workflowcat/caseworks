"use client";

import Link from "next/link";
import { useState } from "react";
import { sections } from "@/data/sections";

export function SectionNav({ current }: { current?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Desktop: horizontal pills */}
      <nav
        aria-label="Sections"
        className="hidden md:flex items-baseline gap-1 mono text-[10px] uppercase tracking-widest"
      >
        {sections.map((s) => {
          const active = s.href === current;
          return (
            <Link
              key={s.href}
              href={s.href}
              className="px-1.5 py-1 transition-colors"
              style={{
                color: active ? "var(--accent)" : "var(--ink-soft)",
              }}
              title={s.title}
            >
              {s.no}
            </Link>
          );
        })}
      </nav>

      {/* Mobile: collapsible */}
      <div className="md:hidden relative">
        <button
          onClick={() => setOpen(!open)}
          className="mono text-[10px] uppercase tracking-widest text-ink-soft border border-rule px-2 py-1"
        >
          Sections {open ? "▴" : "▾"}
        </button>
        {open ? (
          <ul
            className="absolute right-0 top-full mt-1 z-50 bg-bg border border-rule min-w-[220px]"
          >
            {sections.map((s) => {
              const active = s.href === current;
              return (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-3 px-3 py-2 hover:bg-bg-2 mono text-[11px]"
                  >
                    <span
                      style={{
                        color: active ? "var(--accent)" : "var(--ink-soft)",
                      }}
                    >
                      {s.no}
                    </span>
                    <span className="serif normal-case tracking-normal text-sm">
                      {s.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
    </>
  );
}
