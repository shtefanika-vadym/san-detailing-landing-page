import React from "react";
import { Award, Star, Shield } from "lucide-react";

export function CertificationSection() {
  return (
    <section className="bg-san-light-gray py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Experiență <span className="text-san-red">Acreditată</span>
          </h2>
          <p className="text-san-metallic mx-auto max-w-3xl text-lg">
            Echipa noastră de specialiști este certificată și acreditată, fiind
            partner oficial Carlexx - liderul în tehnologia de protecție
            ceramică automotive.
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Specialist Photo and Info */}
          <div className="text-center lg:text-left">
            <div className="relative mb-6 inline-block">
              {/*<img*/}
              {/*  src="/lovable-uploads/1067c2db-8921-4a87-b387-2c05e4fcca25.png"*/}
              {/*  alt="Specialist San Detailing Acreditat"*/}
              {/*  className="h-auto max-w-full rounded-lg shadow-2xl"*/}
              {/*/>*/}
              <div className="bg-san-red absolute -right-4 -bottom-4 rounded-full p-3 text-white">
                <Award className="h-6 w-6" />
              </div>
            </div>
            <h3 className="mb-4 text-2xl font-bold text-white">
              Specialist Certificat
            </h3>
            <p className="text-san-metallic leading-relaxed">
              Specialistul nostru principal este certificat oficial și deține
              toate acreditările necesare pentru aplicarea tehnicilor avansate
              de detailing și protecție ceramică.
            </p>
          </div>

          {/* Carlex Partnership Info */}
          <div className="space-y-8">
            <div className="bg-san-gray border-san-metallic/20 rounded-lg border p-8">
              <div className="mb-6 flex items-center">
                <Shield className="text-san-red mr-4 h-8 w-8" />
                <h3 className="text-2xl font-bold text-white">
                  Partner Acreditat{" "}
                  <a
                    href="https://carlexx.ro/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-400 underline"
                  >
                    Carlexx
                  </a>
                </h3>
              </div>
              <p className="text-san-metallic mb-6 leading-relaxed">
                San Detailing este partener oficial acreditat Carlexx, ceea ce
                înseamnă că avem acces exclusiv la cele mai avansate tehnologii
                și produse de protecție ceramică din industrie.
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex items-center space-x-3">
                  <Star className="text-san-red h-5 w-5" />
                  <span className="text-san-metallic">Tehnologie Premium</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="text-san-red h-5 w-5" />
                  <span className="text-san-metallic">
                    Certificări Oficiale
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="text-san-red h-5 w-5" />
                  <span className="text-san-metallic">Garanție Extinsă</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="text-san-red h-5 w-5" />
                  <span className="text-san-metallic">Suport Tehnic</span>
                </div>
              </div>
            </div>

            <div className="from-san-red/20 to-san-metallic/20 border-san-red/30 rounded-lg border bg-gradient-to-r p-6">
              <h4 className="mb-3 text-xl font-semibold text-white">
                Avantajele Parteneriatului
              </h4>
              <ul className="text-san-metallic space-y-2">
                <li>• Acces la produse exclusive Carlexx</li>
                <li>• Instruire continuă și certificări</li>
                <li>• Suport tehnic specializat</li>
                <li>• Garanții extinse pentru clienți</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
