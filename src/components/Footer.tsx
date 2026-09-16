import { ArrowUp } from 'lucide-react'
import { Logo } from './Logo'

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="border-t border-graphite/60">
      <div className="mx-auto max-w-[1200px] px-6 py-8
                      flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Logo size={16} showText={false} />
          <span className="text-[12px] text-ash">
            © {new Date().getFullYear()} artteam — лендинги, которые продают
          </span>
        </div>

        <button
          onClick={scrollTop}
          aria-label="Наверх"
          className="flex items-center gap-1.5 text-[12px] text-fog
                     hover:text-paper transition-colors"
        >
          Наверх
          <ArrowUp size={12} />
        </button>
      </div>
    </footer>
  )
}