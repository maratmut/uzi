import Link from 'next/link'
import Image from 'next/image'
import { FaPhone } from 'react-icons/fa'
import { createPageMetadata } from '@/app/seo'

export const metadata = createPageMetadata(
  'Врачи УЗИ в Махачкале — Алиева и Салихова',
  'Врачи ультразвуковой диагностики в Махачкале: Алиева Шехеризада Расуловна и Салихова Тамара Руслановна. Опыт, специализация и запись.',
  '/team/',
)

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-b from-rose-50 to-white py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Знакомьтесь с нашей командой
            </h1>
            <p className="text-lg text-gray-600">
              Наша команда опытных и заботливых врачей посвятила себя вашему здоровью и благополучию будущих мам. Мы верим в индивидуальный подход и создание доверительной атмосферы, где вы можете чувствовать себя безопасно и комфортно на каждом этапе.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Врач 1 - Алиева Шехеризада Расуловна */}
            <div className="bg-gradient-to-br from-rose-50 to-white rounded-3xl shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-[400px] md:h-auto">
                  <Image
                    src="/no-image2.webp"
                    alt="Алиева Шехеризада Расуловна - Врач УЗИ высшей категории"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      Алиева Шехеризада Расуловна
                    </h2>
                    <p className="text-lg text-rose-600 font-medium">
                      Врач ультразвуковой диагностики, врач высшей категории
                    </p>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <p className="text-gray-700">
                      Врач высшей категории с <strong>36-летним опытом работы</strong> в области ультразвуковой диагностики.
                    </p>
                    
                    <div className="bg-white rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-3">Квалификация и достижения:</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-rose-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Член Российской ассоциации специалистов УЗД в медицине
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-rose-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Заслуженный врач Республики Дагестан
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-rose-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Регулярное повышение квалификации
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-rose-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Специализация на пренатальной диагностике
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Link 
                      href="/certificates-alieva"
                      className="block w-full bg-rose-100 hover:bg-rose-200 text-rose-700 text-center py-3 rounded-lg font-medium transition-colors"
                    >
                      Подробнее о квалификации и сертификатах →
                    </Link>
                    <a
                      href="tel:+79882681666"
                      className="flex items-center justify-center space-x-2 w-full bg-rose-400 hover:bg-rose-500 text-white py-3 rounded-lg font-medium transition-colors"
                    >
                      <FaPhone />
                      <span>+7 (988) 268-16-66</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Врач 2 - Салихова Тамара Руслановна */}
            <div className="bg-gradient-to-br from-rose-50 to-white rounded-3xl shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="order-2 md:order-1">
                  <div className="p-8 flex flex-col justify-center">
                    <div className="mb-6">
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        Салихова Тамара Руслановна
                      </h2>
                      <p className="text-lg text-rose-600 font-medium">
                        Врач ультразвуковой диагностики, кандидат медицинских наук
                      </p>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <p className="text-gray-700">
                        Опытный специалист с <strong>13-летним стажем работы</strong>. Кандидат медицинских наук.
                      </p>
                      
                      <div className="bg-white rounded-lg p-4">
                        <h3 className="font-semibold text-gray-900 mb-3">Квалификация и достижения:</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-rose-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Кандидат медицинских наук
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-rose-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Постоянный участник международных конференций
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-rose-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Регулярное повышение квалификации
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-rose-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Экспертиза в акушерской ультразвуковой диагностике
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Link 
                        href="/certificates-salihova"
                        className="block w-full bg-rose-100 hover:bg-rose-200 text-rose-700 text-center py-3 rounded-lg font-medium transition-colors"
                      >
                        Подробнее о квалификации и сертификатах →
                      </Link>
                      <a
                        href="tel:+79288051163"
                        className="flex items-center justify-center space-x-2 w-full bg-rose-400 hover:bg-rose-500 text-white py-3 rounded-lg font-medium transition-colors"
                      >
                        <FaPhone />
                        <span>+7 (928) 805-11-63</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="relative h-[400px] md:h-auto order-1 md:order-2">
                  <Image
                    src="/tamara-salihova.webp"
                    alt="Салихова Тамара Руслановна - Врач УЗИ, кандидат медицинских наук"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Team Section */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Почему нашим врачам доверяют
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Многолетний опыт
                </h3>
                <p className="text-gray-600">
                  Наши специалисты имеют более 35 лет совокупного опыта в ультразвуковой диагностике
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Постоянное обучение
                </h3>
                <p className="text-gray-600">
                  Регулярное повышение квалификации и участие в международных конференциях
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Индивидуальный подход
                </h3>
                <p className="text-gray-600">
                  Каждая пациентка получает персональное внимание и заботу на всех этапах
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Высокая квалификация
                </h3>
                <p className="text-gray-600">
                  Врачи высшей категории с научными степенями и признанием профессионального сообщества
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Запишитесь на консультацию
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Наши врачи готовы ответить на все ваши вопросы и провести профессиональное УЗИ-обследование
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center space-y-3">
                <p className="font-semibold text-gray-900">Алиева Шехеризада Расуловна</p>
                <a
                  href="tel:+79882681666"
                  className="w-full max-w-xs bg-rose-400 hover:bg-rose-500 text-white px-6 py-3 rounded-full text-lg transition-colors font-medium shadow-md"
                >
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
                  className="w-full max-w-xs bg-rose-400 hover:bg-rose-500 text-white px-6 py-3 rounded-full text-lg transition-colors font-medium shadow-md"
                >
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
      </section>
    </main>
  )
}

