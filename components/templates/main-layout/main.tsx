import type { ReactNode } from "react"
import Header from "@/components/organisms/header/header"
import Footer from "@/components/organisms/footer/footer"


type MainLayoutProps = {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (  
    <div className="relative overflow-hidden bg-gray-50 ">
      
      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
    
  )
}
