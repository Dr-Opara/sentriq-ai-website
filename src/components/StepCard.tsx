type StepCardProps = {
  step: string;
  title: string;
  description: string;
};

export default function StepCard({ step, title, description }: StepCardProps) {
  return (
    <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="inline-flex rounded-full bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-600">
        {step}
      </div>
      <h3 className="mt-5 text-xl font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </article>
  );
}
