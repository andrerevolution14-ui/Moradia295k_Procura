'use client';
import { useEffect, useState } from 'react';
import { CTA_SHORT } from '@/lib/cta';

export default function FloatingCTA() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const scrollY = window.scrollY;
            const formEl = document.getElementById('formulario');

            if (scrollY < 280) {
                setVisible(false);
                return;
            }

            if (formEl) {
                const formTop = formEl.getBoundingClientRect().top;
                setVisible(formTop > 120);
            } else {
                setVisible(true);
            }
        };

        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    if (!visible) return null;

    return (
        <div className="floating-cta">
            <div className="floating-cta-text">
                <span className="floating-cta-scarcity">
                    <span className="scarcity-dot" aria-hidden />
                    Só resta 1 moradia
                </span>
                <span className="floating-cta-sub">Gratuita · ~30 min · Sem compromisso</span>
            </div>
            <a href="#formulario" className="btn btn--gold btn--sm floating-cta-btn">
                {CTA_SHORT}
            </a>
        </div>
    );
}
