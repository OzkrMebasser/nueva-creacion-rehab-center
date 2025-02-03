"use client";
import { US, MX } from "country-flag-icons/react/3x2";
import "../app/globals.css";
<US title="United States" className="..." />;
import { useTranslation } from "react-i18next";
import Link from "next/link";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  display: "swap",
});

const Logo =
  "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2Fpaloma-clearbg.png?alt=media&token=8bcd4a7d-c403-43a6-b65e-27d2ce1d2b43";

import React from "react";

const LogoDove = ({ hgt, mrg, flip, shake }) => {
  return (
    <>
      <img
        src={Logo}
        alt="logo Paloma"
        className={`${hgt} inline ${mrg} ${flip} ${shake}`}
      />
    </>
  );
};

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "es" : "en");
  };

  return (
    <>
    <nav className="bg-[#0dc0e1] shadow-md fixed w-full z-50 ">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center text-sm lg:text-xl">
            <span className="hidden lg:inline">
              {" "}
              <LogoDove hgt="h-12" mrg="mr-2" flip="" shake="" />
            </span>

            <Link href="/" className="  text-primary">
              <span className="mr-2  text-[#202020]">Centro Rehabilitador</span>
              <br className="inline lg:hidden " />
              <span
                className={`text-[1.5rem] lg:text-[1.7rem] font-black text-white [text-shadow:_.5px_0px_0px_#ffffff] ${dancingScript.variable} font-dancing-script`}
                data-aos="zoom-in"
              >
                Nueva Creación AC
              </span>
            </Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-[#202020] hover:text-[#424242] relative 
            after:content-[''] after:absolute after:bottom-0 after:left-0 
            after:w-0 after:h-[2px] after:bg-white 
            after:transition-all after:duration-300 hover:after:w-full"
            >
              {t("nav.home")}
            </Link>
            <Link
              href="#about"
              className="text-[#202020] hover:text-[#424242] relative 
              after:content-[''] after:absolute after:bottom-0 after:left-0 
              after:w-0 after:h-[2px] after:bg-white 
              after:transition-all after:duration-300 hover:after:w-full"
            >
              {t("nav.about")}
            </Link>
            <Link
              href="#services"
              className="text-[#202020] hover:text-[#424242] relative 
              after:content-[''] after:absolute after:bottom-0 after:left-0 
              after:w-0 after:h-[2px] after:bg-white 
              after:transition-all after:duration-300 hover:after:w-full"
            >
              {t("nav.services")}
            </Link>
            <Link
              href="#testimonials"
              className="text-[#202020] hover:text-[#424242] relative 
              after:content-[''] after:absolute after:bottom-0 after:left-0 
              after:w-0 after:h-[2px] after:bg-white 
              after:transition-all after:duration-300 hover:after:w-full"
            >
              {t("nav.testimonials")}
            </Link>
            <Link
              href="#contact"
              className="text-[#202020] hover:text-[#424242] relative 
              after:content-[''] after:absolute after:bottom-0 after:left-0 
              after:w-0 after:h-[2px] after:bg-white 
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
              {isOpen ? (
                <X size={24} />
              ) : (
                <LogoDove hgt="h-10" mrg="mr-0" flip="" shake="rise-shake" />
              )}
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
            <button
           
              onClick={toggleLanguage}
              className="ml-3 mt-4 "
            >
              {i18n.language === "en" ? (
                <MX title="Mexico" className="h-[20px]" />
              ) : (
                <US title="United States" className="h-[20px]" />
              )}
            </button>
          </div>
        </div>
      )}
     <ScrollProgressBar  />
     
    </nav>
     </>
  );
}
