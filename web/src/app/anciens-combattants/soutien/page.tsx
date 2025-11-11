import { Metadata } from "next";
import Section from "@/components/common/Section";
import DefaultHero from "@/components/heroes/DefaultHero";

export const metadata: Metadata = {
  title: "Programmes de Soutien | Anciens Combattants",
  description: "Aide sociale, médicale et financière pour les anciens combattants",
  openGraph: {
    title: "Programmes de Soutien | Anciens Combattants",
    description: "Aide sociale, médicale et financière pour les anciens combattants",
  },
};

export default function Soutien() {
  return (
    <>
      <DefaultHero 
        title="Programmes de Soutien" 
        subtitle="Aide sociale, médicale et financière pour les anciens combattants"
        height="small"
      />

      {/* Main Content */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Aide Sociale et Financière</h2>
          
          <div className="space-y-8">
            {/* Allocations */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold mb-3 text-red-600 dark:text-red-400">Allocations Mensuelles</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Les anciens combattants reçoivent une allocation mensuelle en fonction de leur grade et de leur durée de service. Cette allocation est versée régulièrement et ajustée selon l'inflation.
              </p>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li>• Allocation de base garantie</li>
                <li>• Suppléments selon le grade</li>
                <li>• Ajustement annuel</li>
                <li>• Versement direct en compte bancaire</li>
              </ul>
            </div>

            {/* Housing */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold mb-3 text-red-600 dark:text-red-400">Aide au Logement</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Programme d'aide au logement pour les anciens combattants et leurs familles, incluant des subventions et des facilités de crédit.
              </p>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li>• Subventions pour construction</li>
                <li>• Crédits immobiliers facilités</li>
                <li>• Aide à la rénovation</li>
                <li>• Assistance pour les sans-abri</li>
              </ul>
            </div>

            {/* Professional Training */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold mb-3 text-red-600 dark:text-red-400">Formation Professionnelle</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Programmes de formation et de reconversion professionnelle pour faciliter la réinsertion dans le secteur civil.
              </p>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li>• Formations gratuites</li>
                <li>• Certification professionnelle</li>
                <li>• Aide à l'emploi</li>
                <li>• Placement professionnel</li>
              </ul>
            </div>

            {/* Microfinance */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold mb-3 text-red-600 dark:text-red-400">Microfinance et Entrepreneuriat</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Accès à des microcrédits et soutien pour les anciens combattants souhaitant créer leur propre entreprise.
              </p>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li>• Microcrédits sans intérêt</li>
                <li>• Accompagnement entrepreneurial</li>
                <li>• Subventions de démarrage</li>
                <li>• Mentorat commercial</li>
              </ul>
            </div>
          </div>

          {/* Application Process */}
          <div className="mt-12 bg-slate-50 dark:bg-slate-900 rounded-lg p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Comment Postuler?</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-red-600 text-white font-bold">1</div>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white">Préparez vos documents</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">Carte d'identité, certificat de service, documents médicaux si applicable</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-red-600 text-white font-bold">2</div>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white">Contactez notre direction</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">Rendez-vous ou appel pour soumettre votre demande</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-red-600 text-white font-bold">3</div>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white">Évaluation de votre dossier</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">Notre équipe examine votre demande (délai: 2-4 semaines)</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-red-600 text-white font-bold">4</div>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white">Approbation et versement</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">Notification de l'approbation et début des versements</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
