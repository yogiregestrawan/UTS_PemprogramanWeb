import Link from "next/link"
import Logo from "@/components/atoms/logo/logo"

export default function Footer() {
  return (
    <footer className="bg-black py-12 bottom-0 text-white w-full">
      <div className="container mx-auto px-6 md:px-16">
        <div className="mb-8 flex justify-center">
          <Logo className="text-white" />
        </div>

        {/* Navigation */}
        <nav className="mb-10">
          <ul className="flex flex-wrap justify-center gap-8">
            <li>
              <Link href="#" className="hover:text-yellow-400 transition-colors">
                Works
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-400 transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-400 transition-colors">
                Contact us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-400 transition-colors">
                Careers
              </Link>
            </li>
          </ul>
        </nav>

        {/* Social Media */}
        <div className="mb-10 flex justify-center gap-4">
          <Link
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 hover:bg-yellow-400 hover:text-black transition-colors"
            aria-label="Instagram"
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
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </Link>
          <Link
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-800 hover:bg-yellow-400 hover:text-navy-900 transition-colors dark:bg-gray-800"
            aria-label="Facebook"
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
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </Link>
          <Link
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-800 hover:bg-yellow-400 hover:text-navy-900 transition-colors dark:bg-gray-800"
            aria-label="LinkedIn"
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
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </Link>
          <Link
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-800 hover:bg-yellow-400 hover:text-navy-900 transition-colors dark:bg-gray-800"
            aria-label="Twitter"
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
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </Link>
          <Link
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-800 hover:bg-yellow-400 hover:text-navy-900 transition-colors dark:bg-gray-800"
            aria-label="YouTube"
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
              <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
              <path d="m10 15 5-3-5-3z" />
            </svg>
          </Link>
        </div>

        {/* Copyright and Legal */}
        <div className="flex flex-col items-center justify-center gap-4 text-sm text-gray-400 md:flex-row">
          <p>Copyright2021</p>
          <div className="flex gap-4 md:ml-6">
            <Link href="#" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
