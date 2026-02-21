'use client';

import React from 'react';
import { Button } from '../ui/Button';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  variant?: 'default' | 'dark' | 'gradient';
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = '¿Listo para asegurar tu futuro?',
  subtitle = 'Agenda una consulta gratuita con nuestros expertos y comienza a planificar tu retiro hoy.',
  primaryCta = { label: 'Agenda tu Cita', href: '/contacto' },
  secondaryCta,
  variant = 'gradient',
}) => {
  const sectionClass =
    variant === 'dark'
      ? 'section section-dark'
      : variant === 'gradient'
        ? 'section section-primary'
        : 'section section-white';

  const buttonVariant = variant === 'default' ? 'primary' : 'white';
  const secondaryButtonVariant = variant === 'default' ? 'outline' : 'ghost';

  return (
    <section className={sectionClass}>
      <div className="container">
        <div className="mx-auto max-w-2xl">
          <h2 className={`heading-2 mb-4 text-center ${variant !== 'default' ? 'text-white' : ''}`}>
            {title}
          </h2>
          <p
            className={`text-lead mb-8 text-center ${variant !== 'default' ? 'text-white opacity-90' : ''}`}
          >
            {subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant={buttonVariant} size="lg" href={primaryCta.href}>
              {primaryCta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
