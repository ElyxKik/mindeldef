"use client";

import { useEffect, useRef } from "react";
import { loadGsap } from "@/lib/gsap";
import HeroSlider from "@/components/heroes/HeroSlider";
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
      {/* Section À la Une - Slider Actualités */}
      <AnimatedSection className="mt-12 mb-16">
        <HeroSlider
          height="medium"
          slides={[
            {
              imageSrc: "/images/news/slider-1.png",
              alt: "Actualité à la une",
              title: "Visite officielle du Ministre délégué à la Défense dans la région Nord",
              subtitle:
                "Le Ministre a rencontré les autorités locales et les commandants militaires pour discuter des enjeux sécuritaires de la région.",
              cta: { text: "Lire l'article complet", href: "/actualites/visite-officielle-nord" },
            },
            {
              imageSrc: "/images/placeholder-news.jpg",
              alt: "Actualités du Ministère",
              title: "Renforcement de la coopération régionale en matière de sécurité",
              subtitle: "Signature d'accords pour une meilleure coordination des opérations.",
              cta: { text: "Voir les actualités", href: "/actualites" },
            },
          ]}
        />
      </AnimatedSection>

      {/* Section Priorités Stratégiques */}
      <AnimatedSection className="mb-16" delay={0.1}>
        <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">Priorités Stratégiques</h2>
        <StaggeredItems className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg p-6 border border-blue-200 dark:border-blue-700">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">1</div>
              <h3 className="ml-3 text-lg font-semibold text-slate-900 dark:text-white">Sécurité territoriale</h3>
            </div>
            <p className="text-slate-700 dark:text-slate-300">Protection intégrale du territoire national contre les menaces internes et externes.</p>
          </div>
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900 dark:to-emerald-800 rounded-lg p-6 border border-emerald-200 dark:border-emerald-700">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">2</div>
              <h3 className="ml-3 text-lg font-semibold text-slate-900 dark:text-white">Modernisation FARDC</h3>
            </div>
            <p className="text-slate-700 dark:text-slate-300">Renforcement des capacités opérationnelles et technologiques des Forces Armées.</p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900 dark:to-amber-800 rounded-lg p-6 border border-amber-200 dark:border-amber-700">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold">3</div>
              <h3 className="ml-3 text-lg font-semibold text-slate-900 dark:text-white">Coopération régionale</h3>
            </div>
            <p className="text-slate-700 dark:text-slate-300">Renforcement des partenariats de défense et de sécurité avec les pays voisins.</p>
          </div>
        </StaggeredItems>
      </AnimatedSection>

      {/* Section Accès Rapides */}
      <AnimatedSection className="mb-16" delay={0.2}>
        <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">Accès Rapides</h2>
        <StaggeredItems className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <QuickAccessCard title="Documents officiels" href="/documents" icon={<DocumentIcon />} />
          <QuickAccessCard title="Marchés publics" href="/marches-publics" icon={<ContractIcon />} />
          <QuickAccessCard title="Actualités" href="/actualites" icon={<NewsIcon />} />
          <QuickAccessCard title="Anciens Combattants" href="/anciens-combattants" icon={<ContactIcon />} />
          <QuickAccessCard title="Recrutement" href="/recrutement" icon={<ContactIcon />} />
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
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Agenda du Ministre</h2>
          <a 
            href="/ministere/ministre/agenda" 
            className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center group font-semibold"
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

      {/* Section Anciens Combattants */}
      <AnimatedSection className="mb-16" delay={0.55}>
        <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900 dark:to-orange-900 rounded-lg p-8 border border-red-200 dark:border-red-700">
          <div className="max-w-4xl">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Anciens Combattants</h2>
            </div>
            <p className="text-slate-700 dark:text-slate-300 mb-6 text-lg">
              Le Ministère délégué à la Défense reconnaît et honore le service des 80 000+ anciens combattants de la République Démocratique du Congo. Nous nous engageons à soutenir leur réinsertion sociale, leur accès aux soins de santé, et la reconnaissance de leurs sacrifices pour la nation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a href="/anciens-combattants/soutien" className="bg-white dark:bg-slate-800 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-red-600 dark:text-red-400 mb-2">Programmes de Soutien</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">Aide sociale, médicale et financière</p>
              </a>
              <a href="/anciens-combattants/reconnaissance" className="bg-white dark:bg-slate-800 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-red-600 dark:text-red-400 mb-2">Reconnaissance</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">Honneurs et distinctions</p>
              </a>
              <a href="/anciens-combattants/contact" className="bg-white dark:bg-slate-800 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-red-600 dark:text-red-400 mb-2">Nous Contacter</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">Informations et assistance</p>
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Section Organisation */}
      <AnimatedSection className="mb-16" delay={0.6}>
        <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Structure Organisationnelle</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-600 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Cabinet du Ministre</h3>
                <p className="text-slate-600 dark:text-slate-300 mt-1">Coordination et mise en œuvre des politiques ministérielles</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-emerald-600 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Secrétariat Général</h3>
                <p className="text-slate-600 dark:text-slate-300 mt-1">Gestion administrative et ressources humaines</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-amber-600 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Opérations Militaires</h3>
                <p className="text-slate-600 dark:text-slate-300 mt-1">Commandement et coordination des opérations</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-red-600 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Finances et Budget</h3>
                <p className="text-slate-600 dark:text-slate-300 mt-1">Gestion budgétaire et ressources financières</p>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <a href="/ministere/organisation" className="inline-flex items-center px-6 py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">
              Voir l'organigramme complet
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
