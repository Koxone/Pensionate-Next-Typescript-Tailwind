'use client';

import React from 'react';
import { processSteps } from '@infrastructure/data/mockData';

interface ProcessSectionProps {
  title?: string;
  subtitle?: string;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  title = 'Cómo funciona',
  subtitle = 'Un proceso simple y transparente para asegurar tu futuro financiero.'
}) => {
  return (
    <section className="section section-gradient">
      <div className="container">
        <div className="section-header">
          <span className="section-overline">Proceso</span>
          <h2 className="section-title">{title}</h2>
          <p className="section-description">{subtitle}</p>
        </div>

        <div className="grid grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={step.step} className="relative">
              {/* Connector line */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200" />
              )}
              
              <div className="relative z-10 text-center">
                <div className="step-icon mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="heading-5 mb-2">{step.title}</h3>
                <p className="text-body-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
