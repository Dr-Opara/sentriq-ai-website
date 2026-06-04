import type { IconType } from 'react-icons';
import {
  SiClaude,
  SiDocker,
  SiFastapi,
  SiGithub,
  SiGoogle,
  SiLangchain,
  SiOpenai,
  SiPostgresql,
  SiPython,
} from 'react-icons/si';

const stackLogos: Array<{ name: string; Icon?: IconType; fallback?: string }> = [
  { name: 'Python', Icon: SiPython },
  { name: 'FastAPI', Icon: SiFastapi },
  { name: 'OpenAI', Icon: SiOpenai },
  { name: 'Claude', Icon: SiClaude },
  { name: 'LangChain', Icon: SiLangchain },
  { name: 'Microsoft 365', fallback: 'Microsoft 365' },
  { name: 'Google Workspace', Icon: SiGoogle },
  { name: 'AWS', fallback: 'AWS' },
  { name: 'Azure', fallback: 'Azure' },
  { name: 'Docker', Icon: SiDocker },
  { name: 'GitHub', Icon: SiGithub },
  { name: 'PostgreSQL', Icon: SiPostgresql },
];

export default function TechStackMarquee() {
  const repeatedLogos = [...stackLogos, ...stackLogos];

  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-white py-8 shadow-sm">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />

      <div className="min-h-[92px]">
        <div className="tech-marquee flex items-center gap-10 pl-6 pr-6 sm:pl-8 sm:pr-8">
          {repeatedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex min-w-[88px] items-center justify-center text-slate-500 opacity-80 transition duration-300 hover:text-slate-950 hover:opacity-100"
            >
              {logo.Icon ? (
                <logo.Icon className="h-10 w-10" aria-hidden="true" />
              ) : (
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 sm:text-base">
                  {logo.fallback}
                </span>
              )}
              <span className="sr-only">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
