import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Салихова Тамара Руслановна - Врач УЗИ в Махачкале | Кандидат медицинских наук',
  description: 'Кандидат медицинских наук со стажем работы 13 лет. Специалист по УЗИ беременных, эхокардиографии и нейросонографии плода. Смотрите сертификаты и квалификацию врача. Запись на приём в Махачкале.',
  keywords: 'УЗИ в Махачкале, врач УЗИ Салихова, эхокардиография плода, нейросонография, допплерометрия, скрининг беременных',
}

export default function CertificatesSalihova() {
  return (
    <main className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-sky-600 hover:text-sky-700 mb-8 transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Вернуться на главную
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-sky-900 text-center mb-12">
            Квалификация и сертификаты
          </h1>

          {/* Основная информация */}
          <div className="bg-sky-50 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-sky-900 mb-6">
              Салихова Тамара Руслановна
            </h2>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>• Кандидат медицинских наук</li>
              <li>• Врач ультразвуковой диагностики</li>
              <li>• Стаж работы 13 лет</li>
            </ul>
          </div>

          {/* Образование */}
          <div className="bg-white mb-8">
            <h2 className="text-2xl font-bold text-sky-900 mb-6">
              Образование
            </h2>
            <div className="bg-sky-50 p-6 rounded-lg">
              <ol className="list-decimal list-inside space-y-4 text-gray-700">
                <li>2004-2010 г. Окончила ДГМУ, &quot;Лечебный факультет&quot;</li>
                <li>2010-2012 г. Ординатура по специальности &quot;Акушерство и гинекология&quot;</li>
                <li>2012 г. Первичная специализация по ультразвуковой диагностике</li>
                <li>2015-2019 г. Окончила заочно аспирантуру на базе ДГМУ</li>
                <li>В 2022 г. Защитила кандидатскую диссертацию. Присвоена учёная степень кандидата медицинских наук</li>
              </ol>
            </div>
          </div>

          {/* Сертификаты */}
          <div className="bg-white">
            <h2 className="text-2xl font-bold text-sky-900 mb-6">
              Сертификаты и повышение квалификации
            </h2>
            <div className="bg-sky-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">С 2014 по 2025 г. сертификаты:</p>
              <ul className="space-y-3 text-gray-700">
                <li>• &quot;Актуальные проблемы УЗ диагностики&quot;, г. Москва</li>
                <li>• &quot;Эхокардиография плода&quot;, г. Москва</li>
                <li>• &quot;Нейросонография плода&quot;, г. Москва</li>
                <li>• &quot;Ранний пренатальный скрининг&quot;, г. Москва</li>
                <li>• &quot;Допплерометрия сосудов плода и маточных артерий&quot;, г. Москва</li>
                <li>• &quot;Актуальные вопросы ультразвуковой диагностики в медицине матери и плода&quot;, г. Москва</li>
                <li>• &quot;Актуальные вопросы пренатальной диагностики I-II триместра беременности&quot;, г. Москва</li>
                <li>• &quot;Восемь шагов ультразвуковой диагностики эндометриоза. От аденомиоза до поверхностного перитонеального эндометриоза&quot;, г. Москва</li>
                <li>• &quot;Опухоли яичников&quot;, г. Москва</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center text-sky-600 hover:text-sky-700 transition-colors"
            >
              <FaArrowLeft className="mr-2" />
              Вернуться на главную
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}