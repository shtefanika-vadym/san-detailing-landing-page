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

export type ServiceWithServicesType = ServiceBaseType & {
  duration?: string;
  services: { name: string; desc?: string }[];
  pricing: {
    hatchback: string;
    sedan: string;
    suv: string;
  };
};

export type ServiceSeparateType = ServiceBaseType & {
  price: string;
};

export type ServicesDataType = {
  exterior: ServiceWithServicesType[];
  interior: ServiceWithServicesType[];
  separate: ServiceSeparateType[];
};
