import Section from "@/components/common/Section";
import FardcClient from "./FardcClient";
import { Metadata } from "next";
import DefaultHero from "@/components/heroes/DefaultHero";

export const metadata: Metadata = {
  title: "Forces Armées (FARDC) | Ministère délégué à la Défense",
  description: "Découvrez les Forces Armées de la République Démocratique du Congo (FARDC) : présentation, grandes opérations, zones de défense et informations sur le recrutement.",
  openGraph: {
    title: "Forces Armées (FARDC) | Ministère délégué à la Défense",
    description: "Découvrez les Forces Armées de la République Démocratique du Congo (FARDC) : présentation, grandes opérations, zones de défense et informations sur le recrutement.",
    images: ['/images/placeholder-fardc-hero.jpg'],
  },
};

export default function Page() {
  return (
    <>
      <DefaultHero 
        title="Forces Armées (FARDC)" 
        subtitle="Défense de l'intégrité territoriale et protection des citoyens de la République Démocratique du Congo" 
        height="medium"
      />
      <Section className="py-12">
        <FardcClient />
      </Section>
    </>
  );
}
