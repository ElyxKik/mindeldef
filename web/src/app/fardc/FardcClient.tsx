"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { loadGsap } from "@/lib/gsap";

// Composant pour les onglets
const TabButton = ({ 
  active, 
  onClick, 
  children 
}: { 
  active: boolean; 
  onClick: () => void; 
  children: React.ReactNode 
}) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 font-medium text-sm rounded-md transition-all duration-300 ${
      active 
        ? "bg-[var(--color-primary)] text-white shadow-md" 
        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
    }`}
  >
    {children}
  </button>
);

// Composant pour les cartes d'opération
const OperationCard = ({ 
  title, 
  date, 
  location, 
  description 
}: { 
  title: string; 
  date: string; 
  location: string; 
  description: string 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm hover:shadow-md transition-shadow"
  >
    <div className="flex items-center justify-between mb-3">
      <h3 className="text-lg font-semibold text-[var(--color-primary)]">{title}</h3>
      <span className="text-sm font-medium bg-[var(--color-primary-light)] text-[var(--color-primary)] px-2 py-1 rounded-full">
        {date}
      </span>
    </div>
    <p className="text-sm text-slate-700 mb-2">
      <span className="font-medium">Lieu:</span> {location}
    </p>
    <p className="text-sm text-slate-700">{description}</p>
  </motion.div>
);

// Composant pour les zones de défense
const DefenseZoneCard = ({ 
  name, 
  commander, 
  headquarters, 
  units 
}: { 
  name: string; 
  commander: string; 
  headquarters: string; 
  units: string[] 
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-all"
  >
    <div className="bg-[var(--color-primary)] p-4">
      <h3 className="text-lg font-semibold text-white">{name}</h3>
    </div>
    <div className="p-4">
      <p className="mb-2 text-sm">
        <span className="font-medium">Commandant:</span> {commander}
      </p>
      <p className="mb-3 text-sm">
        <span className="font-medium">Quartier général:</span> {headquarters}
      </p>
      <div>
        <h4 className="text-sm font-medium mb-2">Unités principales:</h4>
        <ul className="list-disc pl-5 text-sm space-y-1">
          {units.map((unit, index) => (
            <li key={index}>{unit}</li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);

// Composant pour les étapes de recrutement
const RecruitmentStep = ({ 
  number, 
  title, 
  description 
}: { 
  number: number; 
  title: string; 
  description: string 
}) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: number * 0.1 }}
    viewport={{ once: true }}
    className="flex items-start"
  >
    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white font-bold mr-4">
      {number}
    </div>
    <div>
      <h3 className="text-lg font-medium mb-1">{title}</h3>
      <p className="text-sm text-slate-700">{description}</p>
    </div>
  </motion.div>
);

export default function FardcClient() {
  const [activeTab, setActiveTab] = useState("presentation");
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    let ctx: any;
    (async () => {
      const g = await loadGsap();
      if (!g || !mapRef.current) return;
      
      ctx = g.gsap.context(() => {
        // Animation de la carte au scroll
        g.gsap.fromTo(
          mapRef.current,
          { scale: 0.9, opacity: 0.8 },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: mapRef.current,
              start: "top bottom-=100",
              end: "bottom center",
              scrub: true,
            },
          }
        );
      }, mapRef);
    })();
    
    return () => ctx?.revert?.();
  }, []);

  return (
    <>
      {/* Navigation par onglets */}
      <div className="flex flex-wrap gap-2 mb-8">
        <TabButton 
          active={activeTab === "presentation"} 
          onClick={() => setActiveTab("presentation")}
        >
          Présentation
        </TabButton>
        <TabButton 
          active={activeTab === "operations"} 
          onClick={() => setActiveTab("operations")}
        >
          Grandes opérations
        </TabButton>
        <TabButton 
          active={activeTab === "zones"} 
          onClick={() => setActiveTab("zones")}
        >
          Zones de défense
        </TabButton>
        <TabButton 
          active={activeTab === "recruitment"} 
          onClick={() => setActiveTab("recruitment")}
        >
          Recrutement
        </TabButton>
      </div>

      {/* Contenu des onglets */}
      <div className="mt-6">
        {/* Présentation */}
        {activeTab === "presentation" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold mb-4">Les Forces Armées de la République Démocratique du Congo</h2>
              
              <p>
                Les Forces Armées de la République Démocratique du Congo (FARDC) constituent l'armée nationale de la RDC. 
                Elles sont chargées de défendre l'intégrité territoriale et la souveraineté nationale contre les agressions 
                extérieures et d'assurer la protection des personnes et de leurs biens.
              </p>
              
              <div className="my-6 bg-slate-50 p-6 rounded-lg border-l-4 border-[var(--color-primary)]">
                <h3 className="text-xl font-semibold mb-3">Mission</h3>
                <p>
                  Les FARDC ont pour mission principale de garantir l'indépendance et l'intégrité territoriale de la 
                  République Démocratique du Congo. Elles assurent, en tout temps, la protection des personnes et de leurs 
                  biens ainsi que la défense des intérêts stratégiques du pays.
                </p>
              </div>
              
              <h3 className="text-xl font-semibold mb-3">Organisation</h3>
              <p>
                Les FARDC sont organisées en différentes composantes :
              </p>
              
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Force terrestre</strong> : Comprend l'infanterie, l'artillerie, le génie militaire et les forces blindées.
                </li>
                <li>
                  <strong>Force aérienne</strong> : Responsable de la défense aérienne du territoire national.
                </li>
                <li>
                  <strong>Force navale</strong> : Assure la surveillance et la défense des eaux territoriales.
                </li>
                <li>
                  <strong>Service de santé militaire</strong> : Fournit des soins médicaux aux militaires et à leurs familles.
                </li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Effectifs et équipements</h3>
              <p>
                Les FARDC comptent environ 130 000 à 150 000 hommes et femmes. L'équipement militaire comprend des 
                véhicules blindés, des systèmes d'artillerie, des aéronefs et des navires de patrouille. Un programme 
                de modernisation est en cours pour renforcer les capacités opérationnelles des forces.
              </p>
            </div>
          </motion.div>
        )}

        {/* Grandes opérations */}
        {activeTab === "operations" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold mb-6">Grandes opérations des FARDC</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <OperationCard
                title="Opération Sukola I"
                date="2014 - Présent"
                location="Nord-Kivu et Sud-Kivu"
                description="Opération contre les groupes armés dans l'est du pays, visant à neutraliser les menaces et à restaurer l'autorité de l'État dans les zones affectées."
              />
              
              <OperationCard
                title="Opération Sukola II"
                date="2015 - Présent"
                location="Province de l'Ituri"
                description="Opération de stabilisation et de sécurisation dans la province de l'Ituri, ciblant les groupes armés locaux et étrangers."
              />
              
              <OperationCard
                title="Opération Zaruba ya Ituri"
                date="2022 - Présent"
                location="Ituri"
                description="Opération conjointe avec la MONUSCO pour protéger les civils et neutraliser les groupes armés dans la région de l'Ituri."
              />
              
              <OperationCard
                title="Opération Amani Leo"
                date="2010 - 2012"
                location="Provinces de l'Est"
                description="Opération majeure contre les groupes rebelles dans les provinces de l'Est, avec l'appui de la MONUSCO."
              />
            </div>
            
            <div className="mt-8 p-4 bg-slate-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Résultats des opérations récentes</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Neutralisation de plusieurs chefs rebelles</li>
                <li>Récupération de territoires précédemment occupés par des groupes armés</li>
                <li>Sécurisation des axes routiers stratégiques</li>
                <li>Protection des populations civiles dans les zones de conflit</li>
                <li>Démantèlement de réseaux d'exploitation illégale des ressources naturelles</li>
              </ul>
            </div>
          </motion.div>
        )}

        {/* Zones de défense */}
        {activeTab === "zones" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold mb-6">Zones de défense</h2>
            
            <div ref={mapRef} className="relative h-[400px] mb-8 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/placeholder-fardc-map.jpg"
                alt="Carte des zones de défense des FARDC"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Carte des zones de défense</h3>
                  <p className="text-sm">Les FARDC sont déployées sur l'ensemble du territoire national, avec une concentration particulière dans les zones stratégiques et les régions affectées par l'insécurité.</p>
                </div>
              </div>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <DefenseZoneCard
                name="Zone de défense Nord-Est"
                commander="Général de Division Jean-Pierre Kabambi"
                headquarters="Goma"
                units={["41ème Brigade d'infanterie", "212ème Régiment blindé", "Unité spéciale d'intervention"]}
              />
              
              <DefenseZoneCard
                name="Zone de défense Sud-Est"
                commander="Général de Brigade Marie Nkulu"
                headquarters="Lubumbashi"
                units={["32ème Brigade d'infanterie", "Bataillon de génie militaire", "Escadron de reconnaissance"]}
              />
              
              <DefenseZoneCard
                name="Zone de défense Ouest"
                commander="Général de Division Paul Mwamba"
                headquarters="Matadi"
                units={["Force navale - Flottille Ouest", "22ème Brigade d'infanterie", "Unité de défense côtière"]}
              />
              
              <DefenseZoneCard
                name="Zone de défense Centre"
                commander="Général de Brigade Antoine Kasongo"
                headquarters="Kananga"
                units={["55ème Brigade d'infanterie", "Bataillon logistique central", "Unité de communication"]}
              />
              
              <DefenseZoneCard
                name="Zone de défense Nord"
                commander="Général de Division Emmanuel Luba"
                headquarters="Kisangani"
                units={["63ème Brigade d'infanterie", "Bataillon de forces spéciales", "Unité fluviale"]}
              />
              
              <DefenseZoneCard
                name="Zone de défense Capitale"
                commander="Général de Corps d'Armée Robert Kibambe"
                headquarters="Kinshasa"
                units={["Garde républicaine", "1ère Brigade d'intervention rapide", "Bataillon de défense aérienne"]}
              />
            </div>
          </motion.div>
        )}

        {/* Recrutement */}
        {activeTab === "recruitment" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold mb-6">Recrutement dans les FARDC</h2>
            
            <div className="bg-[var(--color-primary-light)] p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-3">Conditions générales</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Être de nationalité congolaise</li>
                <li>Être âgé de 18 à 25 ans pour le recrutement initial</li>
                <li>Jouir de ses droits civiques et être de bonne moralité</li>
                <li>Être physiquement et mentalement apte</li>
                <li>Avoir au minimum un diplôme d'État ou équivalent</li>
                <li>Réussir les tests de sélection</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold mb-4">Processus de recrutement</h3>
            <div className="space-y-6 mb-8">
              <RecruitmentStep
                number={1}
                title="Dépôt de candidature"
                description="Soumission du dossier complet aux bureaux de recrutement des FARDC ou en ligne sur le portail officiel."
              />
              
              <RecruitmentStep
                number={2}
                title="Présélection sur dossier"
                description="Examen des candidatures et vérification des documents fournis par la commission de recrutement."
              />
              
              <RecruitmentStep
                number={3}
                title="Tests physiques et médicaux"
                description="Évaluation des capacités physiques et de l'état de santé général du candidat."
              />
              
              <RecruitmentStep
                number={4}
                title="Tests psychotechniques"
                description="Évaluation des aptitudes intellectuelles et psychologiques du candidat."
              />
              
              <RecruitmentStep
                number={5}
                title="Entretien avec la commission"
                description="Entretien individuel pour évaluer la motivation et les compétences du candidat."
              />
              
              <RecruitmentStep
                number={6}
                title="Formation initiale"
                description="Période de formation militaire de base d'une durée de 6 à 12 mois selon la spécialité choisie."
              />
            </div>
            
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-semibold mb-3">Formations et spécialités</h3>
              <p className="mb-4">
                Les FARDC offrent diverses filières de formation et de spécialisation pour les nouvelles recrues :
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-3 bg-white rounded shadow-sm">
                  <h4 className="font-medium mb-2">Formations militaires</h4>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Infanterie</li>
                    <li>Artillerie</li>
                    <li>Forces blindées</li>
                    <li>Génie militaire</li>
                    <li>Transmissions</li>
                  </ul>
                </div>
                <div className="p-3 bg-white rounded shadow-sm">
                  <h4 className="font-medium mb-2">Formations techniques</h4>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Maintenance aéronautique</li>
                    <li>Informatique et cybersécurité</li>
                    <li>Logistique militaire</li>
                    <li>Santé militaire</li>
                    <li>Administration</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Link 
                href="/recrutement" 
                className="inline-flex items-center px-6 py-3 bg-[var(--color-primary)] text-white rounded-md hover:bg-[var(--color-primary-dark)] transition-colors"
              >
                Consulter les offres de recrutement
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
}
