import Accordion from "@/components/atoms/accordion/accordion"

// Sample FAQ data
const faqItems = [
  {
    question: "What services does Ace Studios offer?",
    answer:
      "Ace Studios offers a comprehensive range of digital services including web design and development, mobile app development, graphic design, and digital marketing. We specialize in creating custom solutions tailored to your specific business needs.",
  },
  {
    question: "How long does a typical project take to complete?",
    answer:
      "Project timelines vary depending on scope and complexity. A simple website might take 2-4 weeks, while a complex web application or mobile app could take 2-3 months. During our initial consultation, we'll provide a detailed timeline based on your specific requirements.",
  },
  {
    question: "Do you offer ongoing support after project completion?",
    answer:
      "Yes, we offer various maintenance and support packages to ensure your digital products continue to perform optimally. Our support includes regular updates, security patches, performance optimization, and technical assistance whenever you need it.",
  },
  {
    question: "How do you handle project pricing?",
    answer:
      "We provide transparent, value-based pricing tailored to each project's specific requirements. After understanding your needs, we'll provide a detailed proposal outlining all costs. We offer both fixed-price projects and flexible engagement models depending on your preferences.",
  },
]

export default function FaqSection() {
  return (
    <section className="py-16 bg-white dark:bg-transparent border-t border-gray-100 dark:border-navy-700/20">
      <div className="container mx-auto px-6 md:px-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl text-black">Frequently Asked Questions</h2>
          <p className="mx-auto max-w-2xl text-gray-600 ">
            At et turpis ridiculus tristique fermentum. Morbi nunc interdum adipiscing elit, placerat enim. Odio
            consectetur proin eget id ut. Dolor aliquam egestas viverra aliquam. Vitae nisi, in sit scelerisque eget
            sed. Nibh amet rhoncus ultrices.
          </p>
        </div>

        <div className="mx-auto max-w-3xl text-black">
          <Accordion items={faqItems} />
        </div>
      </div>
    </section>
  )
}
