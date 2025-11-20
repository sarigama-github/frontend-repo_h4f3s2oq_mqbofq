export default function ValueProp() {
  const logos = ['stripe','vercel','github','notion','linear','cloudflare']
  return (
    <section id="value" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">We turn complex ideas into elegant software</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">From zero-to-one product builds to platform modernization, our teams ship outcomes, not just code. We embed with you, bringing design, engineering, and product strategy together.</p>
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              {[['98%','On-time delivery'],['<4w','Avg. to MVP'],['NPS 72','Client satisfaction']].map(([k,v]) => (
                <div key={k} className="rounded-xl p-4 ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-slate-900">
                  <div className="text-2xl font-extrabold text-slate-900 dark:text-white">{k}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">{v}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-3">Trusted by teams at</p>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
              {logos.map((l) => (
                <div key={l} className="h-12 rounded-xl ring-1 ring-black/5 dark:ring-white/10 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-900 flex items-center justify-center text-slate-700 dark:text-slate-300 font-semibold">
                  {l}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
