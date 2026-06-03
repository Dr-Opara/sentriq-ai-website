import type { ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  alignCenter?: boolean;
};

export default function SectionHeading({ eyebrow, title, description, alignCenter }: SectionHeadingProps) {
  return (
    <div className={alignCenter ? 'text-center' : ''}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-500">{eyebrow}</p>
      ) : null}
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">{description}</p> : null}
    </div>
  );
}
