"use client";

import { useState, type ReactNode } from "react";

// Lightweight popover that opens on hover and on focus.
// Anchored to the trigger; positions above by default and flips down if
// the trigger is in the top quarter of the viewport.

export function HoverPreview({
  trigger,
  title,
  body,
  meta,
}: {
  trigger: ReactNode;
  title: string;
  body: string;
  meta?: string;
}) {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState<"above" | "below">("above");

  const handleEnter = (e: React.MouseEvent | React.FocusEvent) => {
    const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setPosition(r.top < 220 ? "below" : "above");
    setOpen(true);
  };

  return (
    <span
      className="relative inline-block"
      onMouseEnter={handleEnter}
      onMouseLeave={() => setOpen(false)}
      onFocus={handleEnter}
      onBlur={() => setOpen(false)}
    >
      {trigger}
      {open ? (
        <span
          role="tooltip"
          className="absolute z-40 left-0 w-[min(360px,80vw)] border border-rule bg-bg shadow-md"
          style={{
            [position === "above" ? "bottom" : "top"]: "calc(100% + 6px)",
          }}
        >
          <span className="block px-3 py-2 border-b border-rule mono text-[10px] uppercase tracking-widest text-accent">
            {title}
          </span>
          <span className="block px-3 py-2 serif text-[13px] leading-snug text-ink whitespace-normal">
            {body}
          </span>
          {meta ? (
            <span className="block px-3 py-2 border-t border-rule mono text-[10px] text-ink-soft">
              {meta}
            </span>
          ) : null}
        </span>
      ) : null}
    </span>
  );
}
