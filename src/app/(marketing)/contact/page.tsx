import { Metadata } from "next";
import { ContactSection as Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with ${SITE_CONFIG.name}. Find our location, hours, and contact information",
};

export default function ContactPage() {
  return (
    <div className="pt-32">
      <Contact />
    </div>
  );
}
