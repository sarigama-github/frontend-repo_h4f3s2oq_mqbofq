import { Code2, Palette, Server, Smartphone } from 'lucide-react'

const items = [
  { icon: Code2, title: 'Product Engineering', desc: 'Cross-functional squads shipping robust web, mobile, and platform software.' },
  { icon: Palette, title: 'Product Design', desc: 'User research, UX/UI, design systems, and rapid prototyping.' },
  { icon: Server, title: 'Cloud & Data', desc: 'Scalable architecture, APIs, DevOps, and analytics you can trust.' },
  { icon: Smartphone, title: 'Mobile & Edge', desc: 'Native and cross-platform apps with delightful performance.' },
]

export default function Services(){
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Our services</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl">End-to-end capabilities from strategy to scale. Flexible engagement models to fit your stage and goals.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({icon:Icon,title,desc}) => (
            <div key={title} className="group rounded-2xl p-6 ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-slate-900 hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="h-10 w-10 rounded-lg bg-yellow-400/20 text-yellow-600 dark:text-yellow-400 flex items-center justify-center">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
