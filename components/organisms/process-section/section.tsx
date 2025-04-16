import Image from "next/image"
import ProcessStep from "@/components/atoms/process-step/section"

export default function ProcessSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-navy-800/30">
      <div className="container mx-auto px-6 md:px-16">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left side - Image */}
          <div className="relative h-[700px] overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
            <Image
              src="/proses.png"
              alt="Office desk with laptops"
              fill
              className="object-cover"
            />
          </div>

          {/* Right side - Content */}
          <div>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl text-black">Our Process</h2>
            <p className="mb-8 text-black">
              Sit arcu, egestas nunc, eros dignissim nunc, pretium malesuada. Tristique est tellus non maecenas in
              egestas aliquam. Eget dolor pellentesque consequat donec lectus nisi ligula. Ut sed nisi amet.
            </p>

            <div className="space-y-6">
              <ProcessStep
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
                    <path d="M3 11h18" />
                    <path d="M5 6h14" />
                    <path d="M7 16h10" />
                    <path d="M7 21h10" />
                    <path d="M15 2c-.2 0-.4.1-.5.2-.3.3-.5.7-.5 1.3 0 1.3-1.1 2.4-2.5 2.4H7.5c-1.3 0-2.4 1-2.5 2.3 0 .5-.2 1-.5 1.3a1.5 1.5 0 0 1-2 0 1.5 1.5 0 0 0-2 2c.3.3.7.5 1.3.5 1.3 0 2.4 1.1 2.4 2.5v4c0 1.3 1 2.4 2.3 2.5.5 0 1 .2 1.3.5a1.5 1.5 0 0 0 2 0c.3-.3.5-.7.5-1.3 0-1.3 1.1-2.4 2.5-2.4h4c1.3 0 2.4-1 2.5-2.3 0-.5.2-1 .5-1.3a1.5 1.5 0 0 0 0-2c-.3-.3-.7-.5-1.3-.5-1.3 0-2.4-1.1-2.4-2.5v-4c0-1.3-1-2.4-2.3-2.5-.5 0-1-.2-1.3-.5a1.5 1.5 0 0 0-1-.5Z" />
                  </svg>
                }
                title="Discovery"
                description="Velit lacus ipsum, urna, pretium lacinia. Mauris fermentum ut nunc est, nibh. Lectus eu vel et placerat sed velit morbi diam. Amet malesuada eget aliquam imperdiet. Arcu dolor sed pretiu."
              />

              <ProcessStep
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
                    <circle cx="12" cy="10" r="2" />
                    <path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8Z" />
                  </svg>
                }
                title="Plan"
                description="Tellus, lacus, sem adipiscing ac sem amet. Vitae proin volutpat cras tempus vitae. Ipsum consectetur quis diam hendrerit pharetra amet scelerisque. Elementum risus aliquam quam etiam. Eget eu risus dui lacus, orci. Cras ultricies posuere adipiscing faucibus."
              />

              <ProcessStep
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
                    <path d="M7 16a4 4 0 0 1-4-4 4 4 0 0 1 4-4h10a4 4 0 0 1 4 4 4 4 0 0 1-4 4" />
                    <circle cx="17" cy="12" r="3" />
                    <path d="M7 8v8" />
                  </svg>
                }
                title="Execute"
                description="Congue ridiculus at tortor mattis turpis bibendum at pulvinar viverra. Ultricies morbi amet quam nisi risus libero, sodales nibh faucibus. Sed gravida elementum auctor fermentum id sem."
              />

              <ProcessStep
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
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                }
                title="Deliver"
                description="Pellentesque id pharetra, semper neque purus. Ante lacinia in ut sagittis sed sapien, in facilisi in a diam. Pellentesque arcu faucibus vel ornare pulvinar sollicitudin eu. Tempus nisi malesuada convallis velit viverra odio. Senectus consectetur fames in sed velit, ornare."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
