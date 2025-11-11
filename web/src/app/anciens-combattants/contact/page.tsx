import { Metadata } from "next";
import Section from "@/components/common/Section";
import DefaultHero from "@/components/heroes/DefaultHero";

export const metadata: Metadata = {
  title: "Contact | Anciens Combattants",
  description: "Informations de contact et assistance pour les anciens combattants",
  openGraph: {
    title: "Contact | Anciens Combattants",
    description: "Informations de contact et assistance pour les anciens combattants",
  },
};

export default function Contact() {
  return (
    <>
      <DefaultHero 
        title="Nous Contacter" 
        subtitle="Assistance et informations pour les anciens combattants"
        height="small"
      />

      {/* Main Content */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">Direction des Anciens Combattants</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-8 border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold mb-6 text-red-600 dark:text-red-400">Coordonnées</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Adresse Principale</h4>
                  <p className="text-slate-600 dark:text-slate-300">
                    Direction des Anciens Combattants<br/>
                    Ministère délégué à la Défense<br/>
                    Kinshasa, République Démocratique du Congo
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Téléphone</h4>
                  <p className="text-slate-600 dark:text-slate-300">
                    <a href="tel:+243123456789" className="hover:text-red-600 dark:hover:text-red-400">
                      +243 (0) 1 XXX XXXX
                    </a>
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Email</h4>
                  <p className="text-slate-600 dark:text-slate-300">
                    <a href="mailto:anciens-combattants@mindeldef.cd" className="hover:text-red-600 dark:hover:text-red-400">
                      anciens-combattants@mindeldef.cd
                    </a>
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Horaires d'Ouverture</h4>
                  <p className="text-slate-600 dark:text-slate-300">
                    Lundi - Vendredi: 8h00 - 17h00<br/>
                    Samedi: 9h00 - 13h00<br/>
                    Dimanche: Fermé
                  </p>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-8 border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold mb-6 text-red-600 dark:text-red-400">Services Disponibles</h3>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-600 dark:text-red-400 mr-3">✓</span>
                  <span className="text-slate-600 dark:text-slate-300">Demandes d'allocations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 dark:text-red-400 mr-3">✓</span>
                  <span className="text-slate-600 dark:text-slate-300">Assistance médicale</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 dark:text-red-400 mr-3">✓</span>
                  <span className="text-slate-600 dark:text-slate-300">Formation professionnelle</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 dark:text-red-400 mr-3">✓</span>
                  <span className="text-slate-600 dark:text-slate-300">Aide au logement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 dark:text-red-400 mr-3">✓</span>
                  <span className="text-slate-600 dark:text-slate-300">Microfinance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 dark:text-red-400 mr-3">✓</span>
                  <span className="text-slate-600 dark:text-slate-300">Informations administratives</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 dark:text-red-400 mr-3">✓</span>
                  <span className="text-slate-600 dark:text-slate-300">Soutien psychologique</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Regional Offices */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Bureaux Régionaux</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Kasai</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Tshikapa<br/>
                  Tel: +243 (0) 1 XXX XXXX
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Katanga</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Lubumbashi<br/>
                  Tel: +243 (0) 1 XXX XXXX
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Nord-Kivu</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Goma<br/>
                  Tel: +243 (0) 1 XXX XXXX
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Équateur</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Mbandaka<br/>
                  Tel: +243 (0) 1 XXX XXXX
                </p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900 dark:to-orange-900 rounded-lg p-8 border border-red-200 dark:border-red-700">
            <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Questions Fréquemment Posées</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Quels documents dois-je apporter?</h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm">
                  Carte d'identité nationale, certificat de service militaire, documents médicaux (si applicable), et tout document justifiant votre statut d'ancien combattant.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Combien de temps pour traiter une demande?</h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm">
                  Le traitement des demandes prend généralement 2 à 4 semaines. Vous serez notifié par téléphone ou email de l'avancement de votre dossier.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Puis-je postuler en ligne?</h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm">
                  Actuellement, les demandes doivent être soumises en personne ou par courrier. Nous travaillons sur une plateforme en ligne pour faciliter les démarches.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Y a-t-il une aide pour les familles?</h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm">
                  Oui, les familles des anciens combattants décédés peuvent bénéficier de pensions et d'allocations. Contactez-nous pour plus d'informations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
