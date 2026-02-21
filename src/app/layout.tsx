import type { Metadata } from 'next';
import '@presentation/styles/globals.css';

export const metadata: Metadata = {
  title: 'Pensionate.org - Tu Futuro Financiero Comienza Hoy',
  description:
    'Expertos en pensiones IMSS, ISSSTE y planes de retiro. Te ayudamos a planificar tu jubilación con asesoría personalizada.',
  keywords: 'pensiones, retiro, IMSS, ISSSTE, ahorro, inversión, jubilación, México',

  icons: {
    icon: [
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },

  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
