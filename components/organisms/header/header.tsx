import HeaderNav from "@/components/molecules/header-nav/header-nav"

export default function Header() {
  return (
    <header className="w-full bg-white/90 dark:bg-navy-900/90 backdrop-blur-sm py-4 px-6 md:px-16 sticky top-0 z-50">
      <HeaderNav />
    </header>
  )
}

