import Section from "@/components/common/Section";
import Image from "next/image";
import { Metadata } from "next";
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
      {/* Hero section avec image Contact */}
      <div className="relative h-[40vh] min-h-[320px] max-h-[480px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-[var(--color-primary)]/90 z-10" />
        <Image
          src="/images/placeholder-contact-hero.jpg"
          alt="Contactez le Ministère délégué à la Défense"
          fill
          priority
          className="object-cover object-center opacity-40"
          sizes="100vw"
        />
        <div className="relative z-20 h-full flex flex-col justify-end">
          <div className="container mx-auto px-4 pb-12">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
              Contactez-nous
            </h1>
            <p className="text-white/90 text-xl max-w-2xl">
              Nous sommes à votre écoute pour toute demande d'information ou question relative au Ministère
            </p>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <Section className="py-12">
        <ContactClient />
      </Section>
    </>
  );
}
