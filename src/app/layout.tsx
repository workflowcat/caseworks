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
  title:
    "Ukraine and the Netherlands v. Russia — A Reader (App. no. 28525/20)",
  description:
    "A research resource on the European Court of Human Rights inter-state proceeding concerning the downing of MH17 — primary sources, quotations, glossary, bibliography.",
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
