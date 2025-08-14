'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiCheckCircle, FiTarget, FiUsers, FiMapPin, FiLayers, FiArrowRight } from 'react-icons/fi';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

// Types
type ProgrammeStatus = 'En cours' | 'Planifié' | 'Terminé';
type ProgrammeCategory = 'Infrastructure' | 'Formation' | 'Équipement' | 'Numérique' | 'Social';

interface Programme {
  id: string;
  title: string;
  category: ProgrammeCategory;
  status: ProgrammeStatus;
  startDate: string;
  endDate: string;
  description: string;
  objectives: string[];
  location?: string;
  budget?: string;
  partners?: string[];
  image?: string;
}

// Données de démonstration
const programmesMock: Programme[] = [
  {
    id: '1',
    title: 'Modernisation des infrastructures militaires',
    category: 'Infrastructure',
    status: 'En cours',
    startDate: '2025-01-01',
    endDate: '2026-12-31',
    description: 'Programme de modernisation des infrastructures militaires visant à améliorer les conditions de vie et de travail des forces armées.',
    objectives: [
      'Rénovation de 15 casernes',
      'Construction de 5 nouveaux centres de formation',
      'Modernisation des installations sanitaires'
    ],
    location: 'National',
    budget: '15 milliards CDF',
    partners: ['Ministère des Travaux Publics', 'Partenaires internationaux'],
    image: '/images/placeholder-infrastructure.jpg'
  },
  {
    id: '2',
    title: 'e-Gouvernement Défense',
    category: 'Numérique',
    status: 'En cours',
    startDate: '2025-04-01',
    endDate: '2026-06-30',
    description: 'Dématérialisation des procédures administratives et mise en place d\'un système d\'information intégré pour le Ministère délégué à la Défense.',
    objectives: [
      'Développement d\'un système de gestion électronique des documents',
      'Mise en place d\'un portail intranet sécurisé',
      'Formation du personnel administratif aux outils numériques'
    ],
    budget: '5 milliards CDF',
    partners: ['Ministère du Numérique', 'Agence Nationale de l\'Informatique'],
    image: '/images/placeholder-digital.jpg'
  },
  {
    id: '3',
    title: 'Programme de formation des cadres militaires',
    category: 'Formation',
    status: 'Planifié',
    startDate: '2025-09-01',
    endDate: '2027-08-31',
    description: 'Programme de formation avancée pour les officiers et sous-officiers des Forces Armées de la République Démocratique du Congo.',
    objectives: [
      'Formation de 500 officiers aux techniques modernes de commandement',
      'Mise à niveau des connaissances en droit international humanitaire',
      'Développement des compétences en gestion de crise'
    ],
    location: 'Kinshasa, Lubumbashi, Goma',
    budget: '3 milliards CDF',
    partners: ['École de Guerre', 'Partenaires internationaux'],
    image: '/images/placeholder-formation.jpg'
  },
  {
    id: '4',
    title: 'Renouvellement des équipements logistiques',
    category: 'Équipement',
    status: 'Planifié',
    startDate: '2025-11-01',
    endDate: '2026-10-31',
    description: 'Programme d\'acquisition et de renouvellement des équipements logistiques pour améliorer la mobilité et l\'efficacité opérationnelle des forces.',
    objectives: [
      'Acquisition de 200 véhicules de transport',
      'Modernisation des équipements de communication',
      'Renouvellement du matériel de campement'
    ],
    budget: '8 milliards CDF',
    partners: ['Ministère du Budget', 'Partenaires techniques'],
    image: '/images/placeholder-equipment.jpg'
  },
  {
    id: '5',
    title: 'Programme d\'aide aux familles des militaires',
    category: 'Social',
    status: 'En cours',
    startDate: '2025-03-01',
    endDate: '2027-02-28',
    description: 'Programme social visant à améliorer les conditions de vie des familles des militaires à travers des initiatives de logement, d\'éducation et de santé.',
    objectives: [
      'Construction de 1000 logements sociaux',
      'Mise en place de bourses d\'études pour les enfants',
      'Création de centres de santé dédiés'
    ],
    location: 'National',
    budget: '6 milliards CDF',
    partners: ['Ministère des Affaires Sociales', 'ONG partenaires'],
    image: '/images/placeholder-social.jpg'
  },
  {
    id: '6',
    title: 'Réhabilitation des centres de formation militaire',
    category: 'Infrastructure',
    status: 'Terminé',
    startDate: '2024-01-01',
    endDate: '2025-06-30',
    description: 'Programme de réhabilitation des centres de formation militaire pour améliorer la qualité de l\'instruction des recrues.',
    objectives: [
      'Rénovation de 3 académies militaires',
      'Modernisation des équipements pédagogiques',
      'Création de simulateurs d\'entraînement'
    ],
    location: 'Kinshasa, Kananga',
    budget: '4 milliards CDF',
    partners: ['Ministère de l\'Éducation', 'Partenaires internationaux'],
    image: '/images/placeholder-training.jpg'
  }
];

