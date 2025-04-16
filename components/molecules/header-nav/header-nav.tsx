"use client"

import { useState } from "react"
import Logo from "@/components/atoms/logo/logo"
import Button from "@/components/atoms/button/button"
import Hamburger from "@/components/atoms/hamburger/hamburger"

export default function HeaderNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="flex items-center justify-between py-2">
      <Logo />
      <div className="flex items-center gap-4">
        <Button variant="primary" className="py-2 text-sm">
          Connect with us
        </Button>
        <Hamburger isOpen={isMenuOpen} onClick={toggleMenu} className="ml-4" />
      </div>
    </div>
  )
}