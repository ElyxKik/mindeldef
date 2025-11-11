"use client";

import { useState } from "react";
import Image from "next/image";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

// Types pour les membres du cabinet
type SocialLinks = {
  twitter?: string;
  linkedin?: string;
  email?: string;
};

type CabinetMember = {
  id: string;
  name: string;
  role: string;
  photo: string;
  bio: string;
  socialLinks?: SocialLinks;
};

// Données des membres du cabinet (à remplacer par des données réelles)
const cabinetMembers: CabinetMember[] = [
  {
    id: "directeur-cabinet",
    name: "Jean Dupont",
    role: "Directeur de Cabinet",
    photo: "/images/placeholder-cabinet-1.jpg",
    bio: "Diplomate de carrière avec plus de 20 ans d'expérience dans les relations internationales et la défense nationale. Ancien ambassadeur et conseiller spécial à la présidence.",
    socialLinks: {
      twitter: "#",
      linkedin: "#",
      email: "directeur.cabinet@defense.gouv.cd"
    }
  },
  {
    id: "directeur-adjoint",
    name: "Marie Mbala",
    role: "Directrice Adjointe",
    photo: "/images/placeholder-cabinet-2.jpg",
    bio: "Spécialiste en politique de défense et sécurité régionale. Ancienne professeure à l'École Militaire et conseillère auprès des organisations internationales.",
    socialLinks: {
      linkedin: "#",
      email: "dir.adjoint@defense.gouv.cd"
    }
  },
  {
    id: "conseiller-politique",
    name: "Robert Lukusa",
    role: "Conseiller Politique",
    photo: "/images/placeholder-cabinet-3.jpg",
    bio: "Expert en géopolitique africaine et relations internationales. Ancien analyste au Centre d'études stratégiques pour l'Afrique et consultant pour plusieurs think tanks.",
    socialLinks: {
      twitter: "#",
      email: "conseiller.politique@defense.gouv.cd"
    }
  },
  {
    id: "conseiller-juridique",
    name: "Claire Mutombo",
    role: "Conseillère Juridique",
    photo: "/images/placeholder-cabinet-4.jpg",
    bio: "Juriste spécialisée en droit international humanitaire et droit des conflits armés. Ancienne magistrate et consultante auprès de la Cour pénale internationale.",
    socialLinks: {
      linkedin: "#",
      email: "conseiller.juridique@defense.gouv.cd"
    }
  },
  {
    id: "conseiller-communication",
    name: "Paul Kabongo",
    role: "Conseiller en Communication",
    photo: "/images/placeholder-cabinet-5.jpg",
    bio: "Expert en communication stratégique et relations publiques. Ancien journaliste et directeur de communication dans plusieurs institutions gouvernementales.",
    socialLinks: {
      twitter: "#",
      linkedin: "#",
      email: "communication@defense.gouv.cd"
    }
  },
  {
    id: "conseiller-technique",
    name: "Sophie Ilunga",
    role: "Conseillère Technique",
    photo: "/images/placeholder-cabinet-6.jpg",
    bio: "Ingénieure et experte en équipements militaires et logistique de défense. Ancienne officière des FARDC et consultante pour des programmes d'équipement militaire.",
    socialLinks: {
      linkedin: "#",
      email: "conseiller.technique@defense.gouv.cd"
    }
  }
];

export default function CabinetClient() {
  const [selectedMember, setSelectedMember] = useState<CabinetMember | null>(null);

  const handleMemberClick = (member: CabinetMember) => {
    setSelectedMember(member);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className="py-12">
      {/* Introduction */}
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h2 className="text-3xl font-bold mb-4 text-[var(--color-primary)]">Le Cabinet du Ministre</h2>
        <p className="text-lg text-slate-700">
          Le cabinet du Ministre délégué à la Défense est composé d'experts et de conseillers spécialisés qui accompagnent le Ministre dans l'élaboration et la mise en œuvre de la politique de défense nationale.
        </p>
      </div>

      {/* Grille des membres du cabinet */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cabinetMembers.map((member) => (
          <motion.div
            key={member.id}
            className="bg-white rounded-lg overflow-hidden shadow-md border border-slate-200 hover:shadow-lg transition-shadow cursor-pointer"
            whileHover={{ y: -5 }}
            onClick={() => handleMemberClick(member)}
          >
            <div className="relative h-64 w-full">
              <Image
                src={member.photo}
                alt={`Photo de ${member.name}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-[var(--color-primary)] font-medium mb-3">{member.role}</p>
              <p className="text-slate-700 line-clamp-3">{member.bio}</p>
              
              {/* Icônes réseaux sociaux */}
              {member.socialLinks && (
                <div className="mt-4 flex space-x-3">
                  {member.socialLinks.twitter && (
                    <a href={member.socialLinks.twitter} className="text-slate-600 hover:text-[var(--color-primary)] transition-colors">
                      <FaTwitter size={18} />
                    </a>
                  )}
                  {member.socialLinks.linkedin && (
                    <a href={member.socialLinks.linkedin} className="text-slate-600 hover:text-[var(--color-primary)] transition-colors">
                      <FaLinkedin size={18} />
                    </a>
                  )}
                  {member.socialLinks.email && (
                    <a href={`mailto:${member.socialLinks.email}`} className="text-slate-600 hover:text-[var(--color-primary)] transition-colors">
                      <FaEnvelope size={18} />
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal pour afficher les détails d'un membre */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative">
              <button 
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-10 bg-white/80 rounded-full p-2 text-slate-700 hover:text-[var(--color-primary)] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              
              <div className="md:flex">
                <div className="md:w-1/3 relative h-64 md:h-auto">
                  <Image
                    src={selectedMember.photo}
                    alt={`Photo de ${selectedMember.name}`}
                    fill
                    className="object-cover md:rounded-l-xl"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                
                <div className="p-6 md:p-8 md:w-2/3">
                  <h3 className="text-2xl font-bold mb-1">{selectedMember.name}</h3>
                  <p className="text-[var(--color-primary)] font-medium text-lg mb-4">{selectedMember.role}</p>
                  
                  <div className="prose max-w-none mb-6">
                    <p>{selectedMember.bio}</p>
                  </div>
                  
                  {selectedMember.socialLinks && (
                    <div className="flex space-x-4">
                      {selectedMember.socialLinks.twitter && (
                        <a href={selectedMember.socialLinks.twitter} className="flex items-center gap-2 text-slate-700 hover:text-[var(--color-primary)] transition-colors">
                          <FaTwitter size={18} />
                          <span>Twitter</span>
                        </a>
                      )}
                      {selectedMember.socialLinks.linkedin && (
                        <a href={selectedMember.socialLinks.linkedin} className="flex items-center gap-2 text-slate-700 hover:text-[var(--color-primary)] transition-colors">
                          <FaLinkedin size={18} />
                          <span>LinkedIn</span>
                        </a>
                      )}
                      {selectedMember.socialLinks.email && (
                        <a href={`mailto:${selectedMember.socialLinks.email}`} className="flex items-center gap-2 text-slate-700 hover:text-[var(--color-primary)] transition-colors">
                          <FaEnvelope size={18} />
                          <span>Email</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
