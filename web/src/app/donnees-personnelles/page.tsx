import Section from "@/components/common/Section";
import DefaultHero from "@/components/heroes/DefaultHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Données personnelles | Ministère délégué à la Défense — RDC",
  description: "Politique de protection des données personnelles du site du Ministère délégué à la Défense.",
};

export default function Page() {
  return (
    <>
      <DefaultHero 
        title="Données personnelles" 
        subtitle="Notre politique de protection des données personnelles" 
        height="small"
      />
      <Section>
      <h1 className="text-2xl font-semibold tracking-tight">Données personnelles</h1>
      <div className="prose dark:prose-invert max-w-none mt-4">
        <p>Base légale, finalités, durée de conservation, droits des usagers.</p>
      </div>
    </Section>
    </>
  );
}
