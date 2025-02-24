import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://zenkriiheb.vercel.app",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://zenkriiheb.vercel.app/#about",
      lastModified: new Date().toISOString(),
    },
    {
        url: "https://zenkriiheb.vercel.app/#services",
        lastModified: new Date().toISOString(),
      },
    {
      url: "https://zenkriiheb.vercel.app/#project",
      lastModified: new Date().toISOString(),
    },
    {
        url: "https://zenkriiheb.vercel.app/#contact",
        lastModified: new Date().toISOString(),
      },
  ];
}
