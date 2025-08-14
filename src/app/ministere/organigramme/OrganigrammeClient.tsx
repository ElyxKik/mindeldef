"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaUserTie, FaUsers, FaUserShield, FaUserCog, FaChevronDown, FaChevronUp } from "react-icons/fa";

// Types pour l'organigramme
type DepartmentMember = {
  name: string;
  role: string;
};

type SubDepartment = {
  id: string;
  name: string;
  description: string;
  members: DepartmentMember[];
};

type Department = {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  subDepartments: SubDepartment[];
};

// Données de l'organigramme (à remplacer par des données réelles)
const departments: Department[] = [
  {
    id: "cabinet",
    name: "Cabinet du Ministre",
    description: "Équipe rapprochée du Ministre délégué à la Défense",
    icon: <FaUserTie className="text-[var(--color-primary)] text-2xl" />,
    subDepartments: [
      {
        id: "direction-cabinet",
        name: "Direction du Cabinet",
        description: "Coordination des activités du cabinet ministériel",
        members: [
          { name: "Jean Dupont", role: "Directeur de Cabinet" },
          { name: "Marie Mbala", role: "Directrice Adjointe" },
          { name: "Sophie Ilunga", role: "Secrétaire Générale" }
        ]
      },
      {
        id: "conseillers",
        name: "Conseillers",
        description: "Experts spécialisés conseillant le Ministre",
        members: [
          { name: "Robert Lukusa", role: "Conseiller Politique" },
          { name: "Claire Mutombo", role: "Conseillère Juridique" },
          { name: "Paul Kabongo", role: "Conseiller en Communication" }
        ]
      }
    ]
  },
  {
    id: "administration",
    name: "Administration Générale",
    description: "Services administratifs du Ministère",
    icon: <FaUserCog className="text-[var(--color-primary)] text-2xl" />,
    subDepartments: [
      {
        id: "ressources-humaines",
        name: "Direction des Ressources Humaines",
        description: "Gestion du personnel civil et militaire",
        members: [
          { name: "Antoine Kalala", role: "Directeur RH" },
          { name: "Jeanne Mwamba", role: "Responsable Recrutement" }
        ]
      },
      {
        id: "finances",
        name: "Direction des Finances",
        description: "Gestion budgétaire et financière",
        members: [
          { name: "Michel Kasongo", role: "Directeur Financier" },
          { name: "Françoise Tshilombo", role: "Comptable Principale" }
        ]
      },
      {
        id: "logistique",
        name: "Direction de la Logistique",
        description: "Approvisionnement et gestion des équipements",
        members: [
          { name: "Pierre Mukendi", role: "Directeur Logistique" },
          { name: "Claudine Nzuzi", role: "Responsable Achats" }
        ]
      }
    ]
  },
  {
    id: "operations",
    name: "Opérations de Défense",
    description: "Planification et coordination des opérations militaires",
    icon: <FaUserShield className="text-[var(--color-primary)] text-2xl" />,
    subDepartments: [
      {
        id: "planification",
        name: "Direction de la Planification",
        description: "Élaboration des stratégies de défense",
        members: [
          { name: "Général Joseph Kabila", role: "Directeur de la Planification" },
          { name: "Colonel Émile Bokassa", role: "Chef des Opérations" }
        ]
      },
      {
        id: "renseignement",
        name: "Direction du Renseignement",
        description: "Collecte et analyse des informations stratégiques",
        members: [
          { name: "Général Marc Lumumba", role: "Directeur du Renseignement" },
          { name: "Colonel Sarah Mobutu", role: "Analyste en Chef" }
        ]
      }
    ]
  },
  {
    id: "cooperation",
    name: "Coopération Internationale",
    description: "Relations avec les partenaires internationaux",
    icon: <FaUsers className="text-[var(--color-primary)] text-2xl" />,
    subDepartments: [
      {
        id: "cooperation-bilaterale",
        name: "Coopération Bilatérale",
        description: "Relations avec les pays partenaires",
        members: [
          { name: "Ambassadeur Pascal Tshisekedi", role: "Directeur de la Coopération" },
          { name: "Diane Mokonzi", role: "Chargée des Relations Afrique" }
        ]
      },
      {
        id: "cooperation-multilaterale",
        name: "Coopération Multilatérale",
        description: "Relations avec les organisations internationales",
        members: [
          { name: "Ambassadrice Denise Kabila", role: "Directrice des Relations Multilatérales" },
          { name: "Jacques Mobuto", role: "Chargé des Relations ONU" }
        ]
      }
    ]
  }
];

