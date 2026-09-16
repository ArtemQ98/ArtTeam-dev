import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHead } from "./Stack";
import { EASE } from "../lib/motion";
import { FadeImage } from "./FadeImage";

const projects = [
  {
    id: "01",
    title: "Steep",
    tag: "Агентство · Digital",
    desc: "Лендинг для продуктовой студии. Editorial-типографика с serif-акцентами, кастомный график конверсии.",
    stack: ["React", "Framer Motion", "Serif UI"],
    year: "2025",
    img: "/projects/project-1.jpg",
    href: "#",
    accent: "var(--color-coral)",
  },
  {
    id: "02",
    title: "Nebula",
    tag: "SaaS · Task Manager",
    desc: "Лендинг для командной работы с AI-агентом. Показал реальный product UI вместо абстрактных иллюстраций.",
    stack: ["Next.js", "Lenis", "Motion"],
    year: "2025",
    img: "/projects/project-2.jpg",
    href: "#",
    accent: "var(--color-acid)",
  },
  {
    id: "03",
    title: "Mercury Summit",
    tag: "Event · Landing",
    desc: "Сайт финтех-конференции. Живой countdown.",
    stack: ["React", "GSAP", "Formspree"],
    year: "2024",
    img: "/projects/project-3.jpg",
    href: "#",
    accent: "var(--color-iris)",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHead
          eyebrow="02 — Кейсы"
          title="Лендинги, которые уже работают"
          desc="Три проекта, где дизайн, анимации и структура сложились в результат."
        />

        <div className="mt-16 space-y-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.id}
              href={p.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: EASE }}
              className="
                group block relative
                bg-carbon rounded-[12px]
                hairline
                overflow-hidden
                transition-colors
                hover:bg-obsidian
              "
            >
              <div className="grid lg:grid-cols-[1.1fr_1fr] gap-0">
                <div className="p-8 lg:p-10 flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="font-mono text-[12px] text-ash tracking-[-0.013em]">
                      {p.id}
                    </span>
                    <span className="h-px flex-1 bg-graphite" />
                    <span className="font-mono text-[12px] text-ash tracking-[-0.013em]">
                      {p.year}
                    </span>
                  </div>

                  <div
                    className="inline-flex items-center gap-1.5 self-start
                               px-2 py-0.5 rounded-[4px] mb-4
                               text-[11px] font-[510]"
                    style={{
                      background: `color-mix(in srgb, ${p.accent} 12%, transparent)`,
                      color: p.accent,
                    }}
                  >
                    <span
                      className="h-1 w-1 rounded-full"
                      style={{ background: p.accent }}
                    />
                    {p.tag}
                  </div>

                  <h3 className="text-paper text-[28px] sm:text-[32px] leading-[1.1] font-[510] tracking-[-0.022em]">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-[1.6] text-fog max-w-md">
                    {p.desc}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] tracking-[-0.013em]
                                   px-1.5 py-0.5 rounded-[4px]
                                   bg-[rgba(255,255,255,0.05)] text-ash"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div
                    className="mt-auto pt-10 flex items-center gap-2 text-[13px] text-mist
                                  group-hover:text-paper transition"
                  >
                    Смотреть кейс
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </div>

                <div className="relative p-6 lg:p-8 bg-obsidian">
                  <div
                    className="relative aspect-[16/10] rounded-[8px] overflow-hidden hairline
                               transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                               group-hover:scale-[1.015]"
                  >
                    <FadeImage
                      src={p.img}
                      alt={p.title}
                      className="h-full w-full"
                      imgClassName="object-cover object-top"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0
                                 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(120% 80% at 50% 0%, color-mix(in srgb, ${p.accent} 10%, transparent), transparent 60%)`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
