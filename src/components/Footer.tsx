import { Check } from "lucide-react";
import { legalDocuments, type LegalDocument } from "@/content/legal";
import { siteConfig } from "@/config/site.config";

const indexLinks = [
  { label: "About", href: "/#app" },
  { label: "Mentoring", href: "/#mentoring" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" }
] as const;

const resourceLinks = [
  { label: "Register for MTM", href: siteConfig.selfanyUrl, external: true },
  { label: "Join the free community", href: siteConfig.freeCommunityUrl, external: true },
  { label: "Contact", href: `mailto:${siteConfig.email}` }
] as const;

const legalGroups = [
  {
    title: "Terms",
    documents: [
      "Terms of Use",
      "Membership & Subscription Terms",
      "Matching Platform Terms",
      "Refund & Cancellation Policy",
      "Messaging & Communications Policy"
    ]
  },
  {
    title: "Community",
    documents: [
      "Community Guidelines & Code of Conduct",
      "Platform Values & Community Principles",
      "Statement of Faith",
      "Profile Standards Policy"
    ]
  },
  {
    title: "Privacy & Safety",
    documents: [
      "Privacy Policy",
      "Cookie Policy",
      "Data Retention & Deletion Policy",
      "Safeguarding & Community Safety Policy",
      "Account Suspension & Enforcement Policy"
    ]
  }
] as const;

function findDocuments(titles: readonly string[]): LegalDocument[] {
  return titles
    .map((title) => legalDocuments.find((document) => document.title === title))
    .filter((document): document is LegalDocument => Boolean(document));
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <strong>Mentor To Marry</strong>
          <span>Christian marriage preparation with mentoring, review, and responsible matching.</span>
        </div>

        <a className="footer__cta" href={siteConfig.selfanyUrl} target="_blank" rel="noopener noreferrer">
          Register for MTM
          <Check size={16} aria-hidden />
        </a>
      </div>

      <div className="footer__columns">
        <nav className="footer__column" aria-label="Website links">
          <p>Index</p>
          {indexLinks.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <nav className="footer__column" aria-label="Resources">
          <p>Resources</p>
          {resourceLinks.map((link) => (
            <a
              href={link.href}
              key={link.href}
              target={"external" in link && link.external ? "_blank" : undefined}
              rel={"external" in link && link.external ? "noopener noreferrer" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <nav className="footer__column footer__legal" aria-label="Legal documents">
          <a className="footer__section-title" href="/legal">
            Legal
          </a>

          <div className="footer__legal-groups">
            {legalGroups.map((group) => (
              <div className="footer__legal-group" key={group.title}>
                <span>{group.title}</span>
                {findDocuments(group.documents).map((document) => (
                  <a href={`/legal/${document.slug}`} key={document.slug}>
                    {document.title}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </nav>
      </div>

      <div className="footer__bottom">
        <span>© 2026 Mentor To Marry</span>
        <span>By Love, Dating and Marriage Ministries.</span>
      </div>
    </footer>
  );
}
