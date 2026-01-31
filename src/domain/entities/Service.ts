// Domain Entity: Servicio

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  slug: string;
}

export interface ServiceDetails extends Service {
  longDescription: string;
  features: string[];
  process: ProcessStep[];
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}
