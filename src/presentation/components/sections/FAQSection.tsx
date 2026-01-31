'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Accordion } from '../ui/Accordion';
import { Button } from '../ui/Button';
import { faqs } from '@infrastructure/data/mockData';

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  limit?: number;
  showViewAll?: boolean;
  category?: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  title = 'Preguntas Frecuentes',
  subtitle = 'Resolvemos las dudas más comunes sobre pensiones y planes de retiro.',
  limit = 5,
  showViewAll = true,
  category
}) => {
  const router = useRouter();
  
  let displayedFaqs = category 
    ? faqs.filter(faq => faq.category === category)
    : faqs;
  
  displayedFaqs = displayedFaqs.slice(0, limit);

  return (
    <section className="section section-white">
      <div className="container">
        <div className="section-header">
          <span className="section-overline">FAQ</span>
          <h2 className="section-title">{title}</h2>
          <p className="section-description">{subtitle}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion 
            items={displayedFaqs}
            variant="card"
          />
          
          {showViewAll && (
            <div className="text-center mt-8">
              <Button 
                variant="outline"
                href="/faq"
              >
                Ver todas las preguntas
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
