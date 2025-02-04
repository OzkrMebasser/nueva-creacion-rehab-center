"use client";
import Titles from "./Titles";
import SiteMap from "./SiteMap";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";
// import content from "@/data/content.json";

export default function Contact() {
  const { t } = useTranslation();

  // const { contact } = content;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-center mb-12 " data-aos="fade-up">
          <Titles
            title={t("contact.title")}
            fsz="text-5xl"
            lgFsz="text-3xl"
            textColor="text-[#277b8d] "
          />
          <p className="text-xl text-[#202020]">{t("contact.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 ">
          <div data-aos="fade-right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#202020] mb-1"
                >
                  {t("contact.form.name")}
                </label>
                <Input type="text" id="name" name="name" required />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#202020] mb-1"
                >
                  {t("contact.form.email")}
                </label>
                <Input type="email" id="email" name="email" required />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#202020] mb-1"
                >
                  {t("contact.form.message")}
                </label>
                <Textarea id="message" name="message" rows={4} required />
              </div>
              <Button type="submit" className="w-full bg-[#277b8d] hover:bg-[#1f5f6d]">
                {t("contact.form.submit")}
              </Button>
            </form>
          </div>

          <div className="space-y-8 bg-red-500" data-aos="fade-right ">
            <SiteMap />
          </div>
        </div>
      </div>
    </section>
  );
}
