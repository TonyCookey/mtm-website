export type PricingPlan = {
  name: string;
  tone: string;
  description: string;
  benefits: string[];
  featured?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Regular",
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
