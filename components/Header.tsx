'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 relative">
              <Image
                src="/child.jpeg"
                alt="Центр современной медицины"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold text-gray-800">Центр современной медицины</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-gray-700 hover:text-rose-500 transition-colors">
              Услуги
            </Link>
            <Link href="/team" className="text-gray-700 hover:text-rose-500 transition-colors">
              Специалисты
            </Link>
          </nav>

          {/* CTA Button */}
          <Link
            href="/#contacts"
            className="hidden md:inline-block bg-rose-400 hover:bg-rose-500 text-white px-6 py-2 rounded-full transition-colors"
          >
            Записаться
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col space-y-1.5 w-6 h-6 justify-center"
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-gray-800 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-gray-800 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-gray-800 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/services" 
                className="text-gray-700 hover:text-rose-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Услуги
              </Link>
              <Link 
                href="/team" 
                className="text-gray-700 hover:text-rose-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Специалисты
              </Link>
              
              <Link
                href="/#contacts"
                className="bg-rose-400 hover:bg-rose-500 text-white px-6 py-2 rounded-full transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Записаться
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

