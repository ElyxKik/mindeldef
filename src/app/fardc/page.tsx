import Section from "@/components/common/Section";
import ParallaxHero from "@/components/heroes/ParallaxHero";
import FardcClient from "./FardcClient";
import { Metadata } from "next";

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
      <ParallaxHero 
        title="Forces Armées (FARDC)" 
        subtitle="Défense de l'intégrité territoriale et protection des citoyens" 
        imageSrc="/images/placeholder-fardc-hero.jpg"
        imageAlt="Forces Armées de la République Démocratique du Congo"
        height="large"
      />
      <Section className="py-12">
        <FardcClient />
      </Section>
    </>
  );
}
