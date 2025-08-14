import Section from "@/components/common/Section";
import FardcClient from "./FardcClient";
import { Metadata } from "next";
import Image from "next/image";

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
      {/* Hero section avec image FARDC */}
      <div className="relative h-[40vh] min-h-[320px] max-h-[480px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-[var(--color-primary)]/90 z-10" />
        <Image
          src="/images/placeholder-fardc-hero.jpg"
          alt="Forces Armées de la République Démocratique du Congo"
          fill
          priority
          className="object-cover object-center opacity-40"
          sizes="100vw"
        />
        <div className="relative z-20 h-full flex flex-col justify-end">
          <div className="container mx-auto px-4 pb-12">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
              Forces Armées (FARDC)
            </h1>
            <p className="text-white/90 text-xl max-w-2xl">
              Défense de l'intégrité territoriale et protection des citoyens de la République Démocratique du Congo
            </p>
          </div>
        </div>
      </div>
      <Section className="py-12">
        <FardcClient />
      </Section>
    </>
  );
}
