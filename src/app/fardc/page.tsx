import Section from "@/components/common/Section";
import ParallaxHero from "@/components/heroes/ParallaxHero";

export default function Page() {
  return (
    <>
      <ParallaxHero title="Forces Armées (FARDC)" subtitle="Présentation, grandes opérations, zones de défense, recrutement" />
      <Section>
        <div className="prose dark:prose-invert max-w-none">
          <h2>Présentation institutionnelle</h2>
          <p>Contenu à intégrer depuis le CMS.</p>
          <h2>Grandes opérations</h2>
          <p>Timeline des opérations majeures.</p>
          <h2>Zones de défense</h2>
          <p>Carte et description des zones.</p>
          <h2>Recrutement</h2>
          <p>Informations et renvoi vers les canaux officiels FARDC.</p>
        </div>
      </Section>
    </>
  );
}
