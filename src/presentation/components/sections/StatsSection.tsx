'use client';

import React from 'react';
import { StatCard } from '../ui/Card';
import { statistics } from '@infrastructure/data/mockData';

interface StatsSectionProps {
  title?: string;
  subtitle?: string;
  variant?: 'default' | 'dark' | 'primary';
}

export const StatsSection: React.FC<StatsSectionProps> = ({
  title = 'Números que nos respaldan',
  subtitle = 'La confianza de miles de mexicanos que ya aseguraron su futuro con nosotros.',
  variant = 'default'
}) => {
  const sectionClass = variant === 'dark' 
    ? 'section section-dark' 
    : variant === 'primary' 
      ? 'section section-primary' 
      : 'section section-white';

  return (
    <section className={sectionClass}>
      <div className="container">
        {title && (
          <div className="section-header">
            <h2 className="section-title">{title}</h2>
            {subtitle && <p className="section-description">{subtitle}</p>}
          </div>
        )}

        <div className="grid grid-cols-4 gap-6">
          {statistics.map((stat) => (
            <StatCard
              key={stat.id}
              value={stat.value}
              label={stat.label}
              prefix={stat.prefix}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
