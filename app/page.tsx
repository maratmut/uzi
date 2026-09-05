import BabyScene from '@/components/BabyScene'
import Link from 'next/link'
import { FaPhone, FaClock, FaMapMarkerAlt } from 'react-icons/fa'
import Script from 'next/script'

export default function Home() {
  return (
    <>
      <Script id="schema-medical-organization" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        "name": "ООО Центр современной медицины - УЗИ для беременных в Махачкале",
        "url": "https://uzi05.ru",
        "logo": "https://uzi05.ru/child.jpeg",
        "description": "Профессиональное УЗИ для беременных в Махачкале. 3D/4D УЗИ плода, скрининг, допплерометрия.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "ул. Гоголя 42",
          "addressLocality": "Махачкала",
          "postalCode": "367000",
          "addressCountry": "RU"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 42.9784901,
          "longitude": 47.4875490
        },
        "telephone": "+79882681666",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:30",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "08:30",
            "closes": "13:00"
          }
        ],
        "medicalSpecialty": ["Obstetrics", "Gynecology", "Medical Imaging"],
        "serviceType": "УЗИ диагностика для беременных",
        "priceRange": "$$"
      })}} />

      <Script id="schema-person-1" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Physician",
        "name": "Алиева Шехеризада Расуловна",
        "jobTitle": "Врач ультразвуковой диагностики, врач высшей категории",
        "description": "Врач УЗИ высшей категории с 36-летним стажем работы",
        "worksFor": {
          "@type": "MedicalBusiness",
          "name": "ООО Центр современной медицины"
        },
        "medicalSpecialty": ["Obstetrics", "Gynecology", "Medical Imaging"],
        "telephone": "+79882681666",
        "url": "https://uzi05.ru/certificates-alieva"
      })}} />

      <Script id="schema-person-2" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Physician",
        "name": "Салихова Тамара Руслановна",
        "jobTitle": "Врач ультразвуковой диагностики, кандидат медицинских наук",
        "description": "Врач УЗИ, кандидат медицинских наук со стажем работы 13 лет",
        "worksFor": {
          "@type": "MedicalBusiness",
          "name": "ООО Центр современной медицины"
        },
        "medicalSpecialty": ["Obstetrics", "Gynecology", "Medical Imaging"],
        "telephone": "+79288051163",
        "url": "https://uzi05.ru/certificates-salihova"
      })}} />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-rose-50 to-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
              <BabyScene />
              <div className="w-full md:w-1/2 flex flex-col items-start">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  УЗИ при беременности и гинекологическое УЗИ в Махачкале
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Скрининги 1–3 триместров, 3D/4D УЗИ, допплерометрия и исследования органов малого таза на аппарате Voluson Expert 22. Центр находится на ул. Гоголя, 42.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 w-full">
                  <div className="flex flex-col gap-3 flex-1">
                    <p className="text-sm font-semibold text-gray-700">Алиева Шехеризада Расуловна</p>
                    <a
                      href="tel:+79882681666"
                      className="bg-rose-400 hover:bg-rose-500 text-white px-6 py-2 rounded-full text-base transition-colors shadow-md text-center"
                    >
                      +7 (988) 268-16-66
                    </a>
                    <a
                      href="https://wa.me/79882681666?text=Здравствуйте!%20Хочу%20записаться%20на%20УЗИ%20к%20Алиевой%20Шехеризаде%20Расуловне"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full text-base transition-colors shadow-md text-center flex items-center justify-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      WhatsApp
                    </a>
                  </div>
                  <div className="flex flex-col gap-3 flex-1">
                    <p className="text-sm font-semibold text-gray-700">Салихова Тамара Руслановна</p>
                    <a
                      href="tel:+79288051163"
                      className="bg-rose-400 hover:bg-rose-500 text-white px-6 py-2 rounded-full text-base transition-colors shadow-md text-center"
                    >
                      +7 (928) 805-11-63
                    </a>
                    <a
                      href="https://wa.me/79288051163?text=Здравствуйте!%20Хочу%20записаться%20на%20УЗИ%20к%20Салиховой%20Тамаре%20Руслановне"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full text-base transition-colors shadow-md text-center flex items-center justify-center"
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

        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="mb-10 text-center">
                <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">УЗИ-исследования в центре</h2>
                <p className="mx-auto max-w-3xl text-gray-600">
                  Выберите нужное направление. Рекомендуемый срок, способ проведения и подготовку к исследованию уточняйте при записи.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  ['Скрининг 1 триместра', '/services/ultrasound-1-trimester/'],
                  ['Скрининг 2 триместра', '/services/ultrasound-2-trimester/'],
                  ['Скрининг 3 триместра', '/services/ultrasound-3-trimester/'],
                  ['3D/4D УЗИ при беременности', '/services/3d-4d-ultrasound/'],
                  ['Допплерометрия при беременности', '/services/dopplerometry/'],
                  ['Гинекологическое УЗИ', '/services/gynecological-examination/'],
                ].map(([title, href]) => (
                  <Link key={href} href={href} className="rounded-2xl border-2 border-rose-100 bg-rose-50 p-6 text-center text-lg font-semibold text-gray-900 transition hover:border-rose-200 hover:shadow-md">
                    {title}
                  </Link>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Link href="/services/" className="inline-block rounded-full bg-rose-400 px-8 py-3 font-medium text-white transition-colors hover:bg-rose-500">
                  Все УЗИ-исследования
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Мы создали все условия для вашего комфорта и уверенности на каждом этапе.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-rose-50 p-8 rounded-2xl text-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Современное оборудование
                </h3>
                <p className="text-gray-600">
                  Передовая аппаратура экспертного уровня Voluson Expert 22 для точной диагностики состояния развития плода.
                </p>
              </div>

              <div className="bg-rose-50 p-8 rounded-2xl text-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Опытные врачи
                </h3>
                <p className="text-gray-600">
                  Врачи высшей категории с опытом работы более 35 лет заботятся о вашем здоровье.
                </p>
              </div>

              <div className="bg-rose-50 p-8 rounded-2xl text-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Уютная атмосфера
                </h3>
                <p className="text-gray-600">
                  Заботливый персонал и приятная обстановка для вашего комфорта.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Contact Section */}
        <section id="contacts" className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Запись на УЗИ в Махачкале
            </h2>
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Первый специалист */}
                <div className="bg-rose-50 p-8 rounded-2xl">
                  <h3 className="font-bold text-gray-900 text-2xl mb-2">
                    Алиева Шехеризада Расуловна
                  </h3>
                  <p className="text-gray-600 mb-6">Врач высшей категории</p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <FaClock className="text-rose-500 text-xl flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">График работы</h4>
                        <ul className="text-gray-600 space-y-1 text-sm">
                          <li>Пн-Пт: Четные числа с 08:30 до 13:00</li>
                          <li>Пн-Пт: Нечетные числа с 13:00 до 18:00</li>
                          <li>Сб: 08:30 - 13:00</li>
                          <li>В Воскресенье - выходной</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Запись на приём</h4>
                      <div className="flex flex-col gap-3">
                        <a 
                          href="tel:+79882681666" 
                          className="inline-flex items-center text-lg text-gray-800 hover:text-rose-600 transition-colors"
                        >
                          <FaPhone className="text-rose-500 text-lg mr-3" />
                          +7 (988) 268-16-66
                        </a>
                        <a 
                          href="https://wa.me/79882681666?text=Здравствуйте!%20Хочу%20записаться%20на%20УЗИ%20к%20Алиевой%20Шехеризаде%20Расуловне"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-lg text-green-600 hover:text-green-700 transition-colors"
                        >
                          <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                          </svg>
                          Написать в WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Второй специалист */}
                <div className="bg-rose-50 p-8 rounded-2xl">
                  <h3 className="font-bold text-gray-900 text-2xl mb-2">
                    Салихова Тамара Руслановна
                  </h3>
                  <p className="text-gray-600 mb-6">Кандидат медицинских наук</p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <FaClock className="text-rose-500 text-xl flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">График работы</h4>
                        <ul className="text-gray-600 space-y-1 text-sm">
                          <li>Пн-Пт: Нечетные числа с 08:30 до 13:00</li>
                          <li>Пн-Пт: Четные числа с 13:00 до 16:00</li>
                          <li>В Субботу и Воскресенье - выходной</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Запись на приём</h4>
                      <div className="flex flex-col gap-3">
                        <a 
                          href="tel:+79288051163" 
                          className="inline-flex items-center text-lg text-gray-800 hover:text-rose-600 transition-colors"
                        >
                          <FaPhone className="text-rose-500 text-lg mr-3" />
                          +7 (928) 805-11-63
                        </a>
                        <a 
                          href="https://wa.me/79288051163?text=Здравствуйте!%20Хочу%20записаться%20на%20УЗИ%20к%20Салиховой%20Тамаре%20Руслановне"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-lg text-green-600 hover:text-green-700 transition-colors"
                        >
                          <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
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
              <div className="mt-8 bg-rose-50 p-6 rounded-2xl text-center">
                <p className="text-gray-800 font-medium text-lg">
                  Для пациентов, которые не успели записаться, у нас осуществляется запись на &quot;живую очередь&quot;.
                  Мы чередуем записанных пациентов и пациентов из списка &quot;живой очереди&quot;.
                </p>
              </div>

              {/* Общая информация */}
              <div className="mt-8 bg-rose-50 p-8 rounded-2xl text-center">
                <div className="flex items-center justify-center mb-3">
                  <FaMapMarkerAlt className="text-rose-500 text-2xl" />
                  <h3 className="font-bold text-gray-900 text-2xl ml-2">
                    Наш адрес
                  </h3>
                </div>
                <div>
                  <p className="text-gray-700 text-xl">г. Махачкала, ул. Гоголя 42</p>
                  <p className="text-gray-600 mt-1">
                    Клиника OOO &quot;Центр современной медицины&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="h-96 w-full max-w-6xl mx-auto mb-8 px-4">
          <div className="rounded-2xl overflow-hidden shadow-lg h-full">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=47.487549%2C42.978490&z=17&pt=47.487549%2C42.978490%2Cpm2rdm&l=map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Карта проезда — г. Махачкала, ул. Гоголя 42"
            />
          </div>
        </section>
      </main>
    </>
  )
}
