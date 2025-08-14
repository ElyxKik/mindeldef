import { NextResponse } from "next/server";

export async function GET() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Ministère délégué à la Défense</title>
    <link>${base}</link>
    <description>Flux RSS des actualités officielles.</description>
    <language>fr</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <item>
      <title>Communiqué du Ministère</title>
      <link>${base}/actualites/communique-ministere</link>
      <description>Exemple d'actualité officielle.</description>
      <pubDate>${new Date().toUTCString()}</pubDate>
    </item>
  </channel>
</rss>`;
  return new NextResponse(feed, { headers: { "Content-Type": "application/xml" } });
}
