type Item = { title: string; date?: string; description?: string };

export default function Timeline({ items }: { items: Item[] }) {
  return (
    <ol className="relative border-s border-zinc-200 dark:border-zinc-800">
      {items.map((it, i) => (
        <li key={i} className="ms-6 py-4">
          <span className="absolute -start-1.5 mt-2 h-3 w-3 rounded-full bg-blue-600" />
          <h4 className="font-medium">{it.title}</h4>
          {it.date ? <time className="text-xs text-zinc-500">{it.date}</time> : null}
          {it.description ? (
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{it.description}</p>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
