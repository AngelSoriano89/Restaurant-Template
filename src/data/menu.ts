// src/data/menu.ts
// 🎨 PLANTILLA - Personaliza tu menú aquí

import { MenuItem, MenuSize, PizzaExtra } from "@/types/menu";

export const menuItems: MenuItem[] = [
  // ========================================
  // STARTERS / APPETIZERS
  // ========================================
  {
    id: "bruschetta",
    name: "Classic Bruschetta",
    description: "Toasted bread topped with fresh tomatoes, garlic, basil, and olive oil",
    price: 8,
    category: "starters",
    isVegetarian: true,
  },
  {
    id: "calamari",
    name: "Crispy Calamari",
    description: "Lightly fried calamari served with marinara sauce and lemon",
    price: 12,
    category: "starters",
  },
  {
    id: "caprese",
    name: "Caprese Salad",
    description: "Fresh mozzarella, tomatoes, basil, balsamic glaze",
    price: 10,
    category: "starters",
    isVegetarian: true,
    featured: true,
  },
  {
    id: "wings",
    name: "Buffalo Wings",
    description: "Spicy chicken wings with blue cheese dip",
    price: 11,
    category: "starters",
    isSpicy: true,
  },

  // ========================================
  // PASTA
  // ========================================
  {
    id: "carbonara",
    name: "Spaghetti Carbonara",
    description: "Spaghetti with crispy bacon, egg yolk, parmesan, and black pepper",
    price: 16,
    category: "pasta",
    featured: true,
  },
  {
    id: "bolognese",
    name: "Tagliatelle Bolognese",
    description: "Fresh pasta with slow-cooked meat sauce",
    price: 17,
    category: "pasta",
  },
  {
    id: "arrabbiata",
    name: "Penne Arrabbiata",
    description: "Penne pasta in spicy tomato sauce with garlic",
    price: 14,
    category: "pasta",
    isVegetarian: true,
    isSpicy: true,
  },
  {
    id: "seafood-pasta",
    name: "Seafood Linguine",
    description: "Linguine with shrimp, mussels, clams in white wine sauce",
    price: 22,
    category: "pasta",
  },

  // ========================================
  // PIZZAS - CLASSIC
  // ========================================
  {
    id: "margherita",
    name: "Margherita",
    description: "Tomato sauce, mozzarella, fresh basil, olive oil",
    price: 0, // Price varies by size
    category: "pizzas-classic",
    isVegetarian: true,
    featured: true,
  },
  {
    id: "pepperoni",
    name: "Pepperoni",
    description: "Tomato sauce, mozzarella, pepperoni slices",
    price: 0,
    category: "pizzas-classic",
  },
  {
    id: "hawaiian",
    name: "Hawaiian",
    description: "Tomato sauce, mozzarella, ham, pineapple",
    price: 0,
    category: "pizzas-classic",
  },
  {
    id: "vegetarian",
    name: "Vegetarian",
    description: "Tomato sauce, mozzarella, bell peppers, mushrooms, onions, olives",
    price: 0,
    category: "pizzas-classic",
    isVegetarian: true,
  },

  // ========================================
  // PIZZAS - DELUXE
  // ========================================
  {
    id: "quattro-formaggi",
    name: "Quattro Formaggi",
    description: "Four cheese pizza: mozzarella, gorgonzola, parmesan, ricotta",
    price: 0,
    category: "pizzas-deluxe",
    isVegetarian: true,
  },
  {
    id: "meat-lovers",
    name: "Meat Lovers",
    description: "Pepperoni, sausage, bacon, ham, ground beef",
    price: 0,
    category: "pizzas-deluxe",
    featured: true,
  },
  {
    id: "bbq-chicken",
    name: "BBQ Chicken",
    description: "BBQ sauce, grilled chicken, red onions, cilantro",
    price: 0,
    category: "pizzas-deluxe",
  },

  // ========================================
  // GRILL
  // ========================================
  {
    id: "ribeye",
    name: "Ribeye Steak",
    description: "12oz ribeye steak with herb butter, served with fries and salad",
    price: 32,
    category: "grill",
    featured: true,
  },
  {
    id: "lamb-chops",
    name: "Grilled Lamb Chops",
    description: "Tender lamb chops with rosemary and garlic",
    price: 28,
    category: "grill",
  },
  {
    id: "salmon",
    name: "Grilled Salmon",
    description: "Atlantic salmon with lemon butter sauce",
    price: 24,
    category: "grill",
  },

  // ========================================
  // BURGERS
  // ========================================
  {
    id: "classic-burger",
    name: "Classic Burger",
    description: "Beef patty, lettuce, tomato, onion, pickles, special sauce",
    price: 14,
    category: "burger",
  },
  {
    id: "bacon-burger",
    name: "Bacon Cheeseburger",
    description: "Beef patty, bacon, cheddar cheese, lettuce, tomato",
    price: 16,
    category: "burger",
    featured: true,
  },
  {
    id: "veggie-burger",
    name: "Veggie Burger",
    description: "House-made veggie patty, avocado, sprouts, chipotle mayo",
    price: 13,
    category: "burger",
    isVegetarian: true,
  },

  // ========================================
  // SEAFOOD
  // ========================================
  {
    id: "lobster-tail",
    name: "Grilled Lobster Tail",
    description: "Butter-poached lobster tail with seasonal vegetables",
    price: 45,
    category: "lobster",
    featured: true,
  },
  {
    id: "shrimp-scampi",
    name: "Shrimp Scampi",
    description: "Jumbo shrimp in garlic butter wine sauce",
    price: 22,
    category: "shrimp",
  },
  {
    id: "fish-chips",
    name: "Fish & Chips",
    description: "Beer-battered cod with hand-cut fries and tartar sauce",
    price: 18,
    category: "grilled",
  },
];

// Pizza Sizes
export const pizzaSizes: MenuSize[] = [
  { size: "Small (10\")", pieces: 4, price: 12 },
  { size: "Medium (14\")", pieces: 8, price: 18 },
  { size: "Large (16\")", pieces: 12, price: 24 },
];

// Pizza Extras
export const pizzaExtras: PizzaExtra[] = [
  {
    name: "Extra Cheese",
    prices: { small: 1.5, medium: 2, large: 2.5 },
  },
  {
    name: "Pepperoni",
    prices: { small: 2, medium: 2.5, large: 3 },
  },
  {
    name: "Mushrooms",
    prices: { small: 1.5, medium: 2, large: 2.5 },
  },
  {
    name: "Olives",
    prices: { small: 1.5, medium: 2, large: 2.5 },
  },
];
