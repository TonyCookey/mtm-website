export type Currency = "usd" | "gbp" | "ngn";

export const currencies: { code: Currency; label: string }[] = [
  { code: "ngn", label: "NGN" },
  { code: "usd", label: "USD" },
  { code: "gbp", label: "GBP" }
];

export type PricingPlan = {
  name: string;
  prices: Record<Currency, string>;
  tone: string;
  description: string;
  benefits: string[];
  featured?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Regular",
    prices: {
      usd: "$100",
      gbp: "£100",
      ngn: "₦100,000"
    },
    tone: "Guided foundation",
    description: "For singles beginning the MTM mentoring and matching journey with structure and accountability.",
    benefits: [
      "8 Weeks Mentoring Classes",
      "Assessments & Surveys",
      "Browse Limited Profiles",
      "Accountability System",
      "5 Weekly Chats",
      "Country-based matching pool",
      "1 Weekly Chat Carryover"
    ]
  },
  {
    name: "Premium",
    prices: {
      usd: "$500",
      gbp: "£500",
      ngn: "₦500,000"
    },
    tone: "Deeper preparation",
    description: "For singles who want broader access, richer mentoring resources, and stronger recommendation support.",
    benefits: [
      "Everything in Regular",
      "Monthly Profile Recommendations",
      "Browse Unlimited Profiles",
      "Priority Access to Coaches",
      "Access to Global Pool and Profiles",
      "10 Weekly Chats",
      "3 Weekly Chat Carryover",
      "Private Groups"
    ],
    featured: true
  },
  {
    name: "VIP",
    prices: {
      usd: "$1,000",
      gbp: "£1,000",
      ngn: "₦1,000,000"
    },
    tone: "High-touch guidance",
    description: "For singles who want the most personal level of mentoring, protection, and introduction support.",
    benefits: [
      "Everything in Premium",
      "Dedicated Matchmaker and Coach",
      "Priority Access to PK & PM",
      "Browse Unlimited Profiles",
      "15 Weekly Chats",
      "Off Platform Introductions",
      "MTM Profile Shield™",
      "Access to Global Profiles",
    ]
  }
];