export default function ProgrammesClient() {
  // État pour les filtres et la recherche
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<ProgrammeStatus | ''>('');
  const [categoryFilter, setCategoryFilter] = useState<ProgrammeCategory | ''>('');

  // Animation GSAP
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.programmes-container',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
    
    tl.from('.programme-card', {
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

  // Filtrage des programmes
  const filteredProgrammes = programmesMock.filter(programme => {
    const matchesSearch = searchTerm === '' || 
      programme.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      programme.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === '' || programme.status === statusFilter;
    const matchesCategory = categoryFilter === '' || programme.category === categoryFilter;
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

  // Fonction pour formater les dates
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      month: 'long',
      year: 'numeric'
    }).format(date);
  };

  // Fonction pour obtenir la couleur du statut
  const getStatusColor = (status: ProgrammeStatus) => {
    switch (status) {
      case 'En cours':
        return 'bg-blue-100 text-blue-800';
      case 'Planifié':
        return 'bg-amber-100 text-amber-800';
      case 'Terminé':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Fonction pour obtenir l'icône de la catégorie
  const getCategoryIcon = (category: ProgrammeCategory) => {
    switch (category) {
      case 'Infrastructure':
        return <FiLayers className="mr-1" />;
      case 'Formation':
        return <FiUsers className="mr-1" />;
      case 'Équipement':
        return <FiTarget className="mr-1" />;
      case 'Numérique':
        return <FiLayers className="mr-1" />;
      case 'Social':
        return <FiUsers className="mr-1" />;
      default:
        return <FiTarget className="mr-1" />;
    }
  };

  return (
    <div className="w-full">
      {/* Filtres et recherche */}
      <div className="mb-8 bg-white rounded-lg shadow-sm p-4 border border-gray-100">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Rechercher un programme..."
              className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex gap-4">
            <div className="w-40">
              <select
                className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as ProgrammeStatus | '')}
              >
                <option value="">Tous les statuts</option>
                <option value="En cours">En cours</option>
                <option value="Planifié">Planifié</option>
                <option value="Terminé">Terminé</option>
              </select>
            </div>
            
            <div className="w-40">
              <select
                className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value as ProgrammeCategory | '')}
              >
                <option value="">Toutes les catégories</option>
                <option value="Infrastructure">Infrastructure</option>
                <option value="Formation">Formation</option>
                <option value="Équipement">Équipement</option>
                <option value="Numérique">Numérique</option>
                <option value="Social">Social</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Liste des programmes */}
      <div className="programmes-container grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProgrammes.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500">Aucun programme ne correspond à vos critères de recherche.</p>
          </div>
        ) : (
          filteredProgrammes.map((programme) => (
            <motion.div
              key={programme.id}
              className="programme-card bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              {programme.image && (
                <div className="relative h-48 w-full bg-gray-200">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                  <div 
                    className="h-full w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${programme.image})` }}
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className={`text-xs font-medium px-2 py-1 rounded flex items-center ${getStatusColor(programme.status)}`}>
                      {programme.status === 'En cours' ? <FiClock className="mr-1" /> : 
                       programme.status === 'Planifié' ? <FiCalendar className="mr-1" /> : 
                       <FiCheckCircle className="mr-1" />}
                      {programme.status}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 z-20">
                    <span className="text-xs font-medium bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-2 py-1 rounded flex items-center">
                      {getCategoryIcon(programme.category)}
                      {programme.category}
                    </span>
                  </div>
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{programme.title}</h3>
                
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{programme.description}</p>
                
                <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <FiCalendar className="mr-1 text-gray-400" />
                    <span>{formatDate(programme.startDate)} - {formatDate(programme.endDate)}</span>
                  </div>
                  {programme.location && (
                    <div className="flex items-center">
                      <FiMapPin className="mr-1 text-gray-400" />
                      <span>{programme.location}</span>
                    </div>
                  )}
                </div>
                
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Objectifs principaux:</h4>
                  <ul className="text-sm text-gray-600 space-y-1 pl-5 list-disc">
                    {programme.objectives.slice(0, 2).map((objective, index) => (
                      <li key={index}>{objective}</li>
                    ))}
                    {programme.objectives.length > 2 && (
                      <li>...</li>
                    )}
                  </ul>
                </div>
                
                <Link
                  href={`/programmes/${programme.id}`}
                  className="mt-6 flex items-center justify-center w-full px-4 py-2 bg-[var(--color-primary)] text-white rounded-md hover:bg-[var(--color-primary)]/90 transition-colors"
                >
                  Voir les détails
                  <FiArrowRight className="ml-2" />
                </Link>
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
            Suivant
          </button>
        </nav>
      </div>
    </div>
  );
}
