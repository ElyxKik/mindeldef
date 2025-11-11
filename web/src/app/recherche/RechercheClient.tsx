'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiFile, FiFileText, FiCalendar, FiUsers, FiExternalLink, FiArrowRight } from 'react-icons/fi';

// Types
type ResultType = 'actualite' | 'document' | 'page' | 'programme';

interface SearchResult {
  id: string;
  title: string;
  type: ResultType;
  date?: string;
  summary?: string;
  url: string;
  category?: string;
}

export default function RechercheClient() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeFilters, setActiveFilters] = useState<ResultType[]>([]);
  const [totalResults, setTotalResults] = useState(0);

  // Fonction de recherche
  async function runSearch(searchQuery: string) {
    if (searchQuery.trim().length < 2) {
      setResults([]);
      setTotalResults(0);
      return;
    }

    setLoading(true);
    
    try {
      // Simulation d'une requête API avec un délai
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Données de démonstration
      const mockResults: SearchResult[] = [
        {
          id: '1',
          title: 'Le Ministre délégué à la Défense inaugure un nouveau centre de formation',
          type: 'actualite',
          date: '2025-08-01',
          summary: 'Le Ministre délégué à la Défense a inauguré ce jeudi un nouveau centre de formation destiné aux officiers des Forces Armées de la République Démocratique du Congo.',
          url: '/actualites/ministre-inaugure-centre-formation',
          category: 'Événements'
        },
        {
          id: '2',
          title: 'Décret portant organisation et fonctionnement du Ministère délégué à la Défense',
          type: 'document',
          date: '2025-06-15',
          summary: 'Décret présidentiel définissant l\'organisation, les attributions et le fonctionnement du Ministère délégué à la Défense.',
          url: '/documents/decret-organisation-ministere',
          category: 'Décrets'
        },
        {
          id: '3',
          title: 'Programme de modernisation des infrastructures militaires',
          type: 'programme',
          date: '2025-01-01',
          summary: 'Programme de modernisation des infrastructures militaires visant à améliorer les conditions de vie et de travail des forces armées.',
          url: '/programmes/modernisation-infrastructures',
          category: 'Infrastructure'
        },
        {
          id: '4',
          title: 'Attributions du Ministère délégué à la Défense',
          type: 'page',
          summary: 'Présentation des attributions et compétences du Ministère délégué à la Défense selon la Constitution et les lois en vigueur.',
          url: '/ministere/attributions',
          category: 'Ministère'
        },
        {
          id: '5',
          title: 'Rapport annuel sur l\'état des Forces Armées 2024',
          type: 'document',
          date: '2025-02-28',
          summary: 'Rapport annuel présentant l\'état des Forces Armées de la République Démocratique du Congo pour l\'année 2024.',
          url: '/documents/rapport-annuel-fardc-2024',
          category: 'Rapports'
        },
        {
          id: '6',
          title: 'Signature d\'un accord de coopération militaire',
          type: 'actualite',
          date: '2025-07-20',
          summary: 'Le Ministère délégué à la Défense a signé un accord de coopération militaire avec plusieurs pays partenaires.',
          url: '/actualites/accord-cooperation-militaire',
          category: 'Coopération'
        },
        {
          id: '7',
          title: 'Organigramme du Ministère délégué à la Défense',
          type: 'page',
          summary: 'Structure organisationnelle du Ministère délégué à la Défense présentant les différentes directions et services.',
          url: '/ministere/organigramme',
          category: 'Ministère'
        },
        {
          id: '8',
          title: 'Programme d\'aide aux familles des militaires',
          type: 'programme',
          date: '2025-03-01',
          summary: 'Programme social visant à améliorer les conditions de vie des familles des militaires à travers des initiatives de logement, d\'éducation et de santé.',
          url: '/programmes/aide-familles-militaires',
          category: 'Social'
        }
      ];
      
      // Filtrer les résultats en fonction de la requête
      const filteredResults = mockResults.filter(result => 
        result.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        (result.summary && result.summary.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      
      setResults(filteredResults);
      setTotalResults(filteredResults.length);
    } catch (error) {
      console.error('Erreur lors de la recherche:', error);
      setResults([]);
      setTotalResults(0);
    } finally {
      setLoading(false);
    }
  }

  // Effet pour déclencher la recherche après un délai
  useEffect(() => {
    const timer = setTimeout(() => {
      runSearch(query);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [query]);

  // Filtrer les résultats en fonction des filtres actifs
  const filteredResults = activeFilters.length > 0
    ? results.filter(result => activeFilters.includes(result.type))
    : results;

  // Fonction pour formater les dates
  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    }).format(date);
  };

  // Fonction pour obtenir l'icône du type de résultat
  const getTypeIcon = (type: ResultType) => {
    switch (type) {
      case 'actualite':
        return <FiCalendar className="mr-2" />;
      case 'document':
        return <FiFileText className="mr-2" />;
      case 'page':
        return <FiFile className="mr-2" />;
      case 'programme':
        return <FiUsers className="mr-2" />;
      default:
        return <FiFile className="mr-2" />;
    }
  };

  // Fonction pour obtenir le libellé du type de résultat
  const getTypeLabel = (type: ResultType) => {
    switch (type) {
      case 'actualite':
        return 'Actualité';
      case 'document':
        return 'Document';
      case 'page':
        return 'Page';
      case 'programme':
        return 'Programme';
      default:
        return 'Autre';
    }
  };

  // Fonction pour gérer les filtres
  const toggleFilter = (type: ResultType) => {
    if (activeFilters.includes(type)) {
      setActiveFilters(activeFilters.filter(t => t !== type));
    } else {
      setActiveFilters([...activeFilters, type]);
    }
  };

  return (
    <div className="w-full">
      {/* Barre de recherche principale */}
      <div className="mb-8">
        <div className="relative">
          <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
          <input
            type="text"
            placeholder="Rechercher actualités, documents, programmes, pages..."
            className="w-full pl-12 pr-4 py-4 text-lg border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent shadow-sm"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Filtres */}
      {results.length > 0 && (
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => toggleFilter('actualite')}
              className={`px-3 py-1 rounded-full text-sm flex items-center ${
                activeFilters.includes('actualite')
                  ? 'bg-[var(--color-primary)] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <FiCalendar className="mr-1" />
              Actualités
            </button>
            <button
              onClick={() => toggleFilter('document')}
              className={`px-3 py-1 rounded-full text-sm flex items-center ${
                activeFilters.includes('document')
                  ? 'bg-[var(--color-primary)] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <FiFileText className="mr-1" />
              Documents
            </button>
            <button
              onClick={() => toggleFilter('programme')}
              className={`px-3 py-1 rounded-full text-sm flex items-center ${
                activeFilters.includes('programme')
                  ? 'bg-[var(--color-primary)] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <FiUsers className="mr-1" />
              Programmes
            </button>
            <button
              onClick={() => toggleFilter('page')}
              className={`px-3 py-1 rounded-full text-sm flex items-center ${
                activeFilters.includes('page')
                  ? 'bg-[var(--color-primary)] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <FiFile className="mr-1" />
              Pages
            </button>
          </div>
        </div>
      )}

      {/* Résultats */}
      <div className="space-y-1">
        {loading ? (
          <div className="text-center py-8">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[var(--color-primary)] border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
            <p className="mt-2 text-gray-500">Recherche en cours...</p>
          </div>
        ) : query.trim().length < 2 ? (
          <div className="text-center py-12">
            <FiSearch className="mx-auto text-4xl text-gray-300 mb-4" />
            <p className="text-gray-500">Saisissez au moins 2 caractères pour lancer la recherche</p>
          </div>
        ) : filteredResults.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Aucun résultat ne correspond à votre recherche</p>
          </div>
        ) : (
          <>
            <div className="mb-4 text-sm text-gray-500">
              {totalResults} résultat{totalResults > 1 ? 's' : ''} trouvé{totalResults > 1 ? 's' : ''}
              {activeFilters.length > 0 && ` (filtré${activeFilters.length > 1 ? 's' : ''})`}
            </div>
            
            <AnimatePresence>
              {filteredResults.map((result) => (
                <motion.div
                  key={result.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-lg shadow-sm p-5 mb-4 border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-2 py-1 rounded flex items-center">
                          {getTypeIcon(result.type)}
                          {getTypeLabel(result.type)}
                        </span>
                        {result.category && (
                          <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded">
                            {result.category}
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-900">{result.title}</h3>
                      
                      {result.date && (
                        <p className="text-sm text-gray-500 mt-1">
                          <FiCalendar className="inline mr-1" /> {formatDate(result.date)}
                        </p>
                      )}
                      
                      {result.summary && (
                        <p className="text-sm text-gray-600 mt-2 line-clamp-2">{result.summary}</p>
                      )}
                    </div>
                    
                    <div className="flex items-center">
                      <a
                        href={result.url}
                        className="flex items-center text-[var(--color-primary)] hover:underline"
                      >
                        <span className="mr-1">Voir</span>
                        <FiArrowRight />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </>
        )}
      </div>
    </div>
  );
}
