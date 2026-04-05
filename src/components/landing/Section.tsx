import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import type { SectionProps } from "@/types"

export default function Section({ id, title, subtitle, content, isActive, showButton, buttonText, instruments, onBooking }: SectionProps) {
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