export function govOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "GovernmentOrganization",
    name: "Ministère délégué à la Défense",
    url: process.env.NEXT_PUBLIC_SITE_URL || "",
    address: {
      "@type": "PostalAddress",
      addressCountry: "CD",
    },
  } as const;
}
