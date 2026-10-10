import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://focality.space";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/about", "/blog", "/contact", "/privacy", "/terms"].map((path) => ({
    url: `${siteUrl}${path}`,
  }));
}
