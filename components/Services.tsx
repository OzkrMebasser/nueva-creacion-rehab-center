'use client';

import { useTranslation } from 'react-i18next';
import { Heart, Users, BookOpen, Home, HeartHandshake  } from 'lucide-react';
import content from '@/data/content.json';

const iconMap = {
  HeartHandshake,
  Users,
  BookOpen,
  Home,
};

export default function Services() {
  const { t } = useTranslation();
  const { services } = content;

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <div
                key={service.id}
                className="bg-white rounded-lg p-6 shadow-md"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-primary mb-4">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}