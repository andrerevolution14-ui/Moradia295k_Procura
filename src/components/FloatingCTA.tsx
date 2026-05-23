'use client';
import { useEffect, useState } from 'react';
import { CTA_SHORT } from '@/lib/cta';
import { UNITS_LABEL } from '@/lib/project';

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
                    {UNITS_LABEL}
                </span>
                <span className="floating-cta-sub">Gestor dedicado · chamada rápida</span>
            </div>
            <a href="#formulario" className="btn btn--gold btn--sm floating-cta-btn">
                {CTA_SHORT}
            </a>
        </div>
    );
}
