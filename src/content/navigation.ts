import { siteConfig } from "@/config/site.config";

export const navigation = [
  { label: "Method", href: "#method" },
  { label: "Journey", href: "#journey" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" }
] as const;

export const ctas = {
  primary: {
    label: "Start your journey",
    href: siteConfig.appUrl
  },
  secondary: {
    label: "See how it works",
    href: "#journey"
  }
} as const;
