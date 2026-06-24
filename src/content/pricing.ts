export type BillingCycle = "monthly" | "annual";

export type PricingPlan = {
  name: string;
  monthly: string;
  annual: string;
  tone: string;
  description: string;
  benefits: string[];
  featured?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Regular",
    monthly: "NGN 15,000",
    annual: "NGN 150,000",
    tone: "Guided foundation",
    description: "For singles who want structure, clarity, and a responsible path into the MTM process.",
    benefits: [
      "Mentoring-led onboarding",
      "Marriage readiness assessments",
      "Profile review and guidance",
      "Eligible recommendation flow"
    ]
  },
  {
    name: "Premium",
    monthly: "NGN 28,000",
    annual: "NGN 280,000",
    tone: "Deeper preparation",
    description: "For singles who want more intentional support while they prepare for a serious match.",
    benefits: [
      "Everything in Regular",
      "Expanded mentor touchpoints",
      "Stronger readiness feedback",
      "Priority recommendation review"
    ],
    featured: true
  },
  {
    name: "VIP",
    monthly: "NGN 52,000",
    annual: "NGN 520,000",
    tone: "High-touch guidance",
    description: "For singles who want the most personal level of mentoring, care, and review.",
    benefits: [
      "Everything in Premium",
      "High-touch mentor support",
      "Concierge-style review flow",
      "More personal matching guidance"
    ]
  }
];
