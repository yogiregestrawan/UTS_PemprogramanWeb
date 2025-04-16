import Link from "next/link"
import UltimateServiceItem, {
  type UltimateServiceItemProps,
} from "@/components/atoms/ultimate-item/item"

export type UltimateServicesProps = {
  title: string
  description: string
  services: UltimateServiceItemProps[]
  ctaText?: string
  ctaLink?: string
  imageUrl?: string
}

const defaultProps: UltimateServicesProps = {
  title: "Ultimate Services for your businesses.",
  description:
    "We offer specialized services designed to help your business thrive in today's competitive digital landscape.",
  
  services: [
    {
      title: "Web Development",
      description: "Custom websites built with modern frameworks and responsive design principles.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-violet-500"
        >
          <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
        </svg>
      ),
    },
    {
      title: "UI/UX Design",
      description: "User-centered design that enhances usability and creates delightful experiences.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-violet-500"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" x2="9.01" y1="9" y2="9" />
          <line x1="15" x2="15.01" y1="9" y2="9" />
        </svg>
      ),
    },
    {
      title: "Brand Strategy",
      description: "Strategic brand development to help your business stand out in the market.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-violet-500"
        >
          <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
          <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
          <path d="M2 7h20" />
          <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
        </svg>
      ),
    },
    {
      title: "SEO Optimization",
      description: "Improve your search rankings and drive more organic traffic to your website.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-violet-500"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
          <path d="M11 8v6" />
          <path d="M8 11h6" />
        </svg>
      ),
    },
  ],
  ctaText: "View All Services",
  ctaLink: "/services",
}

export default function UltimateServices(props: Partial<UltimateServicesProps> = {}) {
  const { title, description, services, ctaText, ctaLink, imageUrl } = { ...defaultProps, ...props }

  return (
    <section className="py-16 bg-white dark:bg-transparent border-t border-gray-100 dark:border-navy-700/20">
      <div className="container mx-auto px-6 md:px-16">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left Column - Content */}
          <div>
            <div className="mb-8">
              <h2 className="mb-4 text-3xl font-bold leading-tight md:text-4xl text-black">{title}</h2>
              <p className=" text-black/50">{description}</p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              {services.map((service, index) => (
                <UltimateServiceItem
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              ))}
            </div>

            {ctaText && ctaLink && (
              <div className="mt-8">
                <Link
                  href={ctaLink}
                  className="rounded-full bg-violet-500 px-6 py-3 font-medium text-white transition-colors hover:bg-violet-600 dark:bg-violet-600 dark:hover:bg-violet-700"
                >
                  {ctaText}
                </Link>
              </div>
            )}
          </div>

          {/* Right Column - Image */}
          <div className="flex items-center justify-center">
            {imageUrl ? (
              <img
                src={imageUrl || "/placeholder.svg"}
                alt="Services illustration"
                className="h-full w-full rounded-lg object-cover"
              />
            ) : (
              <div className="h-full w-full rounded-lg bg-violet-100 "></div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
