'use client';

import { Layout } from '@presentation/components/layout';

export default function TerminosPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero hero-light hero-sm">
        <div className="hero-container">
          <div className="hero-content-center">
            <h1 className="hero-title">Términos y Condiciones</h1>
            <p className="hero-subtitle">
              Última actualización: Enero 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section section-white">
        <div className="container">
          <div className="max-w-3xl mx-auto prose">
            <h2>1. Aceptación de los Términos</h2>
            <p>
              Al acceder y utilizar los servicios de PensionPlus, usted acepta estar sujeto a estos 
              términos y condiciones. Si no está de acuerdo con alguna parte de estos términos, 
              no podrá acceder al servicio.
            </p>

            <h2>2. Descripción del Servicio</h2>
            <p>
              PensionPlus ofrece servicios de asesoría en pensiones, gestión de trámites ante 
              instituciones de seguridad social, planes de ahorro para el retiro y herramientas 
              de cálculo de pensión.
            </p>

            <h2>3. Uso del Servicio</h2>
            <p>
              El usuario se compromete a:
            </p>
            <ul>
              <li>Proporcionar información veraz y actualizada</li>
              <li>Utilizar el servicio únicamente para fines legales</li>
              <li>No compartir sus credenciales de acceso</li>
              <li>Mantener la confidencialidad de su información</li>
            </ul>

            <h2>4. Limitación de Responsabilidad</h2>
            <p>
              Los cálculos y proyecciones proporcionados son estimaciones basadas en la información 
              disponible y no constituyen una garantía de resultados. Las decisiones finales sobre 
              pensiones corresponden a las instituciones de seguridad social.
            </p>

            <h2>5. Propiedad Intelectual</h2>
            <p>
              Todo el contenido del sitio web, incluyendo textos, gráficos, logos y software, 
              es propiedad de PensionPlus y está protegido por las leyes de propiedad intelectual.
            </p>

            <h2>6. Modificaciones</h2>
            <p>
              Nos reservamos el derecho de modificar estos términos en cualquier momento. 
              Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web.
            </p>

            <h2>7. Ley Aplicable</h2>
            <p>
              Estos términos se regirán e interpretarán de acuerdo con las leyes de los 
              Estados Unidos Mexicanos.
            </p>

            <h2>8. Contacto</h2>
            <p>
              Para cualquier pregunta sobre estos términos, contáctenos en: legal@pensionplus.mx
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
