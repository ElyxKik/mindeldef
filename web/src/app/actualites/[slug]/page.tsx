import Section from "@/components/common/Section";
import Alert from "@/components/feedback/Alert";
import Link from "next/link";
import { Metadata } from "next";
import DefaultHero from "@/components/heroes/DefaultHero";

// Cette fonction serait remplacée par une requête au CMS dans une implémentation réelle
function getArticleData(slug: string) {
  // Simulons quelques articles
  const articles = {
    "communique-ministere": {
      title: "Communiqué du Ministère sur les nouvelles mesures de sécurité",
      date: "10 août 2025",
      author: "Service de communication",
      category: "Communiqués",
      image: "/images/placeholder-news.jpg",
      content: `
        <p>Le Ministère délégué à la Défense a annoncé aujourd'hui de nouvelles mesures visant à renforcer la sécurité dans les zones frontalières. Ces mesures comprennent le déploiement de troupes supplémentaires et l'amélioration des infrastructures de surveillance.</p>
        
        <p>Lors d'une conférence de presse tenue ce matin au siège du Ministère, le Ministre a détaillé les différentes composantes de ce plan de sécurisation qui s'inscrit dans la continuité des efforts déployés depuis plusieurs mois pour garantir la stabilité des régions concernées.</p>
        
        <h2>Renforcement des effectifs</h2>
        
        <p>"Nous allons déployer des unités supplémentaires dans les prochaines semaines pour assurer une présence plus importante sur le terrain", a déclaré le Ministre. Ces nouvelles troupes seront principalement affectées aux provinces du Nord-Kivu, du Sud-Kivu et de l'Ituri.</p>
        
        <h2>Modernisation des équipements</h2>
        
        <p>Le plan prévoit également l'acquisition de nouveaux équipements de surveillance et de communication pour améliorer la réactivité des forces de défense. "Nos militaires doivent disposer des outils nécessaires pour accomplir efficacement leur mission", a souligné le Ministre.</p>
        
        <h2>Coopération internationale</h2>
        
        <p>Ces mesures s'accompagnent d'un renforcement de la coopération avec les pays voisins et les partenaires internationaux. Des réunions de coordination sont prévues dans les prochaines semaines pour harmoniser les actions de sécurisation des frontières communes.</p>
        
        <p>Le Ministère rappelle que ces dispositions visent à protéger les populations civiles et à garantir la souveraineté nationale sur l'ensemble du territoire.</p>
      `,
      relatedDocuments: [
        { title: "Plan de sécurisation des frontières 2025", type: "PDF", url: "#" },
        { title: "Communiqué de presse officiel", type: "PDF", url: "#" }
      ],
      relatedArticles: [
        { title: "Visite officielle du Ministre dans la province du Nord-Kivu", slug: "visite-nord-kivu" },
        { title: "Exercice militaire conjoint avec les forces armées régionales", slug: "exercice-militaire" }
      ]
    },
    "cooperation-regionale": {
      title: "Signature d'un accord de coopération régionale",
      date: "8 août 2025",
      author: "Bureau des relations internationales",
      category: "Coopération",
      image: "/images/placeholder-news.jpg",
      content: `
        <p>Un accord historique de coopération en matière de défense a été signé avec les pays voisins pour renforcer la sécurité régionale. Cette initiative marque une étape importante dans les relations diplomatiques et militaires de la région.</p>
        
        <p>La cérémonie de signature s'est déroulée en présence des ministres de la Défense des pays concernés et de représentants d'organisations internationales.</p>
        
        <h2>Contenu de l'accord</h2>
        
        <p>L'accord prévoit notamment :</p>
        <ul>
          <li>La mise en place d'un centre de coordination régional</li>
          <li>Des patrouilles conjointes aux frontières</li>
          <li>L'échange d'informations stratégiques</li>
          <li>Des exercices militaires communs</li>
          <li>La formation conjointe des officiers</li>
        </ul>
        
        <h2>Perspectives</h2>
        
        <p>"Cette coopération renforcée permettra de mieux faire face aux défis sécuritaires communs et de garantir la stabilité de notre région", a déclaré le Ministre délégué à la Défense lors de son allocution.</p>
        
        <p>Les premières actions concrètes issues de cet accord devraient être mises en œuvre dès le mois prochain, avec l'organisation d'un exercice militaire conjoint.</p>
      `,
      relatedDocuments: [
        { title: "Texte intégral de l'accord de coopération", type: "PDF", url: "#" },
        { title: "Présentation des axes de coopération", type: "PDF", url: "#" }
      ],
      relatedArticles: [
        { title: "Communiqué du Ministère sur les nouvelles mesures de sécurité", slug: "communique-ministere" },
        { title: "Exercice militaire conjoint avec les forces armées régionales", slug: "exercice-militaire" }
      ]
    },
    "point-presse": {
      title: "Point de presse mensuel du porte-parole",
      date: "2 août 2025",
      author: "Service de presse",
      category: "Presse",
      image: "/images/placeholder-news.jpg",
      content: `
        <p>Le porte-parole du Ministère a présenté le bilan mensuel des opérations et répondu aux questions des journalistes. Les sujets abordés incluent les récentes opérations de maintien de la paix et les projets de modernisation des équipements.</p>
        
        <p>Ce point de presse mensuel s'inscrit dans la politique de transparence du Ministère délégué à la Défense.</p>
        
        <h2>Bilan des opérations</h2>
        
        <p>Le porte-parole a fait état des avancées significatives dans la sécurisation des zones sensibles, notamment dans les provinces de l'Est. "Nos forces ont réussi à neutraliser plusieurs menaces et à rétablir la sécurité dans plusieurs localités", a-t-il précisé.</p>
        
        <h2>Questions des journalistes</h2>
        
        <p>Les représentants des médias ont notamment interrogé le porte-parole sur :</p>
        <ul>
          <li>L'état d'avancement du programme de modernisation des équipements</li>
          <li>La coopération avec les forces de la MONUSCO</li>
          <li>Les mesures de protection des populations civiles</li>
          <li>Le calendrier des prochaines rotations de troupes</li>
        </ul>
        
        <p>Le prochain point de presse est prévu pour le premier vendredi du mois prochain.</p>
      `,
      relatedDocuments: [
        { title: "Transcription complète du point de presse", type: "PDF", url: "#" },
        { title: "Dossier de presse - Août 2025", type: "PDF", url: "#" }
      ],
      relatedArticles: [
        { title: "Communiqué du Ministère sur les nouvelles mesures de sécurité", slug: "communique-ministere" },
        { title: "Cérémonie de remise de médailles aux forces spéciales", slug: "remise-medailles" }
      ]
    }
  };
  
  // Retourner l'article correspondant au slug ou un article par défaut
  return articles[slug as keyof typeof articles] || {
    title: slug.replace(/-/g, " "),
    date: "Date non disponible",
    author: "Auteur non spécifié",
    category: "Catégorie non spécifiée",
    image: "/images/placeholder-news.jpg",
    content: "<p>Contenu non disponible. Cet article sera bientôt mis à jour.</p>",
    relatedDocuments: [],
    relatedArticles: []
  };
}

