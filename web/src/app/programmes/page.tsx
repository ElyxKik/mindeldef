import Section from "@/components/common/Section";
import { Metadata } from "next";
import DefaultHero from "@/components/heroes/DefaultHero";
import ProgrammesClient from "./ProgrammesClient";

export const metadata: Metadata = {
  title: "Programmes & projets | Ministère délégué à la Défense",
  description: "Découvrez les programmes et projets du Ministère délégué à la Défense : modernisation des infrastructures, formation, équipement et développement.",
  openGraph: {
    title: "Programmes & projets | Ministère délégué à la Défense",
    description: "Découvrez les programmes et projets du Ministère délégué à la Défense : modernisation des infrastructures, formation, équipement et développement.",
    images: ['/images/placeholder-programmes-hero.jpg'],
  },
};

export default function Page() {
  return (
    <>
      <DefaultHero 
        title="Programmes & projets" 
        subtitle="Modernisation des infrastructures, formation, équipement et développement au service de la Défense nationale" 
        height="medium"
      />

      {/* Contenu principal */}
      <Section className="py-12">
        <ProgrammesClient />
      </Section>
    </>
  );
}
