import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import SectionHeading from '../../components/SectionHeading';

export const metadata = {
  title: 'Services | SentriQ AI',
  description: 'SentriQ AI helps businesses design, build, secure, and manage AI-powered workflows with cybersecurity and governance built-in.',
};

const serviceSections = [
  {
    title: 'AI Agent Development',
    description: 'Custom AI agents built for workflow automation, customer interactions, and business process intelligence.',
    capabilities: [
      'AI Receptionists',
      'Patient Intake Agents',
      'Legal Intake Agents',
      'Document Processing Agents',
      'Customer Support Agents',
      'Scheduling Agents',
      'Workflow Automation Agents',
      'Knowledge Base Agents',
    ],
    outcome: 'Faster customer responses, more efficient operations, and AI agents that improve business productivity.',
  },
  {
    title: 'Cybersecurity Services',
    description: 'Security advisory and review services tailored for AI programs, cloud systems, and enterprise operations.',
    capabilities: [
      'Vulnerability Management',
      'Cloud Security Reviews',
      'Security Risk Assessments',
      'Security Architecture Reviews',
      'Compliance Readiness',
      'Security Program Advisory',
    ],
    outcome: 'Stronger security posture, reduced risk exposure, and confidence in your AI-enabled environment.',
  },
  {
    title: 'AI Security & Governance',
    description: 'Governance frameworks, risk controls, and oversight built into AI planning, deployment, and operations.',
    capabilities: [
      'AI Risk Assessments',
      'AI Governance Programs',
      'AI Vendor Risk Reviews',
      'Prompt Injection Risk Awareness',
      'AI Policy Development',
      'Secure AI Adoption Support',
    ],
    outcome: 'Responsible AI adoption that keeps security, compliance, and oversight at the center.',
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 selection:bg-cyan-200 selection:text-slate-950">
      <Navbar />

      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Services"
            title="AI Agents, Cybersecurity, and AI Security Services"
            description="SentriQ AI helps businesses design, build, secure, and manage AI-powered workflows with cybersecurity and governance built in."
            alignCenter={false}
          />

          <div className="mt-14 grid gap-8">
            {serviceSections.map((section) => (
              <div key={section.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <h2 className="text-3xl font-semibold text-slate-950">{section.title}</h2>
                <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">{section.description}</p>

                <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Capabilities</p>
                    <ul className="mt-4 grid gap-2 text-sm leading-7 text-slate-700 sm:grid-cols-2">
                      {section.capabilities.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-950">Business outcomes</p>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{section.outcome}</p>
                    <a
                      href="/contact"
                      className="mt-8 inline-flex rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-500"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
