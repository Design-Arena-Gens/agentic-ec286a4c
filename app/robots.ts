import type { MetadataRoute } from "next";

const baseUrl = "https://agentic-ec286a4c.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"]
    },
    sitemap: [`${baseUrl}/sitemap.xml`],
    host: baseUrl
  };
}
