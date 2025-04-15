import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar'; // Importa tu Navbar
import Footer  from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mi Aplicación Next.js',
  description: 'Una aplicación creada con Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar /> {/* Aquí renderizas tu Navbar */}
        <main>{children}</main> {/* Aquí se renderizará el contenido de tus páginas */}
        <Footer />
      </body>
    </html>
  );
}
