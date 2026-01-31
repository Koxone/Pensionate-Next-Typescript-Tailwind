'use client';

import React from 'react';
import { TestimonialCard } from '../ui/Card';
import { testimonials } from '@infrastructure/data/mockData';

interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  title = 'Lo que dicen nuestros clientes',
  subtitle = 'Miles de personas ya confían en nosotros para planificar su futuro financiero.'
}) => {
  return (
    <section className="section section-light">
      <div className="container">
        <div className="section-header">
          <span className="section-overline">Testimonios</span>
          <h2 className="section-title">{title}</h2>
          <p className="section-description">{subtitle}</p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              content={testimonial.content}
              name={testimonial.name}
              role={testimonial.role}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
