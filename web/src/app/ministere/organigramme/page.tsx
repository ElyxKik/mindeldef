import Section from "@/components/common/Section";
import { Metadata } from "next";
import DefaultHero from "@/components/heroes/DefaultHero";
import OrganigrammeClient from "./OrganigrammeClient";

export const metadata: Metadata = {
  title: "Organigramme | Ministère délégué à la Défense — RDC",
  description: "Structure organisationnelle du Ministère délégué à la Défense de la République Démocratique du Congo.",
  openGraph: {
    title: "Organigramme | Ministère délégué à la Défense — RDC",
    description: "Structure organisationnelle du Ministère délégué à la Défense de la République Démocratique du Congo.",
    images: [{ url: "/images/og-organigramme.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <>
      <DefaultHero 
        title="Organigramme" 
        subtitle="Structure et organisation du Ministère délégué à la Défense" 
        height="medium"
      />

      {/* Contenu principal */}
      <Section>
        <div className="container mx-auto px-4">
          <OrganigrammeClient />
        </div>
      </Section>
    </>
  );
}
