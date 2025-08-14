import { MeiliSearch } from "meilisearch";

const host = process.env.NEXT_PUBLIC_MEILISEARCH_URL;
const apiKey = process.env.NEXT_PUBLIC_MEILISEARCH_KEY;

export const meili = host ? new MeiliSearch({ host, apiKey }) : null;

export async function searchUnified(query: string, limit = 10) {
  if (!meili || !query) return { hits: [] as any[] };
  const indexes = ["news", "documents", "pages"];
  const results = await Promise.allSettled(
    indexes.map((i) => meili.index(i).search(query, { limit }))
  );
  const hits = results.flatMap((r, i) =>
    r.status === "fulfilled" ? r.value.hits.map((h: any) => ({ ...h, _index: indexes[i] })) : []
  );
  return { hits };
}
