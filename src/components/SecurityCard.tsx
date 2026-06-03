type SecurityCardProps = {
  title: string;
};

export default function SecurityCard({ title }: SecurityCardProps) {
  return (
    <li className="rounded-[1.75rem] border border-slate-800/80 bg-slate-900/95 px-6 py-5 text-sm text-slate-100 shadow-lg shadow-cyan-500/10">
      {title}
    </li>
  );
}
