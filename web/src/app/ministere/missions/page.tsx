import Section from "@/components/common/Section";
import { Metadata } from "next";
import DefaultHero from "@/components/heroes/DefaultHero";
import MissionsClient from "./MissionsClient";

export const metadata: Metadata = {
  title: "Missions | Ministère délégué à la Défense — RDC",
  description: "Découvrez les missions et objectifs du Ministère délégué à la Défense de la République Démocratique du Congo.",
  openGraph: {
    title: "Missions | Ministère délégué à la Défense — RDC",
    description: "Découvrez les missions et objectifs du Ministère délégué à la Défense de la République Démocratique du Congo.",
    images: [{ url: "/images/og-missions.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <>
      <DefaultHero 
        title="Nos Missions" 
        subtitle="Les objectifs et responsabilités du Ministère délégué à la Défense" 
        height="medium"
      />

      {/* Contenu principal */}
      <Section>
        <div className="container mx-auto px-4">
          <MissionsClient />
        </div>
      </Section>
    </>
  );
}
