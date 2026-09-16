import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { TelegramIcon } from "./BrandIcons";
import { EASE } from "../lib/motion";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    handle: "ArtTeam71@yandex.ru",
    href: "mailto:ArtTeam71@yandex.ru",
    desc: "Отвечаю в течение 12 часов",
  },
  {
    icon: TelegramIcon,
    label: "Telegram",
    handle: "@artteam71",
    href: "https://t.me/artteam71",
    desc: "Для быстрых вопросов",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative bg-carbon rounded-[12px] hairline p-8 sm:p-16 overflow-hidden"
        >
          <div
            className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px]
                       rounded-full opacity-[0.08] blur-3xl"
            style={{ background: "var(--color-acid)" }}
          />

          <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-12 items-end">
            <div>
              <div className="font-mono text-[12px] text-fog tracking-[-0.013em] mb-4">
                04 — Контакты · отвечаю за 12 часов
              </div>
              <h2 className="text-paper text-[40px] sm:text-[56px] leading-[1.02] font-[510] tracking-[-0.022em]">
                Нужен лендинг,
                <br />
                <span className="text-fog">который продаёт?</span>
              </h2>
              <p className="mt-6 max-w-md text-[16px] leading-[1.6] text-fog">
                Все вопросы — бесплатно. Разберём задачу, скажу сроки и
                стоимость.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {/* <a
                  href="https://cal.com/artteam/intro"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group inline-flex items-center gap-2
                    bg-acid text-void
                    rounded-[6px] px-4 py-2.5
                    text-[14px] font-[510] tracking-[-0.011em]
                    hover:brightness-95 transition
                  "
                >
                  <Calendar size={14} />
                  Забронировать созвон
                </a> */}
                <a
                  href="https://t.me/artteam71"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group inline-flex items-center gap-2
                    bg-acid text-void
                    rounded-[6px] px-4 py-2.5
                    text-[14px] font-[510] tracking-[-0.011em]
                    hover:brightness-95 transition
                  "
                >
                  <TelegramIcon size={14} />
                  Написать в Telegram
                </a>
              </div>
            </div>

            {/* Карточки контактов — 2 ячейки вместо 4 */}
            <div className="grid grid-cols-1 gap-px bg-graphite rounded-[12px] overflow-hidden hairline">
              {contacts.map(({ icon: Icon, label, handle, href, desc }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="
                    group bg-carbon p-6
                    hover:bg-obsidian transition-colors
                    flex items-center justify-between
                  "
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="h-10 w-10 grid place-items-center rounded-[6px]
                                     bg-[rgba(255,255,255,0.04)]
                                     text-fog group-hover:text-paper transition-colors"
                    >
                      <Icon size={16} />
                    </span>
                    <div>
                      <div className="text-[14px] text-paper font-[510]">
                        {label}
                      </div>
                      <div className="font-mono text-[12px] text-ash tracking-[-0.013em] mt-0.5">
                        {handle}
                      </div>
                      <div className="text-[11px] text-fog mt-1">{desc}</div>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="text-ash group-hover:text-paper transition-all
                               group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
