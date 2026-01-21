import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://laundryandlinen.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/order/track/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
