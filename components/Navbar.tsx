"use client";
import { US, MX } from "country-flag-icons/react/3x2";

<US title="United States" className="..." />;
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "es" : "en");
  };

  return (
    <nav className="bg-[#0dc0e1] shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-primary">
              Centro Rehabilitador Nueva Creación AC
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary relative 
            after:content-[''] after:absolute after:bottom-0 after:left-0 
            after:w-0 after:h-[2px] after:bg-primary 
            after:transition-all after:duration-300 hover:after:w-full"
            >
              {t("nav.home")}
            </Link>
            <Link
              href="#about"
              className="text-gray-700 hover:text-primary relative 
            after:content-[''] after:absolute after:bottom-0 after:left-0 
            after:w-0 after:h-[2px] after:bg-primary 
            after:transition-all after:duration-300 hover:after:w-full"
            >
              {t("nav.about")}
            </Link>
            <Link
              href="#services"
              className="text-gray-700 hover:text-primary relative 
            after:content-[''] after:absolute after:bottom-0 after:left-0 
            after:w-0 after:h-[2px] after:bg-primary 
            after:transition-all after:duration-300 hover:after:w-full"
            >
              {t("nav.services")}
            </Link>
            <Link
              href="#testimonials"
              className="text-gray-700 hover:text-primary relative 
            after:content-[''] after:absolute after:bottom-0 after:left-0 
            after:w-0 after:h-[2px] after:bg-primary 
            after:transition-all after:duration-300 hover:after:w-full"
            >
              {t("nav.testimonials")}
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-primary relative 
            after:content-[''] after:absolute after:bottom-0 after:left-0 
            after:w-0 after:h-[2px] after:bg-primary 
            after:transition-all after:duration-300 hover:after:w-full"
            >
              {t("nav.contact")}
            </Link>
            <button onClick={toggleLanguage} className="ml-4">
              {i18n.language === "en" ? (
                <MX title="Mexico" className="h-[20px]" />
              ) : (
                <US title="United States" className="h-[20px]" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {t("nav.home")}
            </Link>
            <Link
              href="#about"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {t("nav.about")}
            </Link>
            <Link
              href="#services"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {t("nav.services")}
            </Link>
            <Link
              href="#testimonials"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {t("nav.testimonials")}
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {t("nav.contact")}
            </Link>
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="ml-3 mt-4 "
            >
              {i18n.language === "en" ? (
                <MX title="Mexico" className="h-[20px]" />
              ) : (
                <US title="United States" className="h-[20px]" />
              )}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
