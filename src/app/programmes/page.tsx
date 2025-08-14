import Section from "@/components/common/Section";
import Image from "next/image";
import { Metadata } from "next";
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
      {/* Hero section avec image Programmes */}
      <div className="relative h-[40vh] min-h-[320px] max-h-[480px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-[var(--color-primary)]/90 z-10" />
        <Image
          src="/images/placeholder-programmes-hero.jpg"
          alt="Programmes et projets du Ministère délégué à la Défense"
          fill
          priority
          className="object-cover object-center opacity-40"
          sizes="100vw"
        />
        <div className="relative z-20 h-full flex flex-col justify-end">
          <div className="container mx-auto px-4 pb-12">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
              Programmes & projets
            </h1>
            <p className="text-white/90 text-xl max-w-2xl">
              Modernisation des infrastructures, formation, équipement et développement au service de la Défense nationale
            </p>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <Section className="py-12">
        <ProgrammesClient />
      </Section>
    </>
  );
}
