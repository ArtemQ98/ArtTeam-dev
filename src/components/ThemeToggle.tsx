import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

export function ThemeToggle() {
  const { theme, toggle } = useTheme()

  return (
    <button
      onClick={toggle}
      aria-label="Переключить тему"
      className="
        relative h-8 w-8 grid place-items-center
        rounded-[6px] text-fog hover:text-mist
        hover:bg-[rgba(255,255,255,0.04)]
        transition-colors
      "
    >
      {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  )
}