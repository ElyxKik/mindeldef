import Section from "@/components/common/Section";
import Image from "next/image";
import { Metadata } from "next";
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
      {/* Hero section avec image Documents */}
      <div className="relative h-[40vh] min-h-[320px] max-h-[480px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-[var(--color-primary)]/90 z-10" />
        <Image
          src="/images/placeholder-documents-hero.jpg"
          alt="Documents officiels du Ministère délégué à la Défense"
          fill
          priority
          className="object-cover object-center opacity-40"
          sizes="100vw"
        />
        <div className="relative z-20 h-full flex flex-col justify-end">
          <div className="container mx-auto px-4 pb-12">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
              Documents officiels
            </h1>
            <p className="text-white/90 text-xl max-w-2xl">
              Décrets, arrêtés, circulaires, rapports et autres publications administratives du Ministère
            </p>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <Section className="py-12">
        <DocumentsClient />
      </Section>
    </>
  );
}
