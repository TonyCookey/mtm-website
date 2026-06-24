"use client";

import { Check, CircleDollarSign } from "lucide-react";
import { useState } from "react";
import { pricingPlans, type BillingCycle } from "@/content/pricing";
import { siteConfig } from "@/config/site.config";
import { Reveal } from "@/components/Reveal";
import { SectionShell } from "@/components/SectionShell";

export function Pricing() {
  const [cycle, setCycle] = useState<BillingCycle>("monthly");

  return (
    <SectionShell
      id="pricing"
      eyebrow="Pricing"
      title="Choose the level of preparation and guidance that fits your season."
      intro="Annual memberships provide two months of value compared with monthly billing."
    >
      <div className="pricing-toolbar" role="group" aria-label="Billing cycle">
        <button
          type="button"
          className={cycle === "monthly" ? "is-active" : ""}
          onClick={() => setCycle("monthly")}
          aria-pressed={cycle === "monthly"}
        >
          Monthly
        </button>
        <button
          type="button"
          className={cycle === "annual" ? "is-active" : ""}
          onClick={() => setCycle("annual")}
          aria-pressed={cycle === "annual"}
        >
          Annual
        </button>
      </div>
      <div className="pricing-grid">
        {pricingPlans.map((plan, index) => (
          <Reveal className={`price-card ${plan.featured ? "price-card--featured" : ""}`} delay={index * 0.08} key={plan.name}>
            <div className="price-card__top">
              <CircleDollarSign size={22} aria-hidden />
              <span>{plan.tone}</span>
            </div>
            <h3>{plan.name}</h3>
            <p className="price-card__price">
              {cycle === "monthly" ? plan.monthly : plan.annual}
              <span>/{cycle === "monthly" ? "month" : "year"}</span>
            </p>
            <p className="price-card__description">{plan.description}</p>
            <ul>
              {plan.benefits.map((benefit) => (
                <li key={benefit}>
                  <Check size={18} aria-hidden />
                  {benefit}
                </li>
              ))}
            </ul>
            <a className="button button--primary" href={siteConfig.appUrl}>
              Choose {plan.name}
            </a>
          </Reveal>
        ))}
      </div>
      <p className="pricing-note">
        Membership gives access to mentoring, review, and recommendations. It does not guarantee a match, mutual interest, or marriage.
      </p>
    </SectionShell>
  );
}
