"use client";
import Titles from "./Titles";
import { useTranslation } from "react-i18next";
// import { format } from "date-fns";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const { t } = useTranslation();

  // services list
  const testimonials = t("testimonials.list", {
    returnObjects: true,
  }) as Array<{
    id: number;
    name: string;
    quote: string;
    date: string;
  }>;

  return (
    <section id="testimonials" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <Titles
            title={t("testimonials.title")}
            fsz="text-5xl"
            lgFsz="text-3xl"
            textColor="text-[#277b8d] "
          />

          <p className="text-xl text-gray-600">{t("testimonials.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white hover:bg-slate-50 rounded-lg p-6 shadow-[0px_8px_15px_8px_rgba(0,_0,_0,_0.1)]"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Quote className="h-8 w-8 mb-4 text-[#277b8d]" />
              <p className="text-[#202020] mb-4 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex justify-between items-center">
                <p className="font-semibold text-[#202020]">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500">{testimonial.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
