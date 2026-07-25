import Image from "next/image";
import { ArrowDown, ArrowRight, ArrowUp, Mail } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Footer } from "@/components/Footer";
import { FreeCommunitySection } from "@/components/FreeCommunitySection";
import { Header } from "@/components/Header";
import { MentoringSection } from "@/components/MentoringSection";
import { Pricing } from "@/components/Pricing";
import { ProfileMarquee } from "@/components/ProfileMarquee";
import { Reveal } from "@/components/Reveal";
import { SectionShell } from "@/components/SectionShell";
import { SignatureScroll } from "@/components/SignatureScroll";
import { assets } from "@/content/assets";
import { faqs } from "@/content/faqs";
import { ctas } from "@/content/navigation";
import { pricingPlans, type Currency } from "@/content/pricing";
import { siteConfig } from "@/config/site.config";

const currencyLabels: Record<Currency, string> = {
  ngn: "NGN",
  usd: "USD",
  gbp: "GBP"
};

function priceValue(price: string) {
  return price.replace(/[^0-9.]/g, "");
}

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/favicons/mtm.svg`,
    email: siteConfig.email,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: siteConfig.email,
      availableLanguage: ["English"]
    },
    areaServed: ["Nigeria", "Diaspora", "Global"]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    publisher: {
      "@id": `${siteConfig.url}/#organization`
    },
    inLanguage: "en"
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteConfig.url}/#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/#service`,
    name: "Christian marriage preparation and mentoring",
    serviceType: "Mentoring-led Christian marriage preparation and matching",
    provider: {
      "@id": `${siteConfig.url}/#organization`
    },
    areaServed: ["Nigeria", "Diaspora", "Global"],
    audience: {
      "@type": "Audience",
      audienceType: "Christian singles preparing for intentional marriage"
    },
    offers: {
      "@type": "OfferCatalog",
      name: "Mentor To Marry membership plans",
      itemListElement: pricingPlans.map((plan) => ({
        "@type": "Offer",
        name: `${plan.name} membership`,
        description: plan.description,
        url: siteConfig.selfanyUrl,
        availability: "https://schema.org/InStock",
        priceSpecification: Object.entries(plan.prices).map(([currency, price]) => ({
          "@type": "UnitPriceSpecification",
          price: priceValue(price),
          priceCurrency: currencyLabels[currency as Currency],
          billingDuration: "P1Y"
        }))
      }))
    }
  }
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c")
        }}
      />
      <Header />
      <main>
        <section className="hero" id="top">
          <Image
            src={assets.hero.src}
            alt={assets.hero.alt}
            fill
            priority
            className="hero__image"
            sizes="100vw"
          />
          <div className="hero__veil" />
          <div className="hero__content page-grid">
            <Reveal className="hero__copy">
              <h1>Mentor To Marry</h1>
              <p className="hero__lede">
                A guided path for Christian singles preparing for intentional marriage.
              </p>
              <div className="hero__actions">
                <a className="button button--primary" href={ctas.primary.href} target="_blank" rel="noopener noreferrer">
                  {ctas.primary.label}
                  <ArrowRight size={18} aria-hidden />
                </a>
                <a className="hero__secondary-link" href={ctas.freeCommunity.href}>
                  {ctas.freeCommunity.label}
                  <ArrowDown size={16} aria-hidden />
                </a>
              </div>
            </Reveal>
            <Reveal className="hero__proof" delay={0.14}>
              <span>For singles ready for Kingdom marriages.</span>
            </Reveal>
          </div>
        </section>

        <SignatureScroll />

        <MentoringSection />

        <ProfileMarquee />

        <SectionShell
          eyebrow="Coaches and founders"
          title="Guided by people who understand faith, love, and marriage."
          intro="Kingsley and Mildred Okonkwo bring pastoral care, practical wisdom, and a deeply human standard of trust to the MTM journey for serious Christian singles in Nigeria, the diaspora, and beyond."
        >
          <div className="media-split">
            <Reveal className="media-split__image">
              <Image src={assets.mentors.src} alt={assets.mentors.alt} fill sizes="(min-width: 900px) 42vw, 100vw" />
            </Reveal>
            <Reveal className="quote-panel" delay={0.1}>
              <blockquote>
                “The goal is not simply to meet someone. The goal is to become ready for the kind of marriage you are praying for.”
              </blockquote>
              <p>Kingsley Okonkwo</p>
            </Reveal>
          </div>
        </SectionShell>

        <Pricing />

        <FreeCommunitySection />

        <SectionShell id="faq" eyebrow="FAQ" title="Good questions deserve straight answers.">
          <FAQAccordion items={faqs} />
        </SectionShell>

        <section className="final-cta">
          <div className="final-cta__inner">
            <Reveal>
              <p className="eyebrow">Begin with intention</p>
              <h2>Join the guided path for Christian singles preparing for marriage.</h2>
              <div className="final-cta__actions">
                <a className="button button--primary" href={siteConfig.selfanyUrl} target="_blank" rel="noopener noreferrer">
                  Start your MTM journey
                  <ArrowRight size={18} aria-hidden />
                </a>
                <a className="button button--light final-cta__contact" href={`mailto:${siteConfig.email}`}>
                  <Mail size={18} aria-hidden />
                  {siteConfig.email}
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <a className="back-to-top" href="#top" aria-label="Back to top">
        <ArrowUp size={20} aria-hidden />
      </a>
    </>
  );
}
