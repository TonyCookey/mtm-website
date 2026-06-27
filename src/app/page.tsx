import Image from "next/image";
import { ArrowRight, ArrowUp, Check, Mail, MessageCircle } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Header } from "@/components/Header";
import { Pricing } from "@/components/Pricing";
import { ProfileMarquee } from "@/components/ProfileMarquee";
import { Reveal } from "@/components/Reveal";
import { SectionShell } from "@/components/SectionShell";
import { SignatureScroll } from "@/components/SignatureScroll";
import { assets } from "@/content/assets";
import { faqs } from "@/content/faqs";
import { ctas } from "@/content/navigation";
import { siteConfig } from "@/config/site.config";

export default function Home() {
  return (
    <>
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
                <a className="button button--primary" href={ctas.primary.href}>
                  {ctas.primary.label}
                  <ArrowRight size={18} aria-hidden />
                </a>
              </div>
            </Reveal>
            <Reveal className="hero__proof" delay={0.14}>
              <span>For singles who value counsel, character, and covenant.</span>
            </Reveal>
          </div>
        </section>

        <SignatureScroll />

        <ProfileMarquee />

        <SectionShell
          eyebrow="Coaches and founders"
          title="Guided by people who understand faith, love, and marriage."
          intro="Kingsley and Mildred Okonkwo bring pastoral care, practical wisdom, and a deeply human standard of trust to the MTM journey."
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

        <SectionShell id="faq" eyebrow="FAQ" title="Good questions deserve straight answers.">
          <FAQAccordion items={faqs} />
        </SectionShell>

        <section className="final-cta">
          <div className="final-cta__inner">
            <Reveal>
              <p className="eyebrow">Begin with intention</p>
              <h2>Join the guided path for Christian singles preparing for marriage.</h2>
              <div className="final-cta__actions">
                <a className="button button--primary" href={siteConfig.appUrl}>
                  Start your journey
                  <ArrowRight size={18} aria-hidden />
                </a>
                <a className="button button--light" href={`mailto:${siteConfig.email}`}>
                  <Mail size={18} aria-hidden />
                  {siteConfig.email}
                </a>
                <a className="button button--light" href={siteConfig.whatsappUrl}>
                  <MessageCircle size={18} aria-hidden />
                  {siteConfig.phoneDisplay}
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div>
          <strong>Mentor To Marry</strong>
          <span>Christian marriage preparation with mentoring, review, and responsible matching.</span>
        </div>
        <a href={siteConfig.appUrl}>
          Continue to app
          <Check size={16} aria-hidden />
        </a>
      </footer>
      <a className="back-to-top" href="#top" aria-label="Back to top">
        <ArrowUp size={20} aria-hidden />
      </a>
    </>
  );
}
