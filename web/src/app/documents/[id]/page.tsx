import Section from "@/components/common/Section";
import Link from "next/link";
import { Metadata } from "next";
import DefaultHero from "@/components/heroes/DefaultHero";

// Cette fonction serait remplacée par une requête au CMS dans une implémentation réelle
function getDocumentData(id: string) {
  // Simulons quelques documents
  const documents = {
    "1": {
      title: "Décret n°2025-001 portant sur l'organisation du Ministère délégué à la Défense",
      type: "Décret",
      service: "Défense",
      date: "1 juillet 2025",
      reference: "REF-2025-001-DEF",
      summary: "Ce décret définit l'organisation interne du Ministère délégué à la Défense, ses attributions et son fonctionnement.",
      pdfUrl: "#",
      relatedDocs: [
        { id: "2", title: "Rapport annuel 2024 sur l'état des forces armées" },
        { id: "3", title: "Circulaire 15/2025 relative aux procédures administratives" }
      ]
    },
    "2": {
      title: "Rapport annuel 2024 sur l'état des forces armées",
      type: "Rapport",
      service: "SG",
      date: "20 février 2025",
      reference: "RAP-2025-002-SG",
      summary: "Ce rapport présente un bilan complet de l'état des forces armées pour l'année 2024, incluant les effectifs, les équipements et les opérations.",
      pdfUrl: "#",
      relatedDocs: [
        { id: "1", title: "Décret n°2025-001 portant sur l'organisation du Ministère délégué à la Défense" },
        { id: "7", title: "Rapport trimestriel sur l'exécution du budget de la défense" }
      ]
    },
    "3": {
      title: "Circulaire 15/2025 relative aux procédures administratives",
      type: "Circulaire",
      service: "Cabinet",
      date: "12 juin 2025",
      reference: "CIR-2025-015-CAB",
      summary: "Cette circulaire détaille les nouvelles procédures administratives à suivre pour l'ensemble des services du Ministère.",
      pdfUrl: "#",
      relatedDocs: [
        { id: "5", title: "Note de service concernant les horaires de travail pendant la période estivale" }
      ]
    }
  };
  
  // Retourner le document correspondant à l'ID ou un document par défaut
  return documents[id as keyof typeof documents] || {
    title: `Document #${id}`,
    type: "Non spécifié",
    service: "Non spécifié",
    date: "Date non disponible",
    reference: "Référence non disponible",
    summary: "Contenu non disponible. Ce document sera bientôt mis à jour.",
    pdfUrl: "#",
    relatedDocs: []
  };
}

// Cette fonction serait utilisée pour générer les métadonnées dynamiques
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const document = getDocumentData(id);
  
  return {
    title: `${document.title} | Ministère délégué à la Défense`,
    description: document.summary,
    openGraph: {
      title: document.title,
      description: document.summary,
      images: ['/images/placeholder-documents-hero.jpg'],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const document = getDocumentData(id);
  
  return (
    <>
      <DefaultHero 
        title={document.title}
        subtitle={`${document.type} | ${document.date} | ${document.reference}`}
        height="medium"
      />
      <Section className="py-12">
        <div className="container mx-auto px-4">
          {/* Fil d'Ariane */}
          <div className="mb-8">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-[var(--color-primary)] dark:text-gray-400 dark:hover:text-white">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                    Accueil
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                    <Link href="/documents" className="ml-1 text-sm font-medium text-gray-700 hover:text-[var(--color-primary)] md:ml-2 dark:text-gray-400 dark:hover:text-white">Documents officiels</Link>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                    <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400 truncate max-w-[200px] sm:max-w-xs">{document.title}</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Colonne principale - Détails du document */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-[var(--color-primary-light)]">
                    <svg className="h-6 w-6 text-[var(--color-primary)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                    {document.type}
                  </span>
                </div>
                
                <h1 className="text-3xl font-bold mb-4">{document.title}</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Service émetteur</p>
                    <p className="font-medium">{document.service}</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Date de publication</p>
                    <p className="font-medium">{document.date}</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Référence</p>
                    <p className="font-medium">{document.reference}</p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-3">Résumé</h2>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>{document.summary}</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-gray-200 dark:border-gray-700 pt-6">
                  <a 
                    href={document.pdfUrl} 
                    className="inline-flex items-center px-6 py-3 bg-[var(--color-primary)] text-white font-medium rounded-md hover:bg-[var(--color-primary-dark)] transition-colors"
                  >
                    <svg className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Télécharger le PDF
                  </a>
                  
                  <div className="flex space-x-2">
                    <button className="p-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                      <span className="sr-only">Imprimer</span>
                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <button className="p-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                      <span className="sr-only">Partager</span>
                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Colonne latérale - Documents liés */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-semibold mb-4 text-[var(--color-primary)]">Documents liés</h2>
                
                {document.relatedDocs && document.relatedDocs.length > 0 ? (
                  <div className="space-y-4">
                    {document.relatedDocs.map((doc, index) => (
                      <Link 
                        key={index} 
                        href={`/documents/${doc.id}`}
                        className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-md hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-600"
                      >
                        <div className="bg-[var(--color-primary-light)] p-2 rounded mr-3">
                          <svg className="h-4 w-4 text-[var(--color-primary)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="font-medium line-clamp-2">{doc.title}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 dark:text-gray-400">Aucun document lié disponible.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
