export function govOrganizationJsonLd() {
  const url = process.env.NEXT_PUBLIC_SITE_URL || 
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");
  return {
    "@context": "https://schema.org",
    "@type": "GovernmentOrganization",
    name: "Ministère délégué à la Défense",
    url,
    address: {
      "@type": "PostalAddress",
      addressCountry: "CD",
    },
  } as const;
}
