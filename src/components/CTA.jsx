export default function CTA(){
  return (
    <section id="cta" className="py-24 bg-gradient-to-tr from-yellow-200 to-amber-200 dark:from-yellow-400 dark:to-amber-300">
      <div className="max-w-7xl mx-auto px-6 text-slate-900">
        <div className="rounded-2xl bg-white/70 dark:bg-slate-900/70 backdrop-blur p-10 ring-1 ring-black/5 dark:ring-white/10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">Have a bold idea? Let’s build it together.</h2>
              <p className="mt-3 text-slate-700 dark:text-slate-300">Tell us about your goals and timeline. We’ll propose a lean plan to hit impact fast.</p>
            </div>
            <form className="grid gap-3">
              <input className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 ring-1 ring-black/10 dark:ring-white/10 text-slate-900 dark:text-white" placeholder="Your name" />
              <input className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 ring-1 ring-black/10 dark:ring-white/10 text-slate-900 dark:text-white" placeholder="Work email" />
              <textarea rows="3" className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 ring-1 ring-black/10 dark:ring-white/10 text-slate-900 dark:text-white" placeholder="What are you building?" />
              <button className="mt-2 inline-flex justify-center px-5 py-3 rounded-lg bg-slate-900 text-white dark:bg-yellow-400 dark:text-slate-900 font-semibold">Get proposal</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
