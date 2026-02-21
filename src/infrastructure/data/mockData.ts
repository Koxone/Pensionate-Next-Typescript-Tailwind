import type { PensionPlan } from '@domain/entities/PensionPlan';
import type { Service } from '@domain/entities/Service';
import type { Testimonial } from '@domain/entities/Testimonial';
import type { FAQ } from '@domain/entities/FAQ';
import type { Statistic } from '@domain/entities/Statistic';
import type { Article } from '@domain/entities/Article';

// Planes de Pensión
export const pensionPlans: PensionPlan[] = [
  {
    id: '1',
    name: 'Plan Personal de Retiro',
    description:
      'Ahorra para tu futuro con beneficios fiscales. Deduce hasta $189,222 MXN anuales de impuestos.',
    minContribution: 1000,
    maxContribution: 189222,
    expectedReturn: '8-12%',
    riskLevel: 'medio',
    benefits: [
      'Deducción fiscal inmediata',
      'Rendimientos competitivos',
      'Flexibilidad en aportaciones',
      'Sin comisiones ocultas',
    ],
    isPopular: true,
  },
  {
    id: '2',
    name: 'Plan de Ahorro Voluntario',
    description:
      'Complementa tu pensión con aportaciones voluntarias y obtén mejores rendimientos.',
    minContribution: 500,
    maxContribution: 500000,
    expectedReturn: '6-10%',
    riskLevel: 'bajo',
    benefits: [
      'Sin monto mínimo de permanencia',
      'Retiros flexibles',
      'Diversificación de inversiones',
      'Asesoría personalizada',
    ],
    isPopular: false,
  },
  {
    id: '3',
    name: 'Plan de Inversión a Largo Plazo',
    description: 'Maximiza tus rendimientos con una estrategia de inversión a largo plazo.',
    minContribution: 5000,
    maxContribution: 1000000,
    expectedReturn: '10-15%',
    riskLevel: 'alto',
    benefits: [
      'Mayores rendimientos potenciales',
      'Gestión profesional',
      'Reportes mensuales',
      'Acceso a fondos exclusivos',
    ],
    isPopular: false,
  },
];

// Servicios
export const services: Service[] = [
  {
    id: '1',
    title: 'Asesoría en Pensiones IMSS',
    description:
      'Te ayudamos a entender tu régimen de pensión y calcular el monto que recibirás al jubilarte.',
    icon: 'shield',
    slug: 'asesoria-imss',
  },
  {
    id: '2',
    title: 'Asesoría en Pensiones ISSSTE',
    description:
      'Orientación especializada para trabajadores del estado sobre sus derechos de pensión.',
    icon: 'building',
    slug: 'asesoria-issste',
  },
  {
    id: '3',
    title: 'Plan Personal de Retiro',
    description:
      'Diseñamos un plan de ahorro personalizado para asegurar tu tranquilidad financiera.',
    icon: 'piggy-bank',
    slug: 'plan-retiro',
  },
  {
    id: '4',
    title: 'Gestión de Trámites',
    description:
      'Nos encargamos de todos los trámites necesarios para tu pensión sin complicaciones.',
    icon: 'clipboard',
    slug: 'gestion-tramites',
  },
  {
    id: '5',
    title: 'Cálculo de Pensión',
    description: 'Calculamos con precisión el monto de tu pensión según tu historial laboral.',
    icon: 'calculator',
    slug: 'calculo-pension',
  },
  {
    id: '6',
    title: 'Estrategias de Inversión',
    description: 'Optimiza tus ahorros con estrategias de inversión diseñadas para tu perfil.',
    icon: 'chart',
    slug: 'estrategias-inversion',
  },
];

// Testimoniales
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'María González',
    role: 'Jubilada IMSS',
    content:
      'Gracias a Pensionate.org pude entender todos mis derechos y obtuve una pensión mejor de lo que esperaba. El proceso fue muy sencillo.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Roberto Hernández',
    role: 'Empresario',
    content:
      'El Plan Personal de Retiro me ha permitido ahorrar de manera inteligente mientras deduzco impuestos. Excelente servicio.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Ana Martínez',
    role: 'Profesora ISSSTE',
    content:
      'Me ayudaron a entender el régimen del décimo transitorio y ahora tengo claridad sobre mi futuro financiero.',
    rating: 5,
  },
  {
    id: '4',
    name: 'Carlos López',
    role: 'Ingeniero',
    content:
      'La asesoría fue muy profesional. Me explicaron todas las opciones y encontramos la mejor estrategia para mi retiro.',
    rating: 4,
  },
];

