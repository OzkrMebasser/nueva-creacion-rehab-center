"use client";
import { US, MX } from "country-flag-icons/react/3x2";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Dancing_Script } from "next/font/google";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { RiMenu5Line } from "react-icons/ri";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  display: "swap",
});

const Logo =
  "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2FCENTRO-REHABILITADOR-LOGO.png?alt=media&token=268b2302-ca8e-408a-87eb-4ea1314d731c";

const LogoCentroRehab = ({ hgt, mrg }: { hgt: string; mrg: string }) => (
  <img
    src={Logo}
    alt="logo Centro Rehabilitador Nueva Creación AC"
    className={`${hgt} inline ${mrg} `}
  />
);

// Mapas de URLs por idioma
const navUrls = {
  en: {
    home: "/",
    about: "/about_us",
    services: "/services",
    testimonials: "/testimonials",
    contact: "/contact",
  },
  es: {
    home: "/",
    about: "/nosotros",
    services: "/servicios",
    testimonials: "/testimonios",
    contact: "/contacto",
  },
};

// ✅ Menú Desktop
function DesktopMenu({ toggleLanguage, i18n }: any) {
  const { t } = useTranslation();
  return (
    <div className="hidden md:flex items-center space-x-8">
      {["home", "about", "services", "testimonials", "contact"].map((item) => (
        <Link
          key={item}
          href={`${
            t(`nav.${item}`, { lng: i18n.language }).toLowerCase() === "home" ||
            t(`nav.${item}`, { lng: i18n.language }).toLowerCase() === "inicio"
              ? "/"
              : `/${t(`nav.${item}`, { lng: i18n.language })
                  .toLowerCase()
                  .replace(/\s+/g, "_")}`
          }`}
          className="text-[#202020] hover:text-[#424242] relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
        >
          {t(`nav.${item}`)}
        </Link>
      ))}
      <button onClick={toggleLanguage} className="ml-4">
        {i18n.language === "en" ? (
          <MX title="Mexico" className="h-[20px]" />
        ) : (
          <US title="United States" className="h-[20px]" />
        )}
      </button>
    </div>
  );
}

// ✅ Menú Mobile
function MobileMenu({ isOpen, setIsOpen, toggleLanguage, i18n }: any) {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {["home", "about", "services", "testimonials", "contact"].map(
          (item) => (
            <Link
              key={item}
              href={`${
                t(`nav.${item}`, { lng: i18n.language }).toLowerCase() ===
                  "home" ||
                t(`nav.${item}`, { lng: i18n.language }).toLowerCase() ===
                  "inicio"
                  ? "/"
                  : `/${t(`nav.${item}`, { lng: i18n.language })
                      .toLowerCase()
                      .replace(/\s+/g, "_")}`
              }`}
              className="block px-3 py-2 text-gray-700 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {t(`nav.${item}`)}
            </Link>
          )
        )}
        <button onClick={toggleLanguage} className="ml-3 mt-4">
          {i18n.language === "en" ? (
            <MX title="Mexico" className="h-[20px]" />
          ) : (
            <US title="United States" className="h-[20px]" />
          )}
        </button>
      </div>
    </div>
  );
}

export default function Navbar() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "es" : "en");
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsAtTop(currentScrollY === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // efectos dinámicos
  const progress = Math.min(scrollY / 1000, 1);
  const blurIntensity = Math.min(scrollY / 30, 20);
  const bgOpacity = Math.min(0.2 + progress, 1);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 shadow-lg ${
        isAtTop ? "bottom-0" : "top-0"
      }`}
      style={{
        backdropFilter: `blur(${isAtTop ? 0 : blurIntensity}px)`,
        backgroundColor: `rgba(13, 192, 225, ${isAtTop ? 1 : bgOpacity})`,
      }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center text-sm lg:text-xl">
            <span className={`${isAtTop ? "hidden md:inline" : "inline"}`}>
              <LogoCentroRehab hgt="h-12 lg:h-16" mrg="mr-2" />
            </span>

            <Link href="/" className="text-primary">
              <span className="mr-2 font-bold text-[#202020]">
                Centro Rehabilitador
              </span>
              <br className="inline lg:hidden" />
              <span
                className={`text-[1.2rem] lg:text-[1.7rem] font-black text-white [text-shadow:_.5px_0px_0px_#ffffff] ${dancingScript.variable} font-dancing-script`}
              >
                Nueva Creación AC
              </span>
            </Link>
          </div>

          {/* Menú Desktop */}
          <DesktopMenu toggleLanguage={toggleLanguage} i18n={i18n} />

          {/* Botón menú móvil */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <RiMenu5Line size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Mobile */}
      <MobileMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        toggleLanguage={toggleLanguage}
        i18n={i18n}
      />

      <ScrollProgressBar />
    </nav>
  );
}
