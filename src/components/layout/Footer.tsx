import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto container-padding">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-3xl font-bold text-primary mb-4">
              Gourmet Haven
            </h3>
            <p className="text-white/70 max-w-md">
              Enjoy the best food in the world
              </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-dark-lighter flex items-center justify-center hover:bg-primary transition-all hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-dark-lighter flex items-center justify-center hover:bg-primary transition-all hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={SOCIAL_LINKS.tripadvisor}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-dark-lighter flex items-center justify-center hover:bg-primary transition-all hover:scale-110"
              aria-label="TripAdvisor"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm6.355 6.422c-.214.144-.428.288-.643.432.857 1.071 1.357 2.428 1.357 3.918 0 3.428-2.786 6.214-6.214 6.214-3.428 0-6.214-2.786-6.214-6.214 0-1.49.5-2.847 1.357-3.918-.215-.144-.429-.288-.643-.432C5.428 9.5 4.5 11.143 4.5 13c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5c0-1.857-.928-3.5-2.355-4.578z"/>
              </svg>
            </a>
            <a
              href={SOCIAL_LINKS.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-dark-lighter flex items-center justify-center hover:bg-primary transition-all hover:scale-110"
              aria-label="TikTok"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 pt-8 w-full">
            <p className="text-white/60 text-sm">
              &copy; {currentYear}{" "}
              <span className="text-primary font-semibold">
                {SITE_CONFIG.name}
              </span>
              . All Rights Reserved
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  );
}
