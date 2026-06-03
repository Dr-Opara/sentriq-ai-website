import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import SectionHeading from '../../components/SectionHeading';

export const metadata = {
  title: 'Industries | SentriQ AI',
  description: 'SentriQ AI builds secure AI agents for healthcare, legal, and small-to-mid-sized business industries.',
};

const industries = [
  {
    title: 'Healthcare',
    description: 'AI agents designed for clinics, dental practices, behavioral health, physical therapy, and healthcare operations.',
    challenges: [
      'Patient intake backlogs',
      'Fragmented appointment workflows',
      'Secure sensitive health information',
      'High administrative burden',
    ],
    solutions: [
      'Patient intake automation',
      'AI receptionists',
      'Appointment requests',
      'Reminder workflows',
      'FAQ automation',
      'HIPAA-aware workflows',
    ],
    outcome: 'Faster intake, better patient engagement, and secure workflows designed for regulation-sensitive healthcare teams.',
  },
  {
    title: 'Legal',
    description: 'Custom AI agents supporting law firms, legal operations, and solo practices with intake, document workflows, and knowledge access.',
    challenges: [
      'Slow client intake',
      'Time-consuming document review',
      'Complex scheduling needs',
      'Knowledge gaps across teams',
    ],
    solutions: [
      'Client intake',
      'Consultation scheduling',
      'Document workflow support',
      'Case information collection',
      'Internal knowledge assistants',
    ],
    outcome: 'More efficient legal workflows, improved client response, and secure support for sensitive practice data.',
  },
  {
    title: 'Small & Mid-Sized Businesses',
    description: 'AI automation for professional services, home services, local businesses, and growing operations teams.',
    challenges: [
      'Customer service resource limits',
      'Manual scheduling and follow-up',
      'Inefficient document handling',
      'Scattered internal workflows',
    ],
    solutions: [
      'Customer support automation',
      'Scheduling',
      'Sales follow-up',
      'Document processing',
      'Internal workflow automation',
    ],
    outcome: 'Improved operational efficiency, faster customer response, and automation that supports business growth responsibly.',
  },
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 selection:bg-cyan-200 selection:text-slate-950">
      <Navbar />

      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Industries"
            title="Built for High-Trust Industries"
            description="SentriQ AI builds secure AI agents for teams that rely on trust, compliance, and efficient operations."
            alignCenter={false}
          />

          <div className="mt-14 grid gap-8">
            {industries.map((industry) => (
              <div key={industry.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <div className="flex flex-wrap items-center gap-4">
                  <p className="text-xl font-semibold text-slate-950">{industry.title}</p>
                  <span className="rounded-full border border-sky-200 bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-sky-700">
                    Industry Focus
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">{industry.description}</p>

                <div className="mt-8 grid gap-6 lg:grid-cols-3">
                  <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Challenges</p>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                      {industry.challenges.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-600">SentriQ AI solutions</p>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                      {industry.solutions.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-600">Outcomes</p>
                    <p className="mt-4 text-sm leading-7 text-slate-700">{industry.outcome}</p>
                    <a
                      href="/contact"
                      className="mt-6 inline-flex rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-500"
                    >
                      Talk to Us
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
