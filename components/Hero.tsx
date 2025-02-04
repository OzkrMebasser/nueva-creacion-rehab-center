"use client";

import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen flex items-center justify-center ">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://firebasestorage.googleapis.com/v0/b/templo-monte-horeb.appspot.com/o/heroentrada.jpg?alt=media&token=59d7266a-abd3-44c5-88ee-ac0792717bd1')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          // opacity: 0.8,
        }}
      />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-[white] [text-shadow:_1px_1px_20px_#000000] mb-6"
          data-aos="fade-up"
        >
          {t("hero.title")}
        </h1>

        <p className="mt-6 text-xl font-bold sm:text-2xl text-[#0dc2e2] mb-8 w-full mx-auto [text-shadow:_1px_3px_0px_rgba(32,32,32,0.78)]"
        data-aos="zoom-in-down"
        data-aos-duration="3000"
        >
          {t("hero.subtitle")}
        </p>

        <Button
          size="lg"
          variant="outline"
          className="text-lg px-8 bg-[white] text-[#277b8d] mt-4 hover:bg-[#277b8d] hover:text-[white]"
          data-aos="zoom-in-down"
        >
          {t("hero.learnMore")}
        </Button>
      </div>
    </div>
  );
}
