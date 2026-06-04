import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import SectionHeading from '../../components/SectionHeading';

export const metadata = {
  title: 'About | SentriQ AI',
  description: 'SentriQ AI is a Texas-based AI agents, cybersecurity, and AI security company focused on secure, governed AI operations.',
};

const differencePoints = [
  'AI + Cybersecurity Expertise',
  'Security-First Development',
  'Human-in-the-Loop Design',
  'Healthcare and Legal Focus',
  'Built for Real Business Workflows',
];

const focusAreas = [
  'AI agent development',
  'Cybersecurity review and architecture',
  'Governance and risk programs',
  'Workflow automation for business teams',
  'Regulated industry AI support',
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 selection:bg-cyan-200 selection:text-slate-950">
      <Navbar />

      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="About SentriQ AI"
            title="About SentriQ AI"
            description="SentriQ AI is a Texas-based AI agents, cybersecurity, and AI security company helping businesses automate operations while keeping security, privacy, and governance at the center."
            alignCenter={false}
          />

          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-10 shadow-sm">
              <h2 className="text-3xl font-semibold text-slate-950">Who We Are</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                We are a team of AI and security practitioners focused on delivering practical, secure AI agents for businesses that need trusted, accountable automation.
              </p>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-10 shadow-sm">
              <h2 className="text-3xl font-semibold text-slate-950">Our Mission</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                To help organizations move from AI ideas to secure, working AI agents that improve operations, reduce manual workload, and strengthen cybersecurity.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-10 shadow-sm">
              <h2 className="text-3xl font-semibold text-slate-950">What Makes Us Different</h2>
              <ul className="mt-6 space-y-4 text-base leading-8 text-slate-600">
                {differencePoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-600" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-10 shadow-sm">
              <h2 className="text-3xl font-semibold text-slate-950">Our Focus Areas</h2>
              <ul className="mt-6 space-y-4 text-base leading-8 text-slate-600">
                {focusAreas.map((area) => (
                  <li key={area} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-600" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-14 rounded-[2rem] border border-slate-200 bg-slate-950 p-10 text-white shadow-2xl shadow-slate-900/10">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <p className="text-base font-semibold uppercase tracking-[0.32em] text-sky-400">Ready to move forward?</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-[4.6rem]">
                  Talk to SentriQ AI about secure agent delivery.
                </h2>
                <p className="mt-4 max-w-xl text-lg leading-8 text-slate-300">
                  We help teams design, build, and govern AI agents that automate operations without sacrificing security or compliance.
                </p>
              </div>
              <a
                href="/contact"
                className="inline-flex h-fit items-center justify-center rounded-full bg-sky-500 px-6 py-4 text-base font-semibold text-white transition hover:bg-sky-400"
              >
                Contact the Team
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
