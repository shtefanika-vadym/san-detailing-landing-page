import React from "react";
import { Award, Users, Clock } from "lucide-react";

export function AboutSection() {
  return (
    <section id="despre-noi" className="bg-san-gray py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="animate-slide-in-left">
            <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              Despre <span className="text-san-red">San Detailing</span>
            </h2>
            <p className="text-san-metallic mb-8 text-lg leading-relaxed">
              În inima Sucevei, San Detailing s-a născut din pasiunea pentru
              perfecțiune și respectul pentru fiecare detaliu. Echipa noastră de
              specialiști transformă întreținerea auto într-o artă, folosind
              cele mai avansate tehnici și produse premium pentru a reda
              strălucirea originală vehiculului tău.
            </p>
            <p className="text-san-metallic mb-8 text-lg leading-relaxed">
              De la polish profesional la protecția ceramică de ultimă
              generație, fiecare serviciu este executat cu precizie milimetrică
              și atenție la detalii care face diferența dintre bun și
              excepțional.
            </p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="p-4 text-center">
                <Award className="text-san-red mx-auto mb-3 h-8 w-8" />
                <h3 className="font-semibold text-white">Calitate Premium</h3>
                <p className="text-san-metallic text-sm">
                  Produse și tehnici de vârf
                </p>
              </div>
              <div className="p-4 text-center">
                <Users className="text-san-red mx-auto mb-3 h-8 w-8" />
                <h3 className="font-semibold text-white">Echipă Expertă</h3>
                <p className="text-san-metallic text-sm">
                  Specialiști cu experiență
                </p>
              </div>
              <div className="p-4 text-center">
                <Clock className="text-san-red mx-auto mb-3 h-8 w-8" />
                <h3 className="font-semibold text-white">Punctualitate</h3>
                <p className="text-san-metallic text-sm">
                  Respectăm timpul tău
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="from-san-light-gray to-san-gray border-san-metallic/20 rounded-lg border bg-gradient-to-br p-8">
              <div className="bg-san-black aspect-video overflow-hidden rounded-lg">
                {/*<img*/}
                {/*  src="/lovable-uploads/6445bcc0-d94e-4a2e-b5cf-1f6b9dfb9e51.png"*/}
                {/*  alt="Echipa San Detailing"*/}
                {/*  className="mx-auto h-full w-full object-contain object-top"*/}
                {/*  style={{ transform: "scale(1.8)" }}*/}
                {/*/>*/}
              </div>
              <div className="mt-6 text-center">
                <h3 className="mb-2 text-xl font-semibold text-white">
                  Experiență de Peste 2 Ani
                </h3>
                <p className="text-san-metallic">
                  în domeniul detailing-ului auto premium
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
