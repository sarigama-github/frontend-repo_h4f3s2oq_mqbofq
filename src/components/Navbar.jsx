import { useEffect, useState } from 'react'
import { Menu, X, Sun, Moon, ArrowRight } from 'lucide-react'

function useTheme() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved) {
      setTheme(saved)
      if (saved === 'dark') document.documentElement.classList.add('dark')
    } else {
      // Match system preference by default
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      const t = prefersDark ? 'dark' : 'light'
      setTheme(t)
      if (t === 'dark') document.documentElement.classList.add('dark')
    }
  }, [])

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('theme', next)
    if (next === 'dark') document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }

  return { theme, toggle }
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#value', label: 'Value' },
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'Who we are' },
    { href: '#process', label: 'How we do' },
    { href: '#cases', label: 'Case studies' },
    { href: '#blogs', label: 'Blogs' },
    { href: '#testimonials', label: 'Testimonials' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-white/70 dark:bg-slate-900/60 border-b border-black/5 dark:border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-yellow-400 to-amber-600 text-slate-900 font-bold">F</span>
            <span>Flames Consulting</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">{l.label}</a>
            ))}
            <a href="#cta" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white dark:bg-yellow-400 dark:text-slate-900 hover:opacity-90 transition">
              Start a project <ArrowRight size={16} />
            </a>
            <button aria-label="Toggle theme" onClick={toggle} className="p-2 rounded-md border border-black/10 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:bg-black/5 dark:hover:bg-white/5">
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <button aria-label="Toggle theme" onClick={toggle} className="p-2 rounded-md border border-black/10 dark:border-white/10 text-slate-700 dark:text-slate-200">
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={() => setOpen(!open)} aria-label="Menu" className="p-2 rounded-md border border-black/10 dark:border-white/10 text-slate-700 dark:text-slate-200">
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 dark:border-white/10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 py-4 grid gap-2">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-slate-700 dark:text-slate-200">{l.label}</a>
            ))}
            <a href="#cta" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white dark:bg-yellow-400 dark:text-slate-900">Start a project <ArrowRight size={16} /></a>
          </div>
        </div>
      )}
    </header>
  )
}
