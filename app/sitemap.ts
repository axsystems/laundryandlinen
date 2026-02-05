import type { MetadataRoute } from "next";
import { LOCATIONS, SERVICES_FOR_SEO } from "@/lib/constants/locations";
import { INDUSTRIES } from "@/lib/constants/industries";
import { BLOG_POSTS } from "@/lib/constants/blog-posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://laundryandlinen.com";

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/how-it-works`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/areas`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/order`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/commercial`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/commercial/quote`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  // City landing pages (28 cities)
  const cityPages: MetadataRoute.Sitemap = LOCATIONS.map((location) => ({
    url: `${baseUrl}/${location.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // City + Service pages (28 cities × 8 services = 224 pages)
  const cityServicePages: MetadataRoute.Sitemap = LOCATIONS.flatMap((location) =>
    SERVICES_FOR_SEO.map((service) => ({
      url: `${baseUrl}/${location.slug}/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  // ZIP code landing pages
  const allZipCodes = [...new Set(LOCATIONS.flatMap((loc) => loc.zipCodes))];
  const zipCodePages: MetadataRoute.Sitemap = allZipCodes.map((zip) => ({
    url: `${baseUrl}/service-area/${zip}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Commercial industry landing pages (8 pages)
  const industryPages: MetadataRoute.Sitemap = INDUSTRIES.map((industry) => ({
    url: `${baseUrl}/commercial/${industry.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Commercial industry + city pages (8 industries × 28 cities = 224 pages)
  const industryCityPages: MetadataRoute.Sitemap = INDUSTRIES.flatMap((industry) =>
    LOCATIONS.map((location) => ({
      url: `${baseUrl}/commercial/${industry.slug}/${location.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  // Blog index
  const blogIndex: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
  ];

  // Blog posts (25 pages)
  const blogPostPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...cityPages,
    ...cityServicePages,
    ...zipCodePages,
    ...industryPages,
    ...industryCityPages,
    ...blogIndex,
    ...blogPostPages,
  ];
}
