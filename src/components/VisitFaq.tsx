'use client';

import { useState } from 'react';
import { VIABILITY_FAQ } from '@/lib/cta';

export default function VisitFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="visit-faq">
      <h3 className="visit-faq-title">Perguntas frequentes</h3>
      <div className="visit-faq-list">
        {VIABILITY_FAQ.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q} className={`visit-faq-item${isOpen ? ' is-open' : ''}`}>
              <button
                type="button"
                className="visit-faq-trigger"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span>{item.q}</span>
                <span className="visit-faq-chevron" aria-hidden>{isOpen ? '−' : '+'}</span>
              </button>
              {isOpen && <p className="visit-faq-answer">{item.a}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
