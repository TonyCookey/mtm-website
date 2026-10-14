import { siteConfig } from "@/config/site.config";
import { faqs } from "@/content/faqs";
import { signatureScreens } from "@/content/homepage";
import { pricingPlans } from "@/content/pricing";

const overview = [
  "# " + siteConfig.name,
  "",
  "> " + siteConfig.seo.description,
  "",
  "Mentor To Marry (M2M) brings mentoring, readiness review, accountability, and guided matching together for Christian singles preparing for intentional marriage.",
  "Membership does not guarantee a match, mutual interest, or marriage."
].join("\n");

function link(label: string, url: string, description: string) {
  return "- [" + label + "](" + url + "): " + description;
}

const officialLinks = [
  link("Website", siteConfig.url + "/", "Public information about Mentor To Marry."),
  link("Register for M2M", siteConfig.selfanyUrl, "Membership registration."),
  link("Free singles community", siteConfig.freeCommunityUrl, "Teachings, conversations, updates, and events."),
  link("Contact", "mailto:" + siteConfig.email, "Customer support.")
];

export function getLlmsIndex() {
  return [
    overview,
    "",
    "## Site information",
    "",
    link("Full site summary", siteConfig.url + "/llms-full.txt", "Plain-text Markdown covering the process, membership benefits, and FAQs."),
    ...officialLinks,
    "",
    "## Optional",
    "",
    link("Legal documents", siteConfig.url + "/legal", "Terms, privacy, safeguarding, and community policies."),
    ""
  ].join("\n");
}

export function getLlmsSummary() {
  return [
    overview,
    "",
    "## How M2M works",
    "",
    ...signatureScreens.flatMap((screen) => ["### " + screen.kicker, "", screen.body, ""]),
    "## Mentoring",
    "",
    "The journey begins with eight weeks of mentoring classes, assessments, and guided reflection covering readiness, faith, values, communication, and marriage.",
    "",
    "## Coaches and founders",
    "",
    "Kingsley and Mildred Kingsley-Okonkwo guide the M2M journey for serious Christian singles in Nigeria, the diaspora, and beyond.",
    "",
    "## Membership",
    "",
    ...pricingPlans.flatMap((plan) => [
      "### " + plan.name,
      "",
      plan.description,
      "",
      ...plan.benefits.map((benefit) => "- " + benefit),
      ""
    ]),
    "## Frequently asked questions",
    "",
    ...faqs.flatMap((faq) => ["### " + faq.question, "", faq.answer, ""]),
    "## Official links",
    "",
    ...officialLinks,
    link("Legal documents", siteConfig.url + "/legal", "Terms, privacy, safeguarding, and community policies."),
    ""
  ].join("\n");
}
