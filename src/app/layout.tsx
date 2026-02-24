import type { Metadata, Viewport } from "next";
import { Lexend } from "next/font/google";
import Analytics from "@/components/Analytics";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  title: "Emanuel Covasa — EMMI",
  description:
    "Engaging Minds, Merging Ideas. Cybersecurity student, full-stack developer, NeuroBridgeEDU founder, EU-Green Ambassador.",
  keywords: [
    "Emanuel Covasa",
    "EMMI",
    "cybersecurity",
    "full-stack developer",
    "NeuroBridgeEDU",
    "AI",
    "EU-Green",
    "ATU Sligo",
  ],
  authors: [{ name: "Emanuel Covasa" }],
  creator: "Emanuel Covasa",
  metadataBase: new URL("https://emmi.engineer"),
  openGraph: {
    title: "Emanuel Covasa — EMMI",
    description:
      "Engaging Minds, Merging Ideas. Connect with Emanuel across the web.",
    type: "website",
    locale: "en_US",
    siteName: "EMMI",
    url: "https://emmi.engineer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emanuel Covasa — EMMI",
    description: "Engaging Minds, Merging Ideas",
    creator: "@deep_endX",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0a0f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={lexend.variable}>
      <body className={`${lexend.className} antialiased min-h-screen`}>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
