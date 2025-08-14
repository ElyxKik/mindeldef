"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { loadGsap } from "@/lib/gsap";

// Types
type Article = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
  href: string;
};

// Composant pour les filtres de catégories
const CategoryFilter = ({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}: { 
  categories: string[]; 
  activeCategory: string; 
  onCategoryChange: (category: string) => void;
}) => (
  <div className="flex flex-wrap gap-2 mb-8">
    <button
      onClick={() => onCategoryChange("all")}
      className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
        activeCategory === "all"
          ? "bg-[var(--color-primary)] text-white"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
      }`}
    >
      Toutes les actualités
    </button>
    
    {categories.map((category) => (
      <button
        key={category}
        onClick={() => onCategoryChange(category)}
        className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
          activeCategory === category
            ? "bg-[var(--color-primary)] text-white"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
        }`}
      >
        {category}
      </button>
    ))}
  </div>
);

// Composant pour les articles mis en avant
const FeaturedArticle = ({ article }: { article: Article }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 mb-12"
  >
    <div className="relative h-[300px] md:h-[400px]">
      <Image
        src={article.image}
        alt={article.title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
        <div className="p-6 text-white">
          <span className="inline-block px-3 py-1 bg-[var(--color-primary)] text-white text-xs font-semibold rounded-full mb-3">
            {article.category}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">{article.title}</h2>
          <p className="text-white/80 mb-4">{article.excerpt}</p>
          <div className="flex items-center justify-between">
            <span className="text-white/70 text-sm">{article.date}</span>
            <Link 
              href={article.href}
              className="inline-flex items-center px-4 py-2 bg-white text-[var(--color-primary)] rounded-md hover:bg-opacity-90 transition-colors"
            >
              Lire l'article
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

// Composant pour les articles standard
const ArticleCard = ({ article, index }: { article: Article; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700 flex flex-col h-full"
  >
    <div className="relative h-48">
      <Image
        src={article.image}
        alt={article.title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute top-0 right-0 m-3">
        <span className="inline-block px-2 py-1 bg-[var(--color-primary)] text-white text-xs font-semibold rounded-full">
          {article.category}
        </span>
      </div>
    </div>
    <div className="p-5 flex flex-col flex-grow">
      <h3 className="text-xl font-bold mb-2 line-clamp-2">{article.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 flex-grow">{article.excerpt}</p>
      <div className="flex items-center justify-between mt-auto">
        <span className="text-gray-500 dark:text-gray-400 text-sm">{article.date}</span>
        <Link 
          href={article.href}
          className="text-[var(--color-primary)] hover:underline font-medium flex items-center"
        >
          Lire plus
          <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  </motion.div>
);

// Composant principal
export default function ActualitesClient() {
  // Données des articles (à remplacer par des données réelles du CMS)
  const articles: Article[] = [
    {
      id: "1",
      title: "Communiqué du Ministère sur les nouvelles mesures de sécurité",
      date: "10 août 2025",
      excerpt: "Le Ministère délégué à la Défense a annoncé aujourd'hui de nouvelles mesures visant à renforcer la sécurité dans les zones frontalières. Ces mesures comprennent le déploiement de troupes supplémentaires et l'amélioration des infrastructures de surveillance.",
      image: "/images/placeholder-news.jpg",
      category: "Communiqués",
      href: "/actualites/communique-ministere"
    },
    {
      id: "2",
      title: "Signature d'un accord de coopération régionale",
      date: "8 août 2025",
      excerpt: "Un accord historique de coopération en matière de défense a été signé avec les pays voisins pour renforcer la sécurité régionale. Cette initiative marque une étape importante dans les relations diplomatiques et militaires de la région.",
      image: "/images/placeholder-news.jpg",
      category: "Coopération",
      href: "/actualites/cooperation-regionale"
    },
    {
      id: "3",
      title: "Point de presse mensuel du porte-parole",
      date: "2 août 2025",
      excerpt: "Le porte-parole du Ministère a présenté le bilan mensuel des opérations et répondu aux questions des journalistes. Les sujets abordés incluent les récentes opérations de maintien de la paix et les projets de modernisation des équipements.",
      image: "/images/placeholder-news.jpg",
      category: "Presse",
      href: "/actualites/point-presse"
    },
    {
      id: "4",
      title: "Visite officielle du Ministre dans la province du Nord-Kivu",
      date: "28 juillet 2025",
      excerpt: "Le Ministre délégué à la Défense s'est rendu dans la province du Nord-Kivu pour évaluer la situation sécuritaire et rencontrer les autorités locales. Cette visite s'inscrit dans le cadre du suivi des opérations en cours dans la région.",
      image: "/images/placeholder-news.jpg",
      category: "Visites",
      href: "/actualites/visite-nord-kivu"
    },
    {
      id: "5",
      title: "Cérémonie de remise de médailles aux forces spéciales",
      date: "20 juillet 2025",
      excerpt: "Une cérémonie solennelle a eu lieu à Kinshasa pour honorer les membres des forces spéciales qui se sont distingués lors des récentes opérations. Le Ministre a salué leur courage et leur dévouement au service de la nation.",
      image: "/images/placeholder-news.jpg",
      category: "Événements",
      href: "/actualites/remise-medailles"
    },
    {
      id: "6",
      title: "Lancement du programme de modernisation des infrastructures militaires",
      date: "15 juillet 2025",
      excerpt: "Le Ministère a annoncé le lancement d'un vaste programme de modernisation des infrastructures militaires sur l'ensemble du territoire. Ce projet vise à améliorer les conditions de vie et de travail des militaires.",
      image: "/images/placeholder-news.jpg",
      category: "Programmes",
      href: "/actualites/modernisation-infrastructures"
    },
    {
      id: "7",
      title: "Exercice militaire conjoint avec les forces armées régionales",
      date: "10 juillet 2025",
      excerpt: "Un exercice militaire d'envergure a débuté dans l'est du pays, impliquant les forces armées congolaises et celles des pays voisins. Cet exercice vise à renforcer la coordination et l'interopérabilité entre les différentes armées.",
      image: "/images/placeholder-news.jpg",
      category: "Opérations",
      href: "/actualites/exercice-militaire"
    }
  ];

  // État pour le filtre de catégorie
  const [activeCategory, setActiveCategory] = useState("all");
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Extraire les catégories uniques
  const categories = [...new Set(articles.map(article => article.category))];
  
  // Filtrer les articles en fonction de la catégorie active
  const filteredArticles = activeCategory === "all" 
    ? articles 
    : articles.filter(article => article.category === activeCategory);
  
  // Article mis en avant (le plus récent)
  const featuredArticle = articles[0];
  
  // Articles standard (tous sauf celui mis en avant)
  const standardArticles = filteredArticles.filter(article => article.id !== featuredArticle.id);

  useEffect(() => {
    let ctx: any;
    (async () => {
      const g = await loadGsap();
      if (!g || !containerRef.current) return;
      
      ctx = g.gsap.context(() => {
        // Animation subtile au scroll
        g.gsap.fromTo(
          ".article-card",
          { y: 30, opacity: 0.8 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.6,
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
  }, [activeCategory]);

  return (
    <div ref={containerRef}>
      {/* Filtres de catégories */}
      <CategoryFilter 
        categories={categories} 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />
      
      {/* Article mis en avant (uniquement si on affiche toutes les catégories) */}
      {activeCategory === "all" && (
        <FeaturedArticle article={featuredArticle} />
      )}
      
      {/* Articles standard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {standardArticles.map((article, index) => (
          <ArticleCard key={article.id} article={article} index={index} />
        ))}
      </div>
      
      {/* Pagination (à implémenter avec les données réelles) */}
      {filteredArticles.length > 6 && (
        <div className="mt-12 flex justify-center">
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
  );
}