export default function OrganigrammeClient() {
  const [expandedDepartments, setExpandedDepartments] = useState<string[]>([]);
  const [expandedSubDepartments, setExpandedSubDepartments] = useState<string[]>([]);

  const toggleDepartment = (id: string) => {
    setExpandedDepartments(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const toggleSubDepartment = (id: string) => {
    setExpandedSubDepartments(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const isDepartmentExpanded = (id: string) => expandedDepartments.includes(id);
  const isSubDepartmentExpanded = (id: string) => expandedSubDepartments.includes(id);

  return (
    <div className="py-12">
      {/* Introduction */}
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h2 className="text-3xl font-bold mb-4 text-[var(--color-primary)]">Organigramme du Ministère</h2>
        <p className="text-lg text-zinc-700 dark:text-zinc-300">
          Structure organisationnelle du Ministère délégué à la Défense de la République Démocratique du Congo.
        </p>
      </div>

      {/* Légende */}
      <div className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-lg mb-8 max-w-3xl mx-auto">
        <h3 className="font-semibold mb-2">Comment lire l'organigramme :</h3>
        <ul className="text-sm space-y-1">
          <li className="flex items-center gap-2">
            <span className="w-4 h-4 bg-[var(--color-primary)] rounded-full inline-block"></span>
            <span>Départements principaux</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-4 h-4 bg-[var(--color-primary)]/70 rounded-full inline-block"></span>
            <span>Sous-départements</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-4 h-4 bg-[var(--color-primary)]/40 rounded-full inline-block"></span>
            <span>Membres du personnel</span>
          </li>
        </ul>
      </div>

      {/* Organigramme */}
      <div className="space-y-6">
        {departments.map((department) => (
          <motion.div
            key={department.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden"
          >
            {/* Département principal */}
            <button
              onClick={() => toggleDepartment(department.id)}
              className="w-full flex items-center justify-between p-4 bg-[var(--color-primary)]/10 hover:bg-[var(--color-primary)]/20 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-zinc-800 flex items-center justify-center shadow-sm">
                  {department.icon}
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-lg">{department.name}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">{department.description}</p>
                </div>
              </div>
              <div>
                {isDepartmentExpanded(department.id) ? (
                  <FaChevronUp className="text-[var(--color-primary)]" />
                ) : (
                  <FaChevronDown className="text-[var(--color-primary)]" />
                )}
              </div>
            </button>

            {/* Sous-départements */}
            {isDepartmentExpanded(department.id) && (
              <div className="p-4">
                <div className="space-y-4">
                  {department.subDepartments.map((subDept) => (
                    <div key={subDept.id} className="border-l-2 border-[var(--color-primary)]/30 pl-4">
                      <button
                        onClick={() => toggleSubDepartment(subDept.id)}
                        className="w-full flex items-center justify-between p-3 bg-[var(--color-primary)]/5 hover:bg-[var(--color-primary)]/10 rounded-r-lg transition-colors"
                      >
                        <div className="text-left">
                          <h4 className="font-semibold">{subDept.name}</h4>
                          <p className="text-sm text-zinc-600 dark:text-zinc-400">{subDept.description}</p>
                        </div>
                        <div>
                          {isSubDepartmentExpanded(subDept.id) ? (
                            <FaChevronUp className="text-[var(--color-primary)]" />
                          ) : (
                            <FaChevronDown className="text-[var(--color-primary)]" />
                          )}
                        </div>
                      </button>

                      {/* Membres */}
                      {isSubDepartmentExpanded(subDept.id) && (
                        <div className="mt-2 pl-4 space-y-2">
                          {subDept.members.map((member, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: index * 0.1 }}
                              className="p-3 bg-white dark:bg-zinc-800 rounded-lg shadow-sm"
                            >
                              <div className="font-medium">{member.name}</div>
                              <div className="text-sm text-[var(--color-primary)]">{member.role}</div>
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Note de bas de page */}
      <div className="mt-12 text-center text-sm text-zinc-500 dark:text-zinc-400">
        <p>Cet organigramme est une représentation simplifiée de la structure du Ministère.</p>
        <p>Pour plus d'informations, veuillez consulter le décret présidentiel n° XX/XX du XX/XX/20XX.</p>
      </div>
    </div>
  );
}
