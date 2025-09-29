"use client";
import Titles from "./Titles";
import SiteMap from "./SiteMap";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// Importa tus componentes de Toast (shadcn/ui)
import {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
} from "@/components/ui/toast";

export default function Contact() {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);

  const [open, setOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<"default" | "destructive">(
    "default"
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_g2be5pk", 
        "template_4ewjsii", 
        formRef.current,
        "PFJXVjgUKfuz0_aBy"
      )
      .then(
        () => {
          console.log("✅ Mensaje enviado correctamente");
          setToastMessage("✅ Tu mensaje fue enviado con éxito.");
          setToastType("default");
          setOpen(true);
          formRef.current?.reset();
        },
        (error) => {
          console.error("❌ Error al enviar:", error.text);
          setToastMessage("❌ Ocurrió un error al enviar el mensaje.");
          setToastType("destructive");
          setOpen(true);
        }
      );
  };

  return (
    <ToastProvider swipeDirection="right">
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
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
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

                {/* Campo oculto con fecha y hora */}
                <input
                  type="hidden"
                  name="time"
                  value={new Date().toLocaleString("es-MX", {
                    dateStyle: "short",
                    timeStyle: "short",
                  })}
                />

                <Button
                  type="submit"
                  className="w-full bg-[#277b8d] hover:bg-[#1f5f6d]"
                >
                  {t("contact.form.submit")}
                </Button>
              </form>
            </div>

            <div className="space-y-8" data-aos="fade-right ">
              <SiteMap />
            </div>
          </div>
        </div>
      </section>

      {/* TOAST */}
      <Toast open={open} onOpenChange={setOpen} variant={toastType}>
        <div className="grid gap-1">
          <ToastTitle>{toastType === "default" ? "Éxito" : "Error"}</ToastTitle>
          <ToastDescription>{toastMessage}</ToastDescription>
        </div>
        <ToastClose />
      </Toast>
      <ToastViewport />
    </ToastProvider>
  );
}
