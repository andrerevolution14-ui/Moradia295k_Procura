import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import MetaPixel from '@/components/MetaPixel';
import { PROJECT } from '@/lib/project';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${PROJECT.name} — Moradia T3 de Alto Padrão | Oliveirinha, Aveiro`,
  description:
    `Moradia T3 em ${PROJECT.fullAddress}. ${PROJECT.unitsAvailable} unidades disponíveis (${PROJECT.unitsReserved} reservada). ${PROJECT.price}€ · avaliação bancária ${PROJECT.priceAppraisal}€. Chamada com gestor dedicado.`,
  keywords:
    'moradia t3 aveiro, compra em planta oliveirinha, imóvel alto padrão aveiro, domaine du vingt-cinq, silvermont capital',
  openGraph: {
    title: `${PROJECT.name} — Moradia T3 | Oliveirinha`,
    description: `${PROJECT.unitsAvailable} unidades disponíveis · avaliação bancária ${PROJECT.priceAppraisal}€. Agende chamada com gestor dedicado.`,
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
};

export const viewport = {
  themeColor: '#0b1120',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <Suspense fallback={null}>
          <MetaPixel />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
