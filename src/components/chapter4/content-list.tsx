"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight } from "lucide-react";

interface ContentListProps {
  items: string[];
  variant?: "check" | "arrow" | "number";
  className?: string;
}

export function ContentList({ items, variant = "check", className = "" }: ContentListProps) {
  const renderIcon = (index: number) => {
    switch (variant) {
      case "check":
        return <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />;
      case "arrow":
        return <ChevronRight className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />;
      case "number":
        return (
          <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
            {index + 1}
          </span>
        );
    }
  };

  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
          viewport={{ once: true }}
          className="flex items-start gap-3"
        >
          {renderIcon(i)}
          <span className="text-foreground">{item}</span>
        </motion.li>
      ))}
    </ul>
  );
}
