import Link from 'next/link'

type Section = {
  title: string
  paragraphs?: string[]
  items?: string[]
}

type RelatedLink = {
  href: string
  label: string
}

export default function ServiceLanding({
  title,
  intro,
  sections,
  relatedLinks,
}: {
  title: string
  intro: string
  sections: Section[]
  relatedLinks: RelatedLink[]
}) {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-rose-50 to-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <nav aria-label="Хлебные крошки" className="mb-5 text-sm text-gray-500">
              <Link href="/" className="hover:text-rose-600">Главная</Link>
              <span aria-hidden="true"> → </span>
              <Link href="/services/" className="hover:text-rose-600">Услуги</Link>
            </nav>
            <h1 className="mb-6 text-3xl font-bold text-gray-900 md:text-5xl">{title}</h1>
            <p className="max-w-3xl text-lg leading-relaxed text-gray-600">{intro}</p>
            <Link href="/#contacts" className="mt-8 inline-block rounded-full bg-rose-400 px-7 py-3 font-medium text-white shadow-md transition-colors hover:bg-rose-500">
              Записаться на УЗИ
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">{section.title}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mb-4 leading-relaxed text-gray-600">{paragraph}</p>
                ))}
                {section.items && (
                  <ul className="list-disc space-y-3 pl-6 text-gray-600">
                    {section.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
              </section>
            ))}

            <section className="rounded-2xl bg-rose-50 p-6 md:p-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">Связанные исследования</h2>
              <div className="flex flex-wrap gap-3">
                {relatedLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="rounded-full bg-white px-5 py-2 font-medium text-rose-700 shadow-sm hover:bg-rose-100">
                    {link.label}
                  </Link>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-gray-200 p-6 md:p-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">Стоимость и запись</h2>
              <p className="mb-5 leading-relaxed text-gray-600">
                Актуальную стоимость, правила подготовки и доступное время приема уточняйте по телефону или в WhatsApp. Объем исследования определяется выбранной услугой и медицинскими показаниями.
              </p>
              <Link href="/#contacts" className="inline-block rounded-full bg-rose-400 px-7 py-3 font-medium text-white transition-colors hover:bg-rose-500">
                Контакты для записи
              </Link>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}
