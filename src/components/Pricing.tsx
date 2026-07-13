"use client";

import { Check } from "lucide-react";
import { useState } from "react";
import { currencies, pricingPlans, type Currency } from "@/content/pricing";
import { siteConfig } from "@/config/site.config";
import { Reveal } from "@/components/Reveal";
import { SectionShell } from "@/components/SectionShell";

export function Pricing() {
  const [currency, setCurrency] = useState<Currency>("ngn");

  return (
    <SectionShell
      id="pricing"
      eyebrow="Pricing"
      title="Choose the level of preparation and guidance that fits your season."
      intro="Each plan is a yearly membership that starts with mentoring, then opens access to the MTM matching journey."
    >
      <div className="pricing-toolbar" role="group" aria-label="Currency">
        {currencies.map((item) => (
          <button
            type="button"
            className={currency === item.code ? "is-active" : ""}
            onClick={() => setCurrency(item.code)}
            aria-pressed={currency === item.code}
            key={item.code}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="pricing-grid">
        {pricingPlans.map((plan, index) => (
          <Reveal className={`price-card ${plan.featured ? "price-card--featured" : ""}`} delay={index * 0.08} key={plan.name}>

            <h3>{plan.name}</h3>
            <p className="price-card__price">
              {plan.prices[currency]}
              <span>/year</span>
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
            <a className="button button--primary" href={siteConfig.selfanyUrl}>
              Choose {plan.name}
            </a>
          </Reveal>
        ))}
      </div>
      <p className="pricing-note">
        Want to start gently? The{" "}
        <a href={siteConfig.freeCommunityUrl}>Singles Community</a> is open to everyone. Paid membership gives access
        to mentoring, review, and recommendations. It does not guarantee a match, mutual interest, or marriage.
      </p>
    </SectionShell>
  );
}
