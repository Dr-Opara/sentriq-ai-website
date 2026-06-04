import AgentCard from '../components/AgentCard';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import SectionHeading from '../components/SectionHeading';

const categories = [
  'Healthcare',
  'Legal',
  'Customer Support',
  'Scheduling',
  'Document Processing',
  'Cybersecurity',
  'Compliance',
  'Operations',
];

const stackLabels = [
  'Python',
  'FastAPI',
  'OpenAI',
  'Claude',
  'LangChain',
  'Microsoft 365',
  'Google Workspace',
  'AWS',
  'Azure',
];

const engagementModels = [
  {
    title: 'AI Strategy & Discovery',
    description: 'Define secure, compliant AI use cases and a clear path from concept to production.',
  },
  {
    title: 'Custom Agent Build',
    description: 'Design and deploy AI agents that work with your systems, controls, and workflows.',
  },
  {
    title: 'Managed AI Agent Support',
    description: 'Operate, govern, and improve your agents with ongoing security and oversight.',
  },
];

const differenceCards = [
  {
    title: 'Human-in-the-loop by design',
    description: 'We design agents with review, approval, and escalation pathways for sensitive actions.',
  },
  {
    title: 'Secure and governed',
    description: 'Built with access control, audit logging, and security-first workflows.',
  },
  {
    title: 'AI + Cybersecurity expertise',
    description: 'We combine AI engineering with cybersecurity and governance experience.',
  },
  {
    title: 'Managed, not just built',
    description: 'We design, deploy, monitor, and continuously improve your AI agents.',
  },
];

