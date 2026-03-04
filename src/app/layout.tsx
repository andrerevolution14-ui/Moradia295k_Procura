import type { Metadata } from 'next';
import { Suspense } from 'react';
import './globals.css';
import MetaPixel from '@/components/MetaPixel';

export const metadata: Metadata = {
  title: 'Nova Moradia T3 Moderna — 295.000€ | Lista Privada',
  description:
    'Acesso antecipado a projeto de moradia T3 contemporânea em zona residencial tranquila. Entrega 2026. 295.000€ para compradores qualificados.',
  keywords: 'moradia T3, casa nova, imobiliário Portugal, comprar casa, moradia contemporânea',
  openGraph: {
    title: 'Nova Moradia T3 — Lista Privada | 295.000€',
    description: 'Projeto aprovado em fase inicial. Acesso antecipado para compradores selecionados.',
    type: 'website',
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
