'use client';

import { useState } from 'react';
import { Layout } from '@presentation/components/layout';
import { Accordion } from '@presentation/components/ui/Accordion';
import { CTASection } from '@presentation/components/sections';
import { faqs } from '@infrastructure/data/mockData';

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Todas' },
    { id: 'general', name: 'General' },
    { id: 'imss', name: 'IMSS' },
    { id: 'issste', name: 'ISSSTE' },
    { id: 'fiscal', name: 'Fiscal' },
    { id: 'inversion', name: 'Inversión' },
    { id: 'retiros', name: 'Retiros' }
  ];

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="hero hero-gradient hero-sm">
        <div className="hero-container">
          <div className="hero-content-center">
            <span className="hero-overline">Ayuda</span>
            <h1 className="hero-title">Preguntas Frecuentes</h1>
            <p className="hero-subtitle">
              Encuentra respuestas a las dudas más comunes sobre pensiones, ahorro y nuestros servicios.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category.id
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* FAQ List */}
            <Accordion 
              items={filteredFaqs}
              variant="card"
              allowMultiple
            />

            {filteredFaqs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-body text-muted">
                  No hay preguntas en esta categoría.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section section-light">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="heading-3 mb-4">¿No encontraste lo que buscabas?</h2>
            <p className="text-body-lg mb-6">
              Nuestro equipo de asesores está listo para resolver cualquier duda que tengas.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contacto" className="btn btn-primary">
                Contactar un Asesor
              </a>
              <a href={`tel:${contactInfo.phone}`} className="btn btn-outline">
                Llamar Ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="¿Listo para asegurar tu futuro?"
        subtitle="Agenda una consulta gratuita y comienza a planificar tu retiro."
        primaryCta={{ label: 'Agenda tu Cita', href: '/contacto' }}
      />
    </Layout>
  );
}

const contactInfo = {
  phone: '55 1234 5678'
};
