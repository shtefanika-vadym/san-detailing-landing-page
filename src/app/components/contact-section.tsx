"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";

export function ContactSection() {
  // const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Simulate form submission
    // toast({
    //   title: "Mesaj trimis cu succes!",
    //   description: "Vă vom contacta în cel mai scurt timp posibil.",
    // });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      details: "+40 770 776 197",
      action: "tel:+40770776197",
    },
    {
      icon: Mail,
      title: "Email",
      details: "contact@sandetailing.ro",
      action: "mailto:contact@sandetailing.ro",
    },
    {
      icon: MapPin,
      title: "Adresă",
      details: "Strada Saliste 80",
      action: "#",
    },
    {
      icon: Clock,
      title: "Program",
      details: "Luni - Vineri: 09:00 - 18:00 \nSâmbătă: 09:00 - 14:00",
      action: "",
    },
  ];

  return (
    <section id="contact" className="bg-san-light-gray py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Contactează-ne <span className="text-san-red">Acum</span>
          </h2>
          <p className="text-san-metallic mx-auto max-w-3xl text-lg">
            Ești gata să îți transformi vehiculul? Contactează echipa San
            Detailing pentru o consultație gratuită și o ofertă personalizată.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <Card className="bg-san-gray border-san-metallic/20">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-bold text-white">
                <Send className="text-san-red mr-3 h-6 w-6" />
                Formular de Contact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="text-san-metallic mb-2 block font-medium"
                  >
                    Nume Complet *
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-san-light-gray border-san-metallic/30 focus:border-san-red text-white"
                    placeholder="Introduceți numele dumneavoastră"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-san-metallic mb-2 block font-medium"
                  >
                    Email *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-san-light-gray border-san-metallic/30 focus:border-san-red text-white"
                    placeholder="email@exemplu.ro"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="text-san-metallic mb-2 block font-medium"
                  >
                    Număr Telefon
                  </label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-san-light-gray border-san-metallic/30 focus:border-san-red text-white"
                    placeholder="+40 xxx xxx xxx"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-san-metallic mb-2 block font-medium"
                  >
                    Mesaj *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-san-light-gray border-san-metallic/30 focus:border-san-red resize-none text-white"
                    placeholder="Descrieți serviciile dorite sau orice întrebări aveți..."
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-san-red w-full py-3 font-semibold text-white transition-colors duration-300 hover:bg-red-700"
                >
                  Trimite Mesajul
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information and Map */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="bg-san-gray border-san-metallic/20 hover:border-san-red/50 transition-all duration-300"
                >
                  <CardContent className="p-6 text-center">
                    <info.icon className="text-san-red mx-auto mb-3 h-8 w-8" />
                    <h3 className="mb-2 font-semibold text-white">
                      {info.title}
                    </h3>
                    {info.action && info.action !== "" ? (
                      <a
                        href={info.action}
                        className="text-san-metallic hover:text-san-red transition-colors duration-300"
                      >
                        {info.details}
                      </a>
                    ) : (
                      <p className="text-san-metallic">{info.details}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map Placeholder */}
            <Card className="bg-san-gray border-san-metallic/20">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-bold text-white">
                  <MapPin className="text-san-red mr-2 h-5 w-5" />
                  Locația Noastră
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-san-black border-san-metallic/20 flex aspect-video items-center justify-center rounded-lg border">
                  <div className="text-center">
                    <MapPin className="text-san-red mx-auto mb-4 h-16 w-16" />
                    <p className="text-san-metallic">Hartă Google integrată</p>
                    <p className="text-san-metallic mt-2 text-sm">
                      San Detailing - Suceava, România
                    </p>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-san-metallic text-sm">
                    Veniți la noi pentru o experiență premium de detailing auto
                    în Suceava
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
