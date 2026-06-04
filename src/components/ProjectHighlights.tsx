import { PROJECT_HIGHLIGHTS } from '@/lib/project';

export default function ProjectHighlights({ className = '' }: { className?: string }) {
  return (
    <ul className={`project-highlights ${className}`.trim()} aria-label="Destaques do projeto">
      {PROJECT_HIGHLIGHTS.map((item) => (
        <li key={item.label} className="project-highlight-card">
          <span className="project-highlight-label">{item.label}</span>
          <strong className="project-highlight-value">{item.value}</strong>
          <span className="project-highlight-detail">{item.detail}</span>
        </li>
      ))}
    </ul>
  );
}
