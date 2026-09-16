import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { TelegramIcon } from "./BrandIcons";
import { fadeUpStagger } from "../lib/motion";

export function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-24 overflow-hidden">
      {/* atmospheric floor */}
      <div className="pointer-events-none absolute inset-0 hero-floor opacity-60" />
      {/* lime glow behind avatar */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2
                   w-[600px] h-[600px] rounded-full opacity-[0.07] blur-3xl"
        style={{ background: "var(--color-acid)" }}
      />

      <div className="relative mx-auto max-w-[1200px] px-6">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-start">
          <div className="max-w-2xl">
            {/* <motion.div
              variants={fadeUpStagger}
              initial="hidden"
              animate="show"
              custom={0}
              className="inline-flex items-center gap-2 mb-6
                         px-3 py-1 rounded-full
                         bg-[rgba(255,255,255,0.05)]
                         text-[12px] text-mist hairline"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-pulse opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-pulse" />
              </span>
              Свободен для 1 проекта · Февраль 2026
            </motion.div> */}

            <motion.h1
              variants={fadeUpStagger}
              initial="hidden"
              animate="show"
              custom={1}
              className="text-paper text-[56px] sm:text-[72px] leading-[0.98]
                         font-[510] tracking-[-0.022em]"
            >
              Собираю лендинги,
              <br />
              которые
              <br />
              <span className="text-fog">не просто выглядят —</span>
              <br />
              <span className="text-acid">они продают.</span>
            </motion.h1>

            <motion.p
              variants={fadeUpStagger}
              initial="hidden"
              animate="show"
              custom={2}
              className="mt-8 max-w-lg text-[16px] leading-[1.6] text-fog"
            >
              Дизайн-в-код, анимации на скролле. React · TypeScript · Framer
              Motion. 3 года опыта.
            </motion.p>

            <motion.div
              variants={fadeUpStagger}
              initial="hidden"
              animate="show"
              custom={3}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a
                href="#contact"
                className="
                  group inline-flex items-center gap-2
                  bg-acid text-void
                  rounded-[6px] px-4 py-2.5
                  text-[14px] font-[510] tracking-[-0.011em]
                  hover:brightness-95 transition
                  shadow-[0_5px_2px_rgba(0,0,0,0.01),0_3px_2px_rgba(0,0,0,0.04),0_1px_1px_rgba(0,0,0,0.07)]
                "
              >
                Обсудить лендинг
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="#projects"
                className="
                  inline-flex items-center gap-2
                  rounded-[6px] px-4 py-2.5
                  text-[13px] text-mist
                  hairline hover:bg-[rgba(255,255,255,0.04)] transition
                "
              >
                Посмотреть кейсы
              </a>

              <div className="flex items-center gap-1 ml-1">
                {[
                  // { icon: GithubIcon,   href: 'https://github.com/artteam',      label: 'GitHub' },
                  // { icon: LinkedinIcon, href: 'https://linkedin.com/in/artteam', label: 'LinkedIn' },
                  { icon: Mail, href: "mailto:hi@artteam.dev", label: "Email" },
                  {
                    icon: TelegramIcon,
                    href: "https://t.me/artteam71",
                    desc: "Для быстрых вопросов",
                  },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="
                      h-10 w-10 grid place-items-center
                      rounded-[6px] text-fog
                      hover:text-paper hover:bg-[rgba(255,255,255,0.04)]
                      transition
                    "
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative shrink-0"
          >
            <div className="relative h-[280px] w-[280px] sm:h-[320px] sm:w-[320px]">
              <motion.div
                className="absolute inset-0 rounded-full hairline"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0deg, var(--color-acid) 60deg, transparent 120deg)",
                  maskImage:
                    "radial-gradient(circle, transparent 68%, #000 69%, #000 71%, transparent 72%)",
                  WebkitMaskImage:
                    "radial-gradient(circle, transparent 68%, #000 69%, #000 71%, transparent 72%)",
                }}
              />
              <div className="absolute inset-3 rounded-full overflow-hidden hairline">
                <img
                  src="/avatar.jpg"
                  alt="artteam"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
              <div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2
                           bg-void border border-graphite rounded-[4px]
                           px-2 py-0.5 text-[11px] text-fog font-mono
                           tracking-[-0.013em]"
              >
                artteam.dev
              </div>
            </div>
          </motion.div>
        </div>

        {/* quick stats */}
        <motion.div
          variants={fadeUpStagger}
          initial="hidden"
          animate="show"
          custom={4}
          className="mt-24 grid grid-cols-2 sm:grid-cols-4 gap-px
                     bg-graphite rounded-[12px] overflow-hidden hairline"
        >
          {[
            { k: "3", v: "года в вебе" },
            { k: "12+", v: "лендингов разработано" },
            { k: "10 дн.", v: "средний срок" },
            { k: "100%", v: "адаптив" },
          ].map((s) => (
            <div key={s.v} className="bg-carbon p-6">
              <div className="text-paper text-[28px] font-[510] tracking-[-0.022em] leading-none">
                {s.k}
              </div>
              <div className="mt-2 text-[13px] text-fog">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
