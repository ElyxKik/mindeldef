import { MetadataRoute } from "next";

const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "/",
    "/ministere",
    "/fardc",
    "/actualites",
    "/documents",
    "/marches-publics",
    "/programmes",
    "/medias",
    "/faq",
    "/contact",
    "/recrutement",
    "/accessibilite",
    "/mentions-legales",
    "/donnees-personnelles",
    "/recherche",
  ];
  return pages.map((p) => ({ url: `${base}${p}`, lastModified: new Date() }));
}
