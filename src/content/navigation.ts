import { siteConfig } from "@/config/site.config";

export const navigation = [
  { label: "App", href: "#app" },
  { label: "Profiles", href: "#profiles" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" }
] as const;

export const ctas = {
  primary: {
    label: "Start",
    href: siteConfig.appUrl
  },
  secondary: {
    label: "See the app",
    href: "#app"
  }
} as const;
