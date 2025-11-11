import Section from "@/components/common/Section";
import { Metadata } from "next";
import DefaultHero from "@/components/heroes/DefaultHero";
import ActualitesClient from "./ActualitesClient";

export const metadata: Metadata = {
  title: "Actualités | Ministère délégué à la Défense",
  description: "Suivez les dernières actualités, communiqués et événements du Ministère délégué à la Défense de la République Démocratique du Congo.",
  openGraph: {
    title: "Actualités | Ministère délégué à la Défense",
    description: "Suivez les dernières actualités, communiqués et événements du Ministère délégué à la Défense de la République Démocratique du Congo.",
    images: ['/images/placeholder-news-hero.jpg'],
  },
};

export default function Page() {
  return (
    <>
      <DefaultHero 
        title="Actualités" 
        subtitle="Communiqués officiels, événements et dernières informations du Ministère délégué à la Défense" 
        height="medium"
      />

      {/* Contenu principal */}
      <Section className="py-12">
        <ActualitesClient />
      </Section>
    </>
  );
}
