'use client';
import { useEffect, useState } from 'react';

export default function FloatingCTA() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const scrollY = window.scrollY;
            const formEl = document.getElementById('formulario');

            if (scrollY < 500) { setVisible(false); return; }

            if (formEl) {
                const formTop = formEl.getBoundingClientRect().top;
                setVisible(formTop > 100);
            } else {
                setVisible(true);
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    if (!visible) return null;

    return (
        <div className="floating-cta">
            <div className="floating-cta-text">
                <div className="floating-cta-price">390.000€</div>
                Lista Privada — Aveiro
            </div>
            <a href="#formulario" className="btn btn--gold btn--sm">
                Ver Plantas
            </a>
        </div>
    );
}
