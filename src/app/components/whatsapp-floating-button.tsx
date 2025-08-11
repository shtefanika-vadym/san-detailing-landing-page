import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppFloatingButton() {
  return (
    <Link
      href="https://wa.me/40770776197?text=Bună!%20Sunt%20interesat%20de%20serviciile%20San%20Detailing."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactează pe WhatsApp"
      className="fixed right-6 bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg transition-transform hover:scale-110"
    >
      <FaWhatsapp className="h-8 w-8 text-white" />
    </Link>
  );
}
