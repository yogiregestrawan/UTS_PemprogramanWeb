"use client"

import { useState } from "react"
import StarRating from "@/components/atoms/star-rating/rating"


const testimonials = [
  {
    id: 1,
    name: "Gwen Stacy",
    title: "Cofounder",
    rating: 5,
    text: "Ultricies amet vulputate nulla in elit orci vitae tortor. Nunc ut pretium lectus aliquet varius pretium. Nec convallis morbi sapien aliquet augue. Nulla nulla integer pellentesque neque cum amet, turpis lacus, massa. Eu velit nunc adipiscing tincidunt blandit.",
    avatar: "/1.png",
  },
  {
    id: 2,
    name: "Peter Parker",
    title: "CEO",
    rating: 5,
    text: "Working with Ace Studios transformed our digital presence. Their team understood our vision perfectly and delivered beyond our expectations. The process was smooth and communication was excellent throughout.",
    avatar: "/2.png",
  },
  {
    id: 3,
    name: "Mary Jane",
    title: "Marketing Director",
    rating: 5,
    text: "The team at Ace Studios are true professionals. They took our outdated website and turned it into a modern, user-friendly platform that has significantly increased our conversion rates. Highly recommended!",
    avatar: "/3.png",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-16">
        <div className="relative">
          {/* Client photos collage - decorative */}
          <div className="absolute -left-4 top-0 hidden md:block">
            <div className="relative h-64 w-64">
              <div className="absolute left-0 top-0 h-16 w-16 overflow-hidden rounded-full">
                <img src="/1.png" alt="" className="h-full w-full object-cover" />
              </div>
              <div className="absolute left-20 top-20 h-16 w-16 overflow-hidden rounded-full">
                <img src="/2.png" alt="" className="h-full w-full object-cover" />
              </div>
              <div className="absolute left-0 top-40 h-16 w-16 overflow-hidden rounded-full">
                <img src="/3.png" alt="" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>

          <div className="absolute -right-4 top-0 hidden md:block">
            <div className="relative h-64 w-64">
              <div className="absolute right-0 top-0 h-16 w-16 overflow-hidden rounded-full">
                <img src="/4.png" alt="" className="h-full w-full object-cover" />
              </div>
              <div className="absolute right-20 top-20 h-16 w-16 overflow-hidden rounded-full">
                <img src="/5.png" alt="" className="h-full w-full object-cover" />
              </div>
              <div className="absolute right-0 top-40 h-16 w-16 overflow-hidden rounded-full">
                <img src="/6.png" alt="" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>

          {/* Main testimonial content */}
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl text-black">Meet Client Satisfaction After Working With Us</h2>
            <p className="mb-2 text-lg font-medium text-black">Doesn't feel like an agency</p>
            <StarRating rating={currentTestimonial.rating} className="justify-center mb-4" />
            <p className="mb-8 text-gray-600">{currentTestimonial.text}</p>

            <div className="flex items-center justify-center">
              <img
                src={currentTestimonial.avatar || "/placeholder.svg"}
                alt={currentTestimonial.name}
                className="mr-4 h-12 w-12 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="font-medium text-black">{currentTestimonial.name}</p>
                <p className="text-sm text-gray-600">{currentTestimonial.title}</p>
              </div>
              <div className="ml-8 flex">
                <button
                  onClick={goToPrevious}
                  className="mr-2 flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
                  aria-label="Previous testimonial"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={goToNext}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
                  aria-label="Next testimonial"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
