import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "https://mississippi-paint.vercel.app",
      lastModified: new Date(),
    },
  ];
}
