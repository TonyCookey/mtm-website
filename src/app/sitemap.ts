import type { MetadataRoute } from "next";
import { publicLegalDocuments } from "@/content/legal";
import { siteConfig } from "@/config/site.config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${siteConfig.url}/legal`,
      changeFrequency: "monthly",
      priority: 0.7
    },
    ...publicLegalDocuments.map((document) => ({
      url: `${siteConfig.url}/legal/${document.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6
    }))
  ];
}
