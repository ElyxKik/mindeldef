import Section from "@/components/common/Section";

const faqs = [
  { q: "Comment contacter le Ministère ?", a: "Via la page Contact et les adresses officielles." },
  { q: "Où trouver les documents officiels ?", a: "Dans la section Documents, filtrables par type et année." },
];

export default function Page() {
  return (
    <Section>
      <h1 className="text-2xl font-semibold tracking-tight">FAQ</h1>
      <div className="mt-6 divide-y divide-zinc-200 dark:divide-zinc-800">
        {faqs.map((f, i) => (
          <details key={i} className="py-4">
            <summary className="cursor-pointer font-medium">{f.q}</summary>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
