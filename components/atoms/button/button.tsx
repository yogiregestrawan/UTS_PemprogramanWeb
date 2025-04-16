import type  { ReactNode } from 'react';
import Link from 'next/link';

type ButtonProps = {
    children: ReactNode
    variant?: "primary" | "text"
    href?: string
    onClick?: () => void
    className?: string
  }

  export default function Button({ children, variant = "primary", href, onClick, className = "" }: ButtonProps) {
    const baseStyles = "rounded-full font-medium px-6 py-3 transition-colors"
  
    const variantStyles = {
      primary: "bg-[#6854FC] text-white",
      text: "text-[#6854FC]",
    }
  
    const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${className}`
  
    if (href) {
      return (
        <Link href="#" className="p-2 mx-5 px-5 py-2 font-medium rounded-full text-[#6854FC]">
          {children}
        </Link>
      )
    }
  
    return (
      <button onClick={onClick} className={buttonStyles}>
        {children}
      </button>
    )
  }
  
