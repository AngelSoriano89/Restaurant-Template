"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, Flame, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MENU_CATEGORIES } from "@/lib/constants";
import { menuItems, pizzaSizes } from "@/data/menu";
import { formatPrice } from "@/lib/utils";
import { MenuItem as MenuItemType } from "@/types/menu";

export function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" ref={ref} className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-primary font-semibold text-lg">Our Menu</span>
          <h2 className="text-4xl md:text-5xl font-bold text-accent-gray mt-2">
            Check our tasty <span className="text-primary">Menu</span>
          </h2>
          <p className="text-gray-600 mt-4">
            Discover our selection of artisan pizzas, fresh seafood, and
            delicious specialties
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="max-w-md mx-auto mb-8"
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search for dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {MENU_CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category.id
                  ? "bg-primary text-white shadow-lg scale-105"
                  : "bg-white border-2 border-primary text-primary hover:bg-primary/10"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Pizza Sizes Info */}
        {(selectedCategory === "all" ||
          selectedCategory === "pizzas-classic" ||
          selectedCategory === "pizzas-deluxe") && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8 max-w-3xl mx-auto"
          >
            <h3 className="font-semibold text-accent-gray mb-4 text-center">
              Pizza Sizes
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {pizzaSizes.map((size) => (
                <div
                  key={size.size}
                  className="text-center p-4 bg-white rounded-lg"
                >
                  <p className="font-semibold text-accent-gray">{size.size}</p>
                  <p className="text-sm text-gray-600">
                    {size.pieces} pieces
                  </p>
                  <p className="text-primary font-bold text-lg mt-2">
                    {formatPrice(size.price)}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredItems.map((item, index) => (
            <MenuItemCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 text-lg">
              No dishes found. Try a different search or category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

function MenuItemCard({
  item,
  index,
}: {
  item: MenuItemType;
  index: number;
}) {
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
                  <Leaf className="w-4 h-4 text-green-600" aria-label="Vegetarian" />
                )}
                {item.isSpicy && (
                  <Flame className="w-4 h-4 text-red-600" aria-label="Spicy" />
                )}
                {item.isNew && (
                  <span className="px-2 py-0.5 bg-primary text-white text-xs rounded-full">
                    New
                  </span>
                )}
                {item.featured && (
                  <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full">
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
