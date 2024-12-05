import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full backdrop-blur-md top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-glass shadow-glass rounded-2xl px-6 py-3">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/OpenClimatefund_paths.svg"
                alt="OpenClimate.fund Logo"
                width={200}
                height={40}
                className="h-6 w-auto"
              />
            </Link>
            <button
              className="sm:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
            <div className="hidden sm:flex items-center space-x-6">
              <Link
                href="#about"
                className="py-2 text-lg text-silver-400 hover:text-primary-600 transition-colors"
              >
                About
              </Link>
              <Link
                href="#how-it-works"
                className="py-2 text-lg text-silver-400 hover:text-primary-600 transition-colors"
              >
                How It Works
              </Link>
              <Link href="#get-started">
                <button
                  className="rounded-xl bg-primary-600 px-6 py-2.5 text-lg text-white 
                  hover:bg-green-500 
                  transition-all duration-300"
                >
                  Get Started
                </button>
              </Link>
            </div>
          </div>
          {isMenuOpen && (
            <div className="mt-4 sm:hidden">
              <Link
                href="#about"
                className="block py-3 text-lg text-black-600 hover:text-primary-600 transition-colors"
              >
                About
              </Link>
              <Link
                href="#how-it-works"
                className="block py-3 text-lg text-black-600 hover:text-primary-600 transition-colors"
              >
                How It Works
              </Link>
              <button
                className="w-full mt-3 rounded-xl bg-primary-600 px-6 py-3 text-lg text-white 
                shadow-subtle hover:shadow-elevated hover:bg-primary-500 
                transition-all duration-300"
              >
                Get Started
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}