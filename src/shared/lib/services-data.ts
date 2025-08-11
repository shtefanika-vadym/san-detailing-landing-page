import path from "path";
import { promises as fs } from "fs";
import { SERVICES_ICON_MAP } from "@/app/const/icon-map";
import { Star } from "lucide-react";

export async function getServiceBySlug(slug: string) {
  const filePath = path.join(process.cwd(), "src/data/services.json");
  const data = await fs.readFile(filePath, "utf-8");
  const services = JSON.parse(data);

  // Caută în toate categoriile
  for (const category of Object.values(services))
    if (Array.isArray(category)) {
      const found = category.find((srv) => srv.slug === slug);
      if (found) return found;
    }

  return null;
}

export async function getAllServiceSlugs() {
  const filePath = path.join(process.cwd(), "src/data/services.json");
  const data = await fs.readFile(filePath, "utf-8");
  const services = JSON.parse(data);
  const slugs: string[] = [];
  for (const category of Object.values(services))
    if (Array.isArray(category))
      for (const srv of category) if (srv.slug) slugs.push(srv.slug);

  return slugs;
}

export function getServiceIcon(iconName: string | undefined) {
  if (!iconName) return Star;
  return SERVICES_ICON_MAP[iconName] || Star;
}
