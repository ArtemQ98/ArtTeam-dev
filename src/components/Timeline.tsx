import { motion } from 'framer-motion'
import { SectionHead } from './Stack'
import { EASE } from '../lib/motion'

const experience = [
  {
    year: '2024 — н.в.',
    role: 'Лендинг-разработчик',
    // company: 'Freelance',
    desc: 'Собираю лендинги под ключ — от структуры и копирайта до запуска. Работаю с любыми клиентами. Беру 2–3 проекта в месяц, чтобы держать качество.',
    tags: ['React', 'Motion', 'Conversion'],
  },
  {
    year: '2023 — 2024',
    role: 'Frontend-разработчик',
    // company: 'Freelance',
    desc: 'Промо-страницы и посадочные для клиентов из разных ниш. Здесь отточил анимации и микровзаимодействия — то, что отличает обычный лендинг от «вау».',
    tags: ['Next.js', 'GSAP', 'Awwwards'],
  },
  {
    year: '2022 — 2023',
    role: 'Junior Frontend',
    // company: 'Freelance',
    desc: 'Первые коммерческие лендинги. Вёрстка из Figma, базовые анимации, деплой. Понял главное: лендинг должен быть быстрым и уникальным — без готовых шаблонов.',
    tags: ['HTML', 'CSS', 'JS'],
  },
]

export function Timeline() {
  return (
    <section id="timeline" className="relative py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHead
          eyebrow="03 — Опыт"
          title="Три года в лендингах"
          desc="12+ проектов. Одна специализация — страницы, которые продают."
        />

        <div className="mt-16 relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-graphite" />

          <div className="space-y-12">
            {experience.map((e, i) => (
              <motion.div
                key={e.year}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: i * 0.06, duration: 0.6, ease: EASE }}
                className="relative pl-10"
              >
                <span className="absolute left-0 top-1.5 h-[15px] w-[15px] grid place-items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-acid" />
                  <span className="absolute inset-0 rounded-full hairline" />
                </span>

                <div className="grid sm:grid-cols-[140px_1fr] gap-x-8 gap-y-2">
                  <div className="font-mono text-[12px] text-fog tracking-[-0.013em] pt-1">
                    {e.year}
                  </div>
                  <div>
                    <h3 className="text-paper text-[18px] font-[510] tracking-[-0.012em]">
                      {e.role}
                      <span className="text-fog font-[400]"></span>
                    </h3>
                    <p className="mt-2 text-[15px] leading-[1.6] text-fog max-w-xl">
                      {e.desc}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {e.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded-[4px] text-[11px]
                                     bg-[rgba(255,255,255,0.05)] text-ash
                                     font-mono tracking-[-0.013em]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}