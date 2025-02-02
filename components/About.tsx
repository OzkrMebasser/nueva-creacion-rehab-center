'use client';

import { useTranslation } from 'react-i18next';
import { Target, Eye } from 'lucide-react';

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('about.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-50 rounded-lg p-8" data-aos="fade-right">
            <Target className="h-12 w-12 text-primary mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t('about.mission')}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t('about.missionText')}
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8" data-aos="fade-left">
            <Eye className="h-12 w-12 text-primary mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t('about.vision')}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t('about.visionText')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}