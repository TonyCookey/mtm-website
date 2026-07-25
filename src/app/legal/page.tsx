import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { legalDocuments } from "@/content/legal";
import { siteConfig } from "@/config/site.config";

export const metadata: Metadata = {
  title: "Legal Documents",
  description: "Read Mentor To Marry's terms, policies, community standards, privacy notices, and related legal documents.",
  alternates: {
    canonical: `${siteConfig.url}/legal`
  }
};

export default function LegalIndexPage() {
  return (
    <>
      <main className="legal-page" id="top">
        <header className="legal-topbar">
          <a className="brand" href="/" aria-label="Mentor To Marry home">
            <strong>
              Mentor <span>To</span> Marry
            </strong>
          </a>
          <a className="legal-topbar__link" href="/">
            Back to website
          </a>
        </header>

        <section className="legal-hero">
          <p className="eyebrow">Legal</p>
          <h1>Legal documents</h1>
          <p>
            Read the current Mentor To Marry terms, policies, community standards, privacy notices, and platform rules.
          </p>
        </section>

        <section className="legal-index" aria-label="All legal documents">
          {legalDocuments.map((document) => (
            <a className="legal-card" href={`/legal/${document.slug}`} key={document.slug}>
              <h2>{document.title}</h2>
              <p>{document.description}</p>
              <strong>
                Read document
                <ArrowRight size={16} aria-hidden />
              </strong>
            </a>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
