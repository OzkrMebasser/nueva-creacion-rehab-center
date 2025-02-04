"use client";
import Titles from "./Titles";
import { useTranslation } from "react-i18next";
import { HeartHandshake, Users, BookOpen, Home } from "lucide-react";

const iconMap = {
  HeartHandshake,
  Users,
  BookOpen,
  Home,
};

export default function Services() {
  const { t } = useTranslation();

  // services list
  const services = t("services.list", { returnObjects: true }) as Array<{
    id: number;
    title: string;
    description: string;
    icon: keyof typeof iconMap;
  }>;

  return (
    <section id="services" className="relative py-12 pattern-bg">
      <div className="absolute inset-0 bg-[#0dc0e1] -z-50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <Titles
            title={t("services.title")}
            fsz="text-5xl"
            lgFsz="text-3xl"
            textColor="text-[white] [text-shadow:_3px_0px_11px_rgba(0,0,0,0.78)]"
          />
          <p className="text-xl text-[#202020]">{t("services.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="bg-white rounded-lg p-6 shadow-[0px_8px_15px_8px_rgba(0,_0,_0,_0.1)]"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-primary mb-4">
                  <Icon size={32} className="text-[#277b8d]" />
                </div>
                <h3 className="text-xl font-semibold text-[#202020] mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
