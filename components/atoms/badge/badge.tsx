import type { ReactNode } from "react"

type BadgeProps = {
  children: ReactNode
  icon?: ReactNode
  className?: string
}

export default function Badge({ children, icon, className = "" }: BadgeProps) {
  return (
    <div className={`inline-flex items-center rounded-full bg-gray-100 px-4 py-2 ${className}`}>
      {icon}
      <span className="text-sm font-medium">{children}</span>
    </div>
  )
}
