'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/lib/i18n';

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize AOS after component mounts
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
    });

    // Force initial language to match default
    i18n.changeLanguage('es');
  }, []);

  return (
    <I18nextProvider i18n={i18n} defaultNS="translation">
      {children}
    </I18nextProvider>
  );
}