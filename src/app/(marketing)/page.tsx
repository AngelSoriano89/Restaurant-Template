import { HeroSection as Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { MenuSection as Menu } from "@/components/sections/Menu";
import { SpecialtiesSection as Specialties } from "@/components/sections/Specialties";
import { GallerySection as Gallery } from "@/components/sections/Gallery";
import { Reservation } from "@/components/sections/Reservation";
import { ContactSection as Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Menu />
      <Specialties />
      <Gallery />
      <Reservation />
      <Contact />
    </>
  );
}
