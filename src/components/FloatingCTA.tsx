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
            <a href="#formulario" className="btn btn--gold btn--sm" style={{ width: '100%', padding: '14px 24px', fontSize: '1rem' }}>
                Agendar Visita
            </a>
        </div>
    );
}
