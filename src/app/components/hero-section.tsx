"use client";

import Image from "next/image";
import { Car, ChevronDown } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { Header } from "@/app/components/header";

export function HeroSection() {
  function scrollToContact() {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  }

  function scrollToAbout() {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="hero-gradient relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="via-san-metallic absolute inset-0 animate-pulse bg-gradient-to-r from-transparent to-transparent"></div>
      </div>

      <Header />
      {/* Hero Content */}
      <div className="z-20 mx-auto max-w-4xl px-6 text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <Image
              src="/logo.png"
              alt="San Detailing Logo"
              width={224}
              height={224}
              className="mx-auto mb-6 h-48 w-auto md:h-56"
              priority
            />
          </div>
          <p className="text-san-metallic mx-auto mb-12 max-w-2xl text-lg leading-relaxed md:text-xl">
            Servicii premium de detailing auto în Suceava. Transformăm fiecare
            vehicul într-o operă de artă prin atenția la detalii și pasiunea
            pentru perfecțiune.
          </p>
          <Button
            onClick={scrollToContact}
            className="bg-san-red transform rounded-lg px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-red-700"
          >
            Programează o sesiune
          </Button>
        </div>
      </div>

      {/* Floating car icon */}
      <div className="animate-float absolute bottom-20 left-10 hidden lg:block">
        <Car className="text-san-metallic h-16 w-16 opacity-30" />
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="text-san-metallic hover:text-san-red absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce transition-colors"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
}
