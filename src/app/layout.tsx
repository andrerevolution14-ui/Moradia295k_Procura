import type { Metadata } from 'next';
import { Suspense } from 'react';
import './globals.css';
import MetaPixel from '@/components/MetaPixel';

export const metadata: Metadata = {
  title: 'Moradia T3 Moderna em Aveiro — 390.000€ | Oportunidade Única',
  description:
    'Projeto exclusivo com tecnologia LSF e Inteligência Financeira. Entrega Março de 2027. Localização privilegiada a 10 minutos de Aveiro.',
  keywords: 'moradia aveiro, casa nova t3, construção lsf portugal, investimento imobiliário aveiro, autoconstrução assistida',
  openGraph: {
    title: 'Nova Moradia T3 Moderna — 390k€ | Aveiro',
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
    <html lang="pt">
      <body>
        <Suspense fallback={null}>
          <MetaPixel />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
