'use client';

import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail } from 'lucide-react';
import content from '@/data/content.json';

export default function Contact() {
  const { t } = useTranslation();
  const { contact } = content;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div data-aos="fade-right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.form.name')}
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.form.email')}
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.form.message')}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                {t('contact.form.submit')}
              </Button>
            </form>
          </div>

          <div className="space-y-8" data-aos="fade-right">
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                <p className="text-gray-600">{contact.address}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                <p className="text-gray-600">{contact.phone}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                <p className="text-gray-600">{contact.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}