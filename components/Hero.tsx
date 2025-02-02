'use client';

import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Cross } from 'lucide-react';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen flex items-center justify-center ">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/templo-monte-horeb.appspot.com/o/heroentrada.jpg?alt=media&token=59d7266a-abd3-44c5-88ee-ac0792717bd1')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.5
        }}
      />
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8" data-aos="fade-up">
        <Cross className="mx-auto mb-8 text-primary h-16 w-16" />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          {t('hero.title')}
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8">
            {t('hero.cta')}
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8">
            {t('hero.learnMore')}
          </Button>
        </div>
      </div>
    </div>
  );
}