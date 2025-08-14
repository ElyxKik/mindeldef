import Section from "@/components/common/Section";

export default function Page() {
  return (
    <Section>
      <h1 className="text-2xl font-semibold tracking-tight">Accessibilité</h1>
      <div className="prose dark:prose-invert max-w-none mt-4">
        <p>Engagement de conformité WCAG 2.2 AA. Navigation clavier, contrastes, alternatives textuelles.</p>
      </div>
    </Section>
  );
}
