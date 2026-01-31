'use client';

import { useParams, useRouter } from 'next/navigation';
import { Layout } from '@presentation/components/layout';
import { Button } from '@presentation/components/ui/Button';
import { Icon, CheckCircleIcon } from '@presentation/components/ui/Icons';
import { FAQSection, CTASection } from '@presentation/components/sections';
import { services } from '@infrastructure/data/mockData';

// Mock detailed service data
const serviceDetails: Record<string, {
  longDescription: string;
  features: string[];
  process: { step: number; title: string; description: string }[];
}> = {
  'asesoria-imss': {
    longDescription: 'Nuestra asesoría en pensiones IMSS te ayuda a entender completamente tu régimen de pensión, ya sea Ley 73 o Ley 97. Analizamos tu historial de cotizaciones, calculamos tu pensión estimada y te guiamos en el proceso de trámite para que obtengas el mejor beneficio posible.',
    features: [
      'Análisis completo de semanas cotizadas',
      'Cálculo de pensión bajo Ley 73 y Ley 97',
      'Identificación del régimen más conveniente',
      'Asesoría sobre modalidad 40',
      'Acompañamiento en trámites',
      'Revisión de derechos de beneficiarios'
    ],
    process: [
      { step: 1, title: 'Consulta inicial', description: 'Evaluamos tu situación actual y recopilamos información de tu historial laboral.' },
      { step: 2, title: 'Análisis detallado', description: 'Revisamos tus semanas cotizadas y calculamos tu pensión bajo diferentes escenarios.' },
      { step: 3, title: 'Plan de acción', description: 'Te presentamos las opciones disponibles y recomendamos la mejor estrategia.' },
      { step: 4, title: 'Acompañamiento', description: 'Te guiamos en cada paso del proceso hasta obtener tu pensión.' }
    ]
  },
  'asesoria-issste': {
    longDescription: 'Especialistas en el régimen de pensiones del ISSSTE, te ayudamos a navegar las complejidades del décimo transitorio y el sistema de cuentas individuales. Nuestro equipo tiene amplia experiencia en casos de trabajadores del estado.',
    features: [
      'Análisis del régimen décimo transitorio',
      'Evaluación de cuentas individuales',
      'Cálculo de pensión ISSSTE',
      'Asesoría sobre bonos de pensión',
      'Trámites ante el instituto',
      'Orientación sobre derechos adquiridos'
    ],
    process: [
      { step: 1, title: 'Evaluación inicial', description: 'Determinamos tu régimen y analizamos tu historial de cotizaciones.' },
      { step: 2, title: 'Cálculo de beneficios', description: 'Calculamos tu pensión bajo el régimen que te corresponde.' },
      { step: 3, title: 'Estrategia personalizada', description: 'Diseñamos un plan para maximizar tus beneficios de pensión.' },
      { step: 4, title: 'Gestión de trámites', description: 'Te acompañamos en todo el proceso ante el ISSSTE.' }
    ]
  },
  'plan-retiro': {
    longDescription: 'Nuestro Plan Personal de Retiro te permite ahorrar para tu futuro mientras disfrutas de beneficios fiscales inmediatos. Diseñamos una estrategia de inversión personalizada según tu perfil de riesgo y metas de retiro.',
    features: [
      'Deducción fiscal hasta $189,222 MXN',
      'Rendimientos competitivos',
      'Diversificación de inversiones',
      'Sin comisiones ocultas',
      'App móvil para seguimiento',
      'Asesoría financiera continua'
    ],
    process: [
      { step: 1, title: 'Perfil de inversión', description: 'Evaluamos tu tolerancia al riesgo y objetivos financieros.' },
      { step: 2, title: 'Diseño del plan', description: 'Creamos una estrategia de ahorro e inversión personalizada.' },
      { step: 3, title: 'Apertura de cuenta', description: 'Proceso simple y 100% digital para comenzar a invertir.' },
      { step: 4, title: 'Seguimiento continuo', description: 'Monitoreo constante y ajustes según tus necesidades.' }
    ]
  },
  'gestion-tramites': {
    longDescription: 'Nos encargamos de todos los trámites necesarios para tu pensión. Desde la recopilación de documentos hasta la presentación ante las instituciones, manejamos todo el proceso para que tú no tengas que preocuparte.',
    features: [
      'Recopilación de documentación',
      'Presentación ante IMSS/ISSSTE',
      'Seguimiento de expedientes',
      'Corrección de inconsistencias',
      'Gestión de citas',
      'Resolución de problemas'
    ],
    process: [
      { step: 1, title: 'Revisión documental', description: 'Verificamos que tengas todos los documentos necesarios.' },
      { step: 2, title: 'Preparación', description: 'Organizamos y preparamos tu expediente completo.' },
      { step: 3, title: 'Presentación', description: 'Realizamos los trámites ante las instituciones correspondientes.' },
      { step: 4, title: 'Seguimiento', description: 'Monitoreamos el avance hasta la resolución final.' }
    ]
  },
  'calculo-pension': {
    longDescription: 'Utilizamos herramientas especializadas y nuestra experiencia para calcular con precisión el monto de tu pensión. Consideramos todos los factores relevantes para darte una estimación confiable.',
    features: [
      'Cálculo bajo diferentes escenarios',
      'Análisis de semanas cotizadas',
      'Proyección de pensión futura',
      'Comparativa de regímenes',
      'Informe detallado',
      'Recomendaciones personalizadas'
    ],
    process: [
      { step: 1, title: 'Recopilación de datos', description: 'Obtenemos tu información laboral y de cotizaciones.' },
      { step: 2, title: 'Análisis', description: 'Procesamos los datos con nuestras herramientas especializadas.' },
      { step: 3, title: 'Cálculo', description: 'Determinamos el monto de tu pensión bajo diferentes escenarios.' },
      { step: 4, title: 'Presentación', description: 'Te entregamos un informe completo con recomendaciones.' }
    ]
  },
  'estrategias-inversion': {
    longDescription: 'Diseñamos estrategias de inversión personalizadas para complementar tu pensión. Nuestro equipo de expertos te ayuda a hacer crecer tu patrimonio de manera segura y eficiente.',
    features: [
      'Análisis de perfil de riesgo',
      'Diversificación de portafolio',
      'Acceso a fondos exclusivos',
      'Reportes mensuales',
      'Rebalanceo automático',
      'Asesoría fiscal incluida'
    ],
    process: [
      { step: 1, title: 'Evaluación financiera', description: 'Analizamos tu situación actual y objetivos de inversión.' },
      { step: 2, title: 'Diseño de estrategia', description: 'Creamos un portafolio diversificado según tu perfil.' },
      { step: 3, title: 'Implementación', description: 'Ejecutamos la estrategia con los mejores instrumentos.' },
      { step: 4, title: 'Monitoreo', description: 'Seguimiento continuo y ajustes según el mercado.' }
    ]
  }
};

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  
  const service = services.find(s => s.slug === slug);
  const details = serviceDetails[slug];
  
  if (!service || !details) {
    return (
      <Layout>
        <section className="section section-white min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="heading-2 mb-4">Servicio no encontrado</h1>
            <p className="text-body mb-6">El servicio que buscas no existe.</p>
            <Button href="/servicios">Ver todos los servicios</Button>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="hero hero-primary hero-sm">
        <div className="hero-container">
          <div className="max-w-3xl">
            <button 
              onClick={() => router.push('/servicios')}
              className="text-white opacity-80 hover:opacity-100 mb-4 flex items-center gap-2"
            >
              ← Volver a servicios
            </button>
            <h1 className="hero-title text-white">{service.title}</h1>
            <p className="hero-subtitle text-white opacity-90">{service.description}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section section-white">
        <div className="container">
          <div className="two-column">
            <div>
              <h2 className="heading-3 mb-4">Acerca de este servicio</h2>
              <p className="text-body-lg mb-8">{details.longDescription}</p>
              
              <h3 className="heading-4 mb-4">¿Qué incluye?</h3>
              <div className="space-y-3 mb-8">
                {details.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircleIcon size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-body">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button href="/contacto" size="lg">
                Solicitar este servicio
              </Button>
            </div>
            
            <div>
              <div className="card card-bordered p-8">
                <h3 className="heading-4 mb-6">Nuestro proceso</h3>
                <div className="space-y-6">
                  {details.process.map((step) => (
                    <div key={step.step} className="flex gap-4">
                      <div className="step-icon flex-shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="heading-6 mb-1">{step.title}</h4>
                        <p className="text-body-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection 
        title="Preguntas sobre este servicio"
        limit={3}
        showViewAll={true}
      />

      <CTASection 
        title="¿Tienes dudas sobre este servicio?"
        subtitle="Nuestros asesores están listos para ayudarte a resolver cualquier pregunta."
        primaryCta={{ label: 'Contactar Asesor', href: '/contacto' }}
      />
    </Layout>
  );
}
