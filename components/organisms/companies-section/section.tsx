export default function CompaniesSection() {
  return (
      <section className="py-16 bg-white dark:bg-navy-800/10">
        <div className="container mx-auto px-6 md:px-16">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl text-black">Companies We Work With</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Dictum tortor, sed scelerisque mattis malesuada. Urna sed magna a sed nulla egestas bibendum eget.
              Consectetur urna varius dolor, fermentum turpis. Sit malesuada id tortor viverra gravida cras. In quis.
            </p>
          </div>
  
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-6">
              {/* Row 1 */}
              <div className="flex items-center justify-center">
                <img src="/1.png" alt="Pepsi" className="h-12 w-auto" />
              </div>
              <div className="flex items-center justify-center">
                <img src="/2.png" alt="Chipotle" className="h-12 w-auto" />
              </div>
              <div className="flex items-center justify-center">
                <img src="/3.png" alt="Beats" className="h-12 w-auto" />
              </div>
              <div className="flex items-center justify-center">
                <img src="/4.png" alt="Beats" className="h-12 w-auto" />
              </div>
              <div className="flex items-center justify-center">
                <img src="/5.png" alt="WWF" className="h-12 w-auto" />
              </div>
              <div className="flex items-center justify-center">
                <img src="/11.png" alt="WWF" className="h-12 w-auto" />
              </div>
            </div>
  
            <div className="mt-8 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5">
              {/* Row 2 */}
              <div className="flex items-center justify-center">
                <img src="/6.png" alt="GoPro" className="h-12 w-auto" />
              </div>
              <div className="flex items-center justify-center">
                <img src="/7.png" alt="Huawei" className="h-12 w-auto" />
              </div>
              <div className="flex items-center justify-center">
                <img src="/8.png" alt="Lenovo" className="h-12 w-auto" />
              </div>
              <div className="flex items-center justify-center">
                <img src="/9.png" alt="Domino's" className="h-12 w-auto" />
              </div>
              <div className="flex items-center justify-center">
                <img src="/10.png" alt="Dyson" className="h-12 w-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  