'use client';
import { useState, useEffect, useCallback } from 'react';
import RevealWrapper from './RevealWrapper';
import OptimizedImage from '@/components/OptimizedImage';
import { PLAN_PHOTOS, CONTENT_IMAGE_SIZES } from '@/lib/images';

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
      <div className="plans-stack">
        {PLAN_PHOTOS.map((photo, i) => (
          <RevealWrapper key={photo.full} delay={i === 0 ? 0 : 1}>
            <div
              className="plans-card"
              onClick={() => setActive(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setActive(i)}
              aria-label={`Ver ${photo.caption} em ecrã completo`}
            >
              <OptimizedImage
                src={photo.thumb}
                alt={photo.alt}
                width={1080}
                height={720}
                sizes={CONTENT_IMAGE_SIZES}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              <div className="plans-zoom-badge">
                <span>Ampliar</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg>
              </div>
            </div>
          </RevealWrapper>
        ))}
      </div>

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
          <div className="lightbox-img-wrap" onClick={(e) => e.stopPropagation()}>
            <OptimizedImage
              className="lightbox-img"
              src={PLAN_PHOTOS[active].full}
              alt={PLAN_PHOTOS[active].alt}
              width={1600}
              height={1067}
              sizes="100vw"
              quality={90}
              priority
              style={{ objectFit: 'contain', width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '80svh' }}
            />
          </div>
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
