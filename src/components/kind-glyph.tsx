// Small SVG glyphs for the conflict-timeline kinds. Diagrammatic, not
// illustrative. ~16×16 px, drawn in the current text colour.

import type { ConflictEvent } from "@/data/conflict-timeline";

const SIZE = 18;

export function KindGlyph({
  kind,
  color = "currentColor",
}: {
  kind: ConflictEvent["kind"];
  color?: string;
}) {
  return (
    <svg
      width={SIZE}
      height={SIZE}
      viewBox="0 0 18 18"
      style={{ display: "inline-block", color }}
      aria-hidden
    >
      {kind === "annexation" ? (
        // flag-pole
        <g stroke="currentColor" strokeWidth="1.2" fill="none">
          <line x1="3" y1="2" x2="3" y2="16" />
          <path d="M 3 3 L 14 3 L 11 6.5 L 14 10 L 3 10" fill="currentColor" />
        </g>
      ) : kind === "incident" ? (
        // explosion / star
        <g stroke="currentColor" strokeWidth="1.2" fill="none">
          <path d="M 9 2 L 10 7 L 16 7 L 11 10 L 13 16 L 9 12 L 5 16 L 7 10 L 2 7 L 8 7 Z" />
        </g>
      ) : kind === "siege" ? (
        // crosshair / encircled
        <g stroke="currentColor" strokeWidth="1.2" fill="none">
          <circle cx="9" cy="9" r="5.5" />
          <circle cx="9" cy="9" r="1.5" fill="currentColor" />
          <line x1="9" y1="0.5" x2="9" y2="3" />
          <line x1="9" y1="15" x2="9" y2="17.5" />
          <line x1="0.5" y1="9" x2="3" y2="9" />
          <line x1="15" y1="9" x2="17.5" y2="9" />
        </g>
      ) : kind === "deportation" ? (
        // arrow across border
        <g stroke="currentColor" strokeWidth="1.2" fill="none">
          <line x1="9" y1="3" x2="9" y2="15" strokeDasharray="2,2" />
          <path d="M 1 9 L 14 9 L 11 6 M 14 9 L 11 12" />
        </g>
      ) : kind === "downing" ? (
        // descending plane
        <g stroke="currentColor" strokeWidth="1.2" fill="none">
          <path d="M 3 14 L 16 4" />
          <path d="M 14 4 L 16 4 L 16 6" />
          <polygon
            points="9,9 11,8.2 9.4,9.4 11.5,10"
            fill="currentColor"
          />
        </g>
      ) : kind === "council" ? (
        // gavel
        <g stroke="currentColor" strokeWidth="1.2" fill="none">
          <line x1="3" y1="14" x2="14" y2="14" />
          <rect x="5" y="3" width="8" height="3" />
          <line x1="9" y1="6" x2="9" y2="13" />
        </g>
      ) : kind === "monitoring" ? (
        // pencil / clipboard
        <g stroke="currentColor" strokeWidth="1.2" fill="none">
          <rect x="4" y="3" width="10" height="13" />
          <line x1="6" y1="6" x2="12" y2="6" />
          <line x1="6" y1="9" x2="12" y2="9" />
          <line x1="6" y1="12" x2="10" y2="12" />
        </g>
      ) : null}
    </svg>
  );
}
