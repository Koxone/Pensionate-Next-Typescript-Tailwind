import type { Metadata } from 'next';
import '@presentation/styles/globals.css';

export const metadata: Metadata = {
  title: 'PensionPlus - Tu Futuro Financiero Comienza Hoy',
  description: 'Expertos en pensiones IMSS, ISSSTE y planes de retiro. Te ayudamos a planificar tu jubilación con asesoría personalizada.',
  keywords: 'pensiones, retiro, IMSS, ISSSTE, ahorro, inversión, jubilación, México',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
      <body>
        {children}
      </body>
    </html>
  );
}
