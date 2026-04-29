import { ImageResponse } from "next/og";
import { ogElement, size, contentType } from "@/lib/og";
import { sections } from "@/data/sections";

export const alt = "VIII · Conflict timeline · A Reader";
export { size, contentType };

export default function OG() {
  const s = sections.find((x) => x.href === "/timeline");
  if (!s) return new ImageResponse(<div />, size);
  return new ImageResponse(
    ogElement({ no: s.no, title: s.title, deck: s.one }),
    size,
  );
}
