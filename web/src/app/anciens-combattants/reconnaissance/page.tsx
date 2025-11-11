import { Metadata } from "next";
import Section from "@/components/common/Section";
import DefaultHero from "@/components/heroes/DefaultHero";

export const metadata: Metadata = {
  title: "Reconnaissance et Honneurs | Anciens Combattants",
  description: "Honneurs, distinctions et célébration du service des anciens combattants",
  openGraph: {
    title: "Reconnaissance et Honneurs | Anciens Combattants",
    description: "Honneurs, distinctions et célébration du service des anciens combattants",
  },
};

export default function Reconnaissance() {
  return (
    <>
      <DefaultHero 
        title="Reconnaissance et Honneurs" 
        subtitle="Célébration du service rendu à la nation"
        height="small"
      />

      {/* Main Content */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Honneurs et Distinctions</h2>
          
          <div className="space-y-8">
            {/* Medals */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold mb-3 text-red-600 dark:text-red-400">Médailles et Décorations</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Les anciens combattants sont reconnus par des médailles et décorations officielles en fonction de leur service et de leurs accomplissements.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Médaille de Service</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Pour 10+ ans de service militaire</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Médaille de Bravoure</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Pour actes de courage exceptionnels</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Croix de Guerre</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Pour service en opérations de combat</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Ordre du Mérite</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Pour contributions exceptionnelles</p>
                </div>
              </div>
            </div>

            {/* Ceremonies */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold mb-3 text-red-600 dark:text-red-400">Cérémonies Officielles</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Participation aux événements officiels et cérémonies de reconnaissance organisés par le ministère et l'État.
              </p>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li>• Défilés militaires et civils</li>
                <li>• Remise de médailles officielles</li>
                <li>• Réceptions présidentielles</li>
                <li>• Honneurs militaires</li>
              </ul>
            </div>

            {/* Commemorations */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold mb-3 text-red-600 dark:text-red-400">Commémorations Nationales</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Participation aux événements commémoratifs nationaux et internationaux pour honorer la mémoire des combattants.
              </p>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li>• Journée des Anciens Combattants (11 novembre)</li>
                <li>• Anniversaires de libération</li>
                <li>• Cérémonies du souvenir</li>
                <li>• Hommages aux morts pour la France</li>
              </ul>
            </div>

            {/* Monuments */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold mb-3 text-red-600 dark:text-red-400">Monuments et Mémoriaux</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Monuments dédiés à la mémoire des anciens combattants et des soldats tombés au champ d'honneur.
              </p>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li>• Mausolée des Héros Nationaux</li>
                <li>• Monuments régionaux</li>
                <li>• Plaques commémoratives</li>
                <li>• Musée Militaire</li>
              </ul>
            </div>

            {/* Publications */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold mb-3 text-red-600 dark:text-red-400">Publications et Médias</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Reconnaissance par les médias et publications officielles des contributions des anciens combattants.
              </p>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li>• Portraits dans les médias nationaux</li>
                <li>• Histoires de service</li>
                <li>• Documentaires</li>
                <li>• Publications officielles</li>
              </ul>
            </div>
          </div>

          {/* Nomination Process */}
          <div className="mt-12 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900 dark:to-orange-900 rounded-lg p-8 border border-red-200 dark:border-red-700">
            <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Nomination pour Distinction</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-6">
              Les anciens combattants peuvent être nominés pour des distinctions et honneurs. Les nominations peuvent être soumises par:
            </p>
            <ul className="space-y-3 text-slate-700 dark:text-slate-300">
              <li>• Les associations d'anciens combattants</li>
              <li>• Les autorités locales et régionales</li>
              <li>• Le ministère de la Défense</li>
              <li>• Les pairs et camarades</li>
              <li>• Les familles</li>
            </ul>
            <div className="mt-6 pt-6 border-t border-red-200 dark:border-red-700">
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Pour plus d'informations sur les nominations, contactez la Direction des Anciens Combattants.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
