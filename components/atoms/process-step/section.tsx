import type { ReactNode } from "react"

type ProcessStepProps = {
  icon: ReactNode
  title: string
  description: string
}

export default function ProcessStep({ icon, title, description }: ProcessStepProps) {
  return (
    <div className="mb-8 flex">
      <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-violet-100">
        {icon}
      </div>
      <div>
        <h3 className="mb-2 text-lg font-medium text-black">{title}</h3>
        <p className="text-black/50">{description}</p>
      </div>
    </div>
  )
}
