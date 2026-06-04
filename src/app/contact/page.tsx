import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import SectionHeading from '../../components/SectionHeading';

export const metadata = {
  title: 'Contact | SentriQ AI',
  description: 'Tell SentriQ AI what you want to automate or secure and get help identifying the right AI agent, security, or governance solution.',
};

const serviceOptions = [
  'AI Agent Development',
  'Cybersecurity Services',
  'AI Security & Governance',
  'Healthcare AI Automation',
  'Legal AI Automation',
  'Not Sure Yet',
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 selection:bg-cyan-200 selection:text-slate-950">
      <Navbar />

      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Contact"
            title="Tell Us What You Want to Automate or Secure"
            description="Share your workflow, business challenge, or security need. We’ll help you identify the right AI agent, cybersecurity service, or AI governance solution."
            alignCenter={false}
          />

          <div className="mt-14 grid gap-10 lg:grid-cols-[0.95fr_0.65fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-10 shadow-sm">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-base font-semibold text-slate-900">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="mt-3 w-full rounded-3xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-base font-semibold text-slate-900">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="mt-3 w-full rounded-3xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-base font-semibold text-slate-900">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Company name"
                    className="mt-3 w-full rounded-3xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                  />
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                  <div>
                    <label htmlFor="industry" className="block text-base font-semibold text-slate-900">
                      Industry
                    </label>
                    <input
                      id="industry"
                      name="industry"
                      type="text"
                      placeholder="Industry"
                      className="mt-3 w-full rounded-3xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-base font-semibold text-slate-900">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="mt-3 w-full rounded-3xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                    >
                      {serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-base font-semibold text-slate-900">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Share your workflow, business challenge, or security need."
                    className="mt-3 w-full rounded-[1.75rem] border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-sky-600 px-8 py-4 text-base font-semibold text-white transition hover:bg-sky-500"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>

            <aside className="space-y-6 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <div className="rounded-3xl bg-sky-500/10 p-6">
                <p className="text-base font-semibold uppercase tracking-[0.3em] text-sky-600">Contact</p>
                <p className="mt-4 text-3xl font-semibold text-slate-950">Texas, USA</p>
              </div>

              <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6">
                <p className="text-base font-semibold text-slate-950">Email</p>
                <a href="mailto:contact@sentriqai.com" className="text-base text-sky-600 hover:underline">
                  contact@sentriqai.com
                </a>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6">
                <p className="text-base font-semibold text-slate-950">Response time</p>
                <p className="mt-3 text-base leading-7 text-slate-600">We typically respond within 1–2 business days.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
