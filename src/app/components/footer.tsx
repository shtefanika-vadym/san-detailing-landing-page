import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-san-black border-san-metallic/20 border-t">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="mb-6 flex cursor-pointer items-center space-x-3"
            >
              <Image
                src="/logo.png"
                alt="San Detailing Logo"
                width={32}
                height={32}
                className="h-8 w-auto"
                priority
              />
            </Link>
            <p className="text-san-metallic mb-6 leading-relaxed">
              Precizie în Detalii - Servicii premium de detailing auto în
              Suceava. Transformăm fiecare vehicul într-o operă de artă prin
              atenția la detalii și pasiunea pentru perfecțiune.
            </p>
            <div className="flex space-x-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/p/SAN-Detailing-SV-61567153601240"
                className="bg-san-gray hover:bg-san-red rounded-lg p-3 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/san.detailingsuceava"
                className="bg-san-gray hover:bg-san-red rounded-lg p-3 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/san.detailingsuceava"
                className="bg-san-gray hover:bg-san-red rounded-lg p-3 transition-colors duration-300"
                aria-label="Titktok"
              >
                <Image
                  src="/tiktok.svg"
                  alt="Titkok"
                  width={20}
                  height={20}
                  className="h-5 w-5 text-white"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Linkuri Rapide
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/#despre-noi"
                  className="text-san-metallic hover:text-san-red transition-colors duration-300"
                >
                  Despre Noi
                </Link>
              </li>
              <li>
                <Link
                  href="/#servicii"
                  className="text-san-metallic hover:text-san-red transition-colors duration-300"
                >
                  Servicii
                </Link>
              </li>
              <li>
                <Link
                  href="/#galerie"
                  className="text-san-metallic hover:text-san-red transition-colors duration-300"
                >
                  Galerie
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-san-metallic hover:text-san-red transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Phone className="text-san-red h-4 w-4 flex-shrink-0" />
                <a
                  href="tel:+40770776197"
                  className="text-san-metallic hover:text-san-red transition-colors duration-300"
                >
                  +40 770 776 197
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-san-red h-4 w-4 flex-shrink-0" />
                <a
                  href="mailto:contact@sandetailing.ro"
                  className="text-san-metallic hover:text-san-red transition-colors duration-300"
                >
                  contact@sandetailing.ro
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="text-san-red mt-1 h-4 w-4 flex-shrink-0" />
                <span className="text-san-metallic">
                  Strada Saliste 80
                  <br />
                  Suceava, România
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-san-metallic/20 mt-8 border-t pt-8 text-center">
          <p className="text-san-metallic text-sm">
            © {currentYear} San Detailing. Toate drepturile rezervate. |
            <span className="text-san-red"> Precizie în Detalii</span> |
            Suceava, România
          </p>
        </div>
      </div>
    </footer>
  );
}
