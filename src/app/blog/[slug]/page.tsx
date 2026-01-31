'use client';

import { useParams, useRouter } from 'next/navigation';
import { Layout } from '@presentation/components/layout';
import { Button } from '@presentation/components/ui/Button';
import { Icon } from '@presentation/components/ui/Icons';
import { BlogSection, CTASection } from '@presentation/components/sections';
import { articles } from '@infrastructure/data/mockData';

// Mock article content
const articleContent: Record<string, string> = {
  'pensionarte-ley-73': `
    <p>Si comenzaste a cotizar en el IMSS antes del 1 de julio de 1997, tienes derecho a pensionarte bajo el régimen de la Ley 73. Este régimen ofrece beneficios significativos que debes conocer.</p>
    
    <h2>Requisitos para pensionarte por Ley 73</h2>
    <p>Para acceder a una pensión bajo la Ley 73, necesitas cumplir con los siguientes requisitos:</p>
    <ul>
      <li>Tener al menos 500 semanas cotizadas</li>
      <li>Haber comenzado a cotizar antes del 1 de julio de 1997</li>
      <li>Tener 60 años cumplidos (cesantía) o 65 años (vejez)</li>
    </ul>
    
    <h2>Paso 1: Verifica tus semanas cotizadas</h2>
    <p>El primer paso es conocer cuántas semanas tienes cotizadas. Puedes consultarlo en el portal del IMSS o en la app IMSS Digital con tu CURP y NSS.</p>
    
    <h2>Paso 2: Identifica tu régimen</h2>
    <p>Confirma que efectivamente perteneces al régimen de la Ley 73. Esto es crucial porque determina cómo se calculará tu pensión.</p>
    
    <h2>Paso 3: Calcula tu pensión estimada</h2>
    <p>Tu pensión se calcula con base en el promedio de tu salario de los últimos 5 años cotizados y el número de semanas que hayas acumulado.</p>
    
    <h2>Paso 4: Reúne la documentación</h2>
    <p>Necesitarás varios documentos incluyendo tu acta de nacimiento, CURP, identificación oficial, comprobante de domicilio y estado de cuenta de tu AFORE.</p>
    
    <h2>Paso 5: Inicia el trámite</h2>
    <p>Acude a tu subdelegación del IMSS más cercana para iniciar el proceso de solicitud de pensión. Te recomendamos ir acompañado de un asesor.</p>
  `,
  'beneficios-fiscales-retiro': `
    <p>Ahorrar para tu retiro no solo te prepara para el futuro, también puede generarte beneficios fiscales inmediatos. Conoce cómo aprovecharlos.</p>
    
    <h2>¿Qué es un Plan Personal de Retiro?</h2>
    <p>Un PPR es un instrumento de ahorro a largo plazo que te permite acumular recursos para tu jubilación mientras disfrutas de deducciones fiscales.</p>
    
    <h2>Beneficios fiscales principales</h2>
    <p>Puedes deducir hasta el 10% de tus ingresos anuales o hasta 5 UMAs anuales (aproximadamente $189,222 MXN), lo que resulte menor.</p>
    
    <h2>¿Cómo funciona la deducción?</h2>
    <p>Las aportaciones que realices a tu PPR se restan de tu base gravable, reduciendo el ISR que pagas en tu declaración anual.</p>
    
    <h2>Ejemplo práctico</h2>
    <p>Si ganas $500,000 anuales y aportas $50,000 a tu PPR, solo pagarás impuestos sobre $450,000, generando un ahorro significativo.</p>
  `,
  'diferencias-afore-ppr': `
    <p>Tanto tu AFORE como un Plan Personal de Retiro son herramientas para tu jubilación, pero tienen diferencias importantes que debes conocer.</p>
    
    <h2>¿Qué es una AFORE?</h2>
    <p>La AFORE es la cuenta donde se depositan las aportaciones obligatorias de tu patrón, el gobierno y tú mismo como trabajador.</p>
    
    <h2>¿Qué es un PPR?</h2>
    <p>Un Plan Personal de Retiro es un ahorro voluntario adicional que puedes contratar de manera independiente con beneficios fiscales.</p>
    
    <h2>Principales diferencias</h2>
    <ul>
      <li>La AFORE es obligatoria, el PPR es voluntario</li>
      <li>El PPR ofrece mayores beneficios fiscales</li>
      <li>Puedes elegir dónde invertir tu PPR</li>
      <li>El PPR tiene mayor flexibilidad de aportaciones</li>
    </ul>
    
    <h2>¿Cuál es mejor?</h2>
    <p>Lo ideal es tener ambos. Tu AFORE como base obligatoria y un PPR como complemento para maximizar tu pensión y beneficios fiscales.</p>
  `,
  'aumento-inflacion-pensiones': `
    <p>Cada año, las pensiones reciben un ajuste por inflación para mantener su poder adquisitivo. Conoce los detalles del aumento 2024.</p>
    
    <h2>¿Por qué aumentan las pensiones?</h2>
    <p>Las pensiones se ajustan anualmente con base en la inflación para que los pensionados no pierdan poder de compra.</p>
    
    <h2>Aumento para 2024</h2>
    <p>Para este año, el aumento autorizado es del 4.66%, aplicable a todas las pensiones del IMSS e ISSSTE.</p>
    
    <h2>¿Cuándo se aplica?</h2>
    <p>El ajuste se aplica automáticamente a partir del mes de febrero y se refleja en los pagos mensuales.</p>
    
    <h2>Pensión mínima garantizada</h2>
    <p>La pensión mínima garantizada también aumenta, asegurando un ingreso digno para todos los pensionados.</p>
  `
};

export default function ArticlePage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  
  const article = articles.find(a => a.slug === slug);
  const content = articleContent[slug];
  
  if (!article) {
    return (
      <Layout>
        <section className="section section-white min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="heading-2 mb-4">Artículo no encontrado</h1>
            <p className="text-body mb-6">El artículo que buscas no existe.</p>
            <Button href="/blog">Ver todos los artículos</Button>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Article Header */}
      <section className="hero hero-light hero-sm">
        <div className="hero-container">
          <div className="max-w-3xl mx-auto">
            <button 
              onClick={() => router.push('/blog')}
              className="text-primary mb-4 flex items-center gap-2 hover:underline"
            >
              ← Volver al blog
            </button>
            <span className="badge badge-primary-light mb-4">{article.category}</span>
            <h1 className="heading-2 mb-4">{article.title}</h1>
            <div className="flex items-center gap-4 text-body-sm text-muted">
              <span>{article.publishedAt}</span>
              <span>•</span>
              <span>{article.readTime} de lectura</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section section-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div 
              className="prose prose-lg"
              dangerouslySetInnerHTML={{ __html: content || '<p>Contenido del artículo próximamente...</p>' }}
            />
            
            {/* Share */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-body-sm font-medium mb-4">Comparte este artículo:</p>
              <div className="flex gap-3">
                <button className="social-icon">
                  <Icon name="facebook" size={18} />
                </button>
                <button className="social-icon">
                  <Icon name="twitter" size={18} />
                </button>
                <button className="social-icon">
                  <Icon name="linkedin" size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BlogSection 
        title="Artículos relacionados"
        subtitle="Continúa aprendiendo sobre pensiones y ahorro."
        limit={3}
        showViewAll={false}
      />

      <CTASection 
        title="¿Necesitas asesoría personalizada?"
        subtitle="Nuestros expertos pueden ayudarte con tu caso específico."
        primaryCta={{ label: 'Hablar con un Asesor', href: '/contacto' }}
      />
    </Layout>
  );
}
