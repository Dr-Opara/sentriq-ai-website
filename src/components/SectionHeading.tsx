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
        <p className="text-base font-semibold uppercase tracking-[0.32em] text-cyan-500">{eyebrow}</p>
      ) : null}
      <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl md:text-[3.75rem]">{title}</h2>
      {description ? <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">{description}</p> : null}
    </div>
  );
}
