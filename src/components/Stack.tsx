import { motion } from 'framer-motion'
import { EASE } from '../lib/motion'

const stack = [
  { name: 'React / Next.js',       level: 95, cat: 'core' },
  { name: 'TypeScript',            level: 95, cat: 'core' },
  { name: 'Tailwind CSS',          level: 95, cat: 'core' },
  { name: 'Framer Motion',         level: 93, cat: 'motion' },
  { name: 'GSAP',                  level: 85, cat: 'motion' },
  { name: 'Lenis · Smooth Scroll', level: 88, cat: 'motion' },
  { name: 'Figma → Code',          level: 92, cat: 'design' },
  { name: 'Vite / Turbopack',      level: 90, cat: 'tooling' },
  { name: 'Vercel / Netlify',      level: 92, cat: 'deploy' },
  { name: 'Lighthouse 95+',        level: 95, cat: 'quality' },
]

const catColor: Record<string, string> = {
  core:    'var(--color-acid)',
  motion:  'var(--color-teal)',
  design:  'var(--color-coral)',
  tooling: 'var(--color-iris)',
  deploy:  'var(--color-lavender)',
  quality: 'var(--color-pulse)',
}

export function Stack() {
  return (
    <section id="stack" className="relative py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHead
          eyebrow="01 — Стек"
          title="Инструменты, на которых летают лендинги"
          desc="Ничего лишнего — только то, что делает страницу быстрой, живой и конверсионной."
        />

        <div className="mt-16 grid sm:grid-cols-2 gap-x-12 gap-y-8">
          {stack.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.04, duration: 0.5, ease: EASE }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: catColor[s.cat] }}
                  />
                  <span className="text-mist text-[14px]">{s.name}</span>
                </div>
                <span className="font-mono text-[12px] text-ash tracking-[-0.013em]">
                  {s.level}
                </span>
              </div>
              <div className="h-px bg-graphite relative overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0"
                  style={{ background: catColor[s.cat] }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.1 + i * 0.04, ease: EASE }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tags */}
        <div className="mt-16 flex flex-wrap gap-2">
          {[
            'Framer Motion',
            'GSAP',
            'Lenis',
            'Embla Carousel',
            'Rive',
            'Lottie',
            'Three.js',
            'Swiper',
            'Formspree',
            'Tally',
            'Cal.com',
            'Plausible',
          ].map((t) => (
            <span
              key={t}
              className="
                px-3 py-1.5 rounded-full
                bg-[rgba(255,255,255,0.05)]
                text-mist text-[12px]
                hairline
                hover:bg-[rgba(255,255,255,0.08)] transition
              "
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SectionHead({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string
  title: string
  desc?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: EASE }}
      className="max-w-2xl"
    >
      <div className="font-mono text-[12px] text-fog tracking-[-0.013em] mb-4">
        {eyebrow}
      </div>
      <h2 className="text-paper text-[36px] sm:text-[48px] leading-[1.05] font-[510] tracking-[-0.022em]">
        {title}
      </h2>
      {desc && (
        <p className="mt-5 text-[16px] leading-[1.6] text-fog max-w-lg">
          {desc}
        </p>
      )}
    </motion.div>
  )
}