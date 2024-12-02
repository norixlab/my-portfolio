import type { MetadataRoute } from "next";

/**
 * Generates robots.txt for the website.
 *
 * @returns {MetadataRoute.Robots} Configuration for robots.txt.
 */

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/_next/", "/api/"],
    },
    sitemap: "https://www.taydakov.com/sitemap.xml",
  };
}
