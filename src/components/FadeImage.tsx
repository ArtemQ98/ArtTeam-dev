import { useState } from 'react'

type Props = {
  src: string
  alt: string
  className?: string
  imgClassName?: string
}

export function FadeImage({
  src,
  alt,
  className = '',
  imgClassName = '',
}: Props) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder — пульсирующий графит, пока картинка грузится */}
      <div
        className={`
          absolute inset-0 bg-graphite
          transition-opacity duration-500
          ${loaded ? 'opacity-0' : 'opacity-100 animate-pulse'}
        `}
      />

      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`
          h-full w-full object-cover object-top
          transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${loaded
            ? 'opacity-100 scale-100 blur-0'
            : 'opacity-0 scale-[1.02] blur-md'}
          ${imgClassName}
        `}
      />
    </div>
  )
}