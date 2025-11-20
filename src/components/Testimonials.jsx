export default function Testimonials(){
  const quotes = [
    { name: 'Elena S.', role: 'VP Engineering, Fintech', text: 'They shipped an MVP in weeks, and it actually scaled. Best partner we have worked with.' },
    { name: 'Marcus D.', role: 'CTO, Healthcare', text: 'Pragmatic, senior, and outcome-focused. We hit every milestone without drama.' },
    { name: 'Priya K.', role: 'Head of Product, SaaS', text: 'Design and engineering quality is consistently top-tier. Our velocity doubled.' },
  ]
  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">What clients say</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {quotes.map(q => (
            <figure key={q.name} className="rounded-2xl p-6 ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-slate-900">
              <blockquote className="text-slate-700 dark:text-slate-200">“{q.text}”</blockquote>
              <figcaption className="mt-4 text-sm text-slate-500 dark:text-slate-400">{q.name} • {q.role}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
