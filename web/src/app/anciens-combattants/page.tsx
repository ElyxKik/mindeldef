import { Metadata } from "next";
import Section from "@/components/common/Section";
import DefaultHero from "@/components/heroes/DefaultHero";

export const metadata: Metadata = {
  title: "Anciens Combattants | Ministère délégué à la Défense",
  description: "Programmes de soutien, reconnaissance et assistance pour les anciens combattants de la République Démocratique du Congo",
  openGraph: {
    title: "Anciens Combattants | Ministère délégué à la Défense",
    description: "Programmes de soutien et reconnaissance des anciens combattants",
    images: ['/images/placeholder-anciens-combattants-hero.jpg'],
  },
};

export default function AnciensCombattants() {
  return (
    <>
      <DefaultHero 
        title="Anciens Combattants" 
        subtitle="Honorer le service, soutenir les héros de la nation — Programmes de soutien, reconnaissance et assistance pour les 80 000+ anciens combattants de la République Démocratique du Congo"
        height="medium"
      />

      {/* Introduction Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Reconnaissance et Soutien</h2>
          <p className="text-lg text-slate-700 mb-6 leading-relaxed">
            Le Ministère délégué à la Défense reconnaît et honore le service des 80 000+ anciens combattants de la République Démocratique du Congo. Ces hommes et femmes ont consacré leur vie à la protection et à la sécurité de notre nation. Nous nous engageons à soutenir leur réinsertion sociale, leur accès aux soins de santé, et la reconnaissance de leurs sacrifices.
          </p>
        </div>
      </Section>

      {/* Programs Section */}
      <Section>
        <h2 className="text-3xl font-bold mb-12 text-slate-900">Nos Programmes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Program 1 */}
          <div className="bg-white rounded-lg p-8 border border-slate-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900">Aide Sociale</h3>
            <p className="text-slate-700 mb-4">
              Assistance financière, allocations de retraite, et programmes de réinsertion professionnelle pour les anciens combattants et leurs familles.
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>✓ Allocations mensuelles</li>
              <li>✓ Aide au logement</li>
              <li>✓ Formation professionnelle</li>
              <li>✓ Microfinance et entrepreneuriat</li>
            </ul>
          </div>

          {/* Program 2 */}
          <div className="bg-white rounded-lg p-8 border border-slate-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-2.08-2.54-1.41 1.41L10.5 19l4.96-6.29-1.46-1.42z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900">Soins de Santé</h3>
            <p className="text-slate-700 mb-4">
              Accès gratuit aux services médicaux, traitement des blessures de guerre, et programmes de réadaptation physique et psychologique.
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>✓ Consultations médicales gratuites</li>
              <li>✓ Traitement des traumatismes</li>
              <li>✓ Réadaptation physique</li>
              <li>✓ Soutien psychologique</li>
            </ul>
          </div>

          {/* Program 3 */}
          <div className="bg-white rounded-lg p-8 border border-slate-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900">Reconnaissance</h3>
            <p className="text-slate-700 mb-4">
              Honneurs, distinctions, et célébration du service rendu à la nation. Participation aux événements officiels et commémorations.
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>✓ Médailles et décorations</li>
              <li>✓ Cérémonies officielles</li>
              <li>✓ Commémorations nationales</li>
              <li>✓ Monuments et mémoriaux</li>
            </ul>
          </div>

          {/* Program 4 */}
          <div className="bg-white rounded-lg p-8 border border-slate-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900">Communauté</h3>
            <p className="text-slate-700 mb-4">
              Réseaux d'entraide, associations d'anciens combattants, et événements de fraternité pour maintenir les liens entre camarades.
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>✓ Associations locales</li>
              <li>✓ Réunions fraternelles</li>
              <li>✓ Entraide mutuelle</li>
              <li>✓ Événements sociaux</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Statistics Section */}
      <Section className="bg-slate-50 py-12">
        <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">Chiffres Clés</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">80K+</div>
            <p className="text-slate-700">Anciens Combattants</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">60+</div>
            <p className="text-slate-700">Ans de Service</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">26</div>
            <p className="text-slate-700">Provinces Couvertes</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">100%</div>
            <p className="text-slate-700">Engagement</p>
          </div>
        </div>
      </Section>

    </>
  );
}
