import Image from "next/image";
import Section from "@/components/common/Section";
import { Metadata } from "next";
import OrganigrammeClient from "./OrganigrammeClient";

export const metadata: Metadata = {
  title: "Organigramme | Ministère délégué à la Défense — RDC",
  description: "Structure organisationnelle du Ministère délégué à la Défense de la République Démocratique du Congo.",
  openGraph: {
    title: "Organigramme | Ministère délégué à la Défense — RDC",
    description: "Structure organisationnelle du Ministère délégué à la Défense de la République Démocratique du Congo.",
    images: [{ url: "/images/og-organigramme.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <>
      {/* Hero section */}
      <div className="relative h-[40vh] min-h-[320px] max-h-[480px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-[var(--color-primary)]/90 z-10" />
        <Image
          src="/images/placeholder-organigramme-hero.jpg"
          alt="Organigramme du Ministère"
          fill
          priority
          className="object-cover object-center opacity-40"
          sizes="100vw"
        />
        <div className="relative z-20 h-full flex flex-col justify-end">
          <div className="container mx-auto px-4 pb-12">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
              Organigramme
            </h1>
            <p className="text-white/90 text-xl max-w-2xl">
              Structure et organisation du Ministère délégué à la Défense
            </p>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <Section>
        <div className="container mx-auto px-4">
          <OrganigrammeClient />
        </div>
      </Section>
    </>
  );
}
