"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaFileAlt, FaBalanceScale, FaGavel, FaUserShield, FaGlobeAfrica } from "react-icons/fa";

// Types pour les attributions
type AttributionCategory = {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  attributions: string[];
};

// Données des attributions (à remplacer par des données réelles)
const attributionCategories: AttributionCategory[] = [
  {
    id: "politique-defense",
    title: "Politique de Défense",
    icon: <FaUserShield size={24} />,
    color: "#2563eb", // blue-600
    attributions: [
      "Élaborer et mettre en œuvre la politique de défense nationale",
      "Définir les orientations stratégiques en matière de défense",
      "Coordonner les actions de défense avec les autres ministères",
      "Assurer la veille stratégique et l'analyse des menaces",
      "Proposer les réformes nécessaires à l'adaptation des forces armées"
    ]
  },
  {
    id: "administration",
    title: "Administration et Gestion",
    icon: <FaFileAlt size={24} />,
    color: "#059669", // emerald-600
    attributions: [
      "Gérer les ressources humaines, matérielles et financières du ministère",
      "Élaborer et exécuter le budget alloué à la défense nationale",
      "Superviser l'administration des forces armées",
      "Assurer la gestion du patrimoine immobilier de la défense",
      "Coordonner les services administratifs centraux et déconcentrés"
    ]
  },
  {
    id: "juridique",
    title: "Cadre Juridique et Réglementaire",
    icon: <FaBalanceScale size={24} />,
    color: "#7c3aed", // violet-600
    attributions: [
      "Élaborer les projets de lois et règlements relatifs à la défense",
      "Veiller au respect du droit international humanitaire",
      "Assurer la conformité des opérations militaires avec le cadre légal",
      "Participer à l'élaboration des accords internationaux de défense",
      "Conseiller le gouvernement sur les aspects juridiques de la défense"
    ]
  },
  {
    id: "operations",
    title: "Opérations et Déploiements",
    icon: <FaGavel size={24} />,
    color: "#db2777", // pink-600
    attributions: [
      "Proposer au Président de la République les plans d'engagement des forces",
      "Coordonner les opérations militaires sur le territoire national",
      "Superviser les déploiements des forces armées à l'étranger",
      "Assurer la liaison avec les états-majors opérationnels",
      "Évaluer l'efficacité des opérations militaires"
    ]
  },
  {
    id: "international",
    title: "Relations Internationales",
    icon: <FaGlobeAfrica size={24} />,
    color: "#d97706", // amber-600
    attributions: [
      "Représenter la RDC dans les forums internationaux de défense",
      "Négocier et suivre les accords de coopération militaire",
      "Coordonner la participation aux opérations de maintien de la paix",
      "Développer les relations avec les partenaires internationaux",
      "Assurer le suivi des engagements internationaux en matière de défense"
    ]
  }
];

export default function AttributionsClient() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>("politique-defense");

  const toggleCategory = (id: string) => {
    setExpandedCategory(prev => prev === id ? null : id);
  };

  return (
    <div className="py-12">
      {/* Introduction */}
      <div className="max-w-3xl mx-auto mb-16 text-center">
        <h2 className="text-3xl font-bold mb-4 text-[var(--color-primary)]">Attributions du Ministère</h2>
        <p className="text-lg text-zinc-700 dark:text-zinc-300">
          Conformément au décret présidentiel n° XX/XX du XX/XX/20XX portant organisation et fonctionnement du Gouvernement, 
          le Ministère délégué à la Défense est investi des attributions suivantes.
        </p>
      </div>

      {/* Attributions par catégorie */}
      <div className="max-w-4xl mx-auto space-y-6">
        {attributionCategories.map((category) => {
          const isExpanded = expandedCategory === category.id;
          
          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleCategory(category.id)}
                className={`w-full flex items-center justify-between p-5 transition-colors ${
                  isExpanded 
                    ? `bg-[${category.color}]/10 hover:bg-[${category.color}]/15` 
                    : "bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center" 
                    style={{ backgroundColor: `${category.color}20`, color: category.color }}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="text-[var(--color-primary)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-5 bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800"
                >
                  <ul className="space-y-3">
                    {category.attributions.map((attribution, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <FaCheckCircle className="text-[var(--color-primary)] mt-1 flex-shrink-0" />
                        <span>{attribution}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Cadre légal */}
      <div className="max-w-3xl mx-auto mt-16 p-6 bg-zinc-50 dark:bg-zinc-900 rounded-lg border-l-4 border-[var(--color-primary)]">
        <h3 className="text-xl font-bold mb-4">Fondement juridique</h3>
        <div className="prose dark:prose-invert max-w-none">
          <p>
            Les attributions du Ministère délégué à la Défense sont définies par :
          </p>
          <ul className="space-y-2 mt-4">
            <li>La Constitution de la République Démocratique du Congo, notamment en ses articles XX, XX et XX ;</li>
            <li>Le décret présidentiel n° XX/XX du XX/XX/20XX portant organisation et fonctionnement du Gouvernement ;</li>
            <li>La loi organique n° XX/XX du XX/XX/20XX relative à l'organisation et au fonctionnement des Forces Armées ;</li>
            <li>Le décret n° XX/XX du XX/XX/20XX fixant les attributions des Ministères.</li>
          </ul>
        </div>
      </div>

      {/* Note de bas de page */}
      <div className="max-w-3xl mx-auto mt-12 text-center text-sm text-zinc-500 dark:text-zinc-400">
        <p>
          Cette liste d'attributions n'est pas exhaustive et peut être modifiée par décret présidentiel.
        </p>
      </div>
    </div>
  );
}
