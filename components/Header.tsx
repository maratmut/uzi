'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="flex min-h-20 items-center justify-between gap-4 py-3 lg:gap-6">
          {/* Logo */}
          <Link href="/" className="flex min-w-0 items-center gap-2">
            <div className="relative h-10 w-10 shrink-0">
              <Image
                src="/child.webp"
                alt="Центр современной медицины"
                fill
                className="object-contain"
              />
            </div>
            <span className="max-w-56 text-base font-bold leading-tight text-gray-800 sm:text-lg lg:max-w-64 lg:text-xl">Центр современной медицины</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden shrink-0 items-center gap-6 whitespace-nowrap lg:flex">
            <Link href="/services" className="text-gray-700 hover:text-rose-500 transition-colors">
              Услуги
            </Link>
            <Link href="/services/gynecological-examination/" className="text-gray-700 hover:text-rose-500 transition-colors">
              Гинекологическое УЗИ
            </Link>
            <Link href="/team" className="text-gray-700 hover:text-rose-500 transition-colors">
              Специалисты
            </Link>
          </nav>

          {/* CTA Button */}
          <Link
            href="/#contacts"
            className="hidden min-h-11 shrink-0 items-center whitespace-nowrap bg-rose-400 hover:bg-rose-500 text-white px-6 py-2 rounded-full transition-colors lg:inline-flex"
          >
            Записаться
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-11 w-11 shrink-0 flex-col items-center justify-center space-y-1.5 lg:hidden"
            aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            <span className={`block h-0.5 w-6 bg-gray-800 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-gray-800 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-gray-800 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav id="mobile-navigation" className="lg:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-2 [&>a]:flex [&>a]:min-h-11 [&>a]:items-center [&>a:last-child]:justify-center">
              <Link 
                href="/services" 
                className="text-gray-700 hover:text-rose-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Услуги
              </Link>
              <Link
                href="/services/gynecological-examination/"
                className="text-gray-700 hover:text-rose-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Гинекологическое УЗИ
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

