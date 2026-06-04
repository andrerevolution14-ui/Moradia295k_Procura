'use client';
import { useState, useEffect, useCallback } from 'react';
import OptimizedImage from '@/components/OptimizedImage';
import { GALLERY_PHOTOS, GALLERY_SIZES } from '@/lib/images';

export default function GalleryLightbox() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(() =>
    setActive((a) => (a === null ? null : (a - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length)), []);
  const next = useCallback(() =>
    setActive((a) => (a === null ? null : (a + 1) % GALLERY_PHOTOS.length)), []);

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

  useEffect(() => {
    if (active === null) return;
    const preload = (idx: number) => {
      const src = GALLERY_PHOTOS[idx]?.full;
      if (!src) return;
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    };
    preload((active + 1) % GALLERY_PHOTOS.length);
    preload((active - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length);
  }, [active]);

  return (
    <>
      <div className="gallery-grid">
        {GALLERY_PHOTOS.map((photo, i) => (
          <div
            key={photo.full}
            className={`gallery-item${i === 0 ? ' gallery-item--tall' : ''}${photo.isPlan ? ' gallery-item--plan' : ''}`}
            onClick={() => setActive(i)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setActive(i)}
            aria-label={`Ver ${photo.caption} em ecrã completo`}
          >
            <OptimizedImage
              src={photo.thumb}
              alt={photo.alt}
              fill
              sizes={GALLERY_SIZES}
              style={photo.isPlan ? { objectFit: 'contain', background: '#fff', padding: '8px' } : { objectFit: 'cover' }}
            />
            <div className="gallery-caption">{photo.caption} ↗</div>
          </div>
        ))}
      </div>

      {active !== null && (
        <div
          className="lightbox-backdrop"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Visualizador de foto"
        >
          <button className="lightbox-close" onClick={close} aria-label="Fechar">✕</button>
          <div className="lightbox-caption-top">{GALLERY_PHOTOS[active].caption}</div>
          <div className="lightbox-img-wrap" onClick={(e) => e.stopPropagation()}>
            <OptimizedImage
              className="lightbox-img"
              src={GALLERY_PHOTOS[active].full}
              alt={GALLERY_PHOTOS[active].alt}
              width={1400}
              height={933}
              sizes="100vw"
              quality={85}
              priority
              style={GALLERY_PHOTOS[active].isPlan ? { objectFit: 'contain', background: '#fff', padding: 16, borderRadius: 8, width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '80svh' } : { width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '80svh' }}
            />
          </div>
          <button
            className="lightbox-nav lightbox-nav--prev"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Foto anterior"
          >‹</button>
          <button
            className="lightbox-nav lightbox-nav--next"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Próxima foto"
          >›</button>
          <div className="lightbox-counter">{active + 1} / {GALLERY_PHOTOS.length}</div>
        </div>
      )}
    </>
  );
}
