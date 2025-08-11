import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <nav className="absolute top-0 right-0 left-0 z-50 p-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center space-x-3">
          <Image
            src="/logo.png"
            alt="San Detailing Logo"
            width={64}
            height={64}
            className="h-16 w-auto"
            priority
          />
        </div>
        <div className="hidden space-x-8 md:flex">
          <Link
            href="/#despre-noi"
            className="text-san-metallic hover:text-san-red transition-colors"
          >
            Despre Noi
          </Link>
          <Link
            href="/#servicii"
            className="text-san-metallic hover:text-san-red transition-colors"
          >
            Servicii
          </Link>
          <Link
            href="/#galerie"
            className="text-san-metallic hover:text-san-red transition-colors"
          >
            Galerie
          </Link>
          <Link
            href="/#contact"
            className="text-san-metallic hover:text-san-red transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
