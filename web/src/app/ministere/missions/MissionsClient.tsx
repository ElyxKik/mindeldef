"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaShieldAlt, FaHandshake, FaUsers, FaGraduationCap, FaGlobeAfrica, FaChartLine } from "react-icons/fa";

// Types pour les missions
type Mission = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  objectives: string[];
  color: string;
};

// Données des missions (à remplacer par des données réelles)
const missions: Mission[] = [
  {
    id: "defense-nationale",
    title: "Défense Nationale",
    description: "Assurer la sécurité et l'intégrité territoriale de la République Démocratique du Congo",
    icon: <FaShieldAlt size={32} />,
    objectives: [
      "Élaborer et mettre en œuvre la politique de défense nationale",
      "Garantir la souveraineté et l'intégrité territoriale du pays",
      "Assurer la protection des personnes et des biens sur l'ensemble du territoire",
      "Coordonner les opérations militaires de défense du territoire"
    ],
    color: "#2563eb" // blue-600
  },
  {
    id: "cooperation-militaire",
    title: "Coopération Militaire",
    description: "Développer des partenariats stratégiques avec d'autres nations et organisations internationales",
    icon: <FaHandshake size={32} />,
    objectives: [
      "Établir et maintenir des accords de coopération militaire bilatéraux et multilatéraux",
      "Participer aux opérations de maintien de la paix sous l'égide des organisations internationales",
      "Renforcer les capacités de défense par des échanges techniques et des formations conjointes",
      "Développer des partenariats stratégiques avec les pays alliés"
    ],
    color: "#059669" // emerald-600
  },
  {
    id: "gestion-personnel",
    title: "Gestion du Personnel Militaire",
    description: "Administrer les ressources humaines des Forces Armées de la RDC",
    icon: <FaUsers size={32} />,
    objectives: [
      "Gérer le recrutement, la formation et l'avancement du personnel militaire",
      "Assurer le bien-être social et médical des militaires et de leurs familles",
      "Mettre en œuvre des politiques de reconversion pour les militaires en fin de carrière",
      "Veiller au respect des droits et devoirs des militaires"
    ],
    color: "#d97706" // amber-600
  },
  {
    id: "formation-militaire",
    title: "Formation et Éducation",
    description: "Développer les compétences et l'expertise des forces armées",
    icon: <FaGraduationCap size={32} />,
    objectives: [
      "Superviser les académies et écoles militaires nationales",
      "Élaborer des programmes de formation adaptés aux besoins opérationnels",
      "Promouvoir la recherche et le développement dans le domaine militaire",
      "Organiser des exercices et simulations pour maintenir l'état de préparation des troupes"
    ],
    color: "#7c3aed" // violet-600
  },
  {
    id: "securite-regionale",
    title: "Sécurité Régionale",
    description: "Contribuer à la stabilité et à la paix dans la région des Grands Lacs",
    icon: <FaGlobeAfrica size={32} />,
    objectives: [
      "Participer aux initiatives régionales de sécurité collective",
      "Lutter contre les menaces transfrontalières (terrorisme, trafics illicites)",
      "Collaborer avec les pays voisins pour sécuriser les frontières communes",
      "Contribuer aux mécanismes de prévention et de résolution des conflits régionaux"
    ],
    color: "#db2777" // pink-600
  },
  {
    id: "modernisation",
    title: "Modernisation des Forces Armées",
    description: "Renforcer les capacités opérationnelles et technologiques des FARDC",
    icon: <FaChartLine size={32} />,
    objectives: [
      "Planifier et mettre en œuvre les programmes d'équipement des forces armées",
      "Développer les infrastructures militaires sur l'ensemble du territoire",
      "Intégrer les nouvelles technologies dans les systèmes de défense",
      "Améliorer les capacités de renseignement et de communication"
    ],
    color: "#ea580c" // orange-600
  }
];

// Composant de carte de mission
const MissionCard = ({ mission, isActive, onClick, index }: {
  mission: Mission;
  isActive: boolean;
  onClick: () => void;
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`bg-white rounded-xl overflow-hidden shadow-md border border-slate-200 transition-all duration-300 ${
        isActive ? 'ring-2 ring-[var(--color-primary)]' : ''
      }`}
      style={{ 
        borderTopColor: mission.color,
        borderTopWidth: '4px'
      }}
    >
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${mission.color}20` }}>
            <div className="text-[color:var(--color-primary)]">
              {mission.icon}
            </div>
          </div>
          <h3 className="text-xl font-bold">{mission.title}</h3>
        </div>
        
        <p className="text-slate-700 mb-4">
          {mission.description}
        </p>
        
        <button
          onClick={onClick}
          className="text-[var(--color-primary)] hover:text-[var(--color-primary)]/80 font-medium flex items-center gap-1 transition-colors"
        >
          {isActive ? 'Voir moins' : 'Voir les objectifs'}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 transition-transform ${isActive ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 pt-4 border-t border-slate-200"
          >
            <h4 className="font-semibold mb-2 text-slate-900">Objectifs :</h4>
            <ul className="space-y-2">
              {mission.objectives.map((objective, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <span className="text-[var(--color-primary)] mt-1">•</span>
                  <span>{objective}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default function MissionsClient() {
  const [activeMission, setActiveMission] = useState<string | null>(null);

  const handleMissionClick = (id: string) => {
    setActiveMission(prev => prev === id ? null : id);
  };

  return (
    <div className="py-12">
      {/* Introduction */}
      <div className="max-w-3xl mx-auto mb-16 text-center">
        <h2 className="text-3xl font-bold mb-4 text-[var(--color-primary)]">Nos Missions</h2>
        <p className="text-lg text-slate-700">
          Le Ministère délégué à la Défense est chargé d'élaborer et de mettre en œuvre la politique de défense nationale, 
          de garantir la souveraineté et l'intégrité territoriale du pays, et d'assurer la sécurité des personnes et des biens.
        </p>
      </div>

      {/* Missions principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {missions.map((mission, index) => {
          const isActive = activeMission === mission.id;
          
          return (
            <MissionCard
              key={mission.id}
              mission={mission}
              isActive={isActive}
              onClick={() => handleMissionClick(mission.id)}
              index={index}
            />
          );
        })}
      </div>

      {/* Citation */}
      <div className="max-w-4xl mx-auto my-20 px-6 py-10 bg-slate-50 rounded-lg border-l-4 border-[var(--color-primary)] shadow-sm">
        <blockquote className="text-xl italic font-medium text-slate-900">
          "La défense nationale est l'affaire de tous. Notre mission est de protéger notre nation, 
          de préserver notre souveraineté et d'assurer un environnement sécurisé pour le développement 
          de notre pays et le bien-être de notre peuple."
        </blockquote>
        <div className="mt-4 text-right">
          <cite className="text-[var(--color-primary)] font-semibold">— S.E. [Nom du Ministre], Ministre délégué à la Défense</cite>
        </div>
      </div>

      {/* Cadre légal */}
      <div className="max-w-3xl mx-auto mt-16">
        <h3 className="text-2xl font-bold mb-6 text-center text-[var(--color-primary)]">Cadre Légal</h3>
        <div className="prose max-w-none">
          <p className="text-slate-700">
            Les missions du Ministère délégué à la Défense sont définies par le décret présidentiel n° XX/XX du XX/XX/20XX 
            portant organisation et fonctionnement du Gouvernement, ainsi que par la Constitution de la République Démocratique du Congo, 
            notamment en ses articles relatifs à la défense nationale et à la sécurité.
          </p>
          <p className="text-slate-700">
            Le Ministère opère également dans le respect des engagements internationaux de la République Démocratique du Congo, 
            notamment les traités et accords relatifs à la paix et à la sécurité régionale et internationale.
          </p>
        </div>
      </div>
    </div>
  );
}
