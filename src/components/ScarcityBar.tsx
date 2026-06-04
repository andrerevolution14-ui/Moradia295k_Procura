import { PROJECT, UNITS_LABEL } from '@/lib/project';

export default function ScarcityBar() {
  return (
    <div className="scarcity-banner scarcity-banner--compact">
      <div className="container scarcity-inner">
        <div className="scarcity-left">
          <span className="scarcity-dot" aria-hidden />
          <strong>{UNITS_LABEL}</strong>
        </div>
        <div className="scarcity-right">
          <strong>{PROJECT.price}€</strong>
          <span className="scarcity-sep" aria-hidden>·</span>
          <span>Avaliação bancária <strong>{PROJECT.priceAppraisal}€</strong></span>
        </div>
      </div>
    </div>
  );
}
