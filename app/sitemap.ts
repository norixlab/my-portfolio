import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.taydakov.com";

  const skills = [
    "nextjs",
    "reactjs",
    "tanstack-query",
    "orm-systems",
    "zustand",
    "cloudinary",
    "tailwindcss",
    "framer-motion",
  ];

  const generateLinks = (locale: string, skill: string) => ({
    url: `${baseUrl}/${locale}/skills/${skill}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  });

  // Генерация ссылок для всех локализаций
  const skillLinks = skills.flatMap((skill) => [
    generateLinks("en", skill),
    generateLinks("ru", skill),
  ]);

  return [
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}/ru`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...skillLinks,
  ];
}
