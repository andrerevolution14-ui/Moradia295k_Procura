import { VIABILITY_STEPS } from '@/lib/cta';

export default function VisitSteps({ compact = false }: { compact?: boolean }) {
  return (
    <ol className={`visit-steps${compact ? ' visit-steps--compact' : ''}`}>
      {VIABILITY_STEPS.map((item) => (
        <li key={item.step} className="visit-step">
          <span className="visit-step-num" aria-hidden>{item.step}</span>
          <div>
            <strong>{item.title}</strong>
            <p>{item.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
