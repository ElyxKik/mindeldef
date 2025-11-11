"use client";
import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

export default function Section(
  { children, className = "" }: PropsWithChildren<{ className?: string }>
) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`mx-auto max-w-7xl px-4 py-16 ${className}`}
    >
      {children}
    </motion.section>
  );
}
