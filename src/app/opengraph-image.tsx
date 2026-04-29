import { ImageResponse } from "next/og";
import { ogElement, size, contentType } from "@/lib/og";

export const alt =
  "Ukraine and the Netherlands v. Russia — A Reader (App. no. 28525/20)";
export { size, contentType };

export default function OG() {
  return new ImageResponse(
    ogElement({
      no: "—",
      title: "Ukraine and the Netherlands v. Russia",
      deck: "A research reader on the inter-state proceeding concerning the downing of MH17, 17 July 2014.",
    }),
    size,
  );
}
