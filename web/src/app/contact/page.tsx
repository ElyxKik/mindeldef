import Section from "@/components/common/Section";
import { Metadata } from "next";
import DefaultHero from "@/components/heroes/DefaultHero";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact | Ministère délégué à la Défense",
  description: "Contactez le Ministère délégué à la Défense. Formulaire de contact, coordonnées et adresse.",
  openGraph: {
    title: "Contact | Ministère délégué à la Défense",
    description: "Contactez le Ministère délégué à la Défense. Formulaire de contact, coordonnées et adresse.",
    images: ['/images/placeholder-contact-hero.jpg'],
  },
};

export default function Page() {
  return (
    <>
      <DefaultHero 
        title="Contactez-nous" 
        subtitle="Nous sommes à votre écoute pour toute demande d'information ou question relative au Ministère" 
        height="medium"
      />

      {/* Contenu principal */}
      <Section className="py-12">
        <ContactClient />
      </Section>
    </>
  );
}
