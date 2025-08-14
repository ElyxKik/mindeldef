import Image from "next/image";
import Section from "@/components/common/Section";
import { Metadata } from "next";
import CabinetClient from "./CabinetClient";

export const metadata: Metadata = {
  title: "Le Cabinet | Ministère délégué à la Défense — RDC",
  description: "Présentation des membres du cabinet du Ministre délégué à la Défense de la République Démocratique du Congo.",
  openGraph: {
    title: "Le Cabinet | Ministère délégué à la Défense — RDC",
    description: "Présentation des membres du cabinet du Ministre délégué à la Défense de la République Démocratique du Congo.",
    images: [{ url: "/images/og-cabinet.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <>
      {/* Hero section */}
      <div className="relative h-[40vh] min-h-[320px] max-h-[480px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-[var(--color-primary)]/90 z-10" />
        <Image
          src="/images/placeholder-cabinet-hero.jpg"
          alt="Le Cabinet du Ministre"
          fill
          priority
          className="object-cover object-center opacity-40"
          sizes="100vw"
        />
        <div className="relative z-20 h-full flex flex-col justify-end">
          <div className="container mx-auto px-4 pb-12">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
              Le Cabinet du Ministre
            </h1>
            <p className="text-white/90 text-xl max-w-2xl">
              L'équipe qui accompagne le Ministre délégué à la Défense dans l'accomplissement de ses missions
            </p>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <Section>
        <div className="container mx-auto px-4">
          <CabinetClient />
        </div>
      </Section>
    </>
  );
}
