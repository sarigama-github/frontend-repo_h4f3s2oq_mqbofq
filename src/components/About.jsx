export default function About(){
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-2xl p-6 bg-gradient-to-br from-yellow-200/20 to-amber-200/10 ring-1 ring-yellow-500/20 dark:from-yellow-400/10 dark:to-yellow-500/5 dark:ring-yellow-400/20">
          <div className="aspect-[4/3] rounded-xl bg-gradient-to-tr from-slate-800 to-slate-900 dark:from-slate-900 dark:to-black" />
        </div>
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Who we are</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">We’re a senior team of designers, engineers, and product leaders with experience at top product companies and high-growth startups. We combine rigorous product thinking with pragmatic engineering to ship fast without compromising quality.</p>
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            {[['60+','Experts'],['12yrs','Avg. exp'],['4.9/5','Clutch score']].map(([k,v]) => (
              <div key={k} className="rounded-xl p-4 ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-slate-900">
                <div className="text-2xl font-extrabold text-slate-900 dark:text-white">{k}</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
