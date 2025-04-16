import Link from "next/link"

export default function PortfolioSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 md:px-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl text-black">See Our Work</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Interdum ac tincidunt molestie facilisis. Nulla at erat odio bibendum diam quam. Scelerisque mus vel egestas
            justo, purus consequat nibh eget. Non risus feugiat porta integer.
          </p>
        </div>

        <div className="mb-10 grid gap-6 md:grid-cols-3">
          {/* Project 1 */}
          <div className="overflow-hidden rounded-lg">
            <img
              src="/DSC_4649.JPG"
              alt="Hand holding smartphone"
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Project 2 */}
          <div className="overflow-hidden rounded-lg">
            <img
              src="/DSC_4918.JPG"
              alt="Smartphone with apps"
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Project 3 */}
          <div className="overflow-hidden rounded-lg">
            <img
              src="/DSC_4708.JPG"
              alt="Crypto trading app"
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <Link
            href="#"
            className="rounded-full bg-[#6854FC] px-6 py-3 font-medium text-white transition-colors"
          >
            See All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}
