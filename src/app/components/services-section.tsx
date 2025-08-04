"use client";

import { useState } from "react";
import { Star, Crown, Award, Car, Sparkles, Shield } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";

export function ServicesSection() {
  const [hoveredPackage, setHoveredPackage] = useState<string | null>(null);

  const exteriorPackages = [
    {
      icon: Star,
      title: "DETAILING EXTERIOR BRONZE",
      duration: "1-2 zile",
      services: [
        "Spălare profesională prin metoda celor 2 găleți",
        "Decontaminare chimică și mecanică",
        "Polish într-un pas – eliminare pânză de păianjen, holograme și zgârieturi fine (corecție 60-70%)",
        "Aplicare dressinguri dedicate pe trimuri de plastic, anvelope și alte elemente",
        "Aplicare protecție ceramică Carlexx Pro 8 cu durabilitate până la 2 ani",
      ],
      pricing: {
        hatchback: "1000 lei",
        sedan: "1300 lei",
        suv: "1600 lei",
      },
    },
    {
      icon: Award,
      title: "DETAILING EXTERIOR SILVER",
      duration: "2-3 zile",
      services: [
        "Spălare profesională prin metoda celor 2 găleți",
        "Decontaminare chimică și mecanică",
        "Polish 2 pași – corecție zgârieturi medii și lustruire (corecție 70-90%)",
        "Polish trimuri lucioase",
        "Polish tipsuri metalice",
        "Aplicare dressinguri dedicate pe trimuri de plastic, anvelope și alte elemente",
        "Aplicare protecție ceramică Carlexx Pro 9 cu durabilitate până la 3 ani",
      ],
      pricing: {
        hatchback: "1800 lei",
        sedan: "2300 lei",
        suv: "2800 lei",
      },
    },
    {
      icon: Crown,
      title: "DETAILING EXTERIOR GOLD",
      duration: "3-4 zile",
      services: [
        "Spălare profesională prin metoda celor 2 găleți",
        "Decontaminare chimică și mecanică",
        "Polish 3 pași – corecție zgârieturi adânci și lustruire (corecție 90-95%)",
        "Polish trimuri lucioase",
        "Polish tipsuri metalice",
        "Aplicare protecție ceramică pe trimuri de plastic și jante",
        "Aplicare dressing cauciucuri",
        "Aplicare tratament hidrofob geamuri",
        "Aplicare folie de protecție pe faruri",
        "Detailing compartiment motor",
        "Aplicare protecție ceramică Carlexx Pro 10, rezistență până la 5 ani",
      ],
      pricing: {
        hatchback: "2500 lei",
        sedan: "3000 lei",
        suv: "3500 lei",
      },
    },
  ];

  const combinedPackages = [
    {
      title: "PACHET INTERIOR + EXTERIOR BRONZE",
      description:
        "Acest pachet include detailing exterior Bronze + detailing interior Bronze",
      pricing: {
        hatchback: "1300 lei",
        sedan: "1600 lei",
        suv: "2000 lei",
      },
    },
    {
      title: "PACHET INTERIOR + EXTERIOR SILVER",
      description:
        "Acest pachet include detailing exterior Silver + detailing interior Silver",
      pricing: {
        hatchback: "2200 lei",
        sedan: "2600 lei",
        suv: "3200 lei",
      },
    },
    {
      title: "PACHET INTERIOR + EXTERIOR GOLD",
      description:
        "Acest pachet include detailing exterior Gold + detailing interior Gold",
      pricing: {
        hatchback: "3000 lei",
        sedan: "3500 lei",
        suv: "4000 lei",
      },
    },
  ];

  const separateServices = [
    {
      icon: Sparkles,
      title: "Polish + Folii Faruri",
      price: "de la 300 lei",
    },
    {
      icon: Car,
      title: "Chrome Delete",
      price: "de la 500 lei",
    },
    {
      icon: Shield,
      title: "Tratament Hidrofob Sticlă",
      price: "de la 200 lei",
    },
  ];

  return (
    <section id="services" className="bg-san-light-gray py-20">
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
            {exteriorPackages.map((pkg, index) => (
              <Card
                key={index}
                className="bg-san-gray border-san-metallic/20 hover:border-san-red/50 transform cursor-pointer transition-all duration-300 hover:scale-105"
                onMouseEnter={() => setHoveredPackage(`ext-${index}`)}
                onMouseLeave={() => setHoveredPackage(null)}
              >
                <CardHeader className="text-center">
                  <pkg.icon
                    className={`mx-auto mb-4 h-12 w-12 transition-colors duration-300 ${
                      hoveredPackage === `ext-${index}`
                        ? "text-san-red"
                        : "text-san-metallic"
                    }`}
                  />
                  <CardTitle className="text-xl text-white">
                    {pkg.title}
                  </CardTitle>
                  <CardDescription className="text-san-metallic">
                    Durata: {pkg.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <ul className="text-san-metallic space-y-2 text-sm">
                      {pkg.services.map((service, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-san-red mr-2">•</span>
                          {service}
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
            ))}
          </div>
        </div>

        {/* Combined Interior + Exterior Packages */}
        <div className="mb-16">
          <h3 className="mb-8 text-center text-3xl font-bold text-white">
            Pachete <span className="text-san-red">Interior + Exterior</span>
          </h3>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {combinedPackages.map((pkg, index) => (
              <Card
                key={index}
                className="bg-san-gray border-san-metallic/20 hover:border-san-red/50 transform transition-all duration-300 hover:scale-105"
              >
                <CardHeader className="text-center">
                  <CardTitle className="text-xl text-white">
                    {pkg.title}
                  </CardTitle>
                  <CardDescription className="text-san-metallic">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-center">
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
                        <span className="text-san-red">{pkg.pricing.suv}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Separate Services */}
        <div className="mb-16">
          <h3 className="mb-8 text-center text-3xl font-bold text-white">
            Servicii <span className="text-san-red">Separate</span>
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {separateServices.map((service, index) => (
              <Card
                key={index}
                className="bg-san-gray border-san-metallic/20 hover:border-san-red/50 transform transition-all duration-300 hover:scale-105"
              >
                <CardHeader className="text-center">
                  <service.icon className="text-san-metallic mx-auto mb-4 h-12 w-12" />
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
            ))}
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
