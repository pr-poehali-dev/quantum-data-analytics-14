import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Icon from "@/components/ui/icon"

const instruments = [
  "Фортепиано", "Вокал", "Гитара", "Барабаны", "Флейта", "Скрипка", "Саксофон"
]

interface BookingModalProps {
  open: boolean
  onClose: () => void
}

export default function BookingModal({ open, onClose }: BookingModalProps) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [instrument, setInstrument] = useState("")
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => {
      setName("")
      setPhone("")
      setInstrument("")
      setSent(false)
    }, 300)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={handleClose} />
          <motion.div
            className="relative bg-neutral-950 border border-neutral-800 rounded-2xl p-8 w-full max-w-md"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors"
            >
              <Icon name="X" size={20} />
            </button>

            {sent ? (
              <div className="text-center py-6">
                <div className="text-[#FF4D00] mb-4">
                  <Icon name="CheckCircle" size={48} className="mx-auto" />
                </div>
                <h3 className="text-white text-2xl font-bold mb-2">Заявка отправлена!</h3>
                <p className="text-neutral-400">Мы свяжемся с вами в ближайшее время для подтверждения записи.</p>
                <Button
                  onClick={handleClose}
                  className="mt-8 bg-[#FF4D00] hover:bg-[#e04400] text-black font-semibold"
                >
                  Отлично!
                </Button>
              </div>
            ) : (
              <>
                <h3 className="text-white text-2xl font-bold mb-1">Записаться на урок</h3>
                <p className="text-neutral-400 text-sm mb-6">Первое занятие — бесплатно</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label className="text-neutral-300 mb-1.5 block">Ваше имя</Label>
                    <Input
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="Иван Иванов"
                      required
                      className="bg-neutral-900 border-neutral-700 text-white placeholder:text-neutral-600 focus:border-[#FF4D00]"
                    />
                  </div>
                  <div>
                    <Label className="text-neutral-300 mb-1.5 block">Телефон</Label>
                    <Input
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      placeholder="+7 (999) 000-00-00"
                      required
                      type="tel"
                      className="bg-neutral-900 border-neutral-700 text-white placeholder:text-neutral-600 focus:border-[#FF4D00]"
                    />
                  </div>
                  <div>
                    <Label className="text-neutral-300 mb-1.5 block">Инструмент</Label>
                    <div className="flex flex-wrap gap-2">
                      {instruments.map(i => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setInstrument(i)}
                          className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
                            instrument === i
                              ? "border-[#FF4D00] text-[#FF4D00] bg-[#FF4D00]/10"
                              : "border-neutral-700 text-neutral-400 hover:border-neutral-500"
                          }`}
                        >
                          {i}
                        </button>
                      ))}
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="w-full mt-2 bg-[#FF4D00] hover:bg-[#e04400] text-black font-semibold"
                  >
                    Записаться бесплатно
                  </Button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
