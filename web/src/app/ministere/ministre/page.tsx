import Image from "next/image";
import Section from "@/components/common/Section";
import { Metadata } from "next";
import MinistreHero from "@/components/heroes/MinistreHero";

export const metadata: Metadata = {
  title: "Le Ministre | Ministère délégué à la Défense — RDC",
  description: "Présentation officielle du Ministre délégué à la Défense de la République Démocratique du Congo.",
};

export default function Page() {
  return (
    <>
      <MinistreHero 
        title="Le Ministre délégué à la Défense" 
        subtitle="S.E. [Nom du Ministre], Ministre délégué à la Défense de la République Démocratique du Congo" 
        height="medium"
      />

      {/* Contenu principal */}
      <Section>
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Colonne de gauche - Biographie avec photo */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6 text-[var(--color-primary)]">Biographie</h2>
              
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                {/* Photo du ministre avec cadre */}
                <div className="md:w-1/3 flex-shrink-0">
                  <div className="relative rounded-lg overflow-hidden border-4 border-[var(--color-primary)]/20 shadow-lg">
                    <Image
                      src="/images/ministere/ministre-photo.jpeg"
                      alt="Portrait du Ministre délégué à la Défense"
                      width={300}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                
                {/* Texte de biographie */}
                <div className="md:w-2/3 prose dark:prose-invert max-w-none">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.
                  </p>
                  
                  <p>
                    Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet.
                  </p>
                </div>
              </div>
              
              <div className="prose dark:prose-invert max-w-none">
                <h3>Parcours professionnel</h3>
                
                <ul>
                  <li>2023-présent : Ministre délégué à la Défense</li>
                  <li>2020-2023 : Conseiller spécial à la Présidence</li>
                  <li>2015-2020 : Député national</li>
                  <li>2010-2015 : Officier supérieur des FARDC</li>
                </ul>
                
                <h3>Vision et priorités</h3>
                
                <p>
                  Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet.
                </p>
              </div>
              
              {/* Discours récents */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6 text-[var(--color-primary)]">Discours récents</h2>
                
                <div className="space-y-4">
                  <div className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
                    <h3 className="font-semibold">Discours lors de la cérémonie de remise des diplômes</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">15 juillet 2025</p>
                  </div>
                  
                  <div className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
                    <h3 className="font-semibold">Allocution à l'occasion de la journée des Forces Armées</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">20 juin 2025</p>
                  </div>
                  
                  <div className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
                    <h3 className="font-semibold">Intervention au Parlement sur la politique de défense</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">5 mai 2025</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Colonne de droite - Informations personnelles */}
            <div className="lg:col-span-1">
              <div className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-lg border border-zinc-200 dark:border-zinc-800">
                <h2 className="text-xl font-semibold mb-4 text-[var(--color-primary)]">Informations</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-sm text-zinc-500 dark:text-zinc-400">Nomination</h3>
                    <p>Décret présidentiel n° XX/XX du XX/XX/20XX</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-sm text-zinc-500 dark:text-zinc-400">Formation</h3>
                    <p>Doctorat en Relations Internationales</p>
                    <p>Master en Administration Publique</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-sm text-zinc-500 dark:text-zinc-400">Contact</h3>
                    <p>cabinet.ministre@defense.gouv.cd</p>
                  </div>
                </div>
              </div>
              
              {/* Réseaux sociaux */}
              <div className="mt-6 bg-zinc-50 dark:bg-zinc-900 p-6 rounded-lg border border-zinc-200 dark:border-zinc-800">
                <h2 className="text-xl font-semibold mb-4 text-[var(--color-primary)]">Réseaux sociaux</h2>
                <div className="flex space-x-4">
                  <a href="#" className="p-2 rounded-full bg-zinc-200 dark:bg-zinc-800 hover:bg-[var(--color-primary)] hover:text-white transition-colors">
                    X
                  </a>
                  <a href="#" className="p-2 rounded-full bg-zinc-200 dark:bg-zinc-800 hover:bg-[var(--color-primary)] hover:text-white transition-colors">
                    FB
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Section agenda */}
      <div className="bg-zinc-50 dark:bg-zinc-900">
        <Section>
          <div className="container mx-auto px-4 py-12">
            <h2 className="text-2xl font-bold mb-8 text-center text-[var(--color-primary)]">Agenda du Ministre</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-700">
                <div className="text-[var(--color-primary)] font-semibold mb-2">15 août 2025</div>
                <h3 className="font-semibold mb-2">Visite officielle à Lubumbashi</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">Rencontre avec les autorités locales et inspection des installations militaires.</p>
              </div>
              
              <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-700">
                <div className="text-[var(--color-primary)] font-semibold mb-2">20 août 2025</div>
                <h3 className="font-semibold mb-2">Conférence internationale sur la sécurité régionale</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">Participation et discours d'ouverture à la conférence à Kinshasa.</p>
              </div>
              
              <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-700">
                <div className="text-[var(--color-primary)] font-semibold mb-2">25 août 2025</div>
                <h3 className="font-semibold mb-2">Cérémonie de remise de médailles</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">Remise de décorations aux militaires s'étant distingués lors des opérations récentes.</p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <a href="/ministere/agenda" className="inline-block px-6 py-3 bg-[var(--color-primary)] text-white rounded-md hover:bg-[var(--color-primary)]/90 transition-colors">
                Voir l'agenda complet
              </a>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}
