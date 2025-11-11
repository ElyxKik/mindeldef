"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type SubMenu = {
  href: string;
  label: string;
};

type NavLink = {
  href: string;
  label: string;
  subMenu?: SubMenu[];
};

const navLinks: NavLink[] = [
  { href: "/", label: "Accueil" },
  { 
    href: "/ministere", 
    label: "Ministère",
    subMenu: [
      { href: "/ministere/ministre", label: "Le Ministre" },
      { href: "/ministere/cabinet", label: "Le Cabinet" },
      { href: "/ministere/missions", label: "Missions" },
      { href: "/ministere/attributions", label: "Attributions" },
      { href: "/ministere/organigramme", label: "Organigramme" },
      { href: "/ministere/biographie", label: "Biographie" },
      { href: "/ministere/agenda", label: "Agenda" },
    ]
  },
  { href: "/fardc", label: "FARDC" },
  { href: "/anciens-combattants", label: "Anciens Combattants" },
  { href: "/actualites", label: "Actualités" },
  { href: "/documents", label: "Documents" },
  { href: "/marches-publics", label: "Marchés publics" },
  { href: "/programmes", label: "Programmes" },
  { href: "/recherche", label: "Recherche" },
  { href: "/contact", label: "Contact" },
];

export default function AppBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const submenuRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Fermer le sous-menu lorsqu'on clique ailleurs
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (activeSubmenu && submenuRefs.current[activeSubmenu] && 
          !submenuRefs.current[activeSubmenu]?.contains(event.target as Node)) {
        setActiveSubmenu(null);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeSubmenu]);

  const handleSubmenuToggle = (label: string) => {
    setActiveSubmenu(prev => prev === label ? null : label);
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="Accueil Ministère délégué à la Défense">
          <img src="/logo-min-mindeldef.png" alt="Logo Ministère délégué à la Défense" className="h-12" />
        </Link>
        
        {/* Menu desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <div key={link.href} className="relative flex items-center h-16">
              {link.subMenu ? (
                <>
                  <button 
                    onClick={() => handleSubmenuToggle(link.label)}
                    className={`h-full flex items-center focus:outline-none transition-colors ${pathname.startsWith(link.href) ? 'text-[var(--color-primary)]' : 'text-slate-700 dark:text-slate-300'} hover:text-[var(--color-primary)]`}
                    aria-expanded={activeSubmenu === link.label}
                    aria-haspopup="true"
                  >
                    {link.label}
                  </button>
                  
                  <AnimatePresence>
                    {activeSubmenu === link.label && (
                      <motion.div
                        ref={(el) => {
                          submenuRefs.current[link.label] = el;
                          return undefined;
                        }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className={link.label === "Ministère" ? 
                          "absolute left-1/2 transform -translate-x-1/2 top-full mt-2 bg-white dark:bg-slate-800 shadow-md rounded-lg border border-slate-200 dark:border-slate-700 w-[500px] z-50" :
                          "absolute left-0 top-full mt-2 py-1 bg-white dark:bg-slate-800 shadow-md rounded-lg border border-slate-200 dark:border-slate-700 min-w-48 z-50"
                        }
                      >
                        {link.label === "Ministère" ? (
                          // Mega menu pour "Ministère"
                          <div className="p-6">
                            <div className="mb-4">
                              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2">Le Ministère</h3>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                Découvrez l'organisation, les missions et les responsabilités du Ministère délégué à la Défense
                              </p>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                              <div>
                                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-3">Organisation</h4>
                                <div className="space-y-2">
                                  <Link 
                                    href="/ministere/ministre"
                                    className="flex items-center p-2 rounded-md hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors group"
                                    onClick={() => setActiveSubmenu(null)}
                                  >
                                    <div className="w-8 h-8 bg-[var(--color-primary-light)] rounded-full flex items-center justify-center mr-3">
                                      <svg className="w-4 h-4 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                      </svg>
                                    </div>
                                    <div>
                                      <div className="font-medium text-sm group-hover:text-[var(--color-primary)]">Le Ministre</div>
                                      <div className="text-xs text-gray-500">Biographie et agenda</div>
                                    </div>
                                  </Link>
                                  <Link 
                                    href="/ministere/cabinet"
                                    className="flex items-center p-2 rounded-md hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors group"
                                    onClick={() => setActiveSubmenu(null)}
                                  >
                                    <div className="w-8 h-8 bg-[var(--color-primary-light)] rounded-full flex items-center justify-center mr-3">
                                      <svg className="w-4 h-4 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" clipRule="evenodd" />
                                      </svg>
                                    </div>
                                    <div>
                                      <div className="font-medium text-sm group-hover:text-[var(--color-primary)]">Le Cabinet</div>
                                      <div className="text-xs text-gray-500">Équipe ministérielle</div>
                                    </div>
                                  </Link>
                                  <Link 
                                    href="/ministere/organigramme"
                                    className="flex items-center p-2 rounded-md hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors group"
                                    onClick={() => setActiveSubmenu(null)}
                                  >
                                    <div className="w-8 h-8 bg-[var(--color-primary-light)] rounded-full flex items-center justify-center mr-3">
                                      <svg className="w-4 h-4 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" clipRule="evenodd" />
                                      </svg>
                                    </div>
                                    <div>
                                      <div className="font-medium text-sm group-hover:text-[var(--color-primary)]">Organigramme</div>
                                      <div className="text-xs text-gray-500">Structure organisationnelle</div>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-3">Missions & Attributions</h4>
                                <div className="space-y-2">
                                  <Link 
                                    href="/ministere/missions"
                                    className="flex items-center p-2 rounded-md hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors group"
                                    onClick={() => setActiveSubmenu(null)}
                                  >
                                    <div className="w-8 h-8 bg-[var(--color-primary-light)] rounded-full flex items-center justify-center mr-3">
                                      <svg className="w-4 h-4 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                      </svg>
                                    </div>
                                    <div>
                                      <div className="font-medium text-sm group-hover:text-[var(--color-primary)]">Missions</div>
                                      <div className="text-xs text-gray-500">Objectifs et responsabilités</div>
                                    </div>
                                  </Link>
                                  <Link 
                                    href="/ministere/attributions"
                                    className="flex items-center p-2 rounded-md hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors group"
                                    onClick={() => setActiveSubmenu(null)}
                                  >
                                    <div className="w-8 h-8 bg-[var(--color-primary-light)] rounded-full flex items-center justify-center mr-3">
                                      <svg className="w-4 h-4 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" clipRule="evenodd" />
                                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2h8a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 3a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                                      </svg>
                                    </div>
                                    <div>
                                      <div className="font-medium text-sm group-hover:text-[var(--color-primary)]">Attributions</div>
                                      <div className="text-xs text-gray-500">Compétences légales</div>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          // Menu classique pour les autres éléments
                          <div className="py-2">
                            {link.subMenu.map((subItem) => (
                              <Link 
                                key={subItem.href} 
                                href={subItem.href}
                                className={`block px-4 py-2 transition-colors ${pathname === subItem.href ? 'text-[var(--color-primary)] font-medium' : 'text-slate-700 dark:text-slate-300'} hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-[var(--color-primary)]`}
                                onClick={() => setActiveSubmenu(null)}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link 
                  href={link.href} 
                  className={`h-full flex items-center transition-colors ${pathname === link.href ? 'text-[var(--color-primary)]' : 'text-slate-700 dark:text-slate-300'} hover:text-[var(--color-primary)]`}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
        
        {/* Bouton menu mobile */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative z-50"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-0.5 bg-[var(--foreground)] block mb-1.5"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-0.5 bg-[var(--foreground)] block mb-1.5"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-0.5 bg-[var(--foreground)] block"
          />
        </button>
      </div>
      
      {/* Menu mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-md z-40"
          >
            <nav className="flex flex-col py-4 px-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="border-b border-zinc-100 dark:border-zinc-800 last:border-0"
                >
                  {link.subMenu ? (
                    <div>
                      <button 
                        onClick={() => handleSubmenuToggle(link.label)}
                        className={`w-full py-3 text-left transition-colors ${pathname.startsWith(link.href) ? 'font-bold text-[var(--color-primary)]' : ''} hover:text-[var(--color-primary)] hover:font-bold`}
                        aria-expanded={activeSubmenu === link.label}
                      >
                        <span>{link.label}</span>
                      </button>
                      
                      <AnimatePresence>
                        {activeSubmenu === link.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 overflow-hidden"
                          >
                            {link.subMenu.map((subItem) => (
                              <Link 
                                key={subItem.href} 
                                href={subItem.href}
                                className={`block py-2 pl-2 border-l-2 border-zinc-200 dark:border-zinc-700 transition-colors ${pathname === subItem.href ? 'font-bold text-[var(--color-primary)]' : ''} hover:text-[var(--color-primary)] hover:font-bold`}
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link 
                      href={link.href}
                      className={`block py-3 transition-colors ${pathname === link.href ? 'font-bold text-[var(--color-primary)]' : ''} hover:text-[var(--color-primary)] hover:font-bold`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
