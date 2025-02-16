import Image from 'next/image'
import Link from 'next/link'
import { FaPhone, FaClock, FaMapMarkerAlt, FaBaby, FaStethoscope } from 'react-icons/fa'

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-sky-50 py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="w-40 h-40 relative flex-shrink-0">
                <Image
                  src="/child.jpeg"
                  alt="УЗИ для беременных"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col items-center text-center md:text-left md:items-start">
                <h1 className="text-4xl md:text-5xl font-bold text-sky-900 mb-6 max-w-3xl">
                  УЗИ в Махачкале
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl">
                  Профессиональная диагностика с использованием современного оборудования
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Наши услуги</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-6 bg-green-50 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <FaBaby className="text-4xl text-sky-600 mr-4" />
                  <h3 className="text-xl font-semibold text-sky-900">УЗИ для беременных</h3>
                </div>
                <ul className="text-gray-600 space-y-2">
                  <li>• Экспертное 3D/4D УЗИ плода</li>
                  <li>• Скрининговые исследования в 1, 2 и 3 триместрах</li>
                  <li>• Допплерометрия (оценка кровотока)</li>
                  <li>• Цервикометрия - (измерение длины шейки матки)</li>
                  <li>• Оценка развития плода</li>
                  <li>• Определение пола ребенка</li>
                </ul>
                <p className="mt-4 text-sm text-gray-500">Исследование проводится на новейшем аппарате Voluson E 10</p>
              </div>

              <div className="p-6 bg-green-50 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <FaStethoscope className="text-4xl text-sky-600 mr-4" />
                  <h3 className="text-xl font-semibold text-sky-900">Гинекологическое УЗИ</h3>
                </div>
                <ul className="text-gray-600 space-y-2">
                  <li>• УЗИ органов малого таза</li>
                  <li>• Фолликулометрия</li>
                  <li>• УЗИ при планировании беременности</li>
                  <li>• Послеродовое УЗИ</li>
                  <li>• УЗИ молочных желез</li>
                  <li>• УЗИ щитовидной железы</li>
                  <li>• Контроль состояния после лечения</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Specialists Section */}
        <section className="py-10 bg-sky-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Наши специалисты</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="relative w-full h-[300px] mb-4">
                  <Image
                    src="/no-image2.png"
                    alt="Врач УЗИ - Алиева Шехеризада Расуловна"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="rounded-lg object-contain"
                    priority
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-sky-900">Алиева Шехеризада Расуловна</h3>
                <p className="text-gray-600 mb-3 text-sm">
                  Врач высшей категории с 36-летним опытом работы.
                </p>
                <ul className="text-gray-600 text-sm mb-4">
                  <li>• Член Российской ассоциации специалистов УЗД в медицине</li>
                  <li>• Заслуженный врач Республики Дагестан</li>
                  <li>• Регулярное повышение квалификации</li>
                </ul>
                <Link href="/certificates-alieva" className="text-sky-600 hover:text-sky-700 text-sm font-medium">
                  Подробнее о квалификации и сертификатах →
                </Link>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="relative w-full h-[300px] mb-4">
                  <Image
                    src="/no-image2.png"
                    alt="Врач УЗИ - Салихова Тамара Руслановна"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="rounded-lg object-contain"
                    priority
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-sky-900">Салихова Тамара Руслановна</h3>
                <p className="text-gray-600 mb-3 text-sm">
                  Опытный специалист с 13-летним стажем работы.
                </p>
                <ul className="text-gray-600 text-sm">
                  <li>• Кандидат медицинских наук</li>
                  <li>• Постоянный участник международных конференций</li>
                  <li>• Регулярное повышение квалификации</li>
                </ul>
                <Link href="/certificates-salihova" className="text-sky-600 hover:text-sky-700 text-sm font-medium mt-4 inline-block">
                  Подробнее о квалификации и сертификатах →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 bg-white" aria-labelledby="contact-heading">
          <div className="container mx-auto px-4">
            <h2 id="contact-heading" className="text-3xl font-bold text-gray-800 text-center mb-8">
              Запись на УЗИ в Махачкале
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Первый специалист */}
                <div className="bg-sky-50 p-6 rounded-lg" role="article" aria-labelledby="doctor-1">
                  <div className="mb-6">
                    <h3 id="doctor-1" className="font-semibold text-sky-900 text-xl mb-2">
                      Алиева Шехеризада Расуловна
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <FaClock className="text-sky-600 text-xl flex-shrink-0 mt-1" aria-hidden="true" />
                      <div>
                        <h4 className="font-semibold text-sky-900">График работы</h4>
                        <ul className="text-gray-600 space-y-1">
                          <li>Пн-Пт: Четные числа с 08:30 до 13:00</li>
                          <li>Пн-Пт: Нечетные числа с 13:00 до 18:00</li>
                          <li>Сб: 08:30 - 13:00</li>
                          <li>В Воскресенье - выходной</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sky-900 mb-3">Запись на приём</h4>
                      <div className="flex flex-col gap-2">
                        <a href="tel:+79882681666" className="inline-flex items-center text-lg text-sky-700 hover:text-sky-800 transition-colors">
                          <FaPhone className="text-sky-600 text-lg mr-2" aria-hidden="true" />
                          +7 (988) 268-16-66
                        </a>
                        <a href="https://wa.me/79882681666?text=Здравствуйте!%20Хочу%20записаться%20на%20УЗИ%20к%20Алиевой%20Шехеризаде%20Расуловне"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-lg text-green-600 hover:text-green-700 transition-colors">
                          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                          </svg>
                          Написать в WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Второй специалист */}
                <div className="bg-sky-50 p-6 rounded-lg" role="article" aria-labelledby="doctor-2">
                  <div className="mb-6">
                    <h3 id="doctor-2" className="font-semibold text-sky-900 text-xl mb-2">
                      Салихова Тамара Руслановна
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <FaClock className="text-sky-600 text-xl flex-shrink-0 mt-1" aria-hidden="true" />
                      <div>
                        <h4 className="font-semibold text-sky-900">График работы</h4>
                        <ul className="text-gray-600 space-y-1">
                          <li>Пн-Пт: Нечетные числа с 08:30 до 13:00</li>
                          <li>Пн-Пт: Четные числа с 13:00 до 16:00</li>
                          <li>В Субботу и Воскресенье - выходной</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sky-900 mb-3">Запись на приём</h4>
                      <div className="flex flex-col gap-2">
                        <a href="tel:+79288051163" className="inline-flex items-center text-lg text-sky-700 hover:text-sky-800 transition-colors">
                          <FaPhone className="text-sky-600 text-lg mr-2" aria-hidden="true" />
                          +7 (928) 805-11-63
                        </a>
                        <a href="https://wa.me/79288051163?text=Здравствуйте!%20Хочу%20записаться%20на%20УЗИ%20к%20Салиховой%20Тамаре%20Руслановне"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-lg text-green-600 hover:text-green-700 transition-colors">
                          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                          </svg>
                          Написать в WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Информация о живой очереди */}
              <div className="mt-8 bg-sky-50 p-6 rounded-lg text-center">
                <p className="text-gray-800 font-medium text-lg">
                  Для пациентов, которые не успели записаться, у нас осуществляется запись на "живую очередь".
                  Мы чередуем записанных пациентов и пациентов из списка "живой очереди".
                </p>
              </div>

              {/* Общая информация */}
              <div className="mt-8 bg-sky-50 p-6 rounded-lg" role="contentinfo" aria-label="Адрес клиники">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    <FaMapMarkerAlt className="text-sky-600 text-2xl" aria-hidden="true" />
                    <h3 className="font-semibold text-sky-900 text-2xl ml-2">
                      Наш адрес
                    </h3>
                  </div>
                  <div>
                    <p className="text-gray-700 text-xl">г. Махачкала, ул. Гоголя 42</p>
                    <p className="text-gray-600 mt-1">
                        Клиника OOO "Центр современной медицины"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="h-72 w-full max-w-4xl mx-auto mb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d433.9104185193489!2d47.48754906399054!3d42.97849011001985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404ea04fbc1b237b%3A0xfe2cddca2485e75e!2z0KLQsNC80LDRgNCwINCh0LDQu9C40YXQvtCy0LAg0J7QntCeICLQptC10L3RgtGAINGB0L7QstGA0LXQvNC10L3QvdC-0Lkg0LzQtdC00LjRhtC40L3RiyI!5e0!3m2!1sru!2sru!4v1737818271559!5m2!1sru!2sru"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
      </main>

      {/* Тонкая разделительная линия */}
      <div className="border-t border-gray-200"></div>

      {/* Footer с SEO информацией */}
      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">О нашем центре УЗИ в Махачкале</h2>
                <p className="text-gray-600 mb-4">
                  Центр современной медицины специализируется на проведении высокоточной ультразвуковой диагностики.
                  Наша клиника оснащена современным оборудованием экспертного класса Voluson E10, что позволяет
                  проводить УЗИ с максимальной точностью и информативностью.
                </p>
                <p className="text-gray-600">
                  Мы проводим все виды УЗИ для беременных, включая 3D/4D УЗИ, допплерометрию и скрининговые
                  исследования. Также выполняем полный спектр гинекологических ультразвуковых исследований.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Преимущества нашей клиники</h2>
                <ul className="text-gray-600 space-y-2">
                  <li>• Врачи высшей категории с опытом более 35 лет</li>
                  <li>• Современное оборудование экспертного класса</li>
                  <li>• Удобное расположение в центре Махачкалы</li>
                  <li>• Точная диагностика и подробная консультация</li>
                  <li>• Гибкий график работы и система живой очереди</li>
                  <li>• Доступные цены на все виды исследований</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <p className="text-gray-600 mb-2">
                  ООО "Центр современной медицины" - Ультразвуковая диагностика в Махачкале
                </p>
                <p className="text-gray-500 text-sm">
                  © 2025 Все права защищены. Лицензия на осуществление медицинской деятельности.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
