import MainLayout from "@/components/templates/main-layout/main"
import HeroSection from "@/components/organisms/hero-section/hero-section"
import ServicesSection from "@/components/organisms/services-section/section"
import CompaniesSection from "@/components/organisms/companies-section/section"
import ProcessSection from "@/components/organisms/process-section/section"
import PortfolioSection from "@/components/organisms/portfolio-section/section"
import AboutStatement from "@/components/organisms/about-statement/about"
import CreatorSection from "@/components/organisms/creator-section/section"
import UltimateServices from "@/components/organisms/ultimate-services/section"
import TestimonialsSection from "@/components/organisms/testimonials-section/section"
import FaqSection from "@/components/organisms/faq-section/section"

export default function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      <ServicesSection />
      <CompaniesSection />
      <ProcessSection />
      <PortfolioSection />
      <AboutStatement />
      <CreatorSection />
      <UltimateServices />
      <TestimonialsSection />
      <FaqSection />
      
    </MainLayout>
  )
}