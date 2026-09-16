import { useEffect, useState } from 'react'
import { ThemeToggle } from './ThemeToggle'
import { Logo } from './Logo'

const links = [
  { href: '#stack', label: 'Стек' },
  { href: '#projects', label: 'Проекты' },
  { href: '#timeline', label: 'Опыт' },
  { href: '#contact', label: 'Контакты' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`
        fixed top-0 inset-x-0 z-50 transition-all duration-300
        ${scrolled
          ? 'bg-[var(--color-void)]/80 backdrop-blur-xl border-b border-graphite/60'
          : 'bg-transparent border-b border-transparent'}
      `}
    >
      <div className="mx-auto max-w-[1200px] px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          aria-label="artteam — на главную"
          className="flex items-center group"
        >
          <Logo size={20} />
        </a>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="
                px-3 py-2 text-[13px] text-mist/90
                hover:text-paper transition-colors
                relative
                after:absolute after:left-3 after:right-3 after:bottom-1
                after:h-px after:bg-paper after:scale-x-0
                hover:after:scale-x-100 after:origin-left
                after:transition-transform after:duration-300
              "
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#contact"
            className="
              hidden sm:inline-flex items-center
              bg-paper text-void text-[13px] font-[510]
              rounded-full px-4 py-2
              hover:opacity-90 transition-opacity
            "
          >
            Написать
          </a>
        </div>
      </div>
    </header>
  )
}