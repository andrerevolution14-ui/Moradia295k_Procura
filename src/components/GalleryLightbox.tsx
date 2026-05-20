'use client';
import { useState, useEffect, useCallback } from 'react';

interface Photo { src: string; alt: string; caption: string; }

const PHOTOS: Photo[] = [
  { src: '/Exterior Capa.png',            alt: 'Fachada principal',       caption: 'Exterior — Fachada Principal' },
  { src: '/Exterior traseiro completo.png', alt: 'Exterior traseiro',     caption: 'Exterior — Vista Traseira' },
  { src: '/Exterior Traseiro.jpg',         alt: 'Exterior traseiro',      caption: 'Exterior — Traseiro' },
  { src: '/Sala de Jantar.png',            alt: 'Sala de jantar',         caption: 'Sala de Jantar' },
  { src: '/Cozinha.png',                   alt: 'Cozinha equipada',       caption: 'Cozinha' },
  { src: '/Terceiro Andar.png',            alt: 'Interior terceiro andar',caption: 'Terceiro Andar' },
  { src: '/Quarto Cama.png',               alt: 'Quarto principal',       caption: 'Quarto' },
  { src: '/Quarto e varanda.png',          alt: 'Quarto com varanda',     caption: 'Quarto com Varanda' },
  { src: '/Quarto Porta.png',              alt: 'Quarto — entrada',       caption: 'Quarto' },
  { src: '/Corredor quartos.png',          alt: 'Corredor dos quartos',   caption: 'Corredor' },
];

export default function GalleryLightbox() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(() =>
    setActive((a) => (a === null ? null : (a - 1 + PHOTOS.length) % PHOTOS.length)), []);
  const next = useCallback(() =>
    setActive((a) => (a === null ? null : (a + 1) % PHOTOS.length)), []);

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
      <div className="gallery-grid">
        {PHOTOS.map((photo, i) => (
          <div
            key={photo.src}
            className={`gallery-item${i === 0 ? ' gallery-item--tall' : ''}${photo.src.includes('plantas3') ? ' gallery-item--plan' : ''}`}
            onClick={() => setActive(i)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setActive(i)}
            aria-label={`Ver ${photo.caption} em ecrã completo`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              style={photo.src.includes('plantas3') ? { objectFit: 'contain', background: '#fff', padding: '8px' } : {}}
            />
            <div className="gallery-caption">{photo.caption} ↗</div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="lightbox-backdrop"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Visualizador de foto"
        >
          <button className="lightbox-close" onClick={close} aria-label="Fechar">✕</button>
          <div className="lightbox-caption-top">{PHOTOS[active].caption}</div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="lightbox-img"
            src={PHOTOS[active].src}
            alt={PHOTOS[active].alt}
            onClick={(e) => e.stopPropagation()}
            style={PHOTOS[active].src.includes('plantas3') ? { objectFit: 'contain', background: '#fff', padding: 16, borderRadius: 8 } : {}}
          />
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
          <div className="lightbox-counter">{active + 1} / {PHOTOS.length}</div>
        </div>
      )}
    </>
  );
}
