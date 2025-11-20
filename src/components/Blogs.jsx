export default function Blogs(){
  const posts = [
    { title: 'Choosing the right architecture at each stage', date: 'Oct 18, 2025' },
    { title: 'Design systems that accelerate delivery', date: 'Oct 2, 2025' },
    { title: 'From MVP to scale without the rewrite', date: 'Sep 11, 2025' },
  ]
  return (
    <section id="blogs" className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Insights</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl">Notes from the field on building resilient, lovable software products.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {posts.map(p => (
            <article key={p.title} className="rounded-2xl p-6 ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-slate-900">
              <div className="text-xs text-slate-500 dark:text-slate-400">{p.date}</div>
              <h3 className="mt-2 font-semibold text-slate-900 dark:text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Read time: 5 min</p>
              <a href="#" className="mt-4 inline-block text-sm font-semibold text-yellow-700 dark:text-yellow-400">Read more →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
