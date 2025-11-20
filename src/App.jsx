import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ValueProp from './components/ValueProp'
import Services from './components/Services'
import About from './components/About'
import Process from './components/Process'
import Cases from './components/Cases'
import Blogs from './components/Blogs'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      <Navbar />

      {/* Story-like scroll from hero to CTA */}
      <main className="[scroll-behavior:smooth]">
        <Hero />
        <ValueProp />
        <Services />
        <About />
        <Process />
        <Cases />
        <Blogs />
        <Testimonials />
        <CTA />
      </main>

      <footer className="py-10 border-t border-black/5 dark:border-white/10 bg-white/70 dark:bg-slate-950/70 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600 dark:text-slate-400">© {new Date().getFullYear()} Flames Consulting. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-slate-600 dark:text-slate-400">
            <a href="#services" className="hover:text-slate-900 dark:hover:text-white">Services</a>
            <a href="#cases" className="hover:text-slate-900 dark:hover:text-white">Case studies</a>
            <a href="#cta" className="hover:text-slate-900 dark:hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
