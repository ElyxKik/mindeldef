const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL;
const CMS_TOKEN = process.env.CMS_TOKEN;

async function api(path: string, init: RequestInit = {}) {
  if (!CMS_URL) throw new Error("NEXT_PUBLIC_CMS_URL non défini");
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(CMS_TOKEN ? { Authorization: `Bearer ${CMS_TOKEN}` } : {}),
  };
  const res = await fetch(`${CMS_URL}${path}`, { ...init, headers, cache: "no-store" });
  if (!res.ok) throw new Error(`CMS error ${res.status}`);
  return res.json();
}

export async function getNews(params: { page?: number; pageSize?: number } = {}) {
  // Adapter pour Strapi/Directus ultérieurement
  return api(`/news?${new URLSearchParams({ ...(params.page ? { page: String(params.page) } : {}), ...(params.pageSize ? { pageSize: String(params.pageSize) } : {}) })}`);
}

export async function getDocuments(params: { q?: string } = {}) {
  return api(`/documents?${new URLSearchParams(params as any)}`);
}
