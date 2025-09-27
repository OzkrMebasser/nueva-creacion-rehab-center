"use client";

import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

import Link from "next/link";

const Logo =
  "https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/nueva-creacion-centro-rehab-iglesia-cristiana%2FCENTRO-REHABILITADOR-LOGO-GRANDE.png?alt=media&token=6c46c309-eed6-403b-a533-e03bcc053ec3";

export default function Hero() {
  const { t } = useTranslation();
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowLogo(window.scrollY < 50); // si baja más de 50px, desaparece el logo
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center ">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://firebasestorage.googleapis.com/v0/b/templo-monte-horeb.appspot.com/o/heroentrada.jpg?alt=media&token=59d7266a-abd3-44c5-88ee-ac0792717bd1')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* ✅ Logo arriba de las letras SOLO en mobile */}
      {showLogo && (
        <div className="mb-6 md:hidden flex justify-center absolute left-1/2 transform -translate-x-1/2 top-6 z-10">
          <img
            src={Logo}
            alt="Logo Centro Rehabilitador Nueva Creación AC"
            className="h-36"
          />
        </div>
      )}

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-[white] [text-shadow:_1px_1px_20px_#000000] mb-6"
          data-aos="fade-up"
        >
          {t("hero.title")}
        </h1>

        <p
          className="mt-6 text-xl font-bold sm:text-2xl text-[#0dc2e2] mb-8 w-full mx-auto [text-shadow:_1px_3px_0px_rgba(32,32,32,0.78)]"
          data-aos="zoom-in-down"
          data-aos-duration="3000"
        >
          {t("hero.subtitle")}
        </p>

        <a
          href="https://wa.me/5216121347548"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 bg-[white] text-[#277b8d] mt-4 hover:bg-[#277b8d] hover:text-[white]"
            data-aos="zoom-in-down"
          >
            {t("hero.learnMore")}
          </Button>
        </a>
      </div>
    </div>
  );
}
