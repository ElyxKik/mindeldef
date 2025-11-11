import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SkipLink from "@/components/a11y/SkipLink";
import AppBar from "@/components/layout/AppBar";
import Footer from "@/components/layout/Footer";
import Script from "next/script";
import { govOrganizationJsonLd } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
};

export const metadata: Metadata = {
  title: "Ministère délégué à la Défense — RDC",
  description:
    "Portail officiel: missions, actualités, documents officiels, marchés publics, FARDC, médias.",
  metadataBase: new URL(getBaseUrl()),
  openGraph: {
    type: "website",
    title: "Ministère délégué à la Défense — RDC",
    description: "Portail officiel du Ministère délégué à la Défense.",
    url: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SkipLink />
        <AppBar />
        <main id="content">{children}</main>
        <Footer />
        <Script id="ld-gov-org" type="application/ld+json">
          {JSON.stringify(govOrganizationJsonLd())}
        </Script>
      </body>
    </html>
  );
}
