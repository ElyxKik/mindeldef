export default function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 py-12 text-sm text-zinc-600 dark:text-zinc-400">
        <p>
          © {new Date().getFullYear()} Ministère délégué à la Défense — République Démocratique du Congo.
        </p>
      </div>
    </footer>
  );
}
