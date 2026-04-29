// Minimal layout for embeddable routes — no header, no footer, no command
// palette. The root layout's font + globals stay.
export default function EmbedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="bg-bg text-ink min-h-screen">{children}</div>;
}
