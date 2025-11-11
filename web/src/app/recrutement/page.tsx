import Section from "@/components/common/Section";
import DefaultHero from "@/components/heroes/DefaultHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recrutement | Ministère délégué à la Défense — RDC",
  description: "Informations sur les opportunités de recrutement au sein du Ministère délégué à la Défense et des FARDC.",
};

export default function Page() {
  return (
    <>
      <DefaultHero 
        title="Recrutement" 
        subtitle="Opportunités de carrière au sein du Ministère délégué à la Défense et des FARDC" 
        height="medium"
      />
      <Section>
      <h1 className="text-2xl font-semibold tracking-tight">Recrutement</h1>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Informations générales et renvoi vers les canaux officiels des FARDC.</p>
      <a className="inline-block mt-6 px-4 py-2 rounded bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900" href="https://www.fardc.org" target="_blank" rel="noreferrer">Aller vers FARDC</a>
    </Section>
    </>
  );
}
