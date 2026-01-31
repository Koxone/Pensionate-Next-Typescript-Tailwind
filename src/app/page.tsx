'use client';

import { Layout } from '@presentation/components/layout';
import { 
  HeroSection, 
  ServicesSection, 
  StatsSection, 
  FeaturesSection, 
  ProcessSection,
  TestimonialsSection, 
  FAQSection,
  BlogSection,
  CTASection 
} from '@presentation/components/sections';

export default function HomePage() {
  return (
    <Layout>
      <HeroSection
        title="La decisión inteligente para tu retiro"
        subtitle="Te ayudamos a planificar tu futuro financiero con asesoría experta en pensiones IMSS, ISSSTE y planes de ahorro personalizados."
        primaryCta={{ label: 'Comenzar Ahora', href: '/contacto' }}
        secondaryCta={{ label: 'Conocer Más', href: '/servicios' }}
        features={[
          'Asesoría personalizada sin costo',
          'Más de 15 años de experiencia',
          'Regulados por CNBV'
        ]}
      />
      
      <StatsSection />
      
      <ServicesSection />
      
      <FeaturesSection />
      
      <ProcessSection />
      
      <TestimonialsSection />
      
      <BlogSection limit={3} />
      
      <FAQSection limit={4} />
      
      <CTASection 
        title="Comienza a construir tu futuro hoy"
        subtitle="Agenda una consulta gratuita y descubre cómo podemos ayudarte a alcanzar la jubilación que mereces."
        primaryCta={{ label: 'Agenda tu Cita Gratis', href: '/contacto' }}
        secondaryCta={{ label: 'Calcular mi Pensión', href: '/calculadora' }}
      />
    </Layout>
  );
}
