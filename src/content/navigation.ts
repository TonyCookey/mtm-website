import { siteConfig } from "@/config/site.config";

export const navigation = [
  { label: "About", href: "#app" },
  { label: "Mentoring", href: "#mentoring" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" }
] as const;

export const ctas = {
  primary: {
    label: "Register",
    href: siteConfig.selfanyUrl
  },
  secondary: {
    label: "Profiles",
    href: "#app"
  },
  freeCommunity: {
    label: "Join our free community",
    href: "#community"
  },
  freeCommunityExternal: {
    label: "Join the singles community",
    href: siteConfig.freeCommunityUrl
  }
} as const;
