import React from "react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/shared/components/ui/card";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Shtefanika Vadym",
      location: "Suceava",
      rating: 5,
      text: "Rezultatul final a fost excepțional – toate imperfecțiunile vizibile au fost complet eliminate, iar mașina arată ca nouă. Sunt 100% mulțumit și recomand cu toată încrederea San Detailing tuturor celor care își doresc ca mașina lor să arate din nou perfect!",
      service: "Pachet Gold Exterior + Interior",
    },
  ];

  return (
    <section className="bg-san-gray py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Ce Spun <span className="text-san-red">Clienții</span>
          </h2>
          <p className="text-san-metallic mx-auto max-w-3xl text-lg">
            Satisfacția clienților noștri este cea mai bună dovadă a calității
            serviciilor San Detailing. Descoperă experiențele celor care ne-au
            încredințat vehiculele lor.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-san-light-gray border-san-metallic/20 hover:border-san-red/50 transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Quote className="text-san-red mt-1 h-8 w-8 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-san-metallic mb-6 text-lg leading-relaxed">
                      "{testimonial.text}"
                    </p>

                    <div className="mb-4 flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-current text-yellow-400"
                        />
                      ))}
                    </div>

                    <div className="border-san-metallic/20 border-t pt-4">
                      <h4 className="font-semibold text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-san-metallic text-sm">
                        {testimonial.location}
                      </p>
                      <p className="text-san-red mt-1 text-sm font-medium">
                        {testimonial.service}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
