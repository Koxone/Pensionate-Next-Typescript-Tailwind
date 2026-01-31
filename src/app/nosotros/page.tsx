'use client';

import { Layout } from '@presentation/components/layout';
import { Icon, CheckCircleIcon } from '@presentation/components/ui/Icons';
import { StatsSection, TestimonialsSection, CTASection } from '@presentation/components/sections';

export default function NosotrosPage() {
  const team = [
    { name: 'Carlos Mendoza', role: 'Director General', initials: 'CM' },
    { name: 'María Fernández', role: 'Directora de Operaciones', initials: 'MF' },
    { name: 'Roberto García', role: 'Director Financiero', initials: 'RG' },
    { name: 'Ana López', role: 'Directora de Asesoría', initials: 'AL' }
  ];

  const values = [
    { 
      title: 'Transparencia', 
      description: 'Comunicamos de manera clara y honesta. Sin letra pequeña ni sorpresas.',
      icon: 'eye'
    },
    { 
      title: 'Compromiso', 
      description: 'Tu futuro financiero es nuestra prioridad. Trabajamos para que alcances tus metas.',
      icon: 'shield-check'
    },
    { 
      title: 'Experiencia', 
      description: 'Más de 15 años ayudando a mexicanos a planificar su retiro.',
      icon: 'users'
    },
    { 
      title: 'Innovación', 
      description: 'Utilizamos tecnología de punta para ofrecerte el mejor servicio.',
      icon: 'smartphone'
    }
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="hero hero-gradient hero-lg">
        <div className="hero-container">
          <div className="hero-grid">
            <div className="hero-content">
              <span className="hero-overline">Sobre Nosotros</span>
              <h1 className="hero-title">
                Tu aliado experto en pensiones
              </h1>
              <p className="hero-subtitle">
                Somos una empresa mexicana dedicada a ayudar a las personas a planificar 
                y asegurar su futuro financiero. Con más de 15 años de experiencia, 
                hemos ayudado a miles de familias a alcanzar la tranquilidad que merecen.
              </p>
            </div>
            
            <div className="hero-image">
              <div className="card card-elevated p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-primary-50 rounded-lg">
                    <p className="text-3xl font-bold text-primary">+200K</p>
                    <p className="text-body-sm">Clientes</p>
                  </div>
                  <div className="text-center p-4 bg-primary-50 rounded-lg">
                    <p className="text-3xl font-bold text-primary">15+</p>
                    <p className="text-body-sm">Años</p>
                  </div>
                  <div className="text-center p-4 bg-primary-50 rounded-lg">
                    <p className="text-3xl font-bold text-primary">98%</p>
                    <p className="text-body-sm">Satisfacción</p>
                  </div>
                  <div className="text-center p-4 bg-primary-50 rounded-lg">
                    <p className="text-3xl font-bold text-primary">$1.8B</p>
                    <p className="text-body-sm">Administrados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section section-white">
        <div className="container">
          <div className="grid grid-cols-2 gap-12">
            <div>
              <span className="section-overline">Nuestra Misión</span>
              <h2 className="heading-3 mb-4">Democratizar el acceso a la asesoría financiera</h2>
              <p className="text-body-lg">
                Creemos que todos los mexicanos merecen acceso a asesoría financiera de calidad 
                para planificar su retiro. Nuestra misión es hacer que este servicio sea accesible, 
                comprensible y efectivo para todos.
              </p>
            </div>
            <div>
              <span className="section-overline">Nuestra Visión</span>
              <h2 className="heading-3 mb-4">Un México donde todos disfruten su retiro</h2>
              <p className="text-body-lg">
                Visualizamos un país donde cada persona pueda retirarse con dignidad y tranquilidad 
                financiera. Trabajamos cada día para hacer esta visión una realidad, un cliente a la vez.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <span className="section-overline">Valores</span>
            <h2 className="section-title">Lo que nos define</h2>
            <p className="section-description">
              Nuestros valores guían cada decisión que tomamos y cada servicio que ofrecemos.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="card card-elevated p-6 text-center">
                <div className="feature-icon mx-auto">
                  <Icon name={value.icon} size={24} />
                </div>
                <h3 className="heading-5 mb-2">{value.title}</h3>
                <p className="text-body-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section section-white">
        <div className="container">
          <div className="section-header">
            <span className="section-overline">Equipo</span>
            <h2 className="section-title">Conoce a nuestro equipo directivo</h2>
            <p className="section-description">
              Profesionales con amplia experiencia en el sector financiero y de pensiones.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="card card-bordered p-6 text-center">
                <div className="w-20 h-20 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{member.initials}</span>
                </div>
                <h3 className="heading-6 mb-1">{member.name}</h3>
                <p className="text-body-sm text-muted">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <span className="section-overline">Regulación</span>
            <h2 className="section-title">Operamos con los más altos estándares</h2>
            <p className="section-description">
              Estamos regulados por las principales autoridades financieras de México.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-3 gap-6">
              <div className="card card-bordered p-6 text-center">
                <div className="feature-icon mx-auto">
                  <Icon name="shield-check" size={24} />
                </div>
                <h3 className="heading-6 mb-2">CNBV</h3>
                <p className="text-body-xs text-muted">Comisión Nacional Bancaria y de Valores</p>
              </div>
              <div className="card card-bordered p-6 text-center">
                <div className="feature-icon mx-auto">
                  <Icon name="shield-check" size={24} />
                </div>
                <h3 className="heading-6 mb-2">CONSAR</h3>
                <p className="text-body-xs text-muted">Comisión Nacional del Sistema de Ahorro para el Retiro</p>
              </div>
              <div className="card card-bordered p-6 text-center">
                <div className="feature-icon mx-auto">
                  <Icon name="shield-check" size={24} />
                </div>
                <h3 className="heading-6 mb-2">CONDUSEF</h3>
                <p className="text-body-xs text-muted">Comisión Nacional para la Protección de Usuarios</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <CTASection 
        title="¿Quieres conocernos mejor?"
        subtitle="Agenda una cita y descubre cómo podemos ayudarte a planificar tu futuro."
        primaryCta={{ label: 'Agenda tu Cita', href: '/contacto' }}
        secondaryCta={{ label: 'Ver Servicios', href: '/servicios' }}
      />
    </Layout>
  );
}
