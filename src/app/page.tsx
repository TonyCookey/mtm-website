import Image from "next/image";
import { ArrowRight, Check, Mail, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Header } from "@/components/Header";
import { Pricing } from "@/components/Pricing";
import { Reveal } from "@/components/Reveal";
import { SectionShell } from "@/components/SectionShell";
import { SignatureScroll } from "@/components/SignatureScroll";
import { SwipeProblem } from "@/components/SwipeProblem";
import { assets } from "@/content/assets";
import { faqs } from "@/content/faqs";
import { journeySteps, methodPillars } from "@/content/homepage";
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
              <p className="eyebrow">Mentoring-led Christian matching</p>
              <h1>Prepare for marriage with wisdom before you pursue a match.</h1>
              <p className="hero__lede">
                Mentor To Marry gives intentional Christian singles a guided path through
                mentoring, readiness review, and responsible introductions.
              </p>
              <div className="hero__actions">
                <a className="button button--primary" href={ctas.primary.href}>
                  {ctas.primary.label}
                  <ArrowRight size={18} aria-hidden />
                </a>
                <a className="button button--ghost" href={ctas.secondary.href}>
                  {ctas.secondary.label}
                </a>
              </div>
            </Reveal>
            <Reveal className="hero__proof" delay={0.14}>
              <span>Built for singles who value counsel, character, and covenant.</span>
            </Reveal>
          </div>
        </section>

        <SectionShell
          eyebrow="The problem"
          title="Connection got faster. Discernment did not."
          intro="MTM slows the process down just enough for counsel, character, and clarity to matter."
        >
          <SwipeProblem />
        </SectionShell>

        <SectionShell
          id="method"
          eyebrow="The method"
          title="A three-part system for serious Christian singles."
          intro="MTM is designed to help members move with maturity: first toward clarity, then toward reviewed recommendations, then toward purposeful conversation."
        >
          <div className="pillar-grid">
            {methodPillars.map((pillar, index) => (
              <Reveal className="pillar" delay={index * 0.08} key={pillar.title}>
                <span>{pillar.eyebrow}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.body}</p>
              </Reveal>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="journey"
          eyebrow="Journey flow"
          title="From onboarding to a focused seven-day chat window."
          intro="The product flow is structured so every step earns the next one."
        >
          <ol className="journey">
            {journeySteps.map((step, index) => (
              <Reveal as="li" className="journey__step" delay={index * 0.045} key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </Reveal>
            ))}
          </ol>
        </SectionShell>

        <SignatureScroll />

        <SectionShell
          eyebrow="Coaches and founders"
          title="Guidance from people who understand both faith and marriage."
          intro="Kingsley and Mildred Okonkwo bring public credibility, pastoral care, and a deeply human standard of trust to the MTM journey."
        >
          <div className="media-split">
            <Reveal className="media-split__image">
              <Image src={assets.mentors.src} alt={assets.mentors.alt} fill sizes="(min-width: 900px) 42vw, 100vw" />
            </Reveal>
            <Reveal className="quote-panel" delay={0.1}>
              <Sparkles size={22} aria-hidden />
              <blockquote>
                “The goal is not simply to meet someone. The goal is to become ready for the kind
                of marriage you are praying for.”
              </blockquote>
              <p>Founder note</p>
            </Reveal>
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Designed for Christian singles"
          title="A mature community rhythm, with safety and review built in."
          intro="MTM is for people who want a values-led process: serious enough for marriage, careful enough for trust, and human enough for real connection."
        >
          <div className="values-band">
            <div className="values-band__image">
              <Image src={assets.community.src} alt={assets.community.alt} fill sizes="(min-width: 900px) 48vw, 100vw" />
            </div>
            <div className="values-list">
              {["Faith-centered values", "Mentor-reviewed readiness", "Respectful mutual interest", "Privacy-conscious flow"].map((item) => (
                <Reveal className="value-row" key={item}>
                  <ShieldCheck size={20} aria-hidden />
                  <span>{item}</span>
                </Reveal>
              ))}
            </div>
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
    </>
  );
}
