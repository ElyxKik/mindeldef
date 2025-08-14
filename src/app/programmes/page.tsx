import Section from "@/components/common/Section";
import Timeline from "@/components/timeline/Timeline";

export default function Page() {
  const items = [
    { title: "Modernisation des infrastructures", date: "T1 2025", description: "Lancement des travaux prioritaires." },
    { title: "e-Gouvernement Défense", date: "T2 2025", description: "Dématérialisation des procédures." },
  ];
  return (
    <Section>
      <h1 className="text-2xl font-semibold tracking-tight">Programmes & projets</h1>
      <div className="mt-6">
        <Timeline items={items} />
      </div>
    </Section>
  );
}
