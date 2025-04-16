import Link from "next/link"

export default function TeamSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-16">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left Column - Image */}
          <div className="overflow-hidden rounded-lg">
            <img
              src="/DSC_4698.JPG"
              alt="Creative team collaborating in an office"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col justify-center">
            <h2 className="mb-6 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl text-black">
              Designed And Built By...
            </h2>
            <p className="mb-8 text-gray-600">
              Et eleifend consectetur tellus consectetur nibh non urna lobortis. Quis sapien enim posuere mollis risus.
              Nec dictumst ullamcorper et leo. Varius praesent tinc.
            </p>
            <div>
              <Link
                href="#"
                className="inline-flex rounded-full bg-violet-500 px-6 py-3 font-medium text-white transition-colors hover:bg-violet-600"
              >
                About us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
