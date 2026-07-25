import type { MetadataRoute } from "next";
import { legalDocuments } from "@/content/legal";
import { siteConfig } from "@/config/site.config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${siteConfig.url}/legal`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7
    },
    ...legalDocuments.map((document) => ({
      url: `${siteConfig.url}/legal/${document.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6
    }))
  ];
}
