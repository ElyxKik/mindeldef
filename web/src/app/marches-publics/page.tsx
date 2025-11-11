import Section from "@/components/common/Section";
import { Metadata } from "next";
import DefaultHero from "@/components/heroes/DefaultHero";
import MarchesPublicsClient from "./MarchesPublicsClient";

export const metadata: Metadata = {
  title: "Marchés publics | Ministère délégué à la Défense",
  description: "Consultez les appels d'offres, appels à manifestation d'intérêt et autres marchés publics du Ministère délégué à la Défense.",
  openGraph: {
    title: "Marchés publics | Ministère délégué à la Défense",
    description: "Consultez les appels d'offres, appels à manifestation d'intérêt et autres marchés publics du Ministère délégué à la Défense.",
    images: ['/images/placeholder-marches-hero.jpg'],
  },
};

export default function Page() {
  return (
    <>
      <DefaultHero 
        title="Marchés publics" 
        subtitle="Appels d'offres, appels à manifestation d'intérêt et autres marchés publics du Ministère" 
        height="medium"
      />

      {/* Contenu principal */}
      <Section className="py-12">
        <MarchesPublicsClient />
      </Section>
    </>
  );
}
