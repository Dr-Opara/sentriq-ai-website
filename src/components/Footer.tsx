import { Briefcase, Camera } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-slate-700">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-900">Company</p>
            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              <li>
                <a href="/about" className="transition text-slate-900 hover:text-sky-600">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="transition text-slate-900 hover:text-sky-600">
                  Contact
                </a>
              </li>
              <li>
                <a href="/services" className="transition text-slate-900 hover:text-sky-600">
                  Services
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-900">Resources</p>
            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              <li>
                <a href="/blog" className="transition text-slate-900 hover:text-sky-600">
                  Blog
                </a>
              </li>
              <li>
                <a href="/use-cases" className="transition text-slate-900 hover:text-sky-600">
                  AI Agent Use Cases
                </a>
              </li>
              <li>
                <a href="/security" className="transition text-slate-900 hover:text-sky-600">
                  Security & Governance
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-900">Industries</p>
            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              <li>
                <a href="/industries#healthcare" className="transition text-slate-900 hover:text-sky-600">
                  Healthcare
                </a>
              </li>
              <li>
                <a href="/industries#legal" className="transition text-slate-900 hover:text-sky-600">
                  Legal
                </a>
              </li>
              <li>
                <a href="/industries#real-estate" className="transition text-slate-900 hover:text-sky-600">
                  Real Estate
                </a>
              </li>
              <li>
                <a href="/industries#growing-businesses" className="transition text-slate-900 hover:text-sky-600">
                  Growing Businesses
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-900">Contact</p>
              <div className="mt-5 space-y-3 text-sm text-slate-600">
                <a
                  href="mailto:hello@getsentriq.ai"
                  className="block transition text-slate-900 hover:text-sky-600"
                >
                  hello@getsentriq.ai
                </a>
                <p className="text-slate-900">+1 (346) 745-4398</p>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://instagram.com/sentriqai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SentriQ AI on Instagram"
                className="text-slate-500 transition hover:text-sky-600"
              >
                <Camera size={18} />
              </a>
              <a
                href="https://x.com/GetSentriqAI"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SentriQ AI on X"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 transition hover:border-sky-300 hover:text-sky-600"
              >
                <span className="text-sm font-semibold">X</span>
              </a>
              <a
                href="https://linkedin.com/company/sentriqai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SentriQ AI on LinkedIn"
                className="text-slate-500 transition hover:text-sky-600"
              >
                <Briefcase size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">
          © 2026 SentriQ AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
