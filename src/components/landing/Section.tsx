import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import type { SectionProps } from "@/types"

export default function Section({ id, title, subtitle, content, isActive, showButton, buttonText, instruments, faq, pricing, teachers, reviews, contacts, socials, onBooking }: SectionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <section
      id={id}
      className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24"
      style={id === 'hero' ? {
        backgroundImage: 'url(https://cdn.poehali.dev/projects/59044f27-5ea4-45fd-87d0-fcb64c8eda6c/files/7c22eac5-1205-4631-ac8b-5d438d810c2e.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      } : {}}
    >
      {id === 'hero' && <div className="absolute inset-0 bg-black/60" />}
      <div className="relative z-10">
        {subtitle && (
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {subtitle}
          </motion.div>
        )}
        <motion.h2
          className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-bold leading-[1.1] tracking-tight max-w-4xl text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        {content && (
          <motion.p
            className="text-lg md:text-xl lg:text-2xl max-w-2xl mt-6 text-neutral-400"
            initial={{ opacity: 0, y: 50 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {content}
          </motion.p>
        )}
        {instruments && (
          <motion.div
            className="flex flex-wrap gap-4 mt-10"
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {instruments.map((item: { name: string; icon: string }, i: number) => (
              <motion.div
                key={item.name}
                className="flex items-center gap-2 border border-neutral-700 rounded-full px-5 py-2 text-white text-sm md:text-base"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isActive ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
              >
                <Icon name={item.icon} fallback="Music" size={16} className="text-[#FF4D00]" />
                {item.name}
              </motion.div>
            ))}
          </motion.div>
        )}
        {teachers && (
          <motion.div
            className="flex flex-wrap gap-6 mt-10"
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {teachers.map((teacher, i) => (
              <motion.div
                key={teacher.name}
                className="flex items-center gap-4 border border-neutral-800 rounded-2xl px-5 py-4 bg-neutral-900/50"
                initial={{ opacity: 0, x: -20 }}
                animate={isActive ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.12 }}
              >
                <img
                  src={teacher.photo}
                  alt={teacher.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-neutral-700"
                />
                <div>
                  <p className="text-white font-semibold">{teacher.name}</p>
                  <p className="text-[#FF4D00] text-sm">{teacher.instrument}</p>
                  <p className="text-neutral-500 text-xs mt-0.5">{teacher.experience}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
        {pricing && (
          <motion.div
            className="flex flex-wrap gap-5 mt-10"
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {pricing.map((plan, i) => (
              <motion.div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl px-6 py-6 w-full max-w-[220px] border transition-colors ${
                  plan.highlight
                    ? 'border-[#FF4D00] bg-[#FF4D00]/10'
                    : 'border-neutral-800 bg-neutral-900/50'
                }`}
                initial={{ opacity: 0, y: 24 }}
                animate={isActive ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF4D00] text-black text-xs font-bold px-3 py-1 rounded-full">Популярный</span>
                )}
                <p className="text-neutral-400 text-sm mb-3">{plan.name}</p>
                <p className="text-white text-3xl font-bold">{plan.price} <span className="text-base font-normal text-neutral-500">₽</span></p>
                <p className="text-neutral-600 text-xs mb-4">/ {plan.period}</p>
                <ul className="space-y-2">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-neutral-300 text-sm">
                      <Icon name="Check" size={14} className="text-[#FF4D00] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        )}
        {reviews && (
          <motion.div
            className="flex flex-col gap-5 mt-10 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                className="border border-neutral-800 rounded-2xl px-6 py-5 bg-neutral-900/50"
                initial={{ opacity: 0, x: -20 }}
                animate={isActive ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.12 }}
              >
                <p className="text-neutral-300 text-sm md:text-base italic mb-3">{review.text}</p>
                <div className="flex items-center gap-2">
                  <span className="text-white font-medium text-sm">{review.name}</span>
                  <span className="text-neutral-600">·</span>
                  <span className="text-[#FF4D00] text-sm">{review.instrument}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
        {contacts && (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {contacts.map((item, i) => (
              <motion.div
                key={item.label}
                className="flex items-center gap-4 border border-neutral-800 rounded-2xl px-5 py-4 bg-neutral-900/50"
                initial={{ opacity: 0, y: 16 }}
                animate={isActive ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              >
                <div className="w-10 h-10 rounded-full bg-[#FF4D00]/10 flex items-center justify-center shrink-0">
                  <Icon name={item.icon} fallback="Info" size={18} className="text-[#FF4D00]" />
                </div>
                <div>
                  <p className="text-neutral-500 text-xs">{item.label}</p>
                  <p className="text-white text-sm font-medium">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
        {socials && (
          <motion.div
            className="flex gap-3 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                title={s.label}
                className="w-11 h-11 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:border-[#FF4D00] hover:text-[#FF4D00] transition-colors"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isActive ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.08 }}
              >
                <Icon name={s.icon} fallback="Link" size={18} />
              </motion.a>
            ))}
          </motion.div>
        )}
        {faq && (
          <motion.div
            className="mt-8 max-w-2xl w-full space-y-3"
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {faq.map((item, i) => (
              <motion.div
                key={i}
                className="border border-neutral-800 rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={isActive ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
              >
                <button
                  className="w-full flex items-center justify-between px-5 py-4 text-left text-white hover:bg-neutral-900 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-medium">{item.q}</span>
                  <Icon
                    name={openFaq === i ? "ChevronUp" : "ChevronDown"}
                    size={18}
                    className="text-[#FF4D00] shrink-0 ml-4"
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-4 text-neutral-400 text-sm md:text-base">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        )}
        {showButton && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 md:mt-16"
          >
            <Button
              variant="outline"
              size="lg"
              onClick={onBooking}
              className="text-[#FF4D00] bg-transparent border-[#FF4D00] hover:bg-[#FF4D00] hover:text-black transition-colors"
            >
              {buttonText}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}