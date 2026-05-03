import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import Analytics from "@/components/Analytics";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

const SITE_URL = "https://emmi.engineer";
const SITE_NAME = "Emanuel Covasa — EMMI";
const SITE_DESCRIPTION =
  "Engaging Minds, Merging Ideas. Cybersecurity student, full-stack developer, NeuroBridgeEDU founder, EU-Green Ambassador, and AI innovator.";

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: "%s | EMMI",
  },
  description: SITE_DESCRIPTION,
  authors: [{ name: "Emanuel Covasa", url: SITE_URL }],
  creator: "Emanuel Covasa",
  publisher: "Emanuel Covasa",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    type: "website",
    locale: "en_US",
    siteName: "EMMI",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    creator: "@deep_endX",
    site: "@deep_endX",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.webmanifest",
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0c0c12" },
    { media: "(prefers-color-scheme: light)", color: "#0c0c12" },
  ],
};

function JsonLd() {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "EMMI",
      url: SITE_URL,
      description: SITE_DESCRIPTION,
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profilepage`,
      name: SITE_NAME,
      url: SITE_URL,
      mainEntity: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Emanuel Covasa",
      alternateName: "EMMI",
      url: SITE_URL,
      image: `${SITE_URL}/opengraph-image`,
      description: SITE_DESCRIPTION,
      jobTitle: [
        "Cybersecurity Student",
        "Full-Stack Developer",
        "NeuroBridgeEDU Founder",
        "EU-Green Ambassador",
      ],
      sameAs: [
        "https://emmi.zone",
        "https://www.linkedin.com/in/emmic/",
        "https://github.com/EmminiX",
        "https://x.com/deep_endX",
        "https://www.instagram.com/deep_endx/",
        "https://www.threads.com/@deep_endx",
      ],
      knowsAbout: [
        "Cybersecurity",
        "Full-Stack Development",
        "Artificial Intelligence",
        "Accessible Education",
        "Sustainability",
      ],
      affiliation: [
        {
          "@type": "Organization",
          name: "NeuroBridgeEDU",
          url: "https://NeurobridgeEDU.eu",
        },
        {
          "@type": "Organization",
          name: "EU-Green",
          description: "European Green Initiative",
        },
        {
          "@type": "EducationalOrganization",
          name: "ATU Sligo",
        },
      ],
    },
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className={`${jetbrainsMono.className} antialiased min-h-dvh`}>
        <Analytics />
        {children}
        <VercelAnalytics />
      </body>
    </html>
  );
}
