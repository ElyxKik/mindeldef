type Step = { label: string };

export default function Stepper({ steps, active = 0 }: { steps: Step[]; active?: number }) {
  return (
    <div className="flex items-center gap-4">
      {steps.map((s, i) => (
        <div key={i} className="flex items-center gap-2">
          <div
            className={`${i <= active ? "bg-blue-600 text-white" : "bg-zinc-200 text-zinc-700"} h-6 w-6 rounded-full grid place-items-center text-xs`}
          >
            {i + 1}
          </div>
          <span className="text-sm">{s.label}</span>
          {i < steps.length - 1 ? <span className="w-8 h-px bg-zinc-300 dark:bg-zinc-700" /> : null}
        </div>
      ))}
    </div>
  );
}
