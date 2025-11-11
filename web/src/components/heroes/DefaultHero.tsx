"use client";
import { useEffect, useRef } from "react";
import { loadGsap } from "@/lib/gsap";
import Image from "next/image";

type DefaultHeroProps = {
  title: string;
  subtitle?: string;
  height?: "small" | "medium" | "large";
  cta?: {
    text: string;
    href: string;
  };
  children?: React.ReactNode;
};

export default function DefaultHero({
  title,
  subtitle,
  height = "medium",
  cta,
  children,
}: DefaultHeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  const heightClasses = {
    small: "min-h-[30vh]",
    medium: "min-h-[50vh]",
    large: "min-h-[70vh]",
  };

  useEffect(() => {
    let ctx: any;
    (async () => {
      const g = await loadGsap();
      if (!g || !ref.current) return;
      
      ctx = g.gsap.context(() => {
        // Parallax effect for background
        g.gsap.to("[data-parallax-bg]", {
          yPercent: -15,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
        
        // Parallax effect for gradient overlay
        g.gsap.to("[data-parallax-overlay]", {
          yPercent: -5,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
        
        // Animate text elements on load
        const tl = g.gsap.timeline();
        
        if (titleRef.current) {
          tl.fromTo(titleRef.current, 
            { y: 30, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
          );
        }
        
        if (subtitleRef.current) {
          tl.fromTo(subtitleRef.current, 
            { y: 20, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
            "-=0.4"
          );
        }
        
        if (ctaRef.current) {
          tl.fromTo(ctaRef.current, 
            { y: 20, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
            "-=0.3"
          );
        }
      }, ref);
    })();
    
    return () => ctx?.revert?.();
  }, []);

  // Utilise toujours l'image par défaut pour toutes les pages
  const imageSrc = "/images/heroes/default-hero.jpeg";
  const imageAlt = "Image d'en-tête du Ministère délégué à la Défense";

  return (
    <section 
      ref={ref} 
      className={`relative isolate overflow-hidden bg-[var(--background)] flex items-center ${heightClasses[height]}`}
    >
      {/* Background image with parallax */}
      <div data-parallax-bg className="absolute inset-0 z-0">
        <Image 
          src={imageSrc} 
          alt={imageAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      
      {/* Gradient overlay with parallax */}
      <div 
        data-parallax-overlay 
        className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/80 to-transparent z-10" 
      />
      
      {/* Content */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 py-16 md:py-24">
        <h1 
          ref={titleRef} 
          className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-3xl"
        >
          {title}
        </h1>
        
        {subtitle && (
          <p 
            ref={subtitleRef} 
            className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl"
          >
            {subtitle}
          </p>
        )}
        
        {cta && (
          <a
            ref={ctaRef}
            href={cta.href}
            className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[var(--color-primary)] bg-white hover:bg-white/90 transition-colors duration-300 shadow-sm"
          >
            {cta.text}
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        )}
        
        {/* Render children if provided */}
        {children}
      </div>
    </section>
  );
}
