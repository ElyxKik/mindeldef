import Section from "@/components/common/Section";
import { Metadata } from "next";
import DefaultHero from "@/components/heroes/DefaultHero";
import RechercheClient from "./RechercheClient";

export const metadata: Metadata = {
  title: "Recherche | Ministère délégué à la Défense",
  description: "Recherchez des informations, actualités, documents et programmes du Ministère délégué à la Défense.",
  openGraph: {
    title: "Recherche | Ministère délégué à la Défense",
    description: "Recherchez des informations, actualités, documents et programmes du Ministère délégué à la Défense.",
    images: ['/images/placeholder-recherche-hero.jpg'],
  },
};

export default function Page() {
  return (
    <>
      <DefaultHero 
        title="Recherche" 
        subtitle="Trouvez rapidement des informations, actualités, documents et programmes du Ministère" 
        height="medium"
      />

      {/* Contenu principal */}
      <Section className="py-12">
        <RechercheClient />
      </Section>
    </>
  );
}
