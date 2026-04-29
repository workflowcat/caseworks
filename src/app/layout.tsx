import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Spectral } from "next/font/google";
import "./globals.css";
import { CommandPalette } from "@/components/command-palette";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jbm = JetBrains_Mono({
  variable: "--font-jbm",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s · A Reader",
    default:
      "Ukraine and the Netherlands v. Russia — A Reader (App. no. 28525/20)",
  },
  description:
    "A research reader on the European Court of Human Rights inter-state proceeding concerning the downing of MH17. Primary sources, quotations, judgment paragraphs, glossary, bibliography.",
  metadataBase: new URL("https://caseworks-blue.vercel.app"),
  openGraph: {
    type: "website",
    siteName: "A Reader",
    title:
      "Ukraine and the Netherlands v. Russia — A Reader",
    description:
      "Research reader on the ECHR inter-state proceeding concerning MH17. Primary sources, quotations, judgment paragraphs, glossary.",
    url: "https://caseworks-blue.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Ukraine and the Netherlands v. Russia — A Reader",
    description:
      "Research reader on the ECHR inter-state proceeding concerning MH17.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spectral.variable} ${jbm.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        {children}
        <CommandPalette />
      </body>
    </html>
  );
}
