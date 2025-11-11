import Section from "@/components/common/Section";
import DefaultHero from "@/components/heroes/DefaultHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Médias | Ministère délégué à la Défense — RDC",
  description: "Galerie de photos et vidéos du Ministère délégué à la Défense de la République Démocratique du Congo.",
};

export default function Page() {
  const images = ["/next.svg", "/vercel.svg", "/globe.svg", "/file.svg", "/window.svg"];
  return (
    <>
      <DefaultHero 
        title="Médias" 
        subtitle="Galerie de photos et vidéos du Ministère délégué à la Défense" 
        height="medium"
      />
      <Section>
      <h1 className="text-2xl font-semibold tracking-tight">Médias</h1>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {images.map((src, i) => (
          <div key={i} className="aspect-video border rounded-lg grid place-items-center text-xs text-zinc-500">
            <span>{src}</span>
          </div>
        ))}
      </div>
    </Section>
    </>
  );
}
