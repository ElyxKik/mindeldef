'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiFilter, FiDownload, FiExternalLink, FiCalendar, FiClock, FiCheckCircle, FiXCircle } from 'react-icons/fi';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Types
type MarcheStatus = 'Ouvert' | 'Clos' | 'Attribué' | 'Annulé';
type MarcheType = 'AO' | 'AMI' | 'DP' | 'Consultation';

interface Marche {
  id: string;
  title: string;
  reference: string;
  type: MarcheType;
  status: MarcheStatus;
  publishedAt: string;
  deadline: string;
  budget?: string;
  description: string;
  documents?: {
    name: string;
    url: string;
  }[];
}

// Données de démonstration
const marchesMock: Marche[] = [
  {
    id: '1',
    title: 'Fourniture d\'équipements informatiques pour les bureaux administratifs',
    reference: 'MINDEF-AO-2025-001',
    type: 'AO',
    status: 'Ouvert',
    publishedAt: '2025-08-01',
    deadline: '2025-09-01',
    budget: '250 000 000 CDF',
    description: 'Appel d\'offres pour la fourniture d\'équipements informatiques (ordinateurs, imprimantes, serveurs) pour les bureaux administratifs du Ministère délégué à la Défense.',
    documents: [
      { name: 'Dossier d\'appel d\'offres', url: '#' },
      { name: 'Spécifications techniques', url: '#' }
    ]
  },
  {
    id: '2',
    title: 'Services de modernisation de l\'infrastructure réseau',
    reference: 'MINDEF-AMI-2025-002',
    type: 'AMI',
    status: 'Clos',
    publishedAt: '2025-06-10',
    deadline: '2025-07-10',
    budget: '500 000 000 CDF',
    description: 'Appel à manifestation d\'intérêt pour la modernisation de l\'infrastructure réseau du Ministère délégué à la Défense, incluant la mise à niveau des équipements et l\'implémentation de solutions de sécurité avancées.',
    documents: [
      { name: 'Termes de référence', url: '#' }
    ]
  },
  {
    id: '3',
    title: 'Maintenance des véhicules administratifs',
    reference: 'MINDEF-AO-2025-003',
    type: 'AO',
    status: 'Attribué',
    publishedAt: '2025-05-15',
    deadline: '2025-06-15',
    budget: '150 000 000 CDF',
    description: 'Appel d\'offres pour la maintenance et l\'entretien régulier de la flotte de véhicules administratifs du Ministère délégué à la Défense.',
    documents: [
      { name: 'Dossier d\'appel d\'offres', url: '#' },
      { name: 'Résultat d\'attribution', url: '#' }
    ]
  },
  {
    id: '4',
    title: 'Services de restauration pour les événements officiels',
    reference: 'MINDEF-DP-2025-004',
    type: 'DP',
    status: 'Ouvert',
    publishedAt: '2025-07-20',
    deadline: '2025-08-20',
    description: 'Demande de proposition pour les services de restauration lors des événements officiels organisés par le Ministère délégué à la Défense.',
    documents: [
      { name: 'Termes de référence', url: '#' }
    ]
  },
  {
    id: '5',
    title: 'Fourniture de matériel de bureau',
    reference: 'MINDEF-AO-2025-005',
    type: 'AO',
    status: 'Annulé',
    publishedAt: '2025-04-05',
    deadline: '2025-05-05',
    budget: '75 000 000 CDF',
    description: 'Appel d\'offres pour la fourniture de matériel de bureau pour les différents services du Ministère délégué à la Défense.',
    documents: [
      { name: 'Avis d\'annulation', url: '#' }
    ]
  },
  {
    id: '6',
    title: 'Services de sécurité pour les installations du Ministère',
    reference: 'MINDEF-AO-2025-006',
    type: 'AO',
    status: 'Ouvert',
    publishedAt: '2025-08-10',
    deadline: '2025-09-10',
    budget: '350 000 000 CDF',
    description: 'Appel d\'offres pour les services de sécurité et de surveillance des installations du Ministère délégué à la Défense.',
    documents: [
      { name: 'Dossier d\'appel d\'offres', url: '#' },
      { name: 'Spécifications techniques', url: '#' }
    ]
  }
];

