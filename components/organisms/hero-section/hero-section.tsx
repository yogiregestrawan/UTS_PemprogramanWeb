import HeroContent from "@/components/molecules/hero-content/content"

export default function HeroSection() {
  return (
    <section className="relative px-6 pt-16 pb-24 md:px-16">
      <div className="grid gap-12 md:grid-cols-2">
        <HeroContent />
      </div>
    </section>
  )
}
