"use client";

import { useState } from "react";

export function CopyButton({
  text,
  label = "Copy citation",
  className = "",
}: {
  text: string;
  label?: string;
  className?: string;
}) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      className={`mono text-[10px] uppercase tracking-widest underline decoration-1 underline-offset-2 hover:text-accent transition-colors ${className}`}
      onClick={async (e) => {
        e.preventDefault();
        e.stopPropagation();
        try {
          await navigator.clipboard.writeText(text);
          setDone(true);
          setTimeout(() => setDone(false), 1400);
        } catch {
          /* swallow */
        }
      }}
    >
      {done ? "Copied" : label}
    </button>
  );
}
