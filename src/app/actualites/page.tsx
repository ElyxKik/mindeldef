import Section from "@/components/common/Section";
import CardNews from "@/components/cards/CardNews";

export default function Page() {
  const items = [
    { title: "Communiqué du Ministère", href: "/actualites/communique-ministere", date: "2025-08-10", excerpt: "Texte d'exemple de communiqué." },
    { title: "Coopération régionale", href: "/actualites/cooperation-regionale", date: "2025-08-08", excerpt: "Texte d'exemple sur la coopération." },
  ];
  return (
    <Section>
      <h1 className="text-2xl font-semibold tracking-tight">Actualités</h1>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((n) => (
          <CardNews key={n.href} {...n} />
        ))}
      </div>
    </Section>
  );
}
