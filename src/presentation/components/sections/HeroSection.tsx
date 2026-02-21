'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/Button';
import { CheckCircleIcon } from '../ui/Icons';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  features?: string[];
  variant?: 'default' | 'centered' | 'with-image';
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  features,
  variant = 'default',
}) => {
  const router = useRouter();

  if (variant === 'centered') {
    return (
      <section className="hero hero-gradient hero-lg">
        <div className="hero-container">
          <div className="hero-content-center">
            <span className="hero-overline">Tu futuro financiero comienza hoy</span>
            <h1 className="hero-title hero-title-xl">{title}</h1>
            <p className="hero-subtitle">{subtitle}</p>
            <div className="hero-actions">
              {primaryCta && (
                <Button variant="primary" size="lg" href={primaryCta.href}>
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button variant="outline" size="lg" href={secondaryCta.href}>
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="hero hero-gradient hero-lg">
      <div className="mx-auto flex flex-col items-center">
        <span className="hero-overline">Expertos en Pensiones</span>
        <h1 className="hero-title text-center">{title}</h1>
        <p className="hero-subtitle text-center">{subtitle}</p>

        {features && features.length > 0 && (
          <div className="mb-8 flex flex-col gap-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircleIcon size={20} className="text-primary shrink-0" />
                <span className="text-body">{feature}</span>
              </div>
            ))}
          </div>
        )}

        <div className="hero-actions">
          {primaryCta && (
            <Button variant="primary" size="lg" href={primaryCta.href}>
              {primaryCta.label}
            </Button>
          )}
          {secondaryCta && (
            <Button variant="outline" size="lg" href={secondaryCta.href}>
              {secondaryCta.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
