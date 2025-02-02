'use client';

import { useTranslation } from 'react-i18next';
import { Heart } from 'lucide-react';
import content from '@/data/content.json';

export default function Footer() {
  const { t } = useTranslation();
  const { contact } = content;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Christian Rehab</h3>
            <p className="text-gray-400">{contact.address}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('contact.title')}</h3>
            <p className="text-gray-400">{contact.phone}</p>
            <p className="text-gray-400">{contact.email}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('nav.about')}</h3>
            <p className="text-gray-400">{t('about.missionText')}</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart size={16} className="mx-1 text-red-500" /> for Christ&apos;s glory
          </p>
        </div>
      </div>
    </footer>
  );
}