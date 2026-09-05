import Image from 'next/image'
import Link from 'next/link'
import { createPageMetadata } from '@/app/seo'

export const metadata = createPageMetadata(
  '3D/4D УЗИ при беременности в Махачкале — фото и видео',
  '3D/4D УЗИ при беременности в Махачкале на аппарате Voluson Expert 22. Возможность фото и видеозаписи уточняйте при записи.',
  '/services/3d-4d-ultrasound/',
)

export default function Ultrasound3D4DPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-16">
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
                3D/4D УЗИ беременности в Махачкале
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Увидьте первую улыбку вашего малыша еще до его рождения. 
                Технологии 3D и 4D позволяют получить объемное изображение и видео плода в реальном времени. 
                Это не только незабываемые эмоции, но и важный этап диагностики.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/#contacts"
                  className="bg-rose-400 hover:bg-rose-500 text-white px-6 py-3 rounded-full text-lg transition-colors shadow-md"
                >
                  Записаться на 3D/4D УЗИ
                </Link>
              </div>
            </div>
            <div className="hidden md:block w-full md:w-1/2 relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/child.jpeg"
                alt="3D/4D УЗИ плода"
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
              Чем отличается 3D от 4D УЗИ?
            </h2>
            <p className="text-gray-600 mb-6">
              Многие будущие мамы задаются этим вопросом. 3D УЗИ дает статичное объемное изображение — фотографию, на которой можно детально рассмотреть личико, пальчики и другие части тела малыша. 
              4D УЗИ добавляет четвертое измерение — время. Это значит, что вы видите движения ребенка в реальном времени: как он зевает, улыбается или сосет палец.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Экспертное узи беременности в Махачкале
            </h2>
            <p className="text-gray-600 mb-6">
              Наш медицинский центр оснащен аппаратом экспертного класса <strong>Voluson E22</strong>. Это &quot;золотой стандарт&quot; в мире ультразвуковой диагностики.
              Режимы 3D и 4D дополняют стандартное двухмерное исследование и позволяют получить объемное изображение. Качество визуализации зависит от срока беременности, положения плода и других условий.
            </p>
            
            <p className="text-gray-600 mb-6">
              Именно поэтому, когда речь заходит про качественное <strong>узи для беременных в Махачкале</strong>, многие выбирают нас. Мы объединяем передовые технологии с врачебным профессионализмом.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Наши специалисты
            </h3>
            <p className="text-gray-600 mb-6">
              Даже самое лучшее оборудование требует опытных рук. В нашем центре прием ведут врачи, чьи имена известны многим мамам республики:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="bg-blue-50 p-4 rounded-xl">
                <strong className="block text-gray-900 text-lg mb-1">Салихова Тамара Руслановна</strong>
                <span className="text-gray-600">Кандидат медицинских наук. <strong>Тамара Салихова</strong> проводит с максимальной точностью, подробно комментируя процесс и отвечая на все вопросы будущих родителей.</span>
              </li>
              <li className="bg-blue-50 p-4 rounded-xl">
                <strong className="block text-gray-900 text-lg mb-1">Алиева Шехеризада Расуловна</strong>
                <span className="text-gray-600">Врач ультразвуковой диагностики высшей категории с 36-летним стажем.</span>
              </li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Что вы получите после исследования?
            </h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-600 mb-8">
              <li>Медицинское заключение о состоянии плода.</li>
              <li>Первые фотографии вашего малыша в высоком качестве.</li>
              <li>Видеозапись исследования (по желанию), чтобы сохранить эти трогательные моменты навсегда.</li>
              <li>Уверенность в том, что беременность протекает нормально.</li>
            </ul>

            <div className="bg-rose-50 p-6 md:p-8 rounded-2xl mt-12 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Хотите увидеть своего малыша?
              </h3>
              <p className="text-gray-600 mb-6">
                Запишитесь на 3D/4D УЗИ уже сегодня. Подарите себе незабываемую встречу до рождения!
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
                    href="https://wa.me/79882681666?text=Здравствуйте!%20Хочу%20записаться%20на%203D/4D%20УЗИ"
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
                    href="https://wa.me/79288051163?text=Здравствуйте!%20Хочу%20записаться%20на%203D/4D%20УЗИ"
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
