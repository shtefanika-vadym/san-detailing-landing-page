"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import servicesDataRaw from "@/data/services.json";
import { ServicesDataType } from "@/app/types/service";
import { getServiceIcon } from "@/shared/lib/services-data";

const servicesData: ServicesDataType = servicesDataRaw;

export function ServicesSection() {
  const [hoveredPackage, setHoveredPackage] = useState<string | null>(null);

  const { exterior, interior, separate } = servicesData;

  return (
    <section id="servicii" className="bg-san-light-gray py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Serviciile <span className="text-san-red">Noastre</span>
          </h2>
          <p className="text-san-metallic mx-auto max-w-3xl text-lg">
            Oferim o gamă completă de servicii de detailing auto, fiecare
            executat cu precizie și atenție la detalii. Folosim doar produse
            premium și echipamente de ultimă generație.
          </p>
        </div>

        {/* Exterior Detailing Packages */}
        <div className="mb-16">
          <h3 className="mb-8 text-center text-3xl font-bold text-white">
            Pachete <span className="text-san-red">Detailing Exterior</span>
          </h3>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {exterior.map((pkg, index: number) => {
              const Icon = getServiceIcon(pkg.icon);
              return (
                <Card
                  key={index}
                  className="bg-san-gray border-san-metallic/20 hover:border-san-red/50 transform cursor-pointer transition-all duration-300 hover:scale-105"
                  onMouseEnter={() => setHoveredPackage(`ext-${index}`)}
                  onMouseLeave={() => setHoveredPackage(null)}
                >
                  <CardHeader className="text-center">
                    <Icon
                      className={`mx-auto mb-4 h-12 w-12 transition-colors duration-300 ${
                        hoveredPackage === `ext-${index}`
                          ? "text-san-red"
                          : "text-san-metallic"
                      }`}
                    />
                    <CardTitle className="text-xl text-white">
                      {pkg.title}
                    </CardTitle>
                    {pkg.duration && (
                      <CardDescription className="text-san-metallic">
                        Durata: {pkg.duration}
                      </CardDescription>
                    )}
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <ul className="text-san-metallic space-y-2 text-sm">
                        {pkg?.services?.map((service, idx: number) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-san-red mr-2">•</span>
                            {service?.name}
                          </li>
                        ))}
                      </ul>
                      <div className="border-san-metallic/20 space-y-2 border-t pt-4 text-center">
                        <div className="font-semibold text-white">
                          <div>
                            Hatchback:{" "}
                            <span className="text-san-red">
                              {pkg?.pricing?.hatchback}
                            </span>
                          </div>
                          <div>
                            Coupe/Sedan/Break:{" "}
                            <span className="text-san-red">
                              {pkg.pricing.sedan}
                            </span>
                          </div>
                          <div>
                            SUV:{" "}
                            <span className="text-san-red">
                              {pkg.pricing.suv}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Interior Detailing Packages */}
        <div className="mb-16">
          <h3 className="mb-8 text-center text-3xl font-bold text-white">
            Pachete <span className="text-san-red">Detailing Interior</span>
          </h3>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {interior.map((pkg, index: number) => {
              const Icon = getServiceIcon(pkg.icon);
              return (
                <Card
                  key={index}
                  className="bg-san-gray border-san-metallic/20 hover:border-san-red/50 transform cursor-pointer transition-all duration-300 hover:scale-105"
                  onMouseEnter={() => setHoveredPackage(`int-${index}`)}
                  onMouseLeave={() => setHoveredPackage(null)}
                >
                  <CardHeader className="text-center">
                    <Icon
                      className={`mx-auto mb-4 h-12 w-12 transition-colors duration-300 ${
                        hoveredPackage === `int-${index}`
                          ? "text-san-red"
                          : "text-san-metallic"
                      }`}
                    />
                    <CardTitle className="text-xl text-white">
                      {pkg.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <ul className="text-san-metallic space-y-2 text-sm">
                        {pkg.services.map((service, idx: number) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-san-red mr-2">•</span>
                            {service?.name}
                          </li>
                        ))}
                      </ul>
                      <div className="border-san-metallic/20 space-y-2 border-t pt-4 text-center">
                        <div className="font-semibold text-white">
                          <div>
                            Hatchback:{" "}
                            <span className="text-san-red">
                              {pkg.pricing.hatchback}
                            </span>
                          </div>
                          <div>
                            Coupe/Sedan/Break:{" "}
                            <span className="text-san-red">
                              {pkg.pricing.sedan}
                            </span>
                          </div>
                          <div>
                            SUV:{" "}
                            <span className="text-san-red">
                              {pkg.pricing.suv}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Separate Services */}
        <div className="mb-16">
          <h3 className="mb-8 text-center text-3xl font-bold text-white">
            Servicii <span className="text-san-red">Separate</span>
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {separate.map((service, index: number) => {
              const Icon = getServiceIcon(service.icon);
              return (
                <Card
                  key={index}
                  className="bg-san-gray border-san-metallic/20 hover:border-san-red/50 transform transition-all duration-300 hover:scale-105"
                >
                  <CardHeader className="text-center">
                    <Icon className="text-san-metallic mx-auto mb-4 h-12 w-12" />
                    <CardTitle className="text-xl text-white">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <span className="bg-san-red rounded-lg px-4 py-2 font-semibold text-white">
                      {service.price}
                    </span>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-san-metallic mb-6 text-lg">
            Toate prețurile sunt orientative și pot varia în funcție de starea
            vehiculului și cerințele specifice.
          </p>
          <a
            href="#contact"
            className="bg-san-red inline-block rounded-lg px-8 py-3 font-semibold text-white transition-colors duration-300 hover:bg-red-700"
          >
            Solicită Ofertă Personalizată
          </a>
        </div>
      </div>
    </section>
  );
}
