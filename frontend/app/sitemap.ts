import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://codiqsolutions.com"; // Replace with actual domain

    // In a real app, you might fetch dynamic routes from a CMS or DB
    const stripes = [
        "",
        "/services",
        "/portfolio",
        "/about",
        "/contact",
        "/careers",
        "/blog",
        "/products",
        "/technologies",
        "/terms",
        "/privacy",
        "/cookie-policy",
    ];

    const routes = stripes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    return routes;
}
