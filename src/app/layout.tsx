import type { Metadata } from "next";
import { Geist, Fraunces, Caveat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://testloop.app"),
  title: "Testloop — Pattern testing for knit & crochet designers",
  description:
    "Gather your pattern testers with one link, watch every project grow, share corrections in a single click, and keep every note and finished photo together.",
  openGraph: {
    title: "Testloop — Pattern testing for knit & crochet designers",
    description:
      "Gather your pattern testers with one link, watch every project grow, share corrections in a single click, and keep every note and finished photo together.",
    url: "https://testloop.app",
    siteName: "Testloop",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Testloop — Pattern testing for knit & crochet designers",
    description:
      "Gather your pattern testers with one link, watch every project grow, share corrections in a single click, and keep every note and finished photo together.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${fraunces.variable} ${caveat.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
