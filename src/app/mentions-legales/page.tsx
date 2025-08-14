import Section from "@/components/common/Section";

export default function Page() {
  return (
    <Section>
      <h1 className="text-2xl font-semibold tracking-tight">Mentions légales</h1>
      <div className="prose dark:prose-invert max-w-none mt-4">
        <p>Éditeur, hébergement, responsabilité, contact officiel.</p>
      </div>
    </Section>
  );
}
