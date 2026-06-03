export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4 lg:px-8">
        <div className="flex items-center gap-3 text-slate-950">
          <div className="inline-flex h-10 min-w-[3rem] items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-sm">
            SQ
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-950">SentriQ AI</p>
          </div>
        </div>

        <nav className="hidden items-center gap-3 text-sm md:flex">
          <a href="#about" className="rounded-full border border-slate-200 bg-white px-4 py-2 font-semibold text-slate-950 transition hover:bg-sky-500 hover:text-white">
            About Us
          </a>
          <a href="#stories" className="rounded-full border border-slate-200 bg-white px-4 py-2 font-semibold text-slate-950 transition hover:bg-sky-500 hover:text-white">
            Success Stories
          </a>
          <a href="#final-cta" className="rounded-full border border-slate-200 bg-white px-4 py-2 font-semibold text-slate-950 transition hover:bg-sky-500 hover:text-white">
            Build My Agent
          </a>
        </nav>
      </div>
    </header>
  );
}
