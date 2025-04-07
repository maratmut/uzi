import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://uzi05.ru'),
  title: {
    template: '%s | Центр УЗИ в Махачкале',
    default: 'Узи для беременных в Махачкале | 3D/4D УЗИ | Центр современной медицины',
  },
  description: 'Профессиональное УЗИ для беременных в Махачкале на экспертном оборудовании. 3D/4D УЗИ, скрининг, допплерометрия. Опытные врачи высшей категории. Запись по телефону.',
  keywords: 'УЗИ в Махачкале, УЗИ для беременных, 3D/4D УЗИ плода, скрининг, допплерометрия, гинекологическое УЗИ, фолликулометрия, врачи УЗИ',
  authors: [{ name: 'Центр современной медицины' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Узи для беременных в Махачкале | 3D/4D УЗИ | Центр современной медицины',
    description: 'Профессиональное УЗИ для беременных в Махачкале. Скрининг, допплерометрия, 3D/4D УЗИ плода. Врачи высшей категории.',
    url: 'https://uzi05.ru',
    siteName: 'Центр УЗИ в Махачкале',
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
      <head>
        <link rel="canonical" href="https://uzi05.ru" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
