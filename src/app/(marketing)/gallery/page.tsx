import { Metadata } from "next";
import { GallerySection as Gallery } from "@/components/sections/Gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description: "View photos of our restaurant, delicious dishes, and the unique Galapagos atmosphere",
};

export default function GalleryPage() {
  return (
    <div className="pt-32">
      <Gallery />
    </div>
  );
}
