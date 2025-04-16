"use client"

type HamburgerProps = {
  isOpen: boolean
  onClick: () => void
  className?: string
}

export default function Hamburger({ isOpen, onClick, className = "" }: HamburgerProps) {
  return (
    <button
      className={`flex flex-col gap-1.5 ${className}`}
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      <span className="h-0.5 w-6 bg-black"></span>
      <span className="h-0.5 w-6 bg-black"></span>
      <span className="h-0.5 w-6 bg-black"></span>
    </button>
  )
}