import { Metadata } from "next";
import Section from "@/components/common/Section";
import DefaultHero from "@/components/heroes/DefaultHero";
import AttributionsClient from "./AttributionsClient";

export const metadata: Metadata = {
  title: "Attributions | Ministère délégué à la Défense — RDC",
  description: "Découvrez les attributions officielles du Ministère délégué à la Défense de la République Démocratique du Congo.",
};

export default function Page() {
  return (
    <>
      <DefaultHero 
        title="Attributions" 
        subtitle="Les responsabilités et prérogatives officielles du Ministère délégué à la Défense" 
        height="medium"
      />

      {/* Main content */}
      <Section>
        <div className="container mx-auto px-4">
          <AttributionsClient />
        </div>
      </Section>
    </>
  );
}
