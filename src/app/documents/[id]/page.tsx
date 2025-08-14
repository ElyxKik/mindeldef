import Section from "@/components/common/Section";

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <Section>
      <h1 className="text-2xl font-semibold tracking-tight">Document #{id}</h1>
      <div className="prose dark:prose-invert max-w-none mt-4">
        <p>Type: Décret / Rapport / Circulaire</p>
        <p>Service émetteur: Ministère de la Défense</p>
        <p>Date: 2025-08-01</p>
        <p>Résumé: Lorem ipsum dolor sit amet…</p>
      </div>
      <a className="inline-block mt-6 px-4 py-2 rounded bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900" href="#">Télécharger le PDF</a>
    </Section>
  );
}
