import type { Metadata } from 'next';
import { Suspense } from 'react';
import './globals.css';
import MetaPixel from '@/components/MetaPixel';

export const metadata: Metadata = {
  title: 'Moradia T3 Moderna em Aveiro — 295.000€ | Oportunidade Única',
  description:
    'Projeto exclusivo com tecnologia LSF e Inteligência Financeira. Entrega Janeiro de 2027. Localização privilegiada a 10 minutos de Aveiro.',
  keywords: 'moradia aveiro, casa nova t3, construção lsf portugal, investimento imobiliário aveiro, autoconstrução assistida',
  themeColor: '#0b1120',
  openGraph: {
    title: 'Nova Moradia T3 Moderna — 295k€ | Aveiro',
    description: 'Aceda à lista privada para este projeto exclusivo com entrega em Janeiro de 2027.',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
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
