type Variant = "info" | "warning" | "success" | "error";

const styles: Record<Variant, string> = {
  info: "bg-blue-50 text-blue-900 border-blue-200",
  warning: "bg-yellow-50 text-yellow-900 border-yellow-200",
  success: "bg-green-50 text-green-900 border-green-200",
  error: "bg-red-50 text-red-900 border-red-200",
};

export default function Alert({ variant = "info", children }: { variant?: Variant; children: React.ReactNode }) {
  return <div className={`rounded-md border p-3 text-sm ${styles[variant]}`}>{children}</div>;
}
