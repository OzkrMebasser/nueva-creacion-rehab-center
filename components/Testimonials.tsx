'use client';

import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import { Quote } from 'lucide-react';
import content from '@/data/content.json';

export default function Testimonials() {
  const { t } = useTranslation();
  const { testimonials } = content;

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-lg p-6"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Quote className="h-8 w-8 text-primary mb-4" />
              <p className="text-gray-600 mb-4 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex justify-between items-center">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">
                  {format(new Date(testimonial.date), 'MMM d, yyyy')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}