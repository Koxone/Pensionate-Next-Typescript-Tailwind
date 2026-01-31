'use client';

import { Layout } from '@presentation/components/layout';
import { HeroSection, ServicesSection, CTASection } from '@presentation/components/sections';

export default function ServiciosPage() {
  return (
    <Layout>
      <HeroSection
        title="Servicios de Asesoría en Pensiones"
        subtitle="Ofrecemos una gama completa de servicios para ayudarte en cada etapa de tu planificación de retiro."
        variant="centered"
        primaryCta={{ label: 'Agenda tu Cita', href: '/contacto' }}
      />
      
      <ServicesSection 
        showAll={true}
        title="Todos nuestros servicios"
        subtitle="Encuentra el servicio que mejor se adapte a tus necesidades de planificación para el retiro."
      />
      
      <CTASection 
        title="¿No sabes por dónde empezar?"
        subtitle="Nuestros asesores te ayudarán a identificar el servicio ideal para tu situación."
        primaryCta={{ label: 'Hablar con un Asesor', href: '/contacto' }}
      />
    </Layout>
  );
}
