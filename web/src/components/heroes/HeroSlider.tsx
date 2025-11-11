"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export type Slide = {
  imageSrc: string;
  title?: string;
  subtitle?: string;
  cta?: { text: string; href: string };
  alt?: string;
};

type HeroSliderProps = {
  slides: Slide[];
  intervalMs?: number;
  height?: "small" | "medium" | "large";
  className?: string;
};

const heightClasses: Record<NonNullable<HeroSliderProps["height"]>, string> = {
  small: "h-[45vh] min-h-[360px]",
  medium: "h-[60vh] min-h-[420px]",
  large: "h-[70vh] min-h-[520px]",
};

export default function HeroSlider({
  slides,
  intervalMs = 6000,
  height = "large",
  className = "",
}: HeroSliderProps) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const safeSlides = useMemo(() => slides.filter(Boolean), [slides]);
  const total = safeSlides.length;

  useEffect(() => {
    if (total <= 1) return;
    if (isPaused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % total), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs, total, isPaused]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!containerRef.current) return;
      if (!containerRef.current.matches(":focus-within, :hover")) return;
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % total);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + total) % total);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [total]);

  const goTo = (i: number) => setIndex(((i % total) + total) % total);

  return (
    <section
      ref={containerRef}
      aria-roledescription="carousel"
      aria-label="Slider d'accueil"
      className={`relative overflow-hidden ${heightClasses[height]} ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute inset-0"
          >
            {total > 0 && (
              <Image
                src={safeSlides[index].imageSrc}
                alt={safeSlides[index].alt || safeSlides[index].title || ""}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            )}
            {/* Overlay gradient for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            {/* Text content */}
            <div className="relative z-10 h-full max-w-7xl mx-auto px-4 flex items-center">
              <div className="text-white max-w-2xl">
                {safeSlides[index]?.title && (
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-3xl md:text-5xl font-extrabold drop-shadow-sm"
                  >
                    {safeSlides[index].title}
                  </motion.h1>
                )}
                {safeSlides[index]?.subtitle && (
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-3 md:mt-4 text-base md:text-lg text-white/90 max-w-xl"
                  >
                    {safeSlides[index].subtitle}
                  </motion.p>
                )}
                {safeSlides[index]?.cta && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-6"
                  >
                    <Link
                      href={safeSlides[index].cta!.href}
                      className="inline-flex items-center px-5 py-3 rounded-md bg-[var(--color-primary)] text-white font-semibold shadow hover:bg-[var(--color-primary-dark)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary)] transition-colors"
                    >
                      {safeSlides[index].cta!.text}
                    </Link>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2 md:px-4">
        <button
          aria-label="Diapositive précédente"
          onClick={() => goTo(index - 1)}
          className="pointer-events-auto inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 text-white hover:bg-black/60 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6">
            <path fillRule="evenodd" d="M15.78 4.22a.75.75 0 010 1.06L9.06 12l6.72 6.72a.75.75 0 11-1.06 1.06l-7.25-7.25a.75.75 0 010-1.06l7.25-7.25a.75.75 0 011.06 0z" clipRule="evenodd" />
          </svg>
        </button>
        <button
          aria-label="Diapositive suivante"
          onClick={() => goTo(index + 1)}
          className="pointer-events-auto inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 text-white hover:bg-black/60 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6">
            <path fillRule="evenodd" d="M8.22 19.78a.75.75 0 010-1.06L14.94 12 8.22 5.28a.75.75 0 111.06-1.06l7.25 7.25a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      {total > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {safeSlides.map((_, i) => (
            <button
              key={i}
              aria-label={`Aller à la diapositive ${i + 1}`}
              aria-current={i === index}
              onClick={() => goTo(i)}
              className={`w-2.5 h-2.5 rounded-full transition ${i === index ? "bg-white" : "bg-white/50 hover:bg-white/80"}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
