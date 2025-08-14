"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import CardDocument from "@/components/cards/CardDocument";
import { loadGsap } from "@/lib/gsap";

// Types
type Document = {
  id: string;
  title: string;
  href: string;
  type: string;
  service: string;
  date: string;
  year: number;
};

// Composant pour les filtres
const DocumentFilters = ({ 
  filters, 
  setFilters 
}: { 
  filters: {
    type: string;
    year: string;
    service: string;
    keyword: string;
  };
  setFilters: (filters: any) => void;
}) => {
  // Options pour les filtres
  const typeOptions = ["Tous les types", "Décret", "Arrêté", "Circulaire", "Rapport", "Note", "Communiqué"];
  const yearOptions = ["Toutes les années", "2025", "2024", "2023", "2022", "2021"];
  const serviceOptions = ["Tous les services", "Cabinet", "SG", "Défense", "FARDC", "Administration", "Finances"];
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8 border border-gray-200 dark:border-gray-700"
    >
      <h2 className="text-lg font-semibold mb-4 text-[var(--color-primary)]">Filtrer les documents</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Type de document</label>
          <select 
            className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
            value={filters.type}
            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
          >
            {typeOptions.map(option => (
              <option key={option} value={option === "Tous les types" ? "" : option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Année</label>
          <select 
            className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
            value={filters.year}
            onChange={(e) => setFilters({ ...filters, year: e.target.value })}
          >
            {yearOptions.map(option => (
              <option key={option} value={option === "Toutes les années" ? "" : option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Service</label>
          <select 
            className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
            value={filters.service}
            onChange={(e) => setFilters({ ...filters, service: e.target.value })}
          >
            {serviceOptions.map(option => (
              <option key={option} value={option === "Tous les services" ? "" : option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Mot-clé</label>
          <div className="relative">
            <input 
              type="text" 
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md pl-10 pr-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
              placeholder="Rechercher..."
              value={filters.keyword}
              onChange={(e) => setFilters({ ...filters, keyword: e.target.value })}
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 flex justify-end">
        <button 
          onClick={() => setFilters({ type: "", year: "", service: "", keyword: "" })}
          className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[var(--color-primary)] dark:hover:text-[var(--color-primary)] transition-colors"
        >
          Réinitialiser les filtres
        </button>
      </div>
    </motion.div>
  );
};

// Composant principal
export default function DocumentsClient() {
  // État pour les filtres
  const [filters, setFilters] = useState({
    type: "",
    year: "",
    service: "",
    keyword: ""
  });
  
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Données des documents (à remplacer par des données réelles du CMS)
  const documents: Document[] = [
    {
      id: "1",
      title: "Décret n°2025-001 portant sur l'organisation du Ministère délégué à la Défense",
      href: "/documents/1",
      type: "Décret",
      service: "Défense",
      date: "1 juillet 2025",
      year: 2025
    },
    {
      id: "2",
      title: "Rapport annuel 2024 sur l'état des forces armées",
      href: "/documents/2",
      type: "Rapport",
      service: "SG",
      date: "20 février 2025",
      year: 2025
    },
    {
      id: "3",
      title: "Circulaire 15/2025 relative aux procédures administratives",
      href: "/documents/3",
      type: "Circulaire",
      service: "Cabinet",
      date: "12 juin 2025",
      year: 2025
    },
    {
      id: "4",
      title: "Arrêté ministériel fixant les modalités de recrutement des forces armées",
      href: "/documents/4",
      type: "Arrêté",
      service: "FARDC",
      date: "5 mai 2025",
      year: 2025
    },
    {
      id: "5",
      title: "Note de service concernant les horaires de travail pendant la période estivale",
      href: "/documents/5",
      type: "Note",
      service: "Administration",
      date: "15 avril 2025",
      year: 2025
    },
    {
      id: "6",
      title: "Communiqué officiel sur la coopération militaire régionale",
      href: "/documents/6",
      type: "Communiqué",
      service: "Cabinet",
      date: "30 mars 2025",
      year: 2025
    },
    {
      id: "7",
      title: "Rapport trimestriel sur l'exécution du budget de la défense",
      href: "/documents/7",
      type: "Rapport",
      service: "Finances",
      date: "10 mars 2025",
      year: 2025
    },
    {
      id: "8",
      title: "Décret n°2024-156 relatif à la réforme des pensions militaires",
      href: "/documents/8",
      type: "Décret",
      service: "Défense",
      date: "20 décembre 2024",
      year: 2024
    },
    {
      id: "9",
      title: "Circulaire 42/2024 sur les procédures de sécurité informatique",
      href: "/documents/9",
      type: "Circulaire",
      service: "SG",
      date: "5 novembre 2024",
      year: 2024
    }
  ];
  
  // Filtrer les documents
  const filteredDocuments = documents.filter(doc => {
    return (
      (filters.type === "" || doc.type === filters.type) &&
      (filters.year === "" || doc.year.toString() === filters.year) &&
      (filters.service === "" || doc.service === filters.service) &&
      (filters.keyword === "" || 
        doc.title.toLowerCase().includes(filters.keyword.toLowerCase()) ||
        doc.type.toLowerCase().includes(filters.keyword.toLowerCase()) ||
        doc.service.toLowerCase().includes(filters.keyword.toLowerCase()))
    );
  });

  useEffect(() => {
    let ctx: any;
    (async () => {
      const g = await loadGsap();
      if (!g || !containerRef.current) return;
      
      ctx = g.gsap.context(() => {
        // Animation subtile au scroll
        g.gsap.fromTo(
          ".document-card",
          { y: 20, opacity: 0.8 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom-=100",
              end: "bottom center",
              toggleActions: "play none none none",
            },
          }
        );
      }, containerRef);
    })();
    
    return () => ctx?.revert?.();
  }, [filters]);

  return (
    <div ref={containerRef}>
      {/* Filtres */}
      <DocumentFilters filters={filters} setFilters={setFilters} />
      
      {/* Résultats */}
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">
            {filteredDocuments.length} document{filteredDocuments.length !== 1 ? 's' : ''} trouvé{filteredDocuments.length !== 1 ? 's' : ''}
          </h2>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Trier par: 
            <select className="ml-2 border-0 bg-transparent text-[var(--color-primary)] font-medium focus:ring-0">
              <option>Date (récent)</option>
              <option>Date (ancien)</option>
              <option>Type</option>
              <option>Service</option>
            </select>
          </div>
        </div>
        
        {/* Liste des documents */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDocuments.length > 0 ? (
            filteredDocuments.map((doc) => (
              <div key={doc.id} className="document-card">
                <CardDocument 
                  title={doc.title} 
                  href={doc.href} 
                  type={doc.type} 
                  service={doc.service} 
                  date={doc.date}
                  icon={
                    <div className="p-2 rounded-full bg-[var(--color-primary-light)]">
                      <svg className="h-5 w-5 text-[var(--color-primary)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  }
                />
              </div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center">
              <svg className="mx-auto h-12 w-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-gray-100">Aucun document trouvé</h3>
              <p className="mt-1 text-gray-500 dark:text-gray-400">Essayez de modifier vos critères de recherche.</p>
              <div className="mt-6">
                <button 
                  onClick={() => setFilters({ type: "", year: "", service: "", keyword: "" })}
                  className="px-4 py-2 bg-[var(--color-primary)] text-white rounded-md hover:bg-[var(--color-primary-dark)] transition-colors"
                >
                  Réinitialiser les filtres
                </button>
              </div>
            </div>
          )}
        </div>
        
        {/* Pagination */}
        {filteredDocuments.length > 6 && (
          <div className="mt-8 flex justify-center">
            <nav className="inline-flex rounded-md shadow">
              <a href="#" className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-sm font-medium rounded-l-md hover:bg-gray-50 dark:hover:bg-gray-700">
                Précédent
              </a>
              <a href="#" className="px-4 py-2 bg-[var(--color-primary)] text-white text-sm font-medium">
                1
              </a>
              <a href="#" className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700">
                2
              </a>
              <a href="#" className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-sm font-medium rounded-r-md hover:bg-gray-50 dark:hover:bg-gray-700">
                Suivant
              </a>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}
