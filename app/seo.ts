import type { Metadata } from 'next'

const siteUrl = 'https://uzi05.ru'
const siteName = 'Центр современной медицины'

export function createPageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const url = new URL(path, siteUrl).toString()

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName,
      locale: 'ru_RU',
      type: 'website',
    },
  }
}
