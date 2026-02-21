'use client';

import { useState } from 'react';
import { Layout } from '@presentation/components/layout';
import { Button } from '@presentation/components/ui/Button';
import {
  Icon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
} from '@presentation/components/ui/Icons';
import { FAQSection } from '@presentation/components/sections';
import { contactInfo } from '@infrastructure/data/mockData';
import { WhatsappIcon } from '../../presentation/components/ui/Icons';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
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
              Agenda una consulta gratuita o envíanos tus dudas. Nuestro equipo te responderá a la
              brevedad.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-white">
        <div className="container">
          {/* Contact Info */}
          <div>
            <h2 className="heading-3 mb-6">Información de contacto</h2>

            <div className="mb-8 flex flex-col gap-4">
              <a
                href="https://wa.me/5215537507499"
                target="_blank"
                rel="noopener noreferrer"
                className="card card-bordered flex items-start gap-4 p-5 transition hover:shadow-md"
              >
                <div className="icon-container icon-container-md icon-container-primary">
                  <WhatsappIcon size={28} />
                </div>

                <div>
                  <h3 className="heading-6 mb-1">Teléfono</h3>
                  <p className="text-body">{contactInfo.phone}</p>
                  <p className="text-body-sm text-muted">Llamadas y WhatsApp</p>
                </div>
              </a>

              <div className="card card-bordered flex items-start gap-4 p-5">
                <div className="icon-container icon-container-md icon-container-primary">
                  <MailIcon size={20} />
                </div>
                <div>
                  <h3 className="heading-6 mb-1">Correo electrónico</h3>
                  <p className="text-body">{contactInfo.email}</p>
                  <p className="text-body-sm text-muted">Respuesta en 24 horas</p>
                </div>
              </div>

              <div className="card card-bordered flex items-start gap-4 p-5">
                <div className="icon-container icon-container-md icon-container-primary">
                  <MapPinIcon size={20} />
                </div>
                <div>
                  <h3 className="heading-6 mb-1">Oficinas</h3>
                  <p className="text-body">{contactInfo.address}</p>
                  <p className="text-body-sm text-muted">Ciudad de México</p>
                </div>
              </div>

              <div className="card card-bordered flex items-start gap-4 p-5">
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
