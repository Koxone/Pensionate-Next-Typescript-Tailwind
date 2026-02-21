'use client';

import { Layout } from '@presentation/components/layout';

export default function PrivacidadPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero hero-light hero-sm">
        <div className="hero-container">
          <div className="hero-content-center">
            <h1 className="hero-title">Aviso de Privacidad</h1>
            <p className="hero-subtitle">Última actualización: Enero 2024</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section section-white">
        <div className="container">
          <div className="prose mx-auto max-w-3xl">
            <h2>1. Identidad del Responsable</h2>
            <p>
              Pensionate.org S.A. de C.V. (en adelante "Pensionate.org"), con domicilio en Paseo de
              la Reforma 222, Col. Juárez, C.P. 06600, Ciudad de México, es responsable del
              tratamiento de sus datos personales.
            </p>

            <h2>2. Datos Personales Recabados</h2>
            <p>
              Para las finalidades señaladas en el presente aviso de privacidad, podemos recabar los
              siguientes datos personales:
            </p>
            <ul>
              <li>Nombre completo</li>
              <li>Fecha de nacimiento</li>
              <li>CURP y RFC</li>
              <li>Número de Seguro Social</li>
              <li>Domicilio</li>
              <li>Teléfono y correo electrónico</li>
              <li>Información laboral y de cotizaciones</li>
              <li>Datos financieros</li>
            </ul>

            <h2>3. Finalidades del Tratamiento</h2>
            <p>Sus datos personales serán utilizados para las siguientes finalidades:</p>
            <ul>
              <li>Prestación de servicios de asesoría en pensiones</li>
              <li>Gestión de trámites ante instituciones de seguridad social</li>
              <li>Cálculo y proyección de pensiones</li>
              <li>Comunicación sobre nuestros servicios</li>
              <li>Cumplimiento de obligaciones legales</li>
            </ul>

            <h2>4. Transferencia de Datos</h2>
            <p>
              Sus datos personales podrán ser transferidos a instituciones de seguridad social
              (IMSS, ISSSTE), AFOREs y autoridades competentes cuando sea necesario para la
              prestación de nuestros servicios o por requerimiento legal.
            </p>

            <h2>5. Derechos ARCO</h2>
            <p>
              Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus
              datos personales. Para ejercer estos derechos, puede enviar una solicitud a:
              privacidad@Pensionate.org
            </p>

            <h2>6. Medidas de Seguridad</h2>
            <p>
              Implementamos medidas de seguridad administrativas, técnicas y físicas para proteger
              sus datos personales contra daño, pérdida, alteración, destrucción o uso no
              autorizado.
            </p>

            <h2>7. Cambios al Aviso de Privacidad</h2>
            <p>
              Nos reservamos el derecho de modificar este aviso de privacidad. Cualquier cambio será
              publicado en nuestro sitio web.
            </p>

            <h2>8. Contacto</h2>
            <p>
              Para cualquier duda o aclaración sobre este aviso de privacidad, puede contactarnos
              en:
            </p>
            <ul>
              <li>Correo: privacidad@Pensionate.org</li>
              <li>Teléfono: 55 3750 7499</li>
              <li>Dirección: Paseo de la Reforma 222, Col. Juárez, CDMX</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
