import { ForwardRefExoticComponent, RefAttributes } from "react";
import {
  Award,
  Car,
  Crown,
  Droplets,
  LucideProps,
  Shield,
  Sparkles,
  Star,
  Paintbrush,
} from "lucide-react";

export const SERVICES_ICON_MAP: Record<
  string,
  ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >
> = {
  Star,
  Crown,
  Award,
  Car,
  Sparkles,
  Shield,
  Paintbrush,
  Droplets,
};
