"use client";
import { useEffect, useState } from "react";

type Hit = { _index?: string; id?: string | number; title?: string; slug?: string; summary?: string };

export default function Page() {
  const [q, setQ] = useState("");
  const [hits, setHits] = useState<Hit[]>([]);
  const [loading, setLoading] = useState(false);

  async function runSearch(query: string) {
    setLoading(true);
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
      const data = await res.json();
      setHits(data.hits || []);
    } catch (e) {
      setHits([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const t = setTimeout(() => {
      if (q.trim().length > 1) runSearch(q);
      else setHits([]);
    }, 300);
    return () => clearTimeout(t);
  }, [q]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-2xl font-semibold tracking-tight">Recherche</h1>
      <input
        className="mt-4 w-full border rounded px-3 py-2"
        placeholder="Rechercher actualités, documents, pages..."
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
      {loading ? <p className="mt-4 text-sm text-zinc-500">Recherche...</p> : null}
      <ul className="mt-6 divide-y divide-zinc-200 dark:divide-zinc-800">
        {hits.map((h, i) => (
          <li key={i} className="py-3">
            <div className="text-xs text-zinc-500">{h._index}</div>
            <div className="font-medium">{h.title || h.slug || h.id}</div>
            {h.summary ? (
              <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">{h.summary}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
