import Section from "@/components/common/Section";
import { Metadata } from "next";
import DefaultHero from "@/components/heroes/DefaultHero";
import CabinetClient from "./CabinetClient";

export const metadata: Metadata = {
  title: "Le Cabinet | Ministère délégué à la Défense — RDC",
  description: "Présentation des membres du cabinet du Ministre délégué à la Défense de la République Démocratique du Congo.",
  openGraph: {
    title: "Le Cabinet | Ministère délégué à la Défense — RDC",
    description: "Présentation des membres du cabinet du Ministre délégué à la Défense de la République Démocratique du Congo.",
    images: [{ url: "/images/og-cabinet.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <>
      <DefaultHero 
        title="Le Cabinet du Ministre" 
        subtitle="L'équipe qui accompagne le Ministre délégué à la Défense dans l'accomplissement de ses missions" 
        height="medium"
      />

      {/* Contenu principal */}
      <Section>
        <div className="container mx-auto px-4">
          <CabinetClient />
        </div>
      </Section>
    </>
  );
}
