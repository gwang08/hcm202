"use client";

import { motion } from "framer-motion";

interface QuoteCardProps {
  quote: string;
  author?: string;
  variant?: "primary" | "secondary" | "outline";
}

export function QuoteCard({ quote, author = "Hồ Chí Minh", variant = "primary" }: QuoteCardProps) {
  const variants = {
    primary: "bg-red-600 text-white border-red-600",
    secondary: "bg-amber-500 text-white border-amber-500",
    outline: "bg-white text-gray-900 border-red-200",
  };

  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`${variants[variant]} border-l-4 p-6 md:p-8`}
    >
      <p className={`text-lg md:text-xl font-medium leading-relaxed ${variant === "outline" ? "text-gray-800" : ""}`}>
        &ldquo;{quote}&rdquo;
      </p>
      <footer className="mt-4">
        <cite className={`not-italic font-semibold text-sm ${variant === "outline" ? "text-red-600" : "text-white/80"}`}>
          — {author}
        </cite>
      </footer>
    </motion.blockquote>
  );
}
