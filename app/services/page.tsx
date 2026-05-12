import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Наши УЗИ-исследования для будущих мам',
  description: 'Полный спектр УЗИ-исследований в Махачкале: скрининги, 3D/4D УЗИ, допплерометрия. Современное оборудование и опытные врачи.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-b from-rose-50 to-white py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Наши УЗИ-исследования для будущих мам
            </h1>
            <p className="text-lg text-gray-600">
              Мы используем современное оборудование и окружаем каждую пациентку заботой и вниманием на всех этапах беременности.
            </p>
          </div>
        </div>
      </section>

      {/* Screening Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Скрининг I триместра */}
              <div className="bg-rose-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                  Скрининг I триместра
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  Оценка рисков в точное определение срока вашей беременности для спокойного начала пути.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <a
                    href="/services/ultrasound-1-trimester/"
                    className="block w-full bg-rose-100 hover:bg-rose-200 text-rose-700 text-center py-3 rounded-lg font-medium transition-colors"
                  >
                    Узнать больше
                  </a>
                </div>
              </div>

              {/* Скрининг II триместра */}
              <div className="bg-rose-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                  Скрининг II триместра
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  Детальное изучение анатомии плода, чтобы убедиться, что малыш развивается правильно.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <a
                    href="/services/ultrasound-2-trimester/"
                    className="block w-full bg-rose-100 hover:bg-rose-200 text-rose-700 text-center py-3 rounded-lg font-medium transition-colors"
                  >
                    Узнать больше
                  </a>
                </div>
              </div>

              {/* Скрининг III триместра */}
              <div className="bg-rose-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                  Скрининг III триместра
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  Оценка роста и положения малыша, подготовка к долгожданной встрече.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <a
                    href="/services/ultrasound-3-trimester/"
                    className="block w-full bg-rose-100 hover:bg-rose-200 text-rose-700 text-center py-3 rounded-lg font-medium transition-colors"
                  >
                    Узнать больше
                  </a>
                </div>
              </div>
            </div>

            {/* Additional Services */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* 3D/4D УЗИ */}
              <div className="bg-white border-2 border-rose-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                  3D/4D УЗИ
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  Увидите первую улыбку вашего малыша. Эмоциональная связь, фото и видео на память.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <a
                    href="/services/3d-4d-ultrasound/"
                    className="block w-full bg-rose-100 hover:bg-rose-200 text-rose-700 text-center py-3 rounded-lg font-medium transition-colors"
                  >
                    Узнать больше
                  </a>
                </div>
              </div>

              {/* Допплерометрия */}
              <div className="bg-white border-2 border-rose-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                  Допплерометрия
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  Проверка кровотока и сосудов матки, плаценты и плода для оценки его состояния.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <a
                    href="/services/dopplerometry/"
                    className="block w-full bg-rose-100 hover:bg-rose-200 text-rose-700 text-center py-3 rounded-lg font-medium transition-colors"
                  >
                    Узнать больше
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-8 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Почему стоит выбрать нас
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-rose-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Современное оборудование
                  </h3>
                  <p className="text-gray-600">
                    Аппарат экспертного класса Voluson Expert 22 для точной диагностики
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-rose-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Опытные специалисты
                  </h3>
                  <p className="text-gray-600">
                    Врачи высшей категории с многолетним опытом работы
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-rose-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Комфортная атмосфера
                  </h3>
                  <p className="text-gray-600">
                    Доброжелательный персонал и уютная обстановка
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-rose-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Удобное расположение
                  </h3>
                  <p className="text-gray-600">
                    В центре Махачкалы на ул. Гоголя 42
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Запишитесь на УЗИ прямо сейчас
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Наши специалисты готовы ответить на все ваши вопросы и подобрать удобное время для визита
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
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
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
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
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

