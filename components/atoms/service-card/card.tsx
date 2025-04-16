import type { ReactNode } from "react"

type ServiceCardProps = {
  icon: ReactNode
  title: string
  description: string
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-violet-100">{icon}</div>
      <h3 className="mb-2 text-lg font-medium text-violet-500">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}