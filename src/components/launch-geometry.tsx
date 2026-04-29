// Vector reconstruction of the MH17 launch geometry.
// Diagrammatic, not to scale.

export function LaunchGeometry() {
  return (
    <figure className="border border-rule p-4 lg:p-6 bg-bg">
      <svg
        viewBox="0 0 1000 360"
        className="w-full h-auto block"
        role="img"
        aria-label="Diagram of the MH17 launch geometry"
      >
        {/* horizon line */}
        <line
          x1="40"
          x2="960"
          y1="280"
          y2="280"
          stroke="var(--rule)"
          strokeWidth="1"
        />
        <text
          x="40"
          y="298"
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--ink-soft)"
        >
          ground · eastern Donetsk Oblast
        </text>

        {/* altitude markers */}
        {[80, 140, 200, 260].map((y, i) => (
          <g key={y}>
            <line
              x1="40"
              x2="60"
              y1={y}
              y2={y}
              stroke="var(--rule)"
              strokeWidth="0.6"
            />
            <text
              x="14"
              y={y + 3}
              fontSize="9"
              fontFamily="var(--font-mono)"
              fill="var(--ink-soft)"
            >
              {[33000, 25000, 17000, 9000][i]} ft
            </text>
          </g>
        ))}

        {/* MH17 path */}
        <line
          x1="60"
          x2="940"
          y1="80"
          y2="80"
          stroke="var(--ink)"
          strokeWidth="0.8"
          strokeDasharray="3,3"
        />
        <text
          x="70"
          y="74"
          fontFamily="var(--font-mono)"
          fontSize="11"
          fill="var(--ink)"
        >
          MH17 — AMS → KUL · cruise 33,000 ft · 12:31 UTC
        </text>

        {/* aircraft glyph */}
        <polygon
          points="540,76 558,80 540,84 545,80"
          fill="var(--ink)"
        />

        {/* impact point */}
        <circle
          cx="546"
          cy="80"
          r="8"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.5"
        />
        <text
          x="558"
          y="64"
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--accent)"
        >
          impact 13:20 UTC
        </text>

        {/* missile arc */}
        <path
          d="M 460 280 Q 503 100 546 80"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.2"
          strokeDasharray="4,3"
        />

        {/* launch point */}
        <circle cx="460" cy="280" r="3" fill="var(--accent)" />
        <line
          x1="460"
          x2="460"
          y1="280"
          y2="320"
          stroke="var(--accent)"
          strokeWidth="0.6"
        />
        <text
          x="460"
          y="338"
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--accent)"
          textAnchor="middle"
        >
          Pervomaiskyi · launch
        </text>

        {/* angle arc */}
        <path
          d="M 478 280 A 18 18 0 0 0 470 264"
          fill="none"
          stroke="var(--ink-soft)"
          strokeWidth="0.8"
        />
        <text
          x="495"
          y="270"
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="var(--ink-soft)"
        >
          ~80°
        </text>

        {/* crash site */}
        <line
          x1="592"
          x2="592"
          y1="80"
          y2="280"
          stroke="var(--ink)"
          strokeWidth="0.4"
          strokeDasharray="1,3"
          opacity="0.5"
        />
        <text
          x="592"
          y="298"
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--ink-soft)"
          textAnchor="middle"
        >
          crash site · Hrabove
        </text>
        <text
          x="592"
          y="312"
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="var(--ink-soft)"
          textAnchor="middle"
        >
          ~10 km from launch
        </text>
      </svg>
      <figcaption className="mt-3 mono text-[11px] text-ink-soft">
        Diagrammatic, not to scale. Geometry per JIT public reports
        accepted by the District Court of The Hague (17 Nov 2022) and
        the Grand Chamber (9 July 2025).
      </figcaption>
    </figure>
  );
}
