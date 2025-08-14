import Section from "@/components/common/Section";
import TableSortable from "@/components/data/TableSortable";

export default function Page() {
  const columns = [
    { key: "title", header: "Titre" },
    { key: "status", header: "Statut" },
    { key: "publishedAt", header: "Publication" },
    { key: "deadline", header: "Clôture" },
  ] as const;
  const data = [
    { title: "AO - Fournitures informatiques", status: "Ouvert", publishedAt: "2025-08-01", deadline: "2025-09-01" },
    { title: "AMI - Modernisation infrastructure", status: "Clos", publishedAt: "2025-06-10", deadline: "2025-07-10" },
  ];
  return (
    <Section>
      <h1 className="text-2xl font-semibold tracking-tight">Marchés publics</h1>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Références ARMP / SIGMAP disponibles.</p>
      <div className="mt-6">
        <TableSortable columns={columns as any} data={data as any} />
      </div>
    </Section>
  );
}
