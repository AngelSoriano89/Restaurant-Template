"use client";

import { motion } from "framer-motion";

interface MenuFilterProps {
  categories: readonly { id: string; label: string }[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function MenuFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: MenuFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {categories.map((category, index) => (
        <motion.button
          key={category.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          onClick={() => onSelectCategory(category.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            selectedCategory === category.id
              ? "bg-primary text-white shadow-lg scale-105"
              : "bg-white border-2 border-primary text-primary hover:bg-primary/10"
          }`}
        >
          {category.label}
        </motion.button>
      ))}
    </div>
  );
}
