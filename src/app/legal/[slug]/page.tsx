import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { LegalDocumentBody } from "@/components/LegalDocumentBody";
import { getLegalDocument, legalDocuments, type LegalBlock } from "@/content/legal";
import { siteConfig } from "@/config/site.config";

type LegalDocumentPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return legalDocuments.map((document) => ({
    slug: document.slug
  }));
}

export async function generateMetadata({ params }: LegalDocumentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const document = getLegalDocument(slug);

  if (!document) {
    return {
      title: "Legal Document"
    };
  }

  return {
    title: document.title,
    description: document.description,
    alternates: {
      canonical: `${siteConfig.url}/legal/${document.slug}`
    }
  };
}

export default async function LegalDocumentPage({ params }: LegalDocumentPageProps) {
  const { slug } = await params;
  const document = getLegalDocument(slug);

  if (!document) {
    notFound();
  }

  const headings = document.blocks.filter(
    (block): block is Extract<LegalBlock, { type: "heading" }> => block.type === "heading" && block.level === 2
  );

  return (
    <>
      <main className="legal-page legal-page--document" id="top">
        <header className="legal-topbar">
          <a className="brand" href="/" aria-label="Mentor To Marry home">
            <strong>
              Mentor <span>To</span> Marry
            </strong>
          </a>
          <a className="legal-topbar__link" href="/legal">
            <ArrowLeft size={16} aria-hidden />
            All legal documents
          </a>
        </header>

        <article className="legal-document">
          <header className="legal-document__header">
            <p className="eyebrow">Legal</p>
            <h1>{document.title}</h1>
            <p>{document.description}</p>
          </header>

          <div className="legal-document__layout">
            <aside className="legal-toc" aria-label={`${document.title} sections`}>
              <p>On this page</p>
              <nav>
                {headings.map((heading) => (
                  <a href={`#${heading.id}`} key={heading.id}>
                    {heading.text}
                  </a>
                ))}
              </nav>
            </aside>
            <LegalDocumentBody blocks={document.blocks} />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
