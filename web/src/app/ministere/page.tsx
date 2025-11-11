import Section from "@/components/common/Section";
import DefaultHero from "@/components/heroes/DefaultHero";

export default function Page() {
  return (
    <>
      <DefaultHero title="Le Ministère" subtitle="Missions, attributions, organigramme, biographie, agenda" />
      <Section>
        <div className="prose dark:prose-invert max-w-none">
          <h2>Missions & attributions</h2>
          <p>Contenu à intégrer depuis le CMS (Strapi/Directus).</p>
          <h2>Organigramme</h2>
          <p>Schéma d'organisation et responsabilités.</p>
          <h2>Biographie</h2>
          <p>Biographie officielle du/de la ministre délégué(e).</p>
          <h2>Agenda</h2>
          <p>Événements, audiences et déplacements.</p>
        </div>
      </Section>
    </>
  );
}