// Cette fonction serait utilisée pour générer les métadonnées dynamiques
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleData(slug);
  
  return {
    title: `${article.title} | Ministère délégué à la Défense`,
    description: article.content.replace(/<[^>]*>/g, '').substring(0, 160) + '...',
    openGraph: {
      title: article.title,
      description: article.content.replace(/<[^>]*>/g, '').substring(0, 160) + '...',
      images: [article.image],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleData(slug);
  
  return (
    <>
      <DefaultHero 
        title={article.title}
        subtitle={`${article.date} | Par ${article.author}`}
        height="medium"
      >
        <div className="flex items-center space-x-2 mb-4">
          <Link 
            href="/actualites"
            className="text-white/80 hover:text-white transition-colors text-sm flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Retour aux actualités
          </Link>
          <span className="text-white/50">|</span>
          <span className="bg-[var(--color-primary-light)] text-[var(--color-primary)] px-2 py-1 rounded-full text-xs font-medium">
            {article.category}
          </span>
        </div>
      </DefaultHero>

      {/* Contenu de l'article */}
      <Section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Colonne principale - Contenu de l'article */}
            <div className="lg:col-span-2">
              <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
              
              {/* Partage sur les réseaux sociaux */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold mb-3">Partager cet article</h3>
                <div className="flex space-x-3">
                  <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button className="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </button>
                  <button className="p-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
                    <span className="sr-only">WhatsApp</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M20.11 3.89C18.07 1.84 15.3 0.75 12.35 0.75C6.3 0.75 1.37 5.68 1.37 11.73C1.37 13.67 1.89 15.57 2.87 17.23L1.25 23.25L7.4 21.67C9 22.57 10.82 23.05 12.67 23.05H12.69C18.74 23.05 23.25 18.12 23.25 12.07C23.25 9.12 22.16 6.35 20.11 3.89ZM12.35 21.18C10.7 21.18 9.08 20.72 7.67 19.86L7.33 19.67L3.78 20.62L4.75 17.16L4.53 16.8C3.58 15.33 3.08 13.63 3.08 11.89C3.08 6.72 7.18 2.62 12.35 2.62C14.77 2.62 17.05 3.53 18.74 5.22C20.43 6.91 21.54 9.19 21.54 11.61C21.54 16.78 17.52 21.18 12.35 21.18ZM17.07 14.02C16.79 13.88 15.48 13.23 15.22 13.14C14.97 13.05 14.78 13.01 14.59 13.28C14.41 13.56 13.9 14.16 13.74 14.34C13.58 14.53 13.42 14.55 13.14 14.41C11.73 13.7 10.8 13.14 9.87 11.52C9.61 11.08 10.14 11.12 10.63 10.14C10.72 9.95 10.68 9.79 10.61 9.65C10.54 9.51 10.03 8.2 9.79 7.64C9.56 7.1 9.32 7.17 9.15 7.16C8.99 7.15 8.8 7.15 8.61 7.15C8.43 7.15 8.13 7.22 7.88 7.5C7.62 7.78 6.93 8.43 6.93 9.74C6.93 11.05 7.88 12.32 8.01 12.5C8.15 12.69 10.02 15.56 12.87 16.7C14.56 17.38 15.22 17.43 16.07 17.31C16.59 17.24 17.65 16.67 17.89 16.02C18.12 15.37 18.12 14.81 18.05 14.7C17.99 14.57 17.8 14.5 17.52 14.36L17.07 14.02Z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </button>
                  <button className="p-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                    <span className="sr-only">Email</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Colonne latérale - Documents et articles liés */}
            <div className="lg:col-span-1">
              {/* Documents liés */}
              {article.relatedDocuments && article.relatedDocuments.length > 0 && (
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
                  <h3 className="text-lg font-semibold mb-4 text-[var(--color-primary)]">Documents liés</h3>
                  <div className="space-y-3">
                    {article.relatedDocuments.map((doc, index) => (
                      <a 
                        key={index} 
                        href={doc.url}
                        className="flex items-center p-3 bg-white dark:bg-gray-700 rounded-md hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-600"
                      >
                        <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded mr-3">
                          <svg className="h-5 w-5 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">{doc.title}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{doc.type}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Articles liés */}
              {article.relatedArticles && article.relatedArticles.length > 0 && (
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold mb-4 text-[var(--color-primary)]">Articles liés</h3>
                  <div className="space-y-4">
                    {article.relatedArticles.map((relatedArticle, index) => (
                      <Link 
                        key={index} 
                        href={`/actualites/${relatedArticle.slug}`}
                        className="block p-4 bg-white dark:bg-gray-700 rounded-md hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-600"
                      >
                        <h4 className="font-medium mb-1">{relatedArticle.title}</h4>
                        <div className="flex items-center text-sm text-[var(--color-primary)]">
                          <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          Lire l'article
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Alerte d'information */}
              <div className="mt-6">
                <Alert variant="info">Les articles sont mis à jour régulièrement pour refléter les dernières informations.</Alert>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
