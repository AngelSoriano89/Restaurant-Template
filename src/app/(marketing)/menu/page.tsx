import { Metadata } from "next";
import { MenuSection as Menu } from "@/components/sections/Menu";
import { SpecialtiesSection as Specialties } from "@/components/sections/Specialties";

export const metadata: Metadata = {
  title: "Menu",
  description: "Explore our delicious menu featuring artisan pizzas, fresh seafood, and specialties from the Galapagos",
};

export default function MenuPage() {
  return (
    <div className="pt-32">
      <Menu />
      <Specialties />
    </div>
  );
}
