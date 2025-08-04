import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "San Detailing - Precizie în Detalii | Suceava",
  description:
    "Servicii premium de detailing auto în Suceava. Polish profesional, protecție ceramică, corecția lacului și detailing interior.",
  keywords:
    "detailing auto Suceava, polish auto, protecție ceramică, corecția lacului, detailing interior, detailing exterior, pachet detailing bronze, pachet detailing silver, pachet detailing gold, servicii detailing, detailing profesional, detailing Suceava, polish faruri, chrome delete, tratament hidrofob sticlă, pachet interior exterior, detailing compartiment motor, protecție ceramică Carlexx, detailing premium, servicii auto Suceava",
  authors: [{ name: "San Detailing" }],
  robots: "index, follow",
  other: {
    "geo.region": "RO-SV",
    "geo.placename": "Suceava",
    "geo.position": "47.6333;26.25",
    ICBM: "47.6333, 26.25",
    subject:
      "Detailing auto Suceava, servicii detailing, polish, ceramică, interior, exterior, pachete detailing, servicii auto, protecție ceramică, detailing profesional, detailing Suceava",
    rating: "General",
    city: "Suceava",
    service:
      "Detailing auto, Polish, Protecție ceramică, Detailing interior, Detailing exterior, Pachete detailing, Servicii auto",
  },
  openGraph: {
    title: "San Detailing - Precizie în Detalii | Suceava",
    description:
      "Servicii premium de detailing auto în Suceava. Polish profesional, protecție ceramică, corecția lacului și detailing interior.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ro">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
