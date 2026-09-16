type Props = {
  size?: number
  showText?: boolean
  className?: string
}

export function Logo({ size = 20, showText = true, className = '' }: Props) {
  return (
    <span className={`inline-flex items-center gap-2.5 group/logo ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 512 512"
        fill="none"
        aria-hidden="true"
        className="text-paper"
      >
        <path
          d="M176 352 L256 160 L336 352"
          stroke="currentColor"
          strokeWidth="26"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M208 288 H304"
          stroke="var(--color-acid)"
          strokeWidth="26"
          strokeLinecap="round"
        />
        <circle
          cx="376"
          cy="376"
          r="24"
          fill="var(--color-acid)"
          className="origin-center transition-transform duration-300 group-hover/logo:scale-125"
          style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
        />
      </svg>

      {showText && (
        <span
          className="text-paper"
          style={{
            fontSize: 15,
            fontWeight: 510,
            letterSpacing: '-0.011em',
          }}
        >
          artteam
        </span>
      )}
    </span>
  )
}