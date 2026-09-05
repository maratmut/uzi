import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://uzi05.ru'),
  title: 'УЗИ беременности и гинекологии в Махачкале — uzi05.ru',
  description: 'Экспертное УЗИ при беременности и гинекологическое УЗИ в Махачкале: скрининги 1–3 триместров, 3D/4D, допплерометрия и УЗИ малого таза. Запись по телефону и WhatsApp.',
  authors: [{ name: 'Центр современной медицины' }],
  alternates: {
    canonical: 'https://uzi05.ru/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'УЗИ беременности и гинекологии в Махачкале — uzi05.ru',
    description: 'Скрининги 1–3 триместров, 3D/4D УЗИ, допплерометрия и гинекологическое УЗИ в Махачкале.',
    url: 'https://uzi05.ru/',
    siteName: 'Центр современной медицины',
    locale: 'ru_RU',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}
