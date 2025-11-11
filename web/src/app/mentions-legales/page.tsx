import Section from "@/components/common/Section";
import DefaultHero from "@/components/heroes/DefaultHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales | Ministère délégué à la Défense — RDC",
  description: "Mentions légales du site du Ministère délégué à la Défense de la République Démocratique du Congo.",
};

export default function Page() {
  return (
    <>
      <DefaultHero 
        title="Mentions légales" 
        subtitle="Informations légales concernant le site du Ministère délégué à la Défense" 
        height="small"
      />
      <Section>
      <h1 className="text-2xl font-semibold tracking-tight">Mentions légales</h1>
      <div className="prose dark:prose-invert max-w-none mt-4">
        <p>Éditeur, hébergement, responsabilité, contact officiel.</p>
      </div>
    </Section>
    </>
  );
}
