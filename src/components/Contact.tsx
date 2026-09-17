import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { TelegramIcon } from "./BrandIcons";
import { EASE } from "../lib/motion";
import { ContactForm } from "./ContactForm";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    handle: "ArtTeam71@yandex.ru",
    href: "mailto:ArtTeam71@yandex.ru",
  },
  {
    icon: TelegramIcon,
    label: "Telegram",
    handle: "@artteam71",
    href: "https://t.me/artteam71",
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
          {/* Lime glow в углу */}
          <div
            className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px]
                       rounded-full opacity-[0.08] blur-3xl"
            style={{ background: "var(--color-acid)" }}
          />

          <div className="relative max-w-2xl">
            <div className="font-mono text-[12px] text-fog tracking-[-0.013em] mb-4">
              04 — Контакты · отвечаю за 12 часов
            </div>
            <h2 className="text-paper text-[40px] sm:text-[56px] leading-[1.02] font-[510] tracking-[-0.022em]">
              Нужен лендинг,
              <br />
              <span className="text-fog">который продаёт?</span>
            </h2>
            <p className="mt-6 max-w-md text-[16px] leading-[1.6] text-fog">
              Все вопросы — бесплатно. Разберём задачу, скажу сроки и стоимость.
            </p>

            <div className="mt-10">
              <ContactForm />
            </div>

            <div className="mt-10 pt-8 border-t border-graphite">
              <div className="font-mono text-[11px] text-ash tracking-[-0.013em] mb-4">
                ИЛИ НАПИШИТЕ НАПРЯМУЮ
              </div>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                {contacts.map(({ icon: Icon, label, handle, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="
                      group flex items-center gap-2
                      text-[13px] text-mist hover:text-paper
                      transition-colors
                    "
                  >
                    <Icon size={14} className="text-fog group-hover:text-paper transition-colors" />
                    <span>{handle}</span>
                    <ArrowUpRight
                      size={11}
                      className="text-ash group-hover:text-paper transition-all
                                 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}