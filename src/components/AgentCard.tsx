type AgentCardProps = {
  title: string;
  description: string;
  label?: string;
};

export default function AgentCard({ title, description, label }: AgentCardProps) {
  return (
    <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      {label ? (
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600">{label}</p>
      ) : null}
      <h3 className="mt-5 text-xl font-semibold text-slate-950">{title}</h3>
      <p className="mt-4 text-sm leading-6 text-slate-600">{description}</p>
    </article>
  );
}
