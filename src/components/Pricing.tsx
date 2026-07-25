"use client";

import { Check } from "lucide-react";
import { pricingPlans } from "@/content/pricing";
import { siteConfig } from "@/config/site.config";
import { Reveal } from "@/components/Reveal";
import { SectionShell } from "@/components/SectionShell";

export function Pricing() {
  return (
    <SectionShell
      id="membership"
      eyebrow="Membership"
      title="Choose the level of preparation and guidance that fits your season."
      intro="Each membership path starts with mentoring, then opens access to the MTM matching journey. Current membership and checkout details are handled securely on Selfany."
    >
      <div className="pricing-grid">
        {pricingPlans.map((plan, index) => (
          <Reveal className={`price-card ${plan.featured ? "price-card--featured" : ""}`} delay={index * 0.08} key={plan.name}>

            <h3>{plan.name}</h3>
            <p className="price-card__description">{plan.description}</p>
            <ul>
              {plan.benefits.map((benefit) => (
                <li key={benefit}>
                  <Check size={18} aria-hidden />
                  {benefit}
                </li>
              ))}
            </ul>
            <a className="button button--primary" href={siteConfig.selfanyUrl} target="_blank" rel="noopener noreferrer">
              Choose {plan.name}
            </a>
          </Reveal>
        ))}
      </div>
      <p className="pricing-note">
        Want to start gently? The{" "}
        <a href={siteConfig.freeCommunityUrl} target="_blank" rel="noopener noreferrer">
          Singles Community
        </a>{" "}
        is open to everyone. Choose a membership package for more details. Membership
        does not guarantee a match, mutual interest, or marriage.
      </p>
    </SectionShell>
  );
}
