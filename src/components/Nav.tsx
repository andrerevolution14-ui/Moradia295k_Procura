'use client';
import { useEffect, useState } from 'react';

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
            <div className="container">
                <div className="nav-inner">
                    <a href="#hero" className="nav-logo">
                        Moradia T3 <span>390k</span>
                    </a>
                    <a href="#formulario" className="btn btn--primary nav-cta">
                        Solicitar Acesso
                    </a>
                </div>
            </div>
        </nav>
    );
}
