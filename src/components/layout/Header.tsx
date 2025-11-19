"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Clock, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { scrollToSection } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.replace("/#", "");
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Header Unificado */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-dark shadow-lg"
      >
        {/* Top Bar - Info de contacto */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`bg-dark border-b border-primary/10 text-white/80 text-sm transition-all duration-300 ${
            isScrolled ? "max-h-0 overflow-hidden opacity-0" : "max-h-20"
          }`}
        >
          <div className="container mx-auto container-padding py-2">
            <div className="flex items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>{SITE_CONFIG.phone}</span>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>{SITE_CONFIG.hours}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Navigation */}
        <div className="bg-dark/95 backdrop-blur-md">
          <div className="container mx-auto container-padding">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3 group">
                {/* Opción 1: Logo como imagen */}
                {/* Descomenta esto cuando tengas tu logo */}
                {/* <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/20 group-hover:ring-primary transition-all">
                  <Image
                    src="/images/logo.png"
                    alt={SITE_CONFIG.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div> */}
                
                {/* Opción 2: Logo con ícono (placeholder) */}
                <div className="w-12 h-12 rounded-full bg-primary/10 ring-2 ring-primary/20 group-hover:ring-primary transition-all flex items-center justify-center">
                  <UtensilsCrossed className="w-6 h-6 text-primary" />
                </div>
                
                <span className="hidden md:block text-primary font-display text-xl font-bold tracking-wide">
                  Gourmet Haven
                </span>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="px-4 py-2 text-white hover:text-primary transition-colors relative group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                  </Link>
                ))}
              </nav>

              {/* CTA Button */}
              <div className="hidden lg:block">
                <Button
                  onClick={() => scrollToSection("reservation")}
                  size="sm"
                  className="font-semibold"
                >
                  Book a Table
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-white hover:text-primary transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-40 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-dark/98 backdrop-blur-xl z-50 lg:hidden shadow-2xl border-l border-primary/20 overflow-y-auto"
            >
              {/* Close Button */}
              <div className="flex justify-end p-6">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Contact Info in Mobile Menu */}
              <div className="px-6 pb-6 border-b border-primary/20">
                <div className="space-y-3 text-white/80 text-sm">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-primary transition-colors">
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-primary mt-0.5" />
                    <span className="text-xs leading-relaxed">{SITE_CONFIG.hours}</span>
                  </div>
                </div>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col p-6 space-y-2">
                {NAV_LINKS.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="block px-4 py-3 text-white font-medium hover:text-primary hover:bg-primary/10 rounded-lg transition-all"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                
                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: NAV_LINKS.length * 0.1 }}
                  className="pt-4"
                >
                  <Button
                    onClick={() => {
                      scrollToSection("reservation");
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full"
                  >
                    Book a Table
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
