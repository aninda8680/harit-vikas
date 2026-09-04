import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// Only 400 (body text) and 700 (headings) are actually used in the design.
// Italic is used for decorative spans (e.g. "verifiable impact", "so should we").
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Harit Vikas — Climate is changing, so should we.",
  description:
    "Horizon Vikas Technologies (Harit Vikas) is a sustainability consultancy and technology company — combining IoT, cloud analytics, MRV, and community-first impact programs to drive measurable environmental change.",
  keywords: [
    "Harit Vikas",
    "Horizon Vikas Technologies",
    "sustainability",
    "IoT",
    "MRV",
    "climate tech",
    "sustainable farming",
    "Project Sayan",
    "India green tech",
  ],
  authors: [{ name: "Horizon Vikas Technologies" }],
  openGraph: {
    title: "Harit Vikas — Climate is changing, so should we.",
    description:
      "Sustainability consultancy and technology at the intersection of innovation and community development.",
    url: "https://www.harit-vikas.com",
    siteName: "Harit Vikas",
    type: "website",
    images: [
      {
        url: "https://www.harit-vikas.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Harit Vikas — Bridging IoT data and on-ground action",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} overflow-x-hidden`}
    >
      <body className="min-h-screen antialiased overflow-x-hidden" style={{ background: "var(--color-hv-cream)" }}>
        <LenisProvider />
        {children}
      </body>
    </html>
  );
}
