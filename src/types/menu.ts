export type MenuCategory =
  | "starters"
  | "pasta"
  | "grill"
  | "wok"
  | "ceviches"
  | "poke-bowl"
  | "pizzas-classic"
  | "pizzas-deluxe"
  | "calzone"
  | "stromboli"
  | "burger"
  | "lobster"
  | "shrimp"
  | "grilled";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image?: string;
  ingredients?: string[];
  isVegetarian?: boolean;
  isSpicy?: boolean;
  isNew?: boolean;
  featured?: boolean;
  available?: boolean;
}

export interface MenuSize {
  size: string;
  pieces: number;
  price: number;
}

export interface PizzaExtra {
  name: string;
  prices: {
    small: number;
    medium: number;
    large: number;
  };
}

export interface Specialty {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  ingredients: string[];
  featured?: boolean;
}
