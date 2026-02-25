import { getServiceBySlug, getServiceIcon } from "@/shared/lib/services-data";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type {
  ServiceWithServicesType,
  ServiceSeparateType,
} from "@/app/types/service";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { WhatsAppFloatingButton } from "@/app/components/whatsapp-floating-button";

type ParamsType = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: ParamsType): Promise<Metadata> {
  const { slug } = await params;

  const service = await getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.seo?.title || service.title,
    description: service.seo?.description || service.description,
    keywords: service.seo?.keywords,
    openGraph: {
      title: service.seo?.title || service.title,
      description: service.seo?.description || service.description,
      type: "article",
    },
  };
}

export default async function ServicePage({ params }: ParamsType) {
  const { slug } = await params;

  const service: ServiceWithServicesType | ServiceSeparateType | null =
    await getServiceBySlug(slug);
  if (!service) return notFound();

  const Icon = getServiceIcon(service.icon);

  return (
    <>
      <Header />
      <section className="bg-san-light-gray min-h-screen py-40">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-8">
            <Link
              href="/#servicii"
              className="text-san-metallic inline-flex items-center gap-2 transition-colors duration-200 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Înapoi la servicii
            </Link>
          </div>
          <div className="mb-10 text-center">
            <Icon className="text-san-red mx-auto mb-4 h-14 w-14" />
            <h1 className="mb-4 text-4xl font-bold text-white">
              {service.title}
            </h1>
            {"duration" in service && (
              <div className="text-san-metallic mb-2">
                Durată: {service.duration}
              </div>
            )}
            {service.description && (
              <p className="text-san-metallic text-lg">{service.description}</p>
            )}
          </div>
          {"services" in service && (
            <div className="bg-san-gray border-san-metallic/20 mb-8 rounded-lg p-6">
              <div className="mb-4 font-semibold text-white">
                Servicii incluse:
              </div>
              <ul className="space-y-4">
                {service?.services?.map((srv, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-san-red mt-1">•</span>
                    <div>
                      <span className="font-semibold text-white">
                        {srv.name}
                      </span>
                      {srv.desc && (
                        <div className="text-san-metallic mt-1 text-sm">
                          {srv.desc}
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {"pricing" in service && (
            <div className="bg-san-gray border-san-metallic/20 mb-8 rounded-lg p-6">
              <div className="mb-2 font-semibold text-white">
                Prețuri orientative:
              </div>
              <div className="flex flex-col gap-2 text-white">
                {Object.entries(service.pricing).map(([key, value]) => (
                  <span key={key}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}:{" "}
                    <span className="text-san-red">{value}</span>
                  </span>
                ))}
              </div>
              {slug.startsWith("interior-") && (
                <p className="text-san-metallic mt-3 text-sm italic">
                  Prețul poate fi modificat în funcție de starea mașinii
                </p>
              )}
            </div>
          )}
          {"price" in service && (
            <div className="bg-san-gray border-san-metallic/20 mb-8 rounded-lg p-6 text-center">
              <span className="font-semibold text-white">Preț: </span>
              <span className="text-san-red text-lg font-bold">
                {service.price}
              </span>
            </div>
          )}
          <div className="mt-10 text-center">
            <Link
              href="/#contact"
              className="bg-san-red inline-block rounded-lg px-8 py-3 font-semibold text-white transition-colors duration-300 hover:bg-red-700"
            >
              Programează {service.title}
            </Link>
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}

export async function generateStaticParams() {
  const { getAllServiceSlugs } = await import("@/shared/lib/services-data");
  const slugs = await getAllServiceSlugs();
  return slugs.map((slug: string) => ({ slug }));
}
