import type { ReactNode } from "react"

export type UltimateServiceItemProps = {
  icon?: ReactNode
  title: string
  description: string
}

export default function UltimateServiceItem({ icon, title, description }: UltimateServiceItemProps) {
  return (
    <div>
      {icon && (
        <div className="mb-3 h-12 w-12 rounded-full bg-violet-100 flex items-center justify-center">
          {icon}
        </div>
      )}
      <h3 className="mb-2 text-lg font-medium text-violet-500 ">{title}</h3>
      <p className="text-black/50">{description}</p>
    </div>
  )
}
