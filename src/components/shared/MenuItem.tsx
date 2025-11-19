"use client";

import { motion } from "framer-motion";
import { Flame, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { formatPrice } from "@/lib/utils";
import { MenuItem as MenuItemType } from "@/types/menu";

interface MenuItemProps {
  item: MenuItemType;
  index: number;
}

export function MenuItem({ item, index }: MenuItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <Card className="h-full hover:shadow-lg transition-all group">
        <CardContent className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-semibold text-lg text-accent-gray group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                {item.isVegetarian && (
                  <Leaf className="w-4 h-4 text-green-600 flex-shrink-0" aria-label="Vegetarian" />
                )}
                {item.isSpicy && (
                  <Flame className="w-4 h-4 text-red-600 flex-shrink-0" aria-label="Spicy" />
                )}
                {item.isNew && (
                  <span className="px-2 py-0.5 bg-primary text-white text-xs rounded-full flex-shrink-0">
                    New
                  </span>
                )}
                {item.featured && (
                  <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full flex-shrink-0">
                    Popular
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
            {item.price > 0 && (
              <div className="flex-shrink-0">
                <span className="text-xl font-bold text-primary">
                  {formatPrice(item.price)}
                </span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
