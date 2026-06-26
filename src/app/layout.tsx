import type { Metadata } from "next";
import { DM_Sans, Prata } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/config/site.config";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body"
});

const prata = Prata({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-display"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Mentor To Marry | Christian Marriage Preparation",
    template: "%s | Mentor To Marry"
  },
  description:
    "Mentor To Marry is a guided, mentoring-led path for intentional Christian singles preparing for marriage.",
  openGraph: {
    title: "Mentor To Marry",
    description:
      "A mature, mentoring-led path for Christian singles preparing for intentional marriage.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/community-hero.jpg",
        width: 1600,
        height: 1065,
        alt: "Young adults at a Mentor To Marry gathering"
      }
    ],
    locale: "en_NG",
    type: "website"
  },
  alternates: {
    canonical: siteConfig.url
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const plausibleDomain = siteConfig.analytics.plausibleDomain;

  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${prata.variable}`}>
        {plausibleDomain ? (
          <Script
            defer
            data-domain={plausibleDomain}
            src="https://plausible.io/js/script.js"
            strategy="afterInteractive"
          />
        ) : null}
        {children}
      </body>
    </html>
  );
}
