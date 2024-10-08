import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gray-900 text-white p-4">
      <nav className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-green-400">OpenClimate.fund</Link>
          <button
            className="sm:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
          <div className="hidden sm:flex items-center space-x-4">
            <Link href="#about" className="py-2 hover:text-green-400 transition-colors">About</Link>
            <Link href="#how-it-works" className="py-2 hover:text-green-400 transition-colors">How It Works</Link>
            <Link href="#get-started" className="bg-green-500 text-gray-900 px-4 py-2 rounded hover:bg-green-400 transition-colors">Get Started</Link>
          </div>
        </div>
        {isMenuOpen && (
          <div className="mt-4 sm:hidden">
            <Link href="#about" className="block py-2 hover:text-green-400 transition-colors">About</Link>
            <Link href="#how-it-works" className="block py-2 hover:text-green-400 transition-colors">How It Works</Link>
            <Link href="#get-started" className="block py-2 mt-2 bg-green-500 text-gray-900 px-4 rounded text-center hover:bg-green-400 transition-colors">Get Started</Link>
          </div>
        )}
      </nav>
    </header>
  )
}