"use client";

import { useEffect } from "react";
import {
  cases as allCases,
  forums,
  categoryLabels,
  type LandscapeCase,
} from "@/data/types";

type Props = {
  caseId: string | null;
  onClose: () => void;
  variant?: "light" | "dark" | "film";
};

export function CasePanel({ caseId, onClose, variant = "light" }: Props) {
  const c = caseId ? allCases.find((x) => x.id === caseId) : null;
  const f = c ? forums.find((f) => f.id === c.forum) : null;

  useEffect(() => {
    if (!c) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [c, onClose]);

  if (!c) return null;

  const palette =
    variant === "dark"
      ? {
          bg: "var(--grid-bg)",
          fg: "var(--grid-fg)",
          soft: "var(--grid-soft)",
          rule: "var(--grid-line)",
          accent: "var(--grid-accent)",
        }
      : variant === "film"
        ? {
            bg: "var(--film-bg)",
            fg: "var(--film-fg)",
            soft: "var(--film-soft)",
            rule: "var(--film-rule)",
            accent: "var(--film-accent)",
          }
        : {
            bg: "var(--sky-bg)",
            fg: "var(--sky-ink)",
            soft: "var(--sky-soft)",
            rule: "var(--sky-rule)",
            accent: "var(--sky-accent)",
          };

  return (
    <div
      className="fixed inset-0 z-50 flex items-stretch justify-end"
      onClick={onClose}
    >
      <div
        className="absolute inset-0 bg-black/55 backdrop-blur-[2px]"
        aria-hidden
      />
      <aside
        className="relative w-full max-w-[640px] h-full overflow-y-auto px-8 lg:px-12 py-10"
        style={{ background: palette.bg, color: palette.fg }}
        onClick={(e) => e.stopPropagation()}
      >
        <header
          className="flex items-baseline justify-between border-b pb-4"
          style={{ borderColor: palette.rule }}
        >
          <p className="label" style={{ color: palette.soft }}>
            {f?.short} · {f?.city}
          </p>
          <button
            className="mono text-xs underline"
            onClick={onClose}
            style={{ color: palette.accent }}
          >
            Close (Esc)
          </button>
        </header>

        <p className="mono text-xs mt-6" style={{ color: palette.accent }}>
          {(c.decidedDisplay || c.filedDisplay).toUpperCase()}
        </p>
        <h2 className="serif text-3xl lg:text-4xl tracking-tight leading-tight mt-3">
          {c.title}
        </h2>
        <p className="mono text-xs mt-3" style={{ color: palette.soft }}>
          {c.parties}
          {c.citation ? ` · ${c.citation}` : ""}
        </p>

        <p
          className="mt-6 text-base leading-relaxed border-l-2 pl-4"
          style={{ borderColor: palette.accent }}
        >
          {c.outcome}
        </p>

        <p className="mt-8 text-base leading-relaxed">{c.abstract}</p>

        <ul className="mt-8 space-y-3">
          {c.detail.map((d, i) => (
            <li
              key={i}
              className="flex gap-3 pb-3 border-b text-sm leading-relaxed"
              style={{ borderColor: palette.rule }}
            >
              <span
                className="mono text-[11px] pt-0.5 shrink-0"
                style={{ color: palette.soft }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <p>{d}</p>
            </li>
          ))}
        </ul>

        {c.awardUsdM ? (
          <div
            className="mt-8 p-5 border"
            style={{ borderColor: palette.rule }}
          >
            <p className="label" style={{ color: palette.soft }}>
              Award
            </p>
            <p className="serif text-3xl tracking-tight mt-2">
              ${formatM(c.awardUsdM)}
            </p>
            {c.enforcementNote ? (
              <p
                className="mono text-[11px] mt-3 leading-relaxed"
                style={{ color: palette.soft }}
              >
                {c.enforcementNote}
              </p>
            ) : null}
          </div>
        ) : null}

        <div
          className="mt-10 pt-5 border-t flex items-baseline justify-between"
          style={{ borderColor: palette.rule }}
        >
          <p className="label" style={{ color: palette.soft }}>
            {categoryLabels[c.category]}
          </p>
          <a
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mono text-xs underline"
            style={{ color: palette.accent }}
          >
            Primary source ↗
          </a>
        </div>
      </aside>
    </div>
  );
}

function formatM(m: number) {
  if (m >= 1000) {
    const v = m / 1000;
    return `${v.toFixed(v < 10 ? 2 : 1).replace(/\.?0+$/, "")} bn`;
  }
  return `${m.toFixed(1).replace(/\.0$/, "")} m`;
}
