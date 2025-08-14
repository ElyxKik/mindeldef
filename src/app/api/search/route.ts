import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get("q")?.trim() || "";
  if (q.length < 2) return Response.json({ hits: [] });

  // TODO: replace with Meilisearch call
  const mock: any[] = [
    { _index: "news", id: 1, title: "Communiqué du Ministère", slug: "communique-ministere", summary: "Exemple de résultat" },
    { _index: "documents", id: 2, title: "Décret n°2025-001", summary: "Exemple de résultat" },
  ].filter((h) => h.title.toLowerCase().includes(q.toLowerCase()));

  return Response.json({ hits: mock });
}
