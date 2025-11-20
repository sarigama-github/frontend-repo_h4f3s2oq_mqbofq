import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-white/10 backdrop-blur text-white ring-1 ring-white/20 dark:bg-white/10">Premium Software Consulting</span>
            <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Build remarkable products with a partner obsessed with outcomes
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              We help venture-backed startups and enterprises design, build, and scale world-class software — fast.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#cta" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-slate-900 text-white dark:bg-yellow-400 dark:text-slate-900 font-semibold shadow hover:translate-y-0.5 transition-transform">Start a project</a>
              <a href="#services" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-slate-900/10 dark:border-white/20 text-slate-800 dark:text-white hover:bg-black/5 dark:hover:bg-white/5">See our services</a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-slate-950"></div>
    </section>
  )
}