export default function MarchesPublicsClient() {
  // État pour les filtres et la recherche
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<MarcheStatus | ''>('');
  const [typeFilter, setTypeFilter] = useState<MarcheType | ''>('');

  // Animation GSAP
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.marches-container',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
    
    tl.from('.marche-card', {
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: 'power2.out'
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Filtrage des marchés
  const filteredMarches = marchesMock.filter(marche => {
    const matchesSearch = searchTerm === '' || 
      marche.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      marche.reference.toLowerCase().includes(searchTerm.toLowerCase()) ||
      marche.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === '' || marche.status === statusFilter;
    const matchesType = typeFilter === '' || marche.type === typeFilter;
    
    return matchesSearch && matchesStatus && matchesType;
  });

  // Fonction pour formater les dates
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    }).format(date);
  };

  // Fonction pour obtenir la couleur du statut
  const getStatusColor = (status: MarcheStatus) => {
    switch (status) {
      case 'Ouvert':
        return 'bg-green-100 text-green-800';
      case 'Clos':
        return 'bg-gray-100 text-gray-800';
      case 'Attribué':
        return 'bg-blue-100 text-blue-800';
      case 'Annulé':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Fonction pour obtenir l'icône du statut
  const getStatusIcon = (status: MarcheStatus) => {
    switch (status) {
      case 'Ouvert':
        return <FiClock className="mr-1" />;
      case 'Clos':
        return <FiXCircle className="mr-1" />;
      case 'Attribué':
        return <FiCheckCircle className="mr-1" />;
      case 'Annulé':
        return <FiXCircle className="mr-1" />;
      default:
        return <FiClock className="mr-1" />;
    }
  };

  return (
    <div className="w-full">
      {/* Filtres et recherche */}
      <div className="mb-8 bg-white rounded-lg shadow-sm p-4 border border-gray-100">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher par titre, référence ou description..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="w-40">
              <select
                className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as MarcheStatus | '')}
              >
                <option value="">Tous les statuts</option>
                <option value="Ouvert">Ouvert</option>
                <option value="Clos">Clos</option>
                <option value="Attribué">Attribué</option>
                <option value="Annulé">Annulé</option>
              </select>
            </div>
            
            <div className="w-40">
              <select
                className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value as MarcheType | '')}
              >
                <option value="">Tous les types</option>
                <option value="AO">Appel d'offres (AO)</option>
                <option value="AMI">Appel à manifestation d'intérêt (AMI)</option>
                <option value="DP">Demande de proposition (DP)</option>
                <option value="Consultation">Consultation</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Liste des marchés */}
      <div className="marches-container space-y-6">
        {filteredMarches.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Aucun marché public ne correspond à vos critères de recherche.</p>
          </div>
        ) : (
          filteredMarches.map((marche) => (
            <motion.div
              key={marche.id}
              className="marche-card bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-2 py-1 rounded">
                      {marche.type === 'AO' ? 'Appel d\'offres' : 
                       marche.type === 'AMI' ? 'Appel à manifestation d\'intérêt' : 
                       marche.type === 'DP' ? 'Demande de proposition' : 'Consultation'}
                    </span>
                    <span className={`text-xs font-medium px-2 py-1 rounded flex items-center ${getStatusColor(marche.status)}`}>
                      {getStatusIcon(marche.status)}
                      {marche.status}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900">{marche.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">Référence: {marche.reference}</p>
                  
                  <p className="text-sm text-gray-600 mt-3 line-clamp-2">{marche.description}</p>
                  
                  <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <FiCalendar className="mr-1 text-gray-400" />
                      <span>Publication: {formatDate(marche.publishedAt)}</span>
                    </div>
                    <div className="flex items-center">
                      <FiClock className="mr-1 text-gray-400" />
                      <span>Clôture: {formatDate(marche.deadline)}</span>
                    </div>
                    {marche.budget && (
                      <div className="flex items-center">
                        <span>Budget: {marche.budget}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex flex-col gap-2 min-w-[180px]">
                  {marche.documents && marche.documents.map((doc, index) => (
                    <a
                      key={index}
                      href={doc.url}
                      className="flex items-center text-sm text-[var(--color-primary)] hover:underline"
                    >
                      <FiDownload className="mr-2" />
                      {doc.name}
                    </a>
                  ))}
                  <a
                    href={`/marches-publics/${marche.id}`}
                    className="flex items-center justify-center mt-2 px-4 py-2 bg-[var(--color-primary)] text-white rounded-md hover:bg-[var(--color-primary)]/90 transition-colors"
                  >
                    <FiExternalLink className="mr-2" />
                    Voir les détails
                  </a>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
      
      {/* Pagination */}
      <div className="mt-8 flex justify-center">
        <nav className="flex items-center gap-1">
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
            Précédent
          </button>
          <button className="px-3 py-1 bg-[var(--color-primary)] text-white rounded-md text-sm">
            1
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
            2
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
            3
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
            Suivant
          </button>
        </nav>
      </div>
    </div>
  );
}
