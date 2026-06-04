export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-6 lg:px-8">
        <a href="/" className="flex items-center gap-1 text-slate-950">
          <p className="text-2xl font-bold uppercase tracking-[0.24em] text-slate-950">Sentriq <span className="text-sky-600">AI</span></p>
        </a>

        <nav className="hidden items-center gap-5 text-base md:flex">
          <a href="/services" className="rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-950 transition hover:border-sky-500 hover:bg-sky-500 hover:text-white">
            Services
          </a>
          <a href="/industries" className="rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-950 transition hover:border-sky-500 hover:bg-sky-500 hover:text-white">
            Industries
          </a>
          <a href="/about" className="rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-950 transition hover:border-sky-500 hover:bg-sky-500 hover:text-white">
            About
          </a>
          <a href="/contact" className="rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-950 transition hover:border-sky-500 hover:bg-sky-500 hover:text-white">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
