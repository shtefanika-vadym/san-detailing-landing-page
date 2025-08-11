"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";

export function GallerySection() {
  const [currentImage, setCurrentImage] = useState(0);

  const galleryImages = [
    {
      before: "Mașină înainte de polish - vopsea mată și zgâriată",
      after: "Mașină după polish - strălucire perfectă și vopsea ca oglinda",
      title: "Polish Profesional BMW",
    },
    {
      before: "Faruri opacizate și îngălbenite",
      after: "Faruri cristal clar după restaurare",
      title: "Restaurare Faruri Audi",
    },
    {
      before: "Interior murdar cu pete pe tapițerie",
      after: "Interior impecabil după detailing complet",
      title: "Detailing Interior Mercedes",
    },
    {
      before: "Vopsea cu defecte și swirl marks",
      after: "Vopsea perfectă după corecția lacului",
      title: "Corecția Lacului Volkswagen",
    },
  ];

  function nextImage() {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  }

  function prevImage() {
    setCurrentImage(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length,
    );
  }

  return (
    <section id="galerie" className="bg-san-black py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Înainte <span className="text-san-red">&</span> După
          </h2>
          <p className="text-san-metallic mx-auto max-w-3xl text-lg">
            Descoperă transformările incredibile pe care le realizăm. Fiecare
            proiect demonstrează pasiunea și expertiza echipei San Detailing.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="bg-san-gray border-san-metallic/20 rounded-lg border p-8">
            <div className="mb-6 grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Before */}
              <div className="space-y-4">
                <h3 className="text-san-red text-center text-xl font-semibold">
                  ÎNAINTE
                </h3>
                <div className="bg-san-light-gray flex aspect-video items-center justify-center rounded-lg border-2 border-gray-600">
                  <div className="text-center">
                    <Eye className="text-san-metallic mx-auto mb-3 h-12 w-12" />
                    <p className="text-san-metallic px-4 text-sm">
                      {galleryImages[currentImage].before}
                    </p>
                  </div>
                </div>
              </div>

              {/* After */}
              <div className="space-y-4">
                <h3 className="text-san-red text-center text-xl font-semibold">
                  DUPĂ
                </h3>
                <div className="bg-san-light-gray border-san-red flex aspect-video items-center justify-center rounded-lg border-2">
                  <div className="text-center">
                    <Eye className="text-san-red mx-auto mb-3 h-12 w-12" />
                    <p className="text-san-metallic px-4 text-sm">
                      {galleryImages[currentImage].after}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h4 className="mb-4 text-2xl font-bold text-white">
                {galleryImages[currentImage].title}
              </h4>

              {/* Navigation */}
              <div className="flex items-center justify-center space-x-4">
                <button
                  onClick={prevImage}
                  className="bg-san-red rounded-full p-2 text-white transition-colors duration-300 hover:bg-red-700"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <div className="flex space-x-2">
                  {galleryImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`h-3 w-3 rounded-full transition-colors duration-300 ${
                        index === currentImage
                          ? "bg-san-red"
                          : "bg-san-metallic"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextImage}
                  className="bg-san-red rounded-full p-2 text-white transition-colors duration-300 hover:bg-red-700"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-san-metallic mb-6 text-lg">
            Vezi mai multe transformări pe paginile noastre de social media
          </p>
          <div className="flex justify-center space-x-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/p/SAN-Detailing-SV-61567153601240"
              className="bg-san-metallic text-san-black rounded-lg px-6 py-3 font-semibold transition-colors duration-300 hover:bg-white"
            >
              Facebook
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/san.detailingsuceava"
              className="bg-san-metallic text-san-black rounded-lg px-6 py-3 font-semibold transition-colors duration-300 hover:bg-white"
            >
              Instagram
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.tiktok.com/@sandetailing7"
              className="bg-san-metallic text-san-black rounded-lg px-6 py-3 font-semibold transition-colors duration-300 hover:bg-white"
            >
              Tiktok
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
