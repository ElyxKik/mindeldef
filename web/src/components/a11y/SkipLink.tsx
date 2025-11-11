export default function SkipLink() {
  return (
    <a
      href="#content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-blue-700 text-white px-3 py-2 rounded"
    >
      Aller au contenu
    </a>
  );
}
