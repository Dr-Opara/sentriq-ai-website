type BlogCardProps = {
  title: string;
  summary: string;
  category: string;
  readTime: string;
  href: string;
};

export default function BlogCard({ title, summary, category, readTime, href }: BlogCardProps) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center gap-3">
        <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
          {category}
        </span>
        <span className="text-sm font-medium text-slate-500">{readTime}</span>
      </div>

      <h3 className="mt-6 text-2xl font-semibold tracking-tight text-slate-950">{title}</h3>
      <p className="mt-4 text-base leading-7 text-slate-600">{summary}</p>

      <a
        href={href}
        className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-sky-600 transition hover:text-sky-500"
      >
        Read more
        <span aria-hidden="true">→</span>
      </a>
    </article>
  );
}
