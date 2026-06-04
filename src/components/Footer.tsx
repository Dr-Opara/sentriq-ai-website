export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-700">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16 sm:flex-row sm:items-start sm:justify-between sm:px-8">
        <div>
          <p className="text-base font-semibold uppercase tracking-[0.24em] text-slate-950">Sentriq <span className="text-sky-600">AI</span></p>
          <p className="mt-4 max-w-sm text-base leading-7 text-slate-600">
            SentriQ AI is an Agentic AI design and delivery firm, helping organizations build and manage AI Agents that become a permanent, trusted part of how they operate.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-slate-950">Solutions</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li><a href="/services" className="transition hover:text-slate-950">Services</a></li>
              <li><a href="/industries" className="transition hover:text-slate-950">Industries</a></li>
              <li><a href="/about" className="transition hover:text-slate-950">About</a></li>
              <li><a href="/contact" className="transition hover:text-slate-950">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-950">Contact</p>
            <p className="mt-4 text-sm text-slate-600">hello@sentriq.ai</p>
            <p className="text-sm text-slate-600">+1 (555) 012-3456</p>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 px-6 py-4 text-center text-sm text-slate-500 sm:px-8">
        © {new Date().getFullYear()} SentriQ AI. All rights reserved.
      </div>
    </footer>
  );
}
