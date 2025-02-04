"use client";

import { useTranslation } from "react-i18next";
import { Heart, MapPinned } from "lucide-react";
import content from "@/data/content.json";

export default function Footer() {
  const { t } = useTranslation();
  const { contact } = content;

  return (
    <footer className="bg-[#277b8d] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">
              {t("contact.address")}
            </h3>
            <p className="text-[#202020]">{contact.address}</p>
            <a className="text-[#202020]" href="https://www.facebook.com/reel/1077264857286372" target="_blank" rel="noopener noreferrer">Mira como llegar <MapPinned className="inline text-[#20202] h-[1.2rem]"/></a>

          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">{t("contact.title")}</h3>
            <p className="text-[#202020]">{contact.phone}</p>
            <p className="text-[#202020]">{contact.email}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">{t("nav.about")}</h3>
            <p className="text-[#202020]">{t("about.missionText")}</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#ffffff] text-center">
          <p className="text-[#202020] text-sm flex items-center justify-center">
          
            {t("footer.made")} <span className="mr-1 ml-1">🧡</span>
            {t("footer.for")}{" "}
            <a className="text-[#202020] ml-1" href="#" target="_blank" rel="noopener noreferrer"> Ozkr Mebasser</a>

          </p>
        </div>
      </div>
    </footer>
  );
}
