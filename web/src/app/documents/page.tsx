import Section from "@/components/common/Section";
import { Metadata } from "next";
import DefaultHero from "@/components/heroes/DefaultHero";
import DocumentsClient from "./DocumentsClient";

export const metadata: Metadata = {
  title: "Documents officiels | Ministère délégué à la Défense",
  description: "Consultez les documents officiels du Ministère délégué à la Défense : décrets, arrêtés, circulaires, rapports et autres publications administratives.",
  openGraph: {
    title: "Documents officiels | Ministère délégué à la Défense",
    description: "Consultez les documents officiels du Ministère délégué à la Défense : décrets, arrêtés, circulaires, rapports et autres publications administratives.",
    images: ['/images/placeholder-documents-hero.jpg'],
  },
};

export default function Page() {
  return (
    <>
      <DefaultHero 
        title="Documents officiels" 
        subtitle="Décrets, arrêtés, circulaires, rapports et autres publications administratives du Ministère" 
        height="medium"
      />

      {/* Contenu principal */}
      <Section className="py-12">
        <DocumentsClient />
      </Section>
    </>
  );
}
