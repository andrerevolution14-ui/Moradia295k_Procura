import { TRUST_POINTS } from '@/lib/cta';

export default function TrustBadges({ className = '' }: { className?: string }) {
  return (
    <ul className={`trust-badges ${className}`.trim()} aria-label="Garantias da chamada de viabilidade">
      {TRUST_POINTS.map((item) => (
        <li key={item.text}>
          <span className="trust-badges-icon" aria-hidden>{item.icon}</span>
          {item.text}
        </li>
      ))}
    </ul>
  );
}
