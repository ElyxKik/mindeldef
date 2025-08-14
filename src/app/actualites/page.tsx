import Section from "@/components/common/Section";
import Image from "next/image";
import { Metadata } from "next";
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
      {/* Hero section avec image Actualités */}
      <div className="relative h-[40vh] min-h-[320px] max-h-[480px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-[var(--color-primary)]/90 z-10" />
        <Image
          src="/images/placeholder-news-hero.jpg"
          alt="Actualités du Ministère délégué à la Défense"
          fill
          priority
          className="object-cover object-center opacity-40"
          sizes="100vw"
        />
        <div className="relative z-20 h-full flex flex-col justify-end">
          <div className="container mx-auto px-4 pb-12">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
              Actualités
            </h1>
            <p className="text-white/90 text-xl max-w-2xl">
              Communiqués officiels, événements et dernières informations du Ministère délégué à la Défense
            </p>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <Section className="py-12">
        <ActualitesClient />
      </Section>
    </>
  );
}
