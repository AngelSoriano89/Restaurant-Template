// src/data/gallery.ts
// 🎨 PLANTILLA - Reemplaza con tus propias imágenes

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category?: "food" | "restaurant" | "drinks" | "events";
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/images/gallery/restaurant-interior-1.jpg",
    alt: "Elegant restaurant interior with modern decor",
    category: "restaurant",
  },
  {
    id: 2,
    src: "/images/gallery/dish-1.jpg",
    alt: "Gourmet pasta dish with fresh ingredients",
    category: "food",
  },
  {
    id: 3,
    src: "/images/gallery/dish-2.jpg",
    alt: "Perfectly grilled steak with vegetables",
    category: "food",
  },
  {
    id: 4,
    src: "/images/gallery/cocktails-1.jpg",
    alt: "Signature cocktails and wine selection",
    category: "drinks",
  },
  {
    id: 5,
    src: "/images/gallery/dish-3.jpg",
    alt: "Fresh seafood platter",
    category: "food",
  },
  {
    id: 6,
    src: "/images/gallery/pizza-1.jpg",
    alt: "Artisan wood-fired pizza",
    category: "food",
  },
  {
    id: 7,
    src: "/images/gallery/restaurant-interior-2.jpg",
    alt: "Cozy dining area with ambient lighting",
    category: "restaurant",
  },
  {
    id: 8,
    src: "/images/gallery/dessert-1.jpg",
    alt: "Decadent chocolate dessert",
    category: "food",
  },
];
