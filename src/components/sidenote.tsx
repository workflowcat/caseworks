"use client";

import { useState, type ReactNode } from "react";

let counter = 0;
function nextId() {
  counter += 1;
  return `sn-${counter}`;
}

// A Tufte-style sidenote.
// Desktop: floats into the right margin of a 12-col grid (offset col-span-3
// with negative right margin). Mobile: collapses into an inline disclosure
// that the reader expands.
//
// Use inside a paragraph: <Sidenote n="1">aside text</Sidenote>
// The numeric marker shows in-flow. The aside renders to the right.

export function Sidenote({
  n,
  children,
}: {
  n?: number | string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const num = n ?? "•";

  return (
    <span className="relative">
      {/* In-flow marker */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="align-super mono text-[10px] text-accent ml-0.5 px-0.5 hover:underline"
        aria-expanded={open}
        title="Show sidenote"
      >
        {num}
      </button>
      {/* Desktop: float right into margin */}
      <span
        className="hidden lg:block absolute top-0 left-full ml-8 w-[260px] mono text-[11px] leading-snug text-ink-soft serif normal-case tracking-normal italic border-l border-rule pl-3"
        aria-hidden={!open && false}
      >
        <span className="not-italic mono text-[10px] text-accent">
          {num}
        </span>{" "}
        {children}
      </span>
      {/* Mobile: collapsible inline */}
      {open ? (
        <span className="lg:hidden block mt-1 mb-1 px-3 py-2 border-l-2 border-accent serif italic text-[13px] leading-snug text-ink-soft">
          <span className="mono not-italic text-[10px] text-accent">
            {num}
          </span>{" "}
          {children}
        </span>
      ) : null}
    </span>
  );
}
