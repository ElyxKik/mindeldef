import Section from "@/components/common/Section";

export default function Page() {
  return (
    <Section>
      <h1 className="text-2xl font-semibold tracking-tight">Données personnelles</h1>
      <div className="prose dark:prose-invert max-w-none mt-4">
        <p>Base légale, finalités, durée de conservation, droits des usagers.</p>
      </div>
    </Section>
  );
}
