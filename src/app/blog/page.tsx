import BlogCard from '../../components/BlogCard';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

export const metadata = {
  title: 'Blog | SentriQ AI',
  description: 'Insights and guidance for organizations building AI agents, managing risk, and adopting secure automation with confidence.',
};

const featuredArticle = {
  title: 'AI Agents in Business Operations: Use Cases, Benefits, Risks, and Best Practices',
  author: 'SentriQ AI Team',
  readTime: '5 min read',
  summary:
    'Learn how AI agents help businesses automate workflows, improve customer response, reduce manual work, and manage security, governance, and human oversight.',
  category: 'Business Automation',
  href: '/blog/ai-agents-in-business-operations',
};

const blogPosts = [
  {
    title: 'Custom AI Agent Development: A Practical Guide for Businesses',
    summary: 'A structured approach to planning, building, and deploying AI agents that match real operations.',
    category: 'Agentic AI',
    readTime: '6 min read',
    href: '/blog/custom-ai-agent-development',
  },
  {
    title: 'How to Evaluate AI Agents Before Putting Them Into Production',
    summary: 'Key checks for performance, governance, security, and operational readiness before launch.',
    category: 'AI Governance',
    readTime: '5 min read',
    href: '/blog/evaluate-ai-agents-for-production',
  },
  {
    title: 'Agentic AI Business Impact: How AI Agents Change Daily Operations',
    summary: 'Examples of how intelligent agents transform task workflows, communications, and decision support.',
    category: 'Business Automation',
    readTime: '6 min read',
    href: '/blog/agentic-ai-business-impact',
  },
  {
    title: 'What Is an Agentic AI Strategy?',
    summary: 'A practical definition of agentic AI and why strategy matters for sustainable business adoption.',
    category: 'Agentic AI',
    readTime: '4 min read',
    href: '/blog/agentic-ai-strategy',
  },
  {
    title: 'How to Choose an AI Agent Development Partner',
    summary: 'What to look for in vendor expertise, security practices, and real-world agent delivery.',
    category: 'Business Automation',
    readTime: '5 min read',
    href: '/blog/choose-ai-agent-partner',
  },
  {
    title: 'AI Agent Risk Management: Security, Governance, and Human Oversight',
    summary: 'A framework for protecting systems and people while AI agents operate on business data.',
    category: 'AI Security',
    readTime: '5 min read',
    href: '/blog/ai-agent-risk-management',
  },
  {
    title: 'AI Agents for Healthcare: Intake, Scheduling, and Patient Support',
    summary: 'How healthcare teams can use AI agents to improve patient access and reduce administrative burden.',
    category: 'Healthcare AI',
    readTime: '6 min read',
    href: '/blog/ai-agents-healthcare',
  },
  {
    title: 'AI Agents for Law Firms: Client Intake, Document Workflows, and Case Support',
    summary: 'Practical uses for AI agents in legal operations, intake, tracking, and document processing.',
    category: 'Legal AI',
    readTime: '6 min read',
    href: '/blog/ai-agents-law-firms',
  },
  {
    title: 'AI Agents for Real Estate: Lead Qualification, Showing Requests, and CRM Follow-Up',
    summary: 'Use cases for real estate teams to automate leads, appointments, and client communications.',
    category: 'Real Estate AI',
    readTime: '5 min read',
    href: '/blog/ai-agents-real-estate',
  },
  {
    title: 'AI Agent Lifecycle Management: Build, Test, Deploy, Secure, and Manage',
    summary: 'A lifecycle view for maintaining AI agents with continuous testing, monitoring, and governance.',
    category: 'AI Governance',
    readTime: '5 min read',
    href: '/blog/ai-agent-lifecycle-management',
  },
  {
    title: 'AI Agent vs. Chatbot: What Businesses Need to Know',
    summary: 'A comparison of agentic automation and conversational bots for business workflows.',
    category: 'Agentic AI',
    readTime: '4 min read',
    href: '/blog/ai-agent-vs-chatbot',
  },
  {
    title: 'Prompt Injection and AI Security: What Business Leaders Should Understand',
    summary: 'Practical guidance on defending AI agents from prompt manipulation and unsafe outputs.',
    category: 'AI Security',
    readTime: '6 min read',
    href: '/blog/prompt-injection-ai-security',
  },
  {
    title: 'Secure AI Adoption: A Guide for Growing Businesses',
    summary: 'Best practices for introducing AI agents without compromising governance or trust.',
    category: 'AI Governance',
    readTime: '5 min read',
    href: '/blog/secure-ai-adoption',
  },
  {
    title: 'AI Vendor Risk Reviews: Questions to Ask Before Using AI Tools',
    summary: 'A checklist for evaluating third-party AI providers and the controls they offer.',
    category: 'AI Security',
    readTime: '4 min read',
    href: '/blog/ai-vendor-risk-reviews',
  },
  {
    title: 'Data Security for AI Agents: Access Control, Audit Logs, and Privacy',
    summary: 'How to protect sensitive data when AI agents connect to systems and workflows.',
    category: 'AI Security',
    readTime: '5 min read',
    href: '/blog/data-security-ai-agents',
  },
  {
    title: 'AI Risk Assessments: How to Identify Gaps Before Deployment',
    summary: 'A practical review process for spotting security, privacy, and governance risks early.',
    category: 'AI Governance',
    readTime: '5 min read',
    href: '/blog/ai-risk-assessments',
  },
  {
    title: 'Managed AI Agents: Why Businesses Need Ongoing Monitoring',
    summary: 'Why agents perform better when they are actively monitored, updated, and governed.',
    category: 'Business Automation',
    readTime: '5 min read',
    href: '/blog/managed-ai-agents',
  },
  {
    title: 'Human-in-the-Loop AI: When Agents Should Escalate to People',
    summary: 'Guidance on when AI agents should defer to humans for review, approval, or intervention.',
    category: 'AI Governance',
    readTime: '4 min read',
    href: '/blog/human-in-the-loop-ai',
  },
  {
    title: 'Agentic AI for Customer Support: Benefits, Pitfalls, and Best Practices',
    summary: 'How customer support teams can use agents for faster service while maintaining control.',
    category: 'Business Automation',
    readTime: '5 min read',
    href: '/blog/agentic-ai-customer-support',
  },
  {
    title: 'How to Measure ROI from AI Agent Projects',
    summary: 'Metrics and evaluation techniques for understanding the business value of AI agents.',
    category: 'Business Automation',
    readTime: '5 min read',
    href: '/blog/measure-roi-ai-agent-projects',
  },
];

