import { Metadata } from "next";
import HeroSlider, { type Slide } from "@/components/heroes/HeroSlider";
import Image from "next/image";
import Section from "@/components/common/Section";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Ministère délégué à la Défense - République du Congo",
  description: "Portail officiel du Ministère délégué à la Défense de la République du Congo - Actualités, documents, marchés publics et informations institutionnelles",
  openGraph: {
    title: "Ministère délégué à la Défense - République du Congo",
    description: "Portail officiel du Ministère délégué à la Défense de la République du Congo",
    images: ["/images/home/hero-1.jpeg"],
  },
};

export default function Home() {
  return (
    <>
      {/* Hero section: slider animé */}
      <HeroSlider
        height="large"
        slides={[
          {
            imageSrc: "/images/home/hero-1.jpeg",
            alt: "Ministère délégué à la Défense - République du Congo",
            title: "Ministère délégué à la Défense",
            subtitle:
              "Au service de la sécurité, de la stabilité et de la souveraineté nationale",
            cta: { text: "Découvrir nos missions", href: "/ministere/missions" },
          },
          {
            imageSrc: "/photo-eliezer.jpeg",
            alt: "Décès de l'ancien combattant Mukoko Ndotoni",
            title: "Décès ce jeudi aux CHK de l'ancien combattant Mukoko Ndotoni",
            subtitle: "Ce 1er Sergent de la force publique âgé de 104 ans avait participé à la Guerre Mondiale 40-45",
            cta: { text: "Voir les actualités", href: "/actualites" },
          },
        ] as Slide[]}
      />
      
      {/* Mission Statement Section */}
      <Section className="bg-slate-50 dark:bg-slate-800 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Notre Mission</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            Le Ministère délégué à la Défense œuvre pour la protection et la sécurité du territoire national, le renforcement des capacités opérationnelles des Forces Armées Congolaises (FARDC), et la promotion d'une défense moderne, professionnelle et respectueuse des droits humains.
          </p>
        </div>
      </Section>
      
      {/* Key Statistics Section */}
      <Section className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-[var(--color-primary)] mb-2">250K+</div>
            <p className="text-slate-600 dark:text-slate-300">Militaires actifs</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[var(--color-primary)] mb-2">80K+</div>
            <p className="text-slate-600 dark:text-slate-300">Anciens combattants</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[var(--color-primary)] mb-2">26</div>
            <p className="text-slate-600 dark:text-slate-300">Provinces couvertes</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[var(--color-primary)] mb-2">60+</div>
            <p className="text-slate-600 dark:text-slate-300">Ans de service</p>
          </div>
        </div>
      </Section>
      
      {/* Section Le Ministre */}
      <Section>
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/images/ministere/ministre.jpeg"
              alt="Le Ministre délégué à la Défense"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Le Ministre délégué</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              À la tête du ministère, le Ministre délégué à la Défense dirige les politiques de sécurité nationale et de défense. Il assure la coordination entre les différentes branches des Forces Armées Congolaises et met en œuvre les priorités stratégiques du gouvernement en matière de sécurité.
            </p>
            <a
              href="/ministere/ministre"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-[var(--color-primary)] text-white font-medium hover:bg-blue-700 transition-colors"
            >
              Voir la biographie
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </Section>
      
      {/* Contenu principal avec animations */}
      <Section>
        <HomeClient />
      </Section>
    </>
  );
}
