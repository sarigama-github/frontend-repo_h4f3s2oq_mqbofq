const steps = [
  { title: 'Discover', desc: 'Workshops to align on goals, risks, and success metrics.' },
  { title: 'Design', desc: 'Rapid prototypes and design systems for consistent UX.' },
  { title: 'Build', desc: 'Lean, testable increments shipped to production early.' },
  { title: 'Scale', desc: 'Observability, automation, and iterative improvement.' },
]

export default function Process(){
  return (
    <section id="process" className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">How we do</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl">A story-driven process that moves from clarity to impact. Each phase produces tangible outcomes.</p>
        <div className="mt-10 grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl p-6 ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-slate-900">
              <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-yellow-400 text-slate-900 font-bold grid place-items-center">{i+1}</div>
              <h3 className="mt-2 font-semibold text-slate-900 dark:text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
