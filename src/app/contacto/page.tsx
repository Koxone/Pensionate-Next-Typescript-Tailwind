'use client';

import { useState } from 'react';
import { Layout } from '@presentation/components/layout';
import { Button } from '@presentation/components/ui/Button';
import { Icon, PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from '@presentation/components/ui/Icons';
import { FAQSection } from '@presentation/components/sections';
import { contactInfo } from '@infrastructure/data/mockData';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    setSubmitted(true);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="hero hero-gradient hero-sm">
        <div className="hero-container">
          <div className="hero-content-center">
            <span className="hero-overline">Contacto</span>
            <h1 className="hero-title">Estamos aquí para ayudarte</h1>
            <p className="hero-subtitle">
              Agenda una consulta gratuita o envíanos tus dudas. Nuestro equipo te responderá a la brevedad.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section section-white">
        <div className="container">
          <div className="grid grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="heading-3 mb-6">Envíanos un mensaje</h2>
              
              {submitted ? (
                <div className="card card-elevated p-8 text-center">
                  <div className="feature-icon feature-icon-lg mx-auto mb-4 bg-success-light">
                    <Icon name="check-circle" size={32} className="text-success" />
                  </div>
                  <h3 className="heading-4 mb-2">¡Mensaje enviado!</h3>
                  <p className="text-body mb-6">
                    Gracias por contactarnos. Un asesor se pondrá en contacto contigo 
                    en las próximas 24 horas hábiles.
                  </p>
                  <Button 
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                  >
                    Enviar otro mensaje
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="form-group">
                    <label className="form-label form-label-required">Nombre completo</label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>

                  <div className="form-row form-row-2">
                    <div className="form-group">
                      <label className="form-label form-label-required">Correo electrónico</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="tu@email.com"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Teléfono</label>
                      <input
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="55 1234 5678"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Servicio de interés</label>
                    <select
                      name="servicio"
                      value={formData.servicio}
                      onChange={handleInputChange}
                      className="form-input form-select"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="asesoria-imss">Asesoría en Pensiones IMSS</option>
                      <option value="asesoria-issste">Asesoría en Pensiones ISSSTE</option>
                      <option value="plan-retiro">Plan Personal de Retiro</option>
                      <option value="gestion-tramites">Gestión de Trámites</option>
                      <option value="calculo-pension">Cálculo de Pensión</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label form-label-required">Mensaje</label>
                    <textarea
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      className="form-input form-textarea"
                      placeholder="Cuéntanos cómo podemos ayudarte..."
                      rows={5}
                      required
                    />
                  </div>

                  <div className="form-check">
                    <input
                      type="checkbox"
                      id="privacidad"
                      className="form-check-input"
                      required
                    />
                    <label htmlFor="privacidad" className="form-check-label">
                      Acepto el <a href="/privacidad" className="text-link">Aviso de Privacidad</a> y 
                      autorizo el tratamiento de mis datos personales.
                    </label>
                  </div>

                  <Button type="submit" variant="primary" size="lg" fullWidth>
                    Enviar Mensaje
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="heading-3 mb-6">Información de contacto</h2>
              
              <div className="space-y-6 mb-8">
                <div className="card card-bordered p-5 flex items-start gap-4">
                  <div className="icon-container icon-container-md icon-container-primary">
                    <PhoneIcon size={20} />
                  </div>
                  <div>
                    <h3 className="heading-6 mb-1">Teléfono</h3>
                    <p className="text-body">{contactInfo.phone}</p>
                    <p className="text-body-sm text-muted">Llamadas y WhatsApp</p>
                  </div>
                </div>

                <div className="card card-bordered p-5 flex items-start gap-4">
                  <div className="icon-container icon-container-md icon-container-primary">
                    <MailIcon size={20} />
                  </div>
                  <div>
                    <h3 className="heading-6 mb-1">Correo electrónico</h3>
                    <p className="text-body">{contactInfo.email}</p>
                    <p className="text-body-sm text-muted">Respuesta en 24 horas</p>
                  </div>
                </div>

                <div className="card card-bordered p-5 flex items-start gap-4">
                  <div className="icon-container icon-container-md icon-container-primary">
                    <MapPinIcon size={20} />
                  </div>
                  <div>
                    <h3 className="heading-6 mb-1">Oficinas</h3>
                    <p className="text-body">{contactInfo.address}</p>
                    <p className="text-body-sm text-muted">Ciudad de México</p>
                  </div>
                </div>

                <div className="card card-bordered p-5 flex items-start gap-4">
                  <div className="icon-container icon-container-md icon-container-primary">
                    <ClockIcon size={20} />
                  </div>
                  <div>
                    <h3 className="heading-6 mb-1">Horario de atención</h3>
                    <p className="text-body">{contactInfo.schedule}</p>
                    <p className="text-body-sm text-muted">Hora del centro de México</p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="card card-bordered overflow-hidden">
                <div className="bg-gray-100 h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPinIcon size={48} className="text-gray-300 mx-auto mb-2" />
                    <p className="text-body-sm text-muted">Mapa de ubicación</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection 
        title="Preguntas frecuentes"
        subtitle="Encuentra respuestas a las dudas más comunes."
        limit={4}
      />
    </Layout>
  );
}
