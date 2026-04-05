import type { ReactNode } from "react"

export interface Section {
  id: string
  title: string
  subtitle?: ReactNode
  content?: string
  showButton?: boolean
  buttonText?: string
  instruments?: { name: string; icon: string }[]
  faq?: { q: string; a: string }[]
}

export interface SectionProps extends Section {
  isActive: boolean
  onBooking?: () => void
}