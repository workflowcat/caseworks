import { resolveSourceUrl, splitSource } from "@/data/source-urls";

export function SourceLink({
  source,
  className = "",
}: {
  source: string;
  className?: string;
}) {
  const url = resolveSourceUrl(source);
  if (!url) {
    return <span className={className}>{source}</span>;
  }
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`underline decoration-1 underline-offset-2 hover:text-accent ${className}`}
      title={`Open ${url}`}
    >
      {source}
    </a>
  );
}

// Renders a source string that may contain multiple sources separated by ';'
// — each part wrapped individually if a URL is known.
export function SourceLine({
  source,
  className = "",
}: {
  source: string;
  className?: string;
}) {
  const parts = splitSource(source);
  if (parts.length === 1) {
    return <SourceLink source={parts[0]} className={className} />;
  }
  return (
    <span className={className}>
      {parts.map((p, i) => (
        <span key={i}>
          {i > 0 ? "; " : ""}
          <SourceLink source={p} />
        </span>
      ))}
    </span>
  );
}
