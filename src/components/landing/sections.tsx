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
    id: 'gallery',
    title: 'Наша школа',
    content: 'Уютные залы, профессиональные инструменты и атмосфера, в которой хочется творить.',
    gallery: [
      { src: 'https://cdn.poehali.dev/projects/59044f27-5ea4-45fd-87d0-fcb64c8eda6c/bucket/f6151cc2-fa24-47fb-8ee7-bda17f7dc2d9.jpg', caption: 'Зал вокала' },
      { src: 'https://cdn.poehali.dev/projects/59044f27-5ea4-45fd-87d0-fcb64c8eda6c/bucket/a37c5735-e745-428c-9a05-c9363e54c39f.jpg', caption: 'Класс фортепиано' },
      { src: 'https://cdn.poehali.dev/projects/59044f27-5ea4-45fd-87d0-fcb64c8eda6c/bucket/7053e853-226e-4a80-bc18-725085f67e5b.jpg', caption: 'Зал гитары' },
      { src: 'https://cdn.poehali.dev/projects/59044f27-5ea4-45fd-87d0-fcb64c8eda6c/bucket/33b65764-e4bd-4d47-834d-796e9ba5cc3e.jpg', caption: 'Зал фортепиано' },
      { src: 'https://cdn.poehali.dev/projects/59044f27-5ea4-45fd-87d0-fcb64c8eda6c/bucket/a690e2fc-a9cd-4d14-8d77-9353d36aba40.jpg', caption: 'Зал барабанов' },
    ]
  },
  {
    id: 'teachers',
    title: 'Наши преподаватели',
    content: 'Профессионалы с музыкальным образованием и многолетним опытом обучения.',
    teachers: [
      {
        name: 'Елена Соколова',
        instrument: 'Фортепиано',
        experience: '12 лет опыта',
        photo: 'https://cdn.poehali.dev/projects/59044f27-5ea4-45fd-87d0-fcb64c8eda6c/files/6dfacb32-e330-4a53-8945-4688d07e143e.jpg',
      },
      {
        name: 'Артём Волков',
        instrument: 'Гитара',
        experience: '8 лет опыта',
        photo: 'https://cdn.poehali.dev/projects/59044f27-5ea4-45fd-87d0-fcb64c8eda6c/files/b90eacca-33ad-4780-928e-0e2b1b653376.jpg',
      },
      {
        name: 'Марина Кузнецова',
        instrument: 'Вокал',
        experience: '15 лет опыта',
        photo: 'https://cdn.poehali.dev/projects/59044f27-5ea4-45fd-87d0-fcb64c8eda6c/files/66edeeb5-7b60-4684-831a-7d31b13b141f.jpg',
      },
    ]
  },
  {
    id: 'testimonials',
    title: 'Наши ученики говорят',
    reviews: [
      {
        name: 'Анна, 32 года',
        instrument: 'Фортепиано',
        text: '«Никогда не думала, что смогу играть. Уже через месяц исполнила первую мелодию — это было невероятно!»',
      },
      {
        name: 'Дмитрий, 14 лет',
        instrument: 'Гитара',
        text: '«Артём объясняет так, что всё сразу понятно. Теперь играю любимые песни и даже пишу свои.»',
      },
      {
        name: 'Светлана, мама Миши (8 лет)',
        instrument: 'Скрипка',
        text: '«Сын ждёт каждого урока с нетерпением. Педагоги умеют найти подход к детям — спасибо!»',
      },
    ]
  },
  {
    id: 'pricing',
    title: 'Стоимость занятий',
    content: 'Прозрачные цены без скрытых платежей. Первое занятие — всегда бесплатно.',
    pricing: [
      {
        name: 'Разовый урок',
        price: '800',
        period: 'занятие',
        features: ['45 минут', 'Любой инструмент', 'Без обязательств'],
      },
      {
        name: 'Абонемент 8 уроков',
        price: '5 600',
        period: 'месяц',
        features: ['8 занятий по 45 мин', 'Экономия 800 ₽', 'Приоритетное расписание'],
        highlight: true,
      },
      {
        name: 'Абонемент 16 уроков',
        price: '9 600',
        period: 'месяц',
        features: ['16 занятий по 45 мин', 'Экономия 3 200 ₽', 'Два урока в неделю'],
      },
    ]
  },
  {
    id: 'faq',
    title: 'Частые вопросы',
    faq: [
      { q: 'Нужен ли свой инструмент?', a: 'Нет — на первых занятиях вы занимаетесь на инструментах школы. Покупать ничего заранее не нужно.' },
      { q: 'С какого возраста можно начинать?', a: 'Мы принимаем детей с 5 лет и взрослых любого возраста. Никогда не поздно начать!' },
      { q: 'Как проходит первый урок?', a: 'Знакомство с преподавателем, разговор о ваших целях и пробное занятие на инструменте. Всё бесплатно.' },
      { q: 'Нужна ли музыкальная подготовка?', a: 'Совсем нет. Мы начинаем с нуля и подстраиваемся под темп каждого ученика.' },
      { q: 'Сколько длится урок?', a: 'Стандартный урок — 45 минут. Для детей до 7 лет — 30 минут.' },
    ]
  },
  {
    id: 'contacts',
    title: 'Свяжитесь с нами',
    content: 'Ответим на любые вопросы и запишем на пробный урок.',
    contacts: [
      { icon: 'Phone', label: 'Телефон', value: '+8 800 535 35 35' },
      { icon: 'MapPin', label: 'Адрес', value: 'Санкт-Петербург, Невский проспект, 115' },
      { icon: 'Clock', label: 'Режим работы', value: 'Пн–Сб: 10:00 – 21:00' },
      { icon: 'Mail', label: 'Email', value: 'info@leggeromusicschool.ru' },
    ],
    socials: [
      { icon: 'Send', label: 'Telegram', href: '#' },
      { icon: 'Music', label: 'ВКонтакте', href: '#' },
      { icon: 'Instagram', label: 'Instagram', href: '#' },
    ]
  },
  {
    id: 'join',
    title: 'Начни играть сегодня.',
    content: 'Первое пробное занятие — бесплатно. Приходи познакомиться с преподавателем и выбрать свой инструмент.',
    showButton: true,
    buttonText: 'Записаться бесплатно'
  },
]