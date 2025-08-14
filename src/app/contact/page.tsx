import Section from "@/components/common/Section";
import Alert from "@/components/feedback/Alert";

export default function Page() {
  return (
    <Section>
      <h1 className="text-2xl font-semibold tracking-tight">Contact</h1>
      <form className="mt-6 grid gap-4 max-w-2xl" aria-describedby="contact-help">
        <label className="grid gap-2">
          <span>Nom</span>
          <input required name="name" className="border rounded px-3 py-2" />
        </label>
        <label className="grid gap-2">
          <span>Email</span>
          <input required type="email" name="email" className="border rounded px-3 py-2" />
        </label>
        <label className="grid gap-2">
          <span>Message</span>
          <textarea required name="message" rows={5} className="border rounded px-3 py-2" />
        </label>
        <button type="submit" className="inline-flex items-center justify-center rounded bg-zinc-900 text-white px-4 py-2 text-sm">Envoyer</button>
        <p id="contact-help" className="text-xs text-zinc-500">Vos données sont traitées conformément à la page Données personnelles.</p>
      </form>
      <div className="mt-6"><Alert variant="info">Formulaire à relier au back-office (CSRF, hCaptcha, rate limit).</Alert></div>
    </Section>
  );
}
