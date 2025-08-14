import { Metadata } from "next";
import ParallaxHero from "@/components/heroes/ParallaxHero";
import Section from "@/components/common/Section";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Ministère délégué à la Défense - République du Congo",
  description: "Portail officiel du Ministère délégué à la Défense de la République du Congo - Actualités, documents, marchés publics et informations institutionnelles",
  openGraph: {
    title: "Ministère délégué à la Défense - République du Congo",
    description: "Portail officiel du Ministère délégué à la Défense de la République du Congo",
    images: ["/images/placeholder-hero.jpg"],
  },
};

export default function Home() {
  return (
    <>
      {/* Hero section avec parallaxe amélioré */}
      <ParallaxHero
        title="Ministère délégué à la Défense"
        subtitle="Portail officiel — Actualités, documents, marchés publics et informations institutionnelles"
        imageSrc="/images/placeholder-hero.jpg"
        height="large"
        cta={{
          text: "Découvrir nos missions",
          href: "/ministere/missions",
        }}
      />
      
      {/* Contenu principal avec animations */}
      <Section>
        <HomeClient />
      </Section>
    </>
  );
}
