import Section from "@/components/common/Section";
import DefaultHero from "@/components/heroes/DefaultHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibilité | Ministère délégué à la Défense — RDC",
  description: "Engagement d'accessibilité du site du Ministère délégué à la Défense de la République Démocratique du Congo.",
};

export default function Page() {
  return (
    <>
      <DefaultHero 
        title="Accessibilité" 
        subtitle="Notre engagement pour un site accessible à tous" 
        height="small"
      />
      <Section>
      <h1 className="text-2xl font-semibold tracking-tight">Accessibilité</h1>
      <div className="prose dark:prose-invert max-w-none mt-4">
        <p>Engagement de conformité WCAG 2.2 AA. Navigation clavier, contrastes, alternatives textuelles.</p>
      </div>
    </Section>
    </>
  );
}
