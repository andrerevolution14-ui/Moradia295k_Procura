import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import MetaPixel from '@/components/MetaPixel';
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
  title: 'Nova Moradia T3 Moderna — 390.000€ | Lista Privada',
  description:
    'Acesso antecipado a projeto de moradia T3 contemporânea em zona residencial tranquila. Entrega Março de 2027. 390.000€ para compradores qualificados.',
  keywords: 'casa nova t3, construção lsf portugal, investimento imobiliário, autoconstrução assistida',
  openGraph: {
    title: 'Nova Moradia T3 Moderna — 390.000€ | Lista Privada',
    description: 'Aceda à lista privada para este projeto exclusivo com entrega em Março de 2027.',
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
