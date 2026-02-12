# Pensionate.org - Aplicación de Pensiones

Aplicación web para una empresa de asesoría en pensiones, desarrollada con Next.js 15, React 19, TypeScript, y Tailwind CSS 4, siguiendo arquitectura limpia DDD (Domain-Driven Design).

## Tecnologías

- **Next.js 15** - Framework de React con App Router
- **React 19** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Tailwind CSS 4** - Framework de estilos utilitarios
- **Arquitectura DDD** - Domain-Driven Design con capas separadas

## Estructura del Proyecto

```
pension-app/
├── src/
│   ├── app/                          # Páginas (App Router)
│   │   ├── blog/                     # Blog y artículos
│   │   ├── calculadora/              # Calculadora de pensión
│   │   ├── contacto/                 # Formulario de contacto
│   │   ├── faq/                      # Preguntas frecuentes
│   │   ├── nosotros/                 # Página sobre nosotros
│   │   ├── plan-retiro/              # Plan personal de retiro
│   │   ├── privacidad/               # Aviso de privacidad
│   │   ├── servicios/                # Servicios
│   │   └── terminos/                 # Términos y condiciones
│   ├── domain/                       # Capa de dominio (DDD)
│   │   └── entities/                 # Entidades del dominio
│   ├── infrastructure/               # Capa de infraestructura
│   │   └── data/                     # Datos mock
│   └── presentation/                 # Capa de presentación
│       ├── components/               # Componentes React
│       │   ├── layout/               # Layout (Navbar, Footer)
│       │   ├── sections/             # Secciones de página
│       │   └── ui/                   # Componentes UI base
│       └── styles/                   # Estilos CSS modulares
│           ├── base/                 # Variables, reset, tipografía
│           ├── components/           # Estilos de componentes
│           ├── layout/               # Estilos de layout
│           └── utils/                # Utilidades y animaciones
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

## Instalación y Ejecución

```bash
# Instalar dependencias
pnpm install

# Actualizar dependencias
pnpm update

# Ejecutar en modo desarrollo
pnpm dev
```

La aplicación estará disponible en `http://localhost:3000`

## Páginas Disponibles

| Ruta                | Descripción             |
| ------------------- | ----------------------- |
| `/`                 | Página principal        |
| `/servicios`        | Lista de servicios      |
| `/servicios/[slug]` | Detalle de servicio     |
| `/plan-retiro`      | Plan Personal de Retiro |
| `/calculadora`      | Calculadora de pensión  |
| `/nosotros`         | Sobre la empresa        |
| `/blog`             | Lista de artículos      |
| `/blog/[slug]`      | Detalle de artículo     |
| `/contacto`         | Formulario de contacto  |
| `/faq`              | Preguntas frecuentes    |
| `/privacidad`       | Aviso de privacidad     |
| `/terminos`         | Términos y condiciones  |

## Características

- **Diseño Responsive** - Adaptado a todos los dispositivos
- **Arquitectura DDD** - Separación clara de capas
- **CSS Modular** - Estilos organizados por componente
- **Datos Mock** - Datos de prueba incluidos
- **Navegación Simple** - Solo router.push para cambios de ruta
- **Sin dependencias externas** - Mínimo uso de librerías

## Estilos CSS

Los estilos están organizados en archivos separados:

- `_variables.css` - Variables CSS (colores, espaciado, etc.)
- `_reset.css` - Reset de estilos del navegador
- `_typography.css` - Estilos de texto
- `_buttons.css` - Estilos de botones
- `_cards.css` - Estilos de tarjetas
- `_forms.css` - Estilos de formularios
- `_navigation.css` - Estilos de navegación
- `_icons.css` - Estilos de iconos
- `_badges.css` - Estilos de badges
- `_accordion.css` - Estilos de acordeón
- `_hero.css` - Estilos de secciones hero
- `_footer.css` - Estilos del footer
- `_layout.css` - Estilos de layout
- `_utilities.css` - Clases utilitarias
- `_animations.css` - Animaciones

## Licencia

Proyecto privado - Todos los derechos reservados.
