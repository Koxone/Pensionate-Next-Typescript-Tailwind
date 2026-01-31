'use client';

import { Layout } from '@presentation/components/layout';
import { Button } from '@presentation/components/ui/Button';
import { PricingCard } from '@presentation/components/ui/Card';
import { CheckCircleIcon, Icon } from '@presentation/components/ui/Icons';
import { FAQSection, CTASection, TestimonialsSection } from '@presentation/components/sections';
import { pensionPlans } from '@infrastructure/data/mockData';
import { useRouter } from 'next/navigation';

export default function PlanRetiroPage() {
  const router = useRouter();

  const handlePlanSelect = () => {
    router.push('/contacto');
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="hero hero-gradient hero-lg">
        <div className="hero-container">
          <div className="hero-grid">
            <div className="hero-content">
              <span className="hero-overline">Plan Personal de Retiro</span>
              <h1 className="hero-title">
                Ahorra para tu futuro y deduce impuestos
              </h1>
              <p className="hero-subtitle">
                Con nuestro Plan Personal de Retiro puedes deducir hasta $189,222 MXN anuales 
                mientras construyes el patrimonio que necesitas para tu jubilación.
              </p>
              <div className="hero-actions">
                <Button variant="primary" size="lg" href="/contacto">
                  Comenzar Ahora
                </Button>
                <Button variant="outline" size="lg" href="/calculadora">
                  Calcular mi Ahorro
                </Button>
              </div>
            </div>
            
            <div className="hero-image">
              <div className="card card-elevated p-6">
                <div className="text-center mb-6">
                  <p className="text-body-sm text-muted mb-2">Beneficio fiscal anual</p>
                  <p className="text-4xl font-bold text-primary">$189,222</p>
                  <p className="text-body-sm text-muted">MXN máximo deducible</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircleIcon size={20} className="text-success" />
                    <span className="text-body-sm">Deducción inmediata de impuestos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircleIcon size={20} className="text-success" />
                    <span className="text-body-sm">Rendimientos competitivos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircleIcon size={20} className="text-success" />
                    <span className="text-body-sm">Sin comisiones ocultas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircleIcon size={20} className="text-success" />
                    <span className="text-body-sm">Regulado por CNBV</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section section-white">
        <div className="container">
          <div className="section-header">
            <span className="section-overline">Beneficios</span>
            <h2 className="section-title">¿Por qué elegir nuestro PPR?</h2>
            <p className="section-description">
              Un Plan Personal de Retiro diseñado para maximizar tus beneficios fiscales 
              mientras construyes un futuro financiero sólido.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="feature-icon feature-icon-lg mx-auto">
                <Icon name="shield-check" size={32} />
              </div>
              <h3 className="heading-5 mb-2">Seguridad Garantizada</h3>
              <p className="text-body-sm">
                Operamos bajo la supervisión de la CNBV, garantizando la seguridad de tus inversiones.
              </p>
            </div>
            <div className="text-center">
              <div className="feature-icon feature-icon-lg mx-auto">
                <Icon name="chart" size={32} />
              </div>
              <h3 className="heading-5 mb-2">Rendimientos Competitivos</h3>
              <p className="text-body-sm">
                Estrategias de inversión diversificadas para maximizar el crecimiento de tu ahorro.
              </p>
            </div>
            <div className="text-center">
              <div className="feature-icon feature-icon-lg mx-auto">
                <Icon name="calculator" size={32} />
              </div>
              <h3 className="heading-5 mb-2">Beneficio Fiscal</h3>
              <p className="text-body-sm">
                Deduce hasta el 10% de tus ingresos anuales o 5 UMAs, lo que resulte menor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <span className="section-overline">Planes</span>
            <h2 className="section-title">Elige el plan ideal para ti</h2>
            <p className="section-description">
              Tenemos opciones para diferentes perfiles de ahorro e inversión.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {pensionPlans.map((plan) => (
              <PricingCard
                key={plan.id}
                name={plan.name}
                description={plan.description}
                price={`$${plan.minContribution.toLocaleString()}`}
                period="mes mínimo"
                features={plan.benefits}
                isPopular={plan.isPopular}
                onSelect={handlePlanSelect}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section section-white">
        <div className="container">
          <div className="section-header">
            <span className="section-overline">Proceso</span>
            <h2 className="section-title">¿Cómo funciona?</h2>
            <p className="section-description">
              Comenzar es más fácil de lo que piensas. En 4 simples pasos estarás ahorrando para tu futuro.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {[
              { step: 1, title: 'Regístrate', desc: 'Crea tu cuenta en minutos con un proceso 100% digital.' },
              { step: 2, title: 'Define tu perfil', desc: 'Respondemos algunas preguntas para conocer tus objetivos.' },
              { step: 3, title: 'Elige tu plan', desc: 'Selecciona el monto y frecuencia de tus aportaciones.' },
              { step: 4, title: 'Comienza a ahorrar', desc: 'Tus aportaciones se invierten automáticamente.' }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="step-icon mx-auto mb-4">{item.step}</div>
                <h3 className="heading-6 mb-2">{item.title}</h3>
                <p className="text-body-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection 
        title="Lo que dicen nuestros ahorradores"
        subtitle="Miles de personas ya están construyendo su futuro con nosotros."
      />

      <FAQSection 
        title="Preguntas sobre el Plan de Retiro"
        category="inversion"
        limit={4}
      />

      <CTASection 
        title="Empieza a ahorrar hoy"
        subtitle="Mientras más pronto comiences, más grande será tu patrimonio al momento de tu retiro."
        primaryCta={{ label: 'Abrir mi Cuenta', href: '/contacto' }}
        secondaryCta={{ label: 'Calcular mi Ahorro', href: '/calculadora' }}
      />
    </Layout>
  );
}
