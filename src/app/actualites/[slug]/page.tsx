import Section from "@/components/common/Section";
import Alert from "@/components/feedback/Alert";

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  return (
    <Section>
      <h1 className="text-3xl font-semibold tracking-tight">{slug.replace(/-/g, " ")}</h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">Page d'actualité (exemple). Le contenu sera chargé depuis le CMS.</p>
      <div className="prose dark:prose-invert max-w-none mt-6">
        <p>Contenu riche, images, citations, pièces jointes…</p>
      </div>
      <div className="mt-6">
        <Alert variant="info">PDF et galerie média via composants dédiés.</Alert>
      </div>
    </Section>
  );
}
