"use client";

import Link from "next/link";
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
  { 
    href: "/ministere", 
    label: "Ministère",
    subMenu: [
      { href: "/ministere/ministre", label: "Le Ministre" },
      { href: "/ministere/missions", label: "Missions" },
      { href: "/ministere/attributions", label: "Attributions" },
      { href: "/ministere/organigramme", label: "Organigramme" },
      { href: "/ministere/biographie", label: "Biographie" },
      { href: "/ministere/agenda", label: "Agenda" },
    ]
  },
  { href: "/fardc", label: "FARDC" },
  { href: "/actualites", label: "Actualités" },
  { href: "/documents", label: "Documents" },
  { href: "/marches-publics", label: "Marchés publics" },
  { href: "/programmes", label: "Programmes" },
  { href: "/recherche", label: "Recherche" },
  { href: "/contact", label: "Contact" },
];

export default function AppBar() {
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
    <header className="sticky top-0 z-50 bg-[var(--background)]/80 backdrop-blur border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg">
          Ministère délégué à la Défense
        </Link>
        
        {/* Menu desktop */}
        <nav className="hidden md:flex gap-6 text-sm">
          {navLinks.map((link) => (
            <div key={link.href} className="relative">
              {link.subMenu ? (
                <>
                  <button 
                    onClick={() => handleSubmenuToggle(link.label)}
                    className="flex items-center gap-1 py-1 focus:outline-none"
                    aria-expanded={activeSubmenu === link.label}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className={`transition-transform duration-200 ${activeSubmenu === link.label ? 'rotate-180' : ''}`}
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
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
                        className="absolute left-0 top-full mt-1 py-2 bg-white dark:bg-zinc-900 shadow-lg rounded-md border border-zinc-200 dark:border-zinc-800 min-w-48 z-50"
                      >
                        {link.subMenu.map((subItem) => (
                          <Link 
                            key={subItem.href} 
                            href={subItem.href}
                            className="block px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                            onClick={() => setActiveSubmenu(null)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link href={link.href} className="py-1">
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
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-16 left-0 right-0 bg-[var(--background)] border-b border-zinc-200 dark:border-zinc-800 shadow-lg z-40"
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
                        className="flex items-center justify-between w-full py-3"
                        aria-expanded={activeSubmenu === link.label}
                      >
                        <span>{link.label}</span>
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                          className={`transition-transform duration-200 ${activeSubmenu === link.label ? 'rotate-180' : ''}`}
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
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
                                className="block py-2 pl-2 border-l-2 border-zinc-200 dark:border-zinc-700"
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
                      className="block py-3"
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
