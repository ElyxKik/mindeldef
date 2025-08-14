import Section from "@/components/common/Section";
import CardDocument from "@/components/cards/CardDocument";

export default function Page() {
  const docs = [
    { title: "Décret n°2025-001", href: "/documents/1", type: "Décret", service: "Défense", date: "2025-07-01" },
    { title: "Rapport annuel 2024", href: "/documents/2", type: "Rapport", service: "SG", date: "2025-02-20" },
    { title: "Circulaire 15/2025", href: "/documents/3", type: "Circulaire", service: "Cabinet", date: "2025-06-12" },
  ];
  return (
    <Section>
      <h1 className="text-2xl font-semibold tracking-tight">Documents officiels</h1>
      <div className="mt-4 grid gap-3 grid-cols-1 md:grid-cols-4">
        <select className="border rounded px-3 py-2"><option>Type</option></select>
        <select className="border rounded px-3 py-2"><option>Année</option></select>
        <select className="border rounded px-3 py-2"><option>Service</option></select>
        <input className="border rounded px-3 py-2" placeholder="Mot-clé" />
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {docs.map((d) => (
          <CardDocument key={d.href} {...d} />
        ))}
      </div>
    </Section>
  );
}
