export default function Cases(){
  const items = [
    { tag: 'Fintech', title: 'Modernizing payment platform', desc: 'Reduced checkout latency by 38% while launching 3 new markets in 90 days.' },
    { tag: 'Healthcare', title: 'Patient engagement app', desc: 'HIPAA-compliant mobile app with 4.8★ ratings and 300k MAU.' },
    { tag: 'SaaS', title: 'Analytics re-platform', desc: 'From monolith to microservices with zero downtime migration.' },
  ]
  return (
    <section id="cases" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">What we have done</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl">Snapshots from recent engagements. Full case studies available on request.</p>
          </div>
          <a href="#cta" className="hidden sm:inline-flex px-4 py-2 rounded-lg bg-slate-900 text-white dark:bg-yellow-400 dark:text-slate-900">Start your project</a>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((c) => (
            <article key={c.title} className="group rounded-2xl overflow-hidden ring-1 ring-black/5 dark:ring-white/10 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-900">
              <div className="aspect-video bg-slate-200/30 dark:bg-slate-800/50" />
              <div className="p-6">
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-yellow-600 dark:text-yellow-400">{c.tag}</span>
                <h3 className="mt-2 font-semibold text-slate-900 dark:text-white">{c.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
