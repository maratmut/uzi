import Image from 'next/image'
import { createPageMetadata } from '@/app/seo'

export const metadata = createPageMetadata(
  'Галерея УЗИ-изображений — Центр современной медицины',
  'Примеры УЗИ-изображений, полученных в Центре современной медицины в Махачкале.',
  '/gallery/',
)

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-b from-rose-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Первая встреча с вашим малышом
            </h1>
            <p className="text-lg text-gray-600">
              Посмотрите на самого ребенка с помощью уникальной техники 3D/4D УЗИ в нашей современной лаборатории. Получите незабываемые эмоции от первой встречи с малышом.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Gallery Item 1 */}
              <div className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <Image
                  src="/child.jpeg"
                  alt="УЗИ изображение малыша"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Gallery Item 2 */}
              <div className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <Image
                  src="/child.jpeg"
                  alt="3D УЗИ изображение"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Gallery Item 3 */}
              <div className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <Image
                  src="/child.jpeg"
                  alt="4D УЗИ малыша в движении"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Gallery Item 4 */}
              <div className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <Image
                  src="/child.jpeg"
                  alt="УЗИ изображение лица ребенка"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Gallery Item 5 */}
              <div className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <Image
                  src="/child.jpeg"
                  alt="3D УЗИ профиль малыша"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Gallery Item 6 */}
              <div className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <Image
                  src="/child.jpeg"
                  alt="УЗИ изображение ручки малыша"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Memory Section */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center">
              <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ваши первые воспоминания — навсегда
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Все изображения УЗИ мы выдаем вам как важные воспоминания. Мы также создаем видеозаписи, которые вы сможете показывать своему ребенку, когда он подрастет.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-rose-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Фото высокого качества</h3>
                    <p className="text-sm text-gray-600">Четкие снимки на память</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-rose-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Видеозапись</h3>
                    <p className="text-sm text-gray-600">Движения вашего малыша</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-rose-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Цифровой формат</h3>
                    <p className="text-sm text-gray-600">Удобно хранить и делиться</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3D/4D Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Преимущества 3D/4D УЗИ
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-rose-50 rounded-2xl p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-rose-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Реалистичные изображения
                    </h3>
                    <p className="text-gray-600">
                      Объемное изображение позволяет увидеть черты лица, мимику и движения малыша в режиме реального времени
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-rose-50 rounded-2xl p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-rose-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Эмоциональная связь
                    </h3>
                    <p className="text-gray-600">
                      Увидеть своего малыша до рождения создает особую эмоциональную связь между родителями и ребенком
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-rose-50 rounded-2xl p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-rose-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Безопасность
                    </h3>
                    <p className="text-gray-600">
                      3D/4D УЗИ абсолютно безопасно для мамы и малыша, используется та же технология, что и при обычном УЗИ
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-rose-50 rounded-2xl p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-rose-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Лучшее время
                    </h3>
                    <p className="text-gray-600">
                      Оптимальный период для 3D/4D УЗИ — 24-32 недели беременности, когда малыш уже достаточно сформирован
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-rose-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Готовы увидеть своего малыша?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Запишитесь на 3D/4D УЗИ для незабываемой первой встречи с вашим ребенком. Наши специалисты ответят на все вопросы и подберут удобное время.
              </p>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="flex flex-col items-center space-y-3">
                  <p className="font-semibold text-gray-900">Алиева Шехеризада Расуловна</p>
                  <a
                    href="tel:+79882681666"
                    className="w-full max-w-xs bg-rose-400 hover:bg-rose-500 text-white px-6 py-3 rounded-full text-lg transition-colors font-medium shadow-md inline-flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +7 (988) 268-16-66
                  </a>
                  <a
                    href="https://wa.me/79882681666?text=Здравствуйте!%20Хочу%20записаться%20на%20прием"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full max-w-xs bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg transition-colors font-medium flex items-center justify-center shadow-md"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    WhatsApp
                  </a>
                </div>

                <div className="flex flex-col items-center space-y-3">
                  <p className="font-semibold text-gray-900">Салихова Тамара Руслановна</p>
                  <a
                    href="tel:+79288051163"
                    className="w-full max-w-xs bg-rose-400 hover:bg-rose-500 text-white px-6 py-3 rounded-full text-lg transition-colors font-medium shadow-md inline-flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +7 (928) 805-11-63
                  </a>
                  <a
                    href="https://wa.me/79288051163?text=Здравствуйте!%20Хочу%20записаться%20на%20прием"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full max-w-xs bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg transition-colors font-medium flex items-center justify-center shadow-md"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

