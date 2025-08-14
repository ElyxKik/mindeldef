"use client";

import { useEffect, useRef } from "react";
import { loadGsap } from "@/lib/gsap";
import CardNews from "@/components/cards/CardNews";
import CardDocument from "@/components/cards/CardDocument";

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

// Composant pour animer l'apparition des sections au scroll
const AnimatedSection = ({ children, className = "", delay = 0 }: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: any;
    (async () => {
      const g = await loadGsap();
      if (!g || !ref.current) return;

      ctx = g.gsap.context(() => {
        g.gsap.fromTo(
          ref.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top bottom-=100",
              toggleActions: "play none none none",
            },
          }
        );
      }, ref);
    })();

    return () => ctx?.revert?.();
  }, [delay]);

  return (
    <div ref={ref} className={`opacity-0 ${className}`}>
      {children}
    </div>
  );
};

// Composant pour animer l'apparition des éléments avec un effet staggered
const StaggeredItems = ({ children, className = "", staggerAmount = 0.1 }: { children: React.ReactNode; className?: string; staggerAmount?: number }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: any;
    (async () => {
      const g = await loadGsap();
      if (!g || !ref.current) return;

      ctx = g.gsap.context(() => {
        // Vérifier que ref.current existe avant d'accéder à ses enfants
        if (ref.current && ref.current.children) {
          const items = ref.current.children;
          g.gsap.fromTo(
            items,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              stagger: staggerAmount,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ref.current,
                start: "top bottom-=50",
                toggleActions: "play none none none",
              },
            }
          );
        }
      }, ref);
    })();

    return () => ctx?.revert?.();
  }, [staggerAmount]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

// Icônes pour les accès rapides
const DocumentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-3 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const ContractIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-3 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
  </svg>
);

const NewsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-3 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
  </svg>
);

const ContactIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-3 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

// Icônes pour les types de documents
const DecreeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const ReportIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const CircularIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

// Composant pour les cartes d'accès rapide
const QuickAccessCard = ({ title, href, icon }: { title: string; href: string; icon: React.ReactNode }) => (
  <a 
    href={href} 
    className="flex flex-col items-center justify-center rounded-lg border border-gray-200 p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white dark:bg-gray-800 dark:border-gray-700"
  >
    {icon}
    <h3 className="text-lg font-medium">{title}</h3>
  </a>
);

// Composant pour les événements de l'agenda
const EventCard = ({ title, date, location, href }: { title: string; date: string; location: string; href: string }) => (
  <a 
    href={href} 
    className="flex flex-col p-4 rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1 bg-white dark:bg-gray-800 dark:border-gray-700"
  >
    <time className="text-sm font-medium text-[var(--color-primary)]">{date}</time>
    <h3 className="mt-2 text-lg font-medium">{title}</h3>
    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{location}</p>
  </a>
);

