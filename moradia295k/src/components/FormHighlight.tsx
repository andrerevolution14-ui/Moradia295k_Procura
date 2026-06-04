'use client';

import { useEffect } from 'react';

/** Destaca o formulário quando o utilizador clica num CTA com #formulario */
export default function FormHighlight({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const highlight = () => {
      const wrap = document.querySelector('.form-wrap');
      if (!wrap) return;
      wrap.classList.add('form-wrap--highlight');
      window.setTimeout(() => wrap.classList.remove('form-wrap--highlight'), 2200);
    };

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const link = target?.closest('a[href="#formulario"]');
      if (link) window.setTimeout(highlight, 400);
    };

    if (window.location.hash === '#formulario') highlight();

    document.addEventListener('click', onClick);
    window.addEventListener('hashchange', highlight);
    return () => {
      document.removeEventListener('click', onClick);
      window.removeEventListener('hashchange', highlight);
    };
  }, []);

  return <>{children}</>;
}
