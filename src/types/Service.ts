export interface ServiceCategory {
  name: string;
}

export interface Service {
  name: string;
  category: ServiceCategory;
  description: string;
  price: number;
}
