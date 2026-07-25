import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ctas } from "@/content/navigation";
import { assets } from "@/content/assets";
import { Reveal } from "@/components/Reveal";

const communityBenefits = [
  "Free teachings and materials for singles preparing for marriage",
  "A singles community ready for marriage",
  "Updates, events, and next steps into MTM"
] as const;

export function FreeCommunitySection() {
  return (
    <section className="community-section" id="community">
      <div className="community-section__inner">
        <Reveal className="community-section__copy">
          <p className="eyebrow">Singles community</p>
          <h2>Not ready yet? Join the free singles community for people ready for marriage.</h2>
          <p>
            A free space for Christian singles to learn, connect, receive teachings, and stay close to the MTM journey
            until they are ready for guided membership.
          </p>
          <ul>
            {communityBenefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
          <div className="community-section__actions">
            <a className="button button--primary" href={ctas.freeCommunityExternal.href} target="_blank" rel="noopener noreferrer">
              {ctas.freeCommunityExternal.label}
              <ArrowRight size={18} aria-hidden />
            </a>
            <a className="community-section__text-link" href="#membership">
              Explore paid membership
            </a>
          </div>
        </Reveal>
        <Reveal className="community-section__image" delay={0.08}>
          <Image src={assets.community.src} alt={assets.community.alt} fill sizes="(min-width: 900px) 42vw, 100vw" />
        </Reveal>
      </div>
    </section>
  );
}
