'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ServiceCard } from '../ui/Card';
import { services } from '@infrastructure/data/mockData';

interface ServicesSectionProps {
  title?: string;
  subtitle?: string;
  showAll?: boolean;
  limit?: number;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  title = 'Nuestros Servicios',
  subtitle = 'Te acompañamos en cada paso de tu camino hacia una jubilación tranquila.',
  showAll = false,
  limit = 6
}) => {
  const router = useRouter();
  const displayedServices = showAll ? services : services.slice(0, limit);

  const handleServiceClick = (slug: string) => {
    router.push(`/servicios/${slug}`);
  };

  return (
    <section className="section section-light">
      <div className="container">
        <div className="section-header">
          <span className="section-overline">Servicios</span>
          <h2 className="section-title">{title}</h2>
          <p className="section-description">{subtitle}</p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {displayedServices.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              onClick={() => handleServiceClick(service.slug)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
