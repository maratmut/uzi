import Image from 'next/image'
import Link from 'next/link'
import { createPageMetadata } from '@/app/seo'

export const metadata = createPageMetadata(
  'Скрининг 3 триместра в Махачкале — УЗИ беременности',
  'Скрининг 3 триместра в Махачкале: оценка роста и положения плода, плаценты и кровотока по показаниям. Запись к специалистам УЗД.',
  '/services/ultrasound-3-trimester/',
)

export default function Ultrasound3TrimesterPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-rose-50 to-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-6xl mx-auto">
            <div className="w-full md:w-1/2">
              <Link href="/services" className="text-rose-500 hover:text-rose-600 mb-4 inline-flex items-center transition-colors">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Назад к услугам
              </Link>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Скрининг III триместра беременности в Махачкале
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Финишная прямая! Третий скрининг помогает убедиться, что малыш готов к появлению на свет, и определить тактику ведения родов. 
                Качественное <strong>узи для беременных в Махачкале</strong> на этом этапе — залог спокойствия будущей мамы.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/#contacts"
                  className="bg-rose-400 hover:bg-rose-500 text-white px-6 py-3 rounded-full text-lg transition-colors shadow-md"
                >
                  Записаться на УЗИ
                </Link>
              </div>
            </div>
            <div className="hidden md:block w-full md:w-1/2 relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/child.jpeg"
                alt="УЗИ III триместра беременности"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-8 md:py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-rose prose-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Задачи третьего скрининга
            </h2>
            <p className="text-gray-600 mb-6">
              Исследование проводится на сроке 30–34 недели. В этот период врач оценивает не только анатомию, но и функциональное состояние системы &quot;мать-плацента-плод&quot;:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-600 mb-8">
              <li><strong>Положение плода:</strong> головное, тазовое или поперечное. Это важно для планирования родов.</li>
              <li><strong>Предполагаемая масса:</strong> рассчитывается по результатам ультразвуковых измерений.</li>
              <li><strong>Состояние плаценты:</strong> степень зрелости, место прикрепления, отсутствие отслоек.</li>
              <li><strong>Количество вод:</strong> маловодие или многоводие могут требовать коррекции.</li>
              <li><strong>Пороки развития с поздним проявлением:</strong> некоторые особенности становятся видны только в третьем триместре.</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Тамара Салихова и Шехеризада Расуловна — эксперты вашего спокойствия
            </h2>
            <p className="text-gray-600 mb-6">
              На поздних сроках беременности особенно важно довериться профессионалам. В нашем центре прием ведут врачи с безупречной репутацией. 
              <strong>Шехеризада Расуловна</strong> и <strong>Тамара Салихова</strong> проводят исследование и оформляют заключение по его результатам. Диагноз и дальнейшую тактику определяет лечащий врач.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Допплерометрия — важная часть исследования
            </h3>
            <p className="text-gray-600 mb-6">
              Допплерометрия позволяет оценить показатели кровотока в сосудах матки, пуповины и плода. Она проводится по назначению врача или в составе выбранной услуги — уточните объем исследования при записи.
            </p>

            <div className="bg-rose-50 p-6 md:p-8 rounded-2xl mt-12 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Готовимся к встрече с малышом
              </h3>
              <p className="text-gray-600 mb-6">
                Пройдите качественное <strong>узи беременности в Махачкале</strong> перед родами. Запишитесь на прием в удобное время!
              </p>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="flex flex-col items-center space-y-3">
                  <p className="font-semibold text-gray-900">Алиева Шехеризада Расуловна</p>
                  <a
                    href="tel:+79882681666"
                    className="w-full max-w-xs bg-rose-400 hover:bg-rose-500 text-white px-6 py-3 rounded-full text-lg transition-colors font-medium shadow-sm"
                  >
                    +7 (988) 268-16-66
                  </a>
                  <a
                    href="https://wa.me/79882681666?text=Здравствуйте!%20Хочу%20записаться%20на%20прием"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full max-w-xs bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg transition-colors font-medium flex items-center justify-center shadow-sm"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    WhatsApp
                  </a>
                </div>

                <div className="flex flex-col items-center space-y-3">
                  <p className="font-semibold text-gray-900">Салихова Тамара Руслановна</p>
                  <a
                    href="tel:+79288051163"
                    className="w-full max-w-xs bg-rose-400 hover:bg-rose-500 text-white px-6 py-3 rounded-full text-lg transition-colors font-medium shadow-sm"
                  >
                    +7 (928) 805-11-63
                  </a>
                  <a
                    href="https://wa.me/79288051163?text=Здравствуйте!%20Хочу%20записаться%20на%20прием"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full max-w-xs bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg transition-colors font-medium flex items-center justify-center shadow-sm"
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
