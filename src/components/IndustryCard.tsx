type IndustryCardProps = {
  title: string;
  highlight: string;
  points: string[];
  outcome: string;
};

export default function IndustryCard({ title, highlight, points, outcome }: IndustryCardProps) {
  return (
    <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-600">{title}</p>
      <p className="mt-4 text-sm leading-6 text-slate-600">{highlight}</p>
      <ul className="mt-6 space-y-3 text-sm text-slate-700">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-cyan-50 text-xs font-semibold text-cyan-600">✓</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm font-semibold text-slate-900">Outcome: {outcome}</p>
    </article>
  );
}