const securityHighlights = [
  'Multi-layered access control',
  'Private by default',
  'Secure infrastructure',
  'Human review for sensitive actions',
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 selection:bg-cyan-200 selection:text-slate-950">
      <Navbar />

      <section className="relative overflow-hidden bg-white px-6 py-20 sm:px-8 lg:px-10">
        <div className="pointer-events-none absolute -left-16 top-12 h-72 w-72 rounded-full bg-sky-100/70 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-24 h-72 w-72 rounded-full bg-sky-100/60 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-base font-semibold uppercase tracking-[0.32em] text-slate-600">Build the AI agent you need</p>
            <h1 className="mt-8 text-4xl font-semibold tracking-tight text-slate-950 sm:text-[4.75rem] md:text-[5.5rem]">
              Describe the AI Agent you need.
            </h1>
            <p className="mt-3 text-[3rem] font-semibold tracking-tight text-sky-600 sm:text-[4.25rem] md:text-[4.8rem]">
              We’ll build, test, deploy, secure, and manage it for you.
            </p>
            <p className="mx-auto mt-8 max-w-2xl text-xl leading-9 text-slate-600 sm:text-2xl">
              Production-grade AI agents built around your business, with cybersecurity and governance built in.
            </p>

            <div className="mx-auto mt-12 max-w-3xl rounded-[2rem] border border-slate-200 bg-slate-50 p-4 shadow-sm shadow-slate-200/40">
              <div className="flex flex-col gap-3 rounded-[1.75rem] bg-white p-4 sm:flex-row sm:items-center">
                <input
                  type="text"
                  placeholder="Create an AI agent that manages patient intake, schedules appointments, and answers routine questions."
                  className="min-w-0 flex-1 rounded-full border border-slate-200 bg-white px-6 py-4 text-base text-slate-900 placeholder:text-slate-400 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-100"
                />
                <button
                  type="button"
                  className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-sky-600 text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-500"
                  aria-label="Submit agent request"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                    <path d="M5 12h14" />
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                </button>
              </div>

              <div className="mt-6 text-left text-base text-slate-500 sm:text-center">
                <span className="font-semibold text-slate-900">Not sure where to start?</span> Explore AI Agents for:
              </div>

              <div className="mt-4 flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-5 py-3 text-base font-semibold text-slate-950 transition hover:border-sky-400 hover:bg-sky-600 hover:text-white"
                    type="button"
                  >
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-sky-600" />
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Custom integrations"
            title="Custom-made agents on the systems you already run"
            description="We build AI solutions that connect to your existing tools, platforms, and enterprise operations."
            alignCenter={true}
          />

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {stackLabels.map((label) => (
              <div key={label} className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-5 text-center text-base font-semibold text-slate-700 shadow-sm">
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="stories" className="bg-sky-50 px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our engagement models"
            title="Our engagement models"
            description="Some organizations need an AI strategy before anything is built. Others need someone to take a workflow from idea to production. We start where you are."
            alignCenter={true}
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {engagementModels.map((model) => (
              <div key={model.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-slate-950">{model.title}</h3>
                <p className="mt-4 text-base leading-8 text-slate-600">{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-20 sm:px-8 lg:px-10 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-base font-semibold uppercase tracking-[0.32em] text-sky-400">Describe your agent.</p>
              <h2 className="mt-6 text-4xl font-semibold tracking-tight text-sky-500 sm:text-[4.5rem]">
                Describe your agent.
              </h2>
              <p className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-[4.5rem]">
                We’ll bring it to life.
              </p>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                We build custom AI agents that automate your workflows with security, governance, and human oversight.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="flex-1 rounded-full border border-slate-700 bg-slate-900/90 px-5 py-4 text-base text-slate-200 shadow-sm">
                  Build an AI agent that resolves customer inquiries 24/7
                </div>
                <button
                  type="button"
                  className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-sky-500 text-white transition hover:bg-sky-400"
                  aria-label="Submit agent idea"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                    <path d="M5 12h14" />
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="relative mx-auto flex h-full max-w-md items-center justify-center rounded-[2rem] border border-slate-800 bg-slate-900/95 px-8 py-10 shadow-2xl shadow-slate-950/30">
              <div className="absolute left-8 top-8 h-20 w-20 rounded-full bg-slate-800/80" />
              <div className="absolute right-10 bottom-10 h-24 w-24 rounded-full bg-sky-500/10 blur-2xl" />
              <div className="relative flex h-60 w-60 flex-col items-center justify-center gap-4 rounded-[2rem] bg-slate-950 px-6 py-8 text-center shadow-inner shadow-slate-950/40">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-sky-500/20 text-sky-400 ring-1 ring-sky-500/30">
                  <span className="text-4xl">🤖</span>
                </div>
                <div>
                  <p className="text-xl font-semibold text-white">AI agent studio</p>
                  <p className="mt-3 text-base leading-7 text-slate-400">A clean production-ready command center for your custom agent.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="difference" className="bg-sky-50 px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="The SentriQ AI difference"
            title="The SentriQ AI difference"
            description="A premium approach to agent design, security, governance, and ongoing managed operations."
            alignCenter={true}
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {differenceCards.map((card) => (
              <div key={card.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-600">
                  <span className="text-lg font-semibold">✓</span>
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-slate-950">{card.title}</h3>
                <p className="mt-4 text-base leading-8 text-slate-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-slate-200 bg-slate-50 p-10 shadow-sm">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="flex items-center justify-center rounded-[2rem] bg-sky-500/10 p-10 text-slate-950">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-sky-500/20 text-sky-600">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-10 w-10">
                  <path d="M12 2l4 4-4 4-4-4 4-4z" />
                  <path d="M8 10v10" />
                  <path d="M16 10v10" />
                </svg>
              </div>
            </div>

            <div>
              <p className="text-base font-semibold uppercase tracking-[0.32em] text-sky-600">Data security built into every Agent</p>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Data security built into every Agent
              </h2>
              <div className="mt-8 grid gap-4">
                {securityHighlights.map((item) => (
                  <div key={item} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <p className="text-base font-semibold text-slate-950">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="final-cta" className="relative overflow-hidden bg-slate-950 px-6 py-24 sm:px-8 lg:px-10 text-white">
        <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="pointer-events-none absolute right-0 bottom-0 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" />

        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-slate-800 bg-slate-950/95 p-10 shadow-2xl shadow-slate-900/40">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-base font-semibold uppercase tracking-[0.32em] text-sky-400">Ready for the next step?</p>
              <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Ready to move from AI experiments to <span className="text-sky-500">managed AI Agents</span>?
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300">
                Share your use case and workflow with us, and we’ll help design, build, secure, and manage a custom AI agent for your business.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
              <a href="#home" className="inline-flex items-center justify-center rounded-full border border-sky-500 bg-slate-950 px-6 py-4 text-base font-semibold text-sky-500 transition hover:bg-sky-500/10 hover:text-white">
                Build My AI Agent
              </a>
              <a href="#about" className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-4 text-base font-semibold text-white transition hover:bg-sky-400">
                Book a Call
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
