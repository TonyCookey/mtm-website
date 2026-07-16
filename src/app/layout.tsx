import type { Metadata } from "next";
import { DM_Sans, Prata } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/config/site.config";
import { SpeedInsights } from "@vercel/speed-insights/next";

const title = "Mentor To Marry | Launching Soon";
const description =
  "Mentor To Marry is preparing to launch a guided path for Christian singles ready for intentional marriage.";
const image = "/images/community-hero.jpg";

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
    default: title,
    template: "%s | Mentor To Marry"
  },
  description,
  keywords: [
    "Christian singles",
    "Christian marriage preparation",
    "Christian matchmaking",
    "marriage mentoring",
    "Mentor To Marry",
    "Christian singles Nigeria",
    "Christian singles diaspora",
    "Kingdom marriage"
  ],
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    title,
    description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: image,
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
  },
  icons: {
    icon: "/favicons/mtm.svg"
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image]
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
        <SpeedInsights />
      </body>
    </html>
  );
}
