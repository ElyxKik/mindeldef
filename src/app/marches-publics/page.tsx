import Section from "@/components/common/Section";
import Image from "next/image";
import { Metadata } from "next";
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
      {/* Hero section avec image Marchés publics */}
      <div className="relative h-[40vh] min-h-[320px] max-h-[480px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-[var(--color-primary)]/90 z-10" />
        <Image
          src="/images/placeholder-marches-hero.jpg"
          alt="Marchés publics du Ministère délégué à la Défense"
          fill
          priority
          className="object-cover object-center opacity-40"
          sizes="100vw"
        />
        <div className="relative z-20 h-full flex flex-col justify-end">
          <div className="container mx-auto px-4 pb-12">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
              Marchés publics
            </h1>
            <p className="text-white/90 text-xl max-w-2xl">
              Appels d'offres, appels à manifestation d'intérêt et autres marchés publics du Ministère
            </p>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <Section className="py-12">
        <MarchesPublicsClient />
      </Section>
    </>
  );
}