// Preguntas Frecuentes
export const faqs: FAQ[] = [
  {
    id: '1',
    question: '¿Qué es un Plan Personal de Retiro (PPR)?',
    answer:
      'Un Plan Personal de Retiro es un instrumento de ahorro a largo plazo que te permite acumular recursos para tu jubilación, con el beneficio adicional de poder deducir tus aportaciones de impuestos hasta por $189,222 MXN anuales.',
    category: 'general',
  },
  {
    id: '2',
    question: '¿Cuánto puedo deducir de impuestos?',
    answer:
      'Puedes deducir hasta el 10% de tus ingresos anuales o hasta 5 UMAs anuales (aproximadamente $189,222 MXN en 2024), lo que resulte menor. Esto puede representar un ahorro significativo en tu declaración anual.',
    category: 'fiscal',
  },
  {
    id: '3',
    question: '¿Cuándo puedo retirar mi dinero?',
    answer:
      'Puedes retirar tu dinero al cumplir 65 años o al momento de tu jubilación. También existen opciones de retiro anticipado en casos especiales como invalidez o desempleo, aunque pueden aplicar penalizaciones fiscales.',
    category: 'retiros',
  },
  {
    id: '4',
    question: '¿Qué diferencia hay entre IMSS Ley 73 y Ley 97?',
    answer:
      'La Ley 73 aplica a trabajadores que comenzaron a cotizar antes del 1 de julio de 1997 y ofrece una pensión calculada con base en el salario promedio de los últimos 5 años. La Ley 97 aplica a quienes empezaron después y la pensión depende del ahorro acumulado en la cuenta individual.',
    category: 'imss',
  },
  {
    id: '5',
    question: '¿Cómo puedo saber cuántas semanas tengo cotizadas?',
    answer:
      'Puedes consultar tus semanas cotizadas en el portal del IMSS con tu CURP y NSS, o a través de la app IMSS Digital. También podemos ayudarte a obtener esta información y analizarla para calcular tu pensión estimada.',
    category: 'imss',
  },
  {
    id: '6',
    question: '¿Qué es el régimen del décimo transitorio del ISSSTE?',
    answer:
      'El régimen del décimo transitorio aplica a trabajadores del ISSSTE que comenzaron a cotizar antes del 1 de abril de 2007. Estos trabajadores pueden elegir entre el régimen anterior (con pensión basada en el último salario) o el nuevo sistema de cuentas individuales.',
    category: 'issste',
  },
  {
    id: '7',
    question: '¿Cuál es el monto mínimo para invertir?',
    answer:
      'Puedes comenzar a invertir desde $1,000 MXN mensuales en nuestro Plan Personal de Retiro. No hay monto máximo, aunque los beneficios fiscales tienen un límite anual.',
    category: 'inversion',
  },
  {
    id: '8',
    question: '¿Mis inversiones están seguras?',
    answer:
      'Sí, operamos bajo la regulación de la CNBV y la CONSAR. Tus inversiones están diversificadas en instrumentos de bajo riesgo y tu información está protegida con los más altos estándares de seguridad.',
    category: 'seguridad',
  },
];

// Estadísticas
export const statistics: Statistic[] = [
  {
    id: '1',
    value: '200,000',
    label: 'Clientes satisfechos',
    prefix: '+',
    suffix: '',
  },
  {
    id: '2',
    value: '1,800',
    label: 'Millones de dólares administrados',
    prefix: '$',
    suffix: ' MDD',
  },
  {
    id: '3',
    value: '15',
    label: 'Años de experiencia',
    prefix: '',
    suffix: ' años',
  },
  {
    id: '4',
    value: '98',
    label: 'Índice de satisfacción',
    prefix: '',
    suffix: '%',
  },
];

