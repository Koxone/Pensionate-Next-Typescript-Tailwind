'use client';

import { useState } from 'react';
import { Layout } from '@presentation/components/layout';
import { Button } from '@presentation/components/ui/Button';
import { Icon } from '@presentation/components/ui/Icons';
import { FAQSection, CTASection } from '@presentation/components/sections';

export default function CalculadoraPage() {
  const [formData, setFormData] = useState({
    edad: 35,
    salario: 25000,
    semanasCotzadas: 500,
    ahorroActual: 100000,
    aportacionMensual: 2000,
    regimen: 'ley97'
  });

  const [showResults, setShowResults] = useState(false);

  // Mock calculation results
  const mockResults = {
    pensionEstimada: 18500,
    ahorroProyectado: 2850000,
    beneficioFiscal: 24000,
    edadRetiro: 65
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="hero hero-gradient hero-sm">
        <div className="hero-container">
          <div className="hero-content-center">
            <span className="hero-overline">Herramienta Gratuita</span>
            <h1 className="hero-title">Calculadora de Pensión</h1>
            <p className="hero-subtitle">
              Descubre cuánto podrías recibir de pensión y cómo puedes mejorar tu futuro financiero.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="section section-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 gap-8">
              {/* Form */}
              <div className="card card-bordered p-8">
                <h2 className="heading-4 mb-6">Ingresa tus datos</h2>
                <form onSubmit={handleCalculate}>
                  <div className="form-group">
                    <label className="form-label">Edad actual</label>
                    <input
                      type="number"
                      name="edad"
                      value={formData.edad}
                      onChange={handleInputChange}
                      className="form-input"
                      min="18"
                      max="64"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Salario mensual (MXN)</label>
                    <input
                      type="number"
                      name="salario"
                      value={formData.salario}
                      onChange={handleInputChange}
                      className="form-input"
                      min="0"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Semanas cotizadas</label>
                    <input
                      type="number"
                      name="semanasCotzadas"
                      value={formData.semanasCotzadas}
                      onChange={handleInputChange}
                      className="form-input"
                      min="0"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Ahorro actual en AFORE (MXN)</label>
                    <input
                      type="number"
                      name="ahorroActual"
                      value={formData.ahorroActual}
                      onChange={handleInputChange}
                      className="form-input"
                      min="0"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Aportación voluntaria mensual (MXN)</label>
                    <input
                      type="number"
                      name="aportacionMensual"
                      value={formData.aportacionMensual}
                      onChange={handleInputChange}
                      className="form-input"
                      min="0"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Régimen de pensión</label>
                    <select
                      name="regimen"
                      value={formData.regimen}
                      onChange={handleInputChange}
                      className="form-input form-select"
                    >
                      <option value="ley73">Ley 73 (antes de julio 1997)</option>
                      <option value="ley97">Ley 97 (después de julio 1997)</option>
                      <option value="issste">ISSSTE</option>
                    </select>
                  </div>

                  <Button type="submit" variant="primary" fullWidth size="lg">
                    Calcular mi Pensión
                  </Button>
                </form>
              </div>

              {/* Results */}
              <div>
                {showResults ? (
                  <div className="card card-elevated p-8 bg-primary-50">
                    <h2 className="heading-4 mb-6 text-primary">Resultados Estimados</h2>
                    
                    <div className="space-y-6">
                      <div className="card card-white p-4">
                        <p className="text-body-sm text-muted mb-1">Pensión mensual estimada</p>
                        <p className="text-3xl font-bold text-primary">
                          ${mockResults.pensionEstimada.toLocaleString()} MXN
                        </p>
                      </div>

                      <div className="card card-white p-4">
                        <p className="text-body-sm text-muted mb-1">Ahorro proyectado al retiro</p>
                        <p className="text-2xl font-bold text-dark">
                          ${mockResults.ahorroProyectado.toLocaleString()} MXN
                        </p>
                      </div>

                      <div className="card card-white p-4">
                        <p className="text-body-sm text-muted mb-1">Beneficio fiscal anual</p>
                        <p className="text-2xl font-bold text-success">
                          ${mockResults.beneficioFiscal.toLocaleString()} MXN
                        </p>
                      </div>

                      <div className="card card-white p-4">
                        <p className="text-body-sm text-muted mb-1">Edad de retiro</p>
                        <p className="text-2xl font-bold text-dark">
                          {mockResults.edadRetiro} años
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-white rounded-lg border border-primary-200">
                      <p className="text-body-sm text-muted mb-2">
                        <strong>Nota:</strong> Este cálculo es una estimación basada en los datos proporcionados. 
                        Para un análisis más preciso, agenda una consulta con nuestros asesores.
                      </p>
                    </div>

                    <Button href="/contacto" variant="primary" fullWidth className="mt-6">
                      Hablar con un Asesor
                    </Button>
                  </div>
                ) : (
                  <div className="card card-bordered p-8 text-center">
                    <div className="feature-icon feature-icon-lg mx-auto mb-4">
                      <Icon name="calculator" size={32} />
                    </div>
                    <h3 className="heading-5 mb-2">Calcula tu pensión</h3>
                    <p className="text-body-sm text-muted">
                      Completa el formulario con tus datos para obtener una estimación 
                      de tu pensión y ahorro proyectado.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">¿Cómo se calcula tu pensión?</h2>
            <p className="section-description">
              El cálculo de tu pensión depende de varios factores según tu régimen.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="card card-elevated p-6">
              <h3 className="heading-5 mb-4">Ley 73 (IMSS)</h3>
              <p className="text-body-sm mb-4">
                Si comenzaste a cotizar antes del 1 de julio de 1997, tu pensión se calcula 
                con base en el promedio de tu salario de los últimos 5 años y tus semanas cotizadas.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-body-sm">
                  <Icon name="check" size={16} className="text-success mt-1" />
                  <span>Mínimo 500 semanas cotizadas</span>
                </li>
                <li className="flex items-start gap-2 text-body-sm">
                  <Icon name="check" size={16} className="text-success mt-1" />
                  <span>Pensión basada en salario promedio</span>
                </li>
                <li className="flex items-start gap-2 text-body-sm">
                  <Icon name="check" size={16} className="text-success mt-1" />
                  <span>Posibilidad de modalidad 40</span>
                </li>
              </ul>
            </div>

            <div className="card card-elevated p-6">
              <h3 className="heading-5 mb-4">Ley 97 (IMSS)</h3>
              <p className="text-body-sm mb-4">
                Si comenzaste a cotizar después del 1 de julio de 1997, tu pensión depende 
                del saldo acumulado en tu cuenta individual de AFORE.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-body-sm">
                  <Icon name="check" size={16} className="text-success mt-1" />
                  <span>Mínimo 750-1000 semanas cotizadas</span>
                </li>
                <li className="flex items-start gap-2 text-body-sm">
                  <Icon name="check" size={16} className="text-success mt-1" />
                  <span>Pensión basada en ahorro acumulado</span>
                </li>
                <li className="flex items-start gap-2 text-body-sm">
                  <Icon name="check" size={16} className="text-success mt-1" />
                  <span>Aportaciones voluntarias recomendadas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQSection 
        title="Preguntas sobre el cálculo de pensión"
        category="imss"
        limit={4}
      />

      <CTASection 
        title="¿Quieres un cálculo más preciso?"
        subtitle="Nuestros asesores pueden analizar tu caso específico y darte una estimación más detallada."
        primaryCta={{ label: 'Agenda tu Consulta Gratis', href: '/contacto' }}
      />
    </Layout>
  );
}
