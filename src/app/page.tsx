import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { BackToTop } from "@/components/shared/BackToTop";
import { HeroSection as Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { MenuSection as Menu } from "@/components/sections/Menu";
import { SpecialtiesSection as Specialties } from "@/components/sections/Specialties";
import { GallerySection as Gallery } from "@/components/sections/Gallery";
import { Reservation } from "@/components/sections/Reservation";
import { ContactSection as Contact } from "@/components/sections/Contact";

export default function RootPage() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Menu />
        <Specialties />
        <Gallery />
        <Reservation />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
