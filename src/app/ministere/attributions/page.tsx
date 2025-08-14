import { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/common/Section";
import AttributionsClient from "./AttributionsClient";

export const metadata: Metadata = {
  title: "Attributions | Ministère délégué à la Défense — RDC",
  description: "Découvrez les attributions officielles du Ministère délégué à la Défense de la République Démocratique du Congo.",
};

export default function Page() {
  return (
    <>
      {/* Hero section */}
      <div className="relative h-[40vh] min-h-[320px] max-h-[480px] w-full overflow-hidden">
        <Image 
          src="/images/placeholder-attributions-hero.jpg" 
          alt="Attributions du Ministère" 
          fill 
          className="object-cover object-center opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/70 to-zinc-900/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Attributions</h1>
          <p className="text-xl max-w-3xl">
            Les responsabilités et prérogatives officielles du Ministère délégué à la Défense
          </p>
        </div>
      </div>

      {/* Main content */}
      <Section>
        <div className="container mx-auto px-4">
          <AttributionsClient />
        </div>
      </Section>
    </>
  );
}
