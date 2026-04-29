// Compact strip showing the status of MH17 across the five forums.

const FORUMS = [
  { id: "echr", label: "ECHR (28525/20)", status: "decided", date: "9 Jul 2025" },
  { id: "echr-jus", label: "ECHR · just satisfaction", status: "pending", date: "—" },
  { id: "hague", label: "Hague Crim.", status: "decided", date: "17 Nov 2022" },
  { id: "icao", label: "ICAO Council", status: "decided", date: "12 May 2025" },
  { id: "icj", label: "ICJ (Russia v. NL/AU)", status: "pending", date: "Filed Sep 2025" },
  { id: "ind", label: "ECHR · individual apps", status: "pending", date: "—" },
] as const;

export function ForumStatusStrip() {
  return (
    <div className="border border-rule bg-bg">
      <p className="px-4 py-2 mono text-[10px] uppercase tracking-widest text-ink-soft border-b border-rule">
        MH17 across the forums
      </p>
      <ol className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-y md:divide-y-0 divide-rule">
        {FORUMS.map((f) => {
          const decided = f.status === "decided";
          return (
            <li
              key={f.id}
              className="px-4 py-4 flex flex-col gap-2"
            >
              <span
                className="inline-flex items-center gap-2 mono text-[10px] uppercase tracking-widest"
                style={{
                  color: decided
                    ? "var(--accent)"
                    : "var(--ink-soft)",
                }}
              >
                <span
                  className="inline-block w-2 h-2"
                  style={{
                    background: decided
                      ? "var(--accent)"
                      : "transparent",
                    border: `1px solid ${decided ? "var(--accent)" : "var(--ink-soft)"}`,
                  }}
                />
                {decided ? "Decided" : "Pending"}
              </span>
              <p className="serif text-sm leading-tight">{f.label}</p>
              <p className="mono text-[11px] text-ink-soft">{f.date}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
