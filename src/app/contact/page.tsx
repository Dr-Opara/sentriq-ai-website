'use client';

import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import SectionHeading from '../../components/SectionHeading';

const serviceOptions = [
  'AI Agent Development',
  'Cybersecurity Services',
  'AI Security & Governance',
  'Healthcare AI Automation',
  'Legal AI Automation',
  'Not Sure Yet',
];

const initialForm = {
  name: '',
  email: '',
  company: '',
  industry: '',
  serviceInterestedIn: serviceOptions[0],
  message: '',
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const isFormValid = form.name.trim() && form.email.trim() && form.message.trim();

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    setStatusMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Unable to send message.');
      }

      setStatus('success');
      setStatusMessage('Your message was sent successfully. We’ll follow up soon.');
      setForm(initialForm);
    } catch (error) {
      setStatus('error');
      setStatusMessage(error instanceof Error ? error.message : 'Submission failed. Please try again.');
    }
  };

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
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-base font-semibold text-slate-900">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
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
                    value={form.email}
                    onChange={handleChange}
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
                    value={form.company}
                    onChange={handleChange}
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
                      value={form.industry}
                      onChange={handleChange}
                      placeholder="Industry"
                      className="mt-3 w-full rounded-3xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                    />
                  </div>

                  <div>
                    <label htmlFor="serviceInterestedIn" className="block text-base font-semibold text-slate-900">
                      Service Interested In
                    </label>
                    <select
                      id="serviceInterestedIn"
                      name="serviceInterestedIn"
                      value={form.serviceInterestedIn}
                      onChange={handleChange}
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
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Share your workflow, business challenge, or security need."
                    className="mt-3 w-full rounded-[1.75rem] border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                  />
                </div>

                {status === 'success' && (
                  <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
                    {statusMessage}
                  </div>
                )}
                {status === 'error' && (
                  <div className="rounded-3xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                    {statusMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={!isFormValid || status === 'loading'}
                  className="inline-flex items-center justify-center rounded-full bg-sky-600 px-8 py-4 text-base font-semibold text-white transition hover:bg-sky-500 disabled:cursor-not-allowed disabled:bg-slate-300"
                >
                  {status === 'loading' ? 'Sending…' : 'Submit Inquiry'}
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
                <a href="mailto:hello@getsentriq.ai" className="text-base text-sky-600 hover:underline">
                  hello@getsentriq.ai
                </a>
              </div>

              <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6">
                <p className="text-base font-semibold text-slate-950">Follow</p>
                <div className="space-y-3 text-sm text-slate-600">
                  <a
                    href="https://x.com/GetSentriqAI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 transition hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700"
                  >
                    <span className="font-semibold text-slate-950">X / Twitter</span>
                    <span className="block text-slate-600">@GetSentriqAI</span>
                  </a>
                  <a
                    href="https://linkedin.com/company/sentriqai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 transition hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700"
                  >
                    <span className="font-semibold text-slate-950">LinkedIn</span>
                    <span className="block text-slate-600">SentriQAI</span>
                  </a>
                  <a
                    href="https://instagram.com/sentriqai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 transition hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700"
                  >
                    <span className="font-semibold text-slate-950">Instagram</span>
                    <span className="block text-slate-600">@sentriqai</span>
                  </a>
                </div>
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
