"use client";

export default function HeroForm() {
  return (
    <form className="space-y-6" onSubmit={(event) => event.preventDefault()}>
      <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-600">Start your custom build</p>
        <h3 className="mt-3 text-2xl font-semibold text-slate-950">Tell us what your AI agent should do.</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          We’ll review your request and connect you with a secure AI agent solution.
        </p>
      </div>

      <div>
        <label htmlFor="agentDescription" className="block text-sm font-medium text-slate-700">
          I need an AI agent that can...
        </label>
        <textarea
          id="agentDescription"
          rows={4}
          className="mt-3 w-full rounded-[1.75rem] border border-slate-200 bg-white px-4 py-4 text-sm text-slate-900 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
          placeholder="Capture intake, surface risk, or automate workflows for your team"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700">
          Name
          <input
            type="text"
            className="mt-3 w-full rounded-[1.75rem] border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
            placeholder="Your name"
          />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Email
          <input
            type="email"
            className="mt-3 w-full rounded-[1.75rem] border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700">
          Company
          <input
            type="text"
            className="mt-3 w-full rounded-[1.75rem] border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
            placeholder="Company name"
          />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Industry
          <select
            className="mt-3 w-full rounded-[1.75rem] border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
          >
            <option>Healthcare</option>
            <option>Legal</option>
            <option>Small & Mid-Sized Businesses</option>
            <option>Cybersecurity</option>
            <option>Other</option>
          </select>
        </label>
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-cyan-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500"
      >
        Build My Agent
      </button>
    </form>
  );
}
