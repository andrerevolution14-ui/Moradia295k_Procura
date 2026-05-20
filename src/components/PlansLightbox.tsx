'use client';
import { useState, useEffect, useCallback } from 'react';
import RevealWrapper from './RevealWrapper';

interface PlanPhoto { src: string; alt: string; caption: string; }

const PLAN_PHOTOS: PlanPhoto[] = [
  { src: '/planta-3d.png',      alt: 'Planta em 3D',      caption: 'Planta em 3D' },
  { src: '/Planta-tecnica.png', alt: 'Planta Técnica',    caption: 'Planta Técnica' },
];

export default function PlansLightbox() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(() =>
    setActive((a) => (a === null ? null : (a - 1 + PLAN_PHOTOS.length) % PLAN_PHOTOS.length)), []);
  const next = useCallback(() =>
    setActive((a) => (a === null ? null : (a + 1) % PLAN_PHOTOS.length)), []);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active, close, prev, next]);

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', marginTop: '40px' }}>
        {PLAN_PHOTOS.map((photo, i) => (
          <RevealWrapper key={photo.src} delay={i === 0 ? 0 : 1}>
            <div 
              style={{ 
                borderRadius: 'var(--radius)', 
                overflow: 'hidden', 
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)', 
                cursor: 'pointer', 
                position: 'relative' 
              }}
              onClick={() => setActive(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setActive(i)}
              aria-label={`Ver ${photo.caption} em ecrã completo`}
            >
              <img src={photo.src} alt={photo.alt} style={{ width: '100%', height: 'auto', display: 'block' }} loading="lazy" />
              <div style={{ 
                position: 'absolute', 
                top: 16, 
                right: 16, 
                background: 'rgba(0,0,0,0.7)', 
                color: 'white', 
                padding: '8px 14px', 
                borderRadius: 30, 
                fontSize: '0.85rem', 
                display: 'flex', 
                alignItems: 'center', 
                gap: 8,
                backdropFilter: 'blur(4px)',
                transition: 'var(--transition)'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--navy)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(0,0,0,0.7)'; e.currentTarget.style.color = 'white'; }}
              >
                 <span>Ampliar</span>
                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
              </div>
            </div>
          </RevealWrapper>
        ))}
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="lightbox-backdrop"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Visualizador de planta"
        >
          <button className="lightbox-close" onClick={close} aria-label="Fechar">✕</button>
          <div className="lightbox-caption-top">{PLAN_PHOTOS[active].caption}</div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="lightbox-img"
            src={PLAN_PHOTOS[active].src}
            alt={PLAN_PHOTOS[active].alt}
            onClick={(e) => e.stopPropagation()}
            style={{ objectFit: 'contain' }}
          />
          <button
            className="lightbox-nav lightbox-nav--prev"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Planta anterior"
          >‹</button>
          <button
            className="lightbox-nav lightbox-nav--next"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Próxima planta"
          >›</button>
          <div className="lightbox-counter">{active + 1} / {PLAN_PHOTOS.length}</div>
        </div>
      )}
    </>
  );
}
