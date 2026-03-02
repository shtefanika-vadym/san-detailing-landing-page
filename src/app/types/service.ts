export type ServiceBaseType = {
  slug: string;
  title: string;
  icon?: string;
  description?: string;
  seo?: {
    title?: string;
    description?: string;
    keywords?: string;
  };
};

export type ServicePriceType = {
  hatchback: string;
  sedan: string;
  suv: string;
};

export type ServiceWithServicesType = ServiceBaseType & {
  duration?: string;
  services: { name: string; desc?: string; category?: string }[];
  pricing: ServicePriceType;
};

export type ServiceSeparateType = ServiceBaseType & {
  price: string;
};

export type ServicesDataType = {
  exterior: ServiceWithServicesType[];
  interior: ServiceWithServicesType[];
  separate: ServiceSeparateType[];
  combined: Array<
    ServiceBaseType & {
      pricing?: ServicePriceType;
      price?: string;
      services?: { name: string; desc?: string; category?: string }[];
    }
  >;
};
