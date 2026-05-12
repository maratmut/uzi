import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Допплерометрия плода в Махачкале | УЗИ кровотока при беременности',
  description: 'Сделать допплерометрию при беременности в Махачкале. Оценка кровотока в сосудах матки, плаценты и плода. Профилактика гипоксии. Врачи Тамара Салихова и Шехеризада Расуловна.',
  keywords: 'узи беременности в Махачкале, доплер узи махачкала, узи кровотока, узи Тамара Салихова, узи Шехеризада Расуловна',
}

export default function DopplerometryPage() {
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
                Допплерометрия плода в Махачкале
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Здоровье малыша напрямую зависит от того, насколько хорошо он снабжается кислородом и питательными веществами.
                Допплерометрия — это безопасный и информативный метод УЗИ, который позволяет оценить кровоток в системе &quot;мать-плацента-плод&quot;.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/#contacts"
                  className="bg-rose-400 hover:bg-rose-500 text-white px-6 py-3 rounded-full text-lg transition-colors shadow-md"
                >
                  Записаться на процедуру
                </Link>
              </div>
            </div>
            <div className="hidden md:block w-full md:w-1/2 relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/child.jpeg"
                alt="Допплерометрия плода"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-rose prose-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Когда назначают допплерометрию?
            </h2>
            <p className="text-gray-600 mb-6">
              Это исследование может проводиться как планово (обычно в 3-м триместре), так и по показаниям врача на более ранних сроках. Основные причины:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-600 mb-8">
              <li>Подозрение на задержку развития плода.</li>
              <li>Гестоз (поздний токсикоз) у матери.</li>
              <li>Многоплодная беременность.</li>
              <li>Изменения в плаценте (преждевременное старение, кальцинаты).</li>
              <li>Хронические заболевания матери (диабет, гипертония, болезни почек).</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Как проходит исследование?
            </h2>
            <p className="text-gray-600 mb-6">
              Процедура ничем не отличается от обычного <strong>узи для беременных в Махачкале</strong>. Вы просто лежите на кушетке, а врач водит датчиком по животу. Аппарат регистрирует скорость движения крови в сосудах и преобразует эти данные в графики и звуковые сигналы. Это абсолютно безболезненно и безвредно.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Точность диагностики в нашем центре
            </h3>
            <p className="text-gray-600 mb-6">
              Мы используем аппарат экспертного класса Voluson E22, который обладает высочайшей чувствительностью допплера. Это позволяет нашим специалистам — <strong>узи Тамара Салихова</strong> и <strong>узи Шехеризада Расуловна</strong> — выявлять даже незначительные нарушения кровотока на самых ранних стадиях.
            </p>
            
            <p className="text-gray-600 mb-6">
              Своевременно выявленное нарушение кровотока позволяет врачу назначить эффективное лечение и предотвратить гипоксию плода. Доверяя нам, вы выбираете профессиональное <strong>узи беременности в Махачкале</strong>.
            </p>

            <div className="bg-rose-50 p-6 md:p-8 rounded-2xl mt-12 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Позаботьтесь о здоровье малыша
              </h3>
              <p className="text-gray-600 mb-6">
                Убедитесь, что вашему ребенку комфортно. Запишитесь на допплерометрию уже сегодня.
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