import { CTA_PRIMARY } from '@/lib/cta';

const ArrowIcon = () => (
  <svg className="btn-arrow" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
    <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
  </svg>
);

export default function SectionCta({ note }: { note?: string }) {
  return (
    <div className="section-cta">
      <a href="#formulario" className="btn btn--gold btn--lg">
        {CTA_PRIMARY}
        <ArrowIcon />
      </a>
      {note ? <p className="cta-microcopy">{note}</p> : null}
    </div>
  );
}