// Artículos del Blog
export const articles: Article[] = [
  {
    id: '1',
    title: 'Cómo pensionarte por Ley 73 en 5 pasos',
    excerpt:
      'Descubre los requisitos y el proceso para obtener tu pensión bajo el régimen de la Ley 73 del IMSS.',
    category: 'Pensiones',
    slug: 'pensionarte-ley-73',
    publishedAt: '2024-01-15',
    readTime: '5 min',
  },
  {
    id: '2',
    title: 'Beneficios fiscales del ahorro para el retiro',
    excerpt:
      'Conoce cómo puedes deducir impuestos mientras ahorras para tu futuro con un Plan Personal de Retiro.',
    category: 'Ahorro',
    slug: 'beneficios-fiscales-retiro',
    publishedAt: '2024-01-10',
    readTime: '4 min',
  },
  {
    id: '3',
    title: 'Diferencias entre AFORE y PPR',
    excerpt:
      'Entiende las diferencias clave entre tu AFORE y un Plan Personal de Retiro para tomar mejores decisiones.',
    category: 'Inversiones',
    slug: 'diferencias-afore-ppr',
    publishedAt: '2024-01-05',
    readTime: '6 min',
  },
  {
    id: '4',
    title: 'Aumento por inflación en las pensiones 2024',
    excerpt:
      'Todo lo que necesitas saber sobre el ajuste por inflación en las pensiones para este año.',
    category: 'Pensiones',
    slug: 'aumento-inflacion-pensiones',
    publishedAt: '2024-01-01',
    readTime: '3 min',
  },
];

// Características principales
export const features = [
  {
    id: '1',
    title: 'Simple y Regulado',
    description:
      'Operamos bajo la supervisión de la CNBV, garantizando la seguridad de tus inversiones.',
    icon: 'shield-check',
  },
  {
    id: '2',
    title: 'Sin Comisiones Ocultas',
    description: 'Transparencia total en nuestras comisiones. Sabes exactamente cuánto pagas.',
    icon: 'eye',
  },
  {
    id: '3',
    title: 'Asesoría Personalizada',
    description: 'Un experto te acompaña en cada paso para diseñar el mejor plan para ti.',
    icon: 'users',
  },
  {
    id: '4',
    title: 'App Móvil',
    description:
      'Consulta tu saldo, realiza aportaciones y gestiona tu cuenta desde cualquier lugar.',
    icon: 'smartphone',
  },
];

// Pasos del proceso
export const processSteps = [
  {
    step: 1,
    title: 'Agenda tu cita',
    description: 'Programa una consulta gratuita con uno de nuestros asesores expertos.',
  },
  {
    step: 2,
    title: 'Análisis personalizado',
    description: 'Evaluamos tu situación actual y tus metas de retiro.',
  },
  {
    step: 3,
    title: 'Plan a tu medida',
    description: 'Diseñamos una estrategia de ahorro e inversión personalizada.',
  },
  {
    step: 4,
    title: 'Seguimiento continuo',
    description: 'Te acompañamos en cada paso hasta alcanzar tus objetivos.',
  },
];

// Información de contacto
export const contactInfo = {
  phone: '55 3750 7499',
  email: 'contacto@Pensionate.org',
  address: 'Paseo de la Reforma 250, Col. Juárez, CDMX',
  schedule: 'Lun - Vie: 9:00 - 18:00',
  social: {
    facebook: 'https://facebook.com/Pensionate.org',
    twitter: 'https://twitter.com/Pensionate.org',
    linkedin: 'https://linkedin.com/company/Pensionate.org',
    instagram: 'https://instagram.com/Pensionate.org',
  },
};

// Navegación principal
export const mainNavigation = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Plan de Retiro', href: '/plan-retiro' },
  { label: 'Calculadora', href: '/calculadora' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacto', href: '/contacto' },
];

// Footer navigation
export const footerNavigation = {
  servicios: [
    { label: 'Asesoría IMSS', href: '/servicios/asesoria-imss' },
    { label: 'Asesoría ISSSTE', href: '/servicios/asesoria-issste' },
    { label: 'Plan de Retiro', href: '/plan-retiro' },
    { label: 'Gestión de Trámites', href: '/servicios/gestion-tramites' },
    { label: 'Calculadora', href: '/calculadora' },
  ],
  empresa: [
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contacto', href: '/contacto' },
    { label: 'Preguntas Frecuentes', href: '/faq' },
  ],
  legal: [
    { label: 'Aviso de Privacidad', href: '/privacidad' },
    { label: 'Términos y Condiciones', href: '/terminos' },
    { label: 'Regulación', href: '/regulacion' },
  ],
};
