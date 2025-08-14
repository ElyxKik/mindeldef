type Col<T> = { key: keyof T; header: string };

export default function TableSortable<T extends Record<string, any>>({ columns, data }: { columns: Col<T>[]; data: T[] }) {
  return (
    <div className="overflow-x-auto border border-zinc-200 dark:border-zinc-800 rounded-lg">
      <table className="min-w-full text-sm">
        <thead className="bg-zinc-50 dark:bg-zinc-900">
          <tr>
            {columns.map((c) => (
              <th key={String(c.key)} className="text-left p-3 font-medium">
                {c.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-t border-zinc-200 dark:border-zinc-800">
              {columns.map((c) => (
                <td key={String(c.key)} className="p-3">
                  {String(row[c.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