// Composant principal pour la page d'accueil
export default function HomeClient() {
  return (
    <>
      {/* Section À la Une */}
      <AnimatedSection className="mt-12 mb-16">
        <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-8 md:p-12">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-white text-[var(--color-primary)] rounded-full mb-4">
                À LA UNE
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Visite officielle du Ministre délégué à la Défense dans la région Nord
              </h2>
              <p className="text-white/90 mb-6">
                Le Ministre a rencontré les autorités locales et les commandants militaires pour discuter des enjeux sécuritaires de la région.
              </p>
              <a 
                href="/actualites/visite-officielle-nord" 
                className="inline-flex items-center px-4 py-2 bg-white text-[var(--color-primary)] rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                Lire l'article complet
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            <div className="md:w-1/2 h-64 md:h-auto relative">
              <div className="absolute inset-0 bg-[url('/images/placeholder-news.jpg')] bg-cover bg-center" />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Section Accès Rapides */}
      <AnimatedSection className="mb-16" delay={0.2}>
        <h2 className="text-2xl font-semibold mb-6">Accès Rapides</h2>
        <StaggeredItems className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <QuickAccessCard title="Documents officiels" href="/documents" icon={<DocumentIcon />} />
          <QuickAccessCard title="Marchés publics" href="/marches-publics" icon={<ContractIcon />} />
          <QuickAccessCard title="Actualités" href="/actualites" icon={<NewsIcon />} />
          <QuickAccessCard title="Contacts" href="/contact" icon={<ContactIcon />} />
        </StaggeredItems>
      </AnimatedSection>

      {/* Section Dernières Actualités */}
      <AnimatedSection className="mb-16" delay={0.3}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Dernières actualités</h2>
          <a 
            href="/actualites" 
            className="text-[var(--color-primary)] hover:underline inline-flex items-center group"
          >
            Voir toutes les actualités
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
        <StaggeredItems className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <CardNews 
            title="Communiqué du Ministère sur les nouvelles mesures de sécurité" 
            href="/actualites/communique-ministere" 
            date="2025-08-10" 
            image="/images/placeholder-news.jpg"
            excerpt="Le Ministère délégué à la Défense a annoncé aujourd'hui de nouvelles mesures visant à renforcer la sécurité dans les zones frontalières."
          />
          <CardNews 
            title="Signature d'un accord de coopération régionale" 
            href="/actualites/cooperation-regionale" 
            date="2025-08-08" 
            image="/images/placeholder-news.jpg"
            excerpt="Un accord historique de coopération en matière de défense a été signé avec les pays voisins pour renforcer la sécurité régionale."
          />
          <CardNews 
            title="Point de presse mensuel du porte-parole" 
            href="/actualites/point-presse" 
            date="2025-08-02" 
            image="/images/placeholder-news.jpg"
            excerpt="Le porte-parole du Ministère a présenté le bilan mensuel des opérations et répondu aux questions des journalistes."
          />
        </StaggeredItems>
      </AnimatedSection>

      {/* Section Documents Récents */}
      <AnimatedSection className="mb-16" delay={0.4}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Documents récents</h2>
          <a 
            href="/documents" 
            className="text-[var(--color-primary)] hover:underline inline-flex items-center group"
          >
            Voir tous les documents
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
        <StaggeredItems className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <CardDocument 
            title="Décret n°2025-001" 
            href="/documents/1" 
            type="Décret" 
            service="Défense" 
            date="2025-07-01" 
            icon={<DecreeIcon />}
          />
          <CardDocument 
            title="Rapport annuel 2024" 
            href="/documents/2" 
            type="Rapport" 
            service="SG" 
            date="2025-02-20" 
            icon={<ReportIcon />}
          />
          <CardDocument 
            title="Circulaire 15/2025" 
            href="/documents/3" 
            type="Circulaire" 
            service="Cabinet" 
            date="2025-06-12" 
            icon={<CircularIcon />}
          />
        </StaggeredItems>
      </AnimatedSection>

      {/* Section Agenda du Ministre */}
      <AnimatedSection className="mb-16" delay={0.5}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Agenda du Ministre</h2>
          <a 
            href="/ministere/ministre/agenda" 
            className="text-[var(--color-primary)] hover:underline inline-flex items-center group"
          >
            Voir l'agenda complet
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
        <StaggeredItems className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" staggerAmount={0.15}>
          <EventCard 
            title="Conseil des ministres" 
            date="15 août 2025" 
            location="Palais présidentiel" 
            href="/ministere/ministre/agenda/conseil-ministres"
          />
          <EventCard 
            title="Visite des troupes à l'Est" 
            date="18 août 2025" 
            location="Province de l'Est" 
            href="/ministere/ministre/agenda/visite-troupes"
          />
          <EventCard 
            title="Conférence sur la sécurité régionale" 
            date="22 août 2025" 
            location="Centre de conférences" 
            href="/ministere/ministre/agenda/conference-securite"
          />
        </StaggeredItems>
      </AnimatedSection>
    </>
  );
}
