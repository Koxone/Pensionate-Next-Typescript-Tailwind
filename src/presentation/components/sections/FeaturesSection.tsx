'use client';

import React from 'react';
import { FeatureCard } from '../ui/Card';
import { features } from '@infrastructure/data/mockData';

interface FeaturesSectionProps {
  title?: string;
  subtitle?: string;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  title = '¿Por qué elegirnos?',
  subtitle = 'Combinamos experiencia, tecnología y un servicio personalizado para ayudarte a alcanzar tus metas de retiro.'
}) => {
  return (
    <section className="section section-white">
      <div className="container">
        <div className="section-header">
          <span className="section-overline">Ventajas</span>
          <h2 className="section-title">{title}</h2>
          <p className="section-description">{subtitle}</p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
