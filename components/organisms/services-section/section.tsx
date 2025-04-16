import ServiceCard from "@/components/atoms/service-card/card"

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-navy-800/30 border-t border-b border-gray-100 dark:border-navy-700/20">
      <div className="container mx-auto px-6 md:px-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl text-black">Services That Lead The Way To Better Business</h2>
          <p className="mx-auto max-w-3xl text-gray-600">
            Faucibus fringilla sed integer cursus tellus et, quis ultricies. Aliquam, faucibus arcu in laoreet ac
            elementum in eget. Massa urna viverra vulputate euismod pulvinar nibh in vel. Laoreet blandit etiam orci est
            in vel lacus neque pretium.
          </p>
        </div>

        <div className="mx-auto grid w-full max-w-full gap-12 md:grid-cols-2 lg:grid-cols-2 lg:w-[600px]">
          <ServiceCard
            icon={
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
                <rect width="7" height="12" x="3" y="6" rx="1" />
                <rect width="7" height="9" x="14" y="6" rx="1" />
                <path d="M10 6h4" />
                <path d="M10 18h4" />
                <path d="M17 15v3" />
              </svg>
            }
            title="Mobile App Designing"
            description="Justo, amet nisi velit quam. Turpis nulla morbi vestibulum morbi cum et."
          />

          <ServiceCard
            icon={
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
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            }
            title="Website Designing"
            description="Eu aliquam libero vehicula posuere. Orci viverra id pharetra adipiscing. Convallis."
          />

          <ServiceCard
            icon={
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
                <path d="m6 11 5 5 5-5" />
                <path d="m6 6 5 5 5-5" />
              </svg>
            }
            title="Graphic Designing"
            description="Aliquam ut sapien viverra blandit nisi. Nam fames suscipit erat sed id. Risus."
          />

          <ServiceCard
            icon={
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
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.29 7 12 12 20.71 7" />
                <line x1="12" x2="12" y1="22" y2="12" />
              </svg>
            }
            title="Digital Marketing"
            description="Pulvinar amet ac potenti quam feugiat praesent maecenas. Platea id egestas."
          />
        </div>
      </div>
    </section>
  )
}
