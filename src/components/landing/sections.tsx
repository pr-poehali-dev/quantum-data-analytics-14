import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-white border-white">Запись открыта</Badge>,
    title: "Музыка начинается здесь.",
    showButton: true,
    buttonText: 'Записаться на урок'
  },
  {
    id: 'about',
    title: 'Почему мы?',
    content: 'Мы обучаем детей и взрослых с нуля до профессионального уровня. Опытные педагоги, индивидуальный подход и живая атмосфера творчества в каждом уроке.'
  },
  {
    id: 'features',
    title: 'Наши направления',
    content: 'Фортепиано, вокал, гитара, барабаны, флейта, скрипка и саксофон — выбери свой инструмент и начни играть уже сегодня.',
    instruments: [
      { name: 'Фортепиано', icon: 'Music' },
      { name: 'Вокал', icon: 'Mic2' },
      { name: 'Гитара', icon: 'Music2' },
      { name: 'Барабаны', icon: 'Drum' },
      { name: 'Флейта', icon: 'Wind' },
      { name: 'Скрипка', icon: 'Violin' },
      { name: 'Саксофон', icon: 'Music4' },
    ]
  },
  {
    id: 'testimonials',
    title: 'Наши ученики говорят',
    content: 'Сотни учеников уже нашли свой инструмент и влюбились в музыку. Присоединяйся к нашей большой музыкальной семье.'
  },
  {
    id: 'join',
    title: 'Начни играть сегодня.',
    content: 'Первое пробное занятие — бесплатно. Приходи познакомиться с преподавателем и выбрать свой инструмент.',
    showButton: true,
    buttonText: 'Записаться бесплатно'
  },
]
