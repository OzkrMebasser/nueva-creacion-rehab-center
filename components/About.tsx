"use client";
import Titles from "@/components/Titles";
import { useTranslation } from "react-i18next";
import { Target, Eye } from "lucide-react";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <Titles
            title={t("about.title")}
            fsz="text-5xl"
            lgFsz="text-3xl"
            textColor="text-[#277b8d] "
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div
            className="bg-white rounded-lg p-8 shadow-[0px_8px_15px_8px_rgba(0,_0,_0,_0.1)]  hover:bg-gray-50 "
            data-aos="fade-right"
          >
            <Target className="h-12 w-12 text-[#277b8d] mb-6" />
            <h3 className="text-2xl font-bold text-[#202020] mb-4">
              {t("about.mission")}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t("about.missionText")}
            </p>
          </div>

          <div
            className="bg-white rounded-lg p-8 shadow-[0px_8px_15px_8px_rgba(0,_0,_0,_0.1)]  hover:bg-gray-50 "
            data-aos="fade-right"
          >
            <Eye className="h-12 w-12 text-[#277b8d] mb-6" />
            <h3 className="text-2xl font-bold text-[#202020] mb-4">
              {t("about.vision")}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t("about.visionText")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
