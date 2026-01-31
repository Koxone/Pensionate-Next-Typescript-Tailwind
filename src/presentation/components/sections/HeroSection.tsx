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
  variant = 'default'
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
      <div className="hero-container">
        <div className="hero-grid">
          <div className="hero-content">
            <span className="hero-overline">Expertos en Pensiones</span>
            <h1 className="hero-title">{title}</h1>
            <p className="hero-subtitle">{subtitle}</p>
            
            {features && features.length > 0 && (
              <div className="flex flex-col gap-3 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircleIcon size={20} className="text-primary flex-shrink-0" />
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
          
          <div className="hero-image">
            <div className="relative">
              {/* Decorative shapes */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary-100 rounded-full opacity-50 blur-3xl" />
              <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-secondary rounded-full opacity-30 blur-2xl" />
              
              {/* Main illustration */}
              <div className="relative bg-white rounded-2xl shadow-xl p-8 z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-body-sm text-muted">Tu pensión estimada</p>
                    <p className="text-2xl font-bold text-dark">$25,840 MXN</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-body-sm">Ahorro acumulado</span>
                    <span className="font-semibold">$1,250,000</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }} />
                  </div>
                  <div className="flex justify-between items-center text-body-xs text-muted">
                    <span>Meta: $1,800,000</span>
                    <span>75% completado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