const recentPosts = blogPosts.slice(0, 3);

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 selection:bg-cyan-200 selection:text-slate-950">
      <Navbar />

      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-base font-semibold uppercase tracking-[0.32em] text-sky-500">Insights</p>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Insights on Agentic AI, AI Security, and Secure Automation
            </h1>
            <p className="mt-6 text-xl leading-8 text-slate-600 sm:text-2xl">
              Practical guidance for organizations building AI agents, securing workflows, and adopting AI with confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 pb-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-3xl">
                <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
                  Featured article
                </span>
                <h2 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                  {featuredArticle.title}
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                  {featuredArticle.summary}
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                  <span>{featuredArticle.author}</span>
                  <span className="inline-flex h-1.5 w-1.5 rounded-full bg-slate-400" />
                  <span>{featuredArticle.readTime}</span>
                </div>
              </div>

              <div className="mt-8 flex h-full min-w-[18rem] flex-1 items-end lg:mt-0 lg:justify-end">
                <a
                  href={featuredArticle.href}
                  className="inline-flex rounded-full bg-slate-950 px-8 py-4 text-base font-semibold text-white transition hover:bg-sky-500 hover:text-white"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-base font-semibold uppercase tracking-[0.32em] text-sky-500">Explore</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Browse recent thinking on agentic AI and secure automation.
              </h2>
            </div>
            <p className="text-sm text-slate-500">20 articles ready for research and planning.</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.title} {...post} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-base font-semibold uppercase tracking-[0.32em] text-sky-500">Recent Posts</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  Latest coverage for your AI agent journey.
                </h2>
              </div>
              <a
                href="/blog"
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:border-sky-500 hover:bg-sky-500 hover:text-white"
              >
                View all articles
              </a>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {recentPosts.map((post) => (
                <article key={post.title} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                  <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
                    {post.category}
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-slate-950">{post.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{post.summary}</p>
                  <a
                    href={post.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-600 transition hover:text-sky-500"
                  >
                    Read more
                    <span aria-hidden="true">→</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-20 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-base font-semibold uppercase tracking-[0.32em] text-sky-400">
                Ready to move from AI experiments to managed AI agents?
              </p>
              <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Share your use case and workflow with us.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                SentriQ AI can help you design, build, test, deploy, secure, and manage your custom AI agent.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-8 py-4 text-base font-semibold text-white transition hover:bg-sky-400"
              >
                Build My AI Agent
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-transparent px-8 py-4 text-base font-semibold text-white transition hover:border-sky-400 hover:bg-slate-900/80"
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
