import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://uzi05.ru'),
  title: 'Алиева Шехеризада Расуловна - Узи для беременных в Махачкале | Врач УЗИ высшей категории',
  description: 'Врач УЗИ высшей категории с 36-летним стажем работы. Эксперт в пренатальной диагностике, член Российской ассоциации специалистов УЗД. Сертификаты, квалификация и образование. Запись на УЗИ в Махачкале.',
  keywords: 'УЗИ для беременных Махачкала, врач УЗИ Алиева, пренатальная диагностика, 3D/4D УЗИ плода, скрининг при беременности',
}

export default function Certificates() {
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
              Алиева Шехеризада Расуловна
            </h2>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>• Член Российской ассоциации специалистов УЗД в медицине</li>
              <li>• Врач высшей категории</li>
              <li>• Заслуженный врач Республики Дагестан</li>
              <li>• Стаж работы 36 лет</li>
            </ul>
          </div>

          {/* Образование и сертификаты */}
          <div className="bg-white">
            <h2 className="text-2xl font-bold text-sky-900 mb-6">
              Образование и повышение квалификации
            </h2>
            <div className="space-y-4">
              <div className="bg-sky-50 p-6 rounded-lg">
                <ol className="list-decimal list-inside space-y-4 text-gray-700">
                  <li>Окончила Дагестанский государственный институт в 1985 г.</li>
                  <li>Интернатура по акушерству гинекологии - 1986 г.</li>
                  <li>Первичная специализация УЗИ - ВНИИ по охране здоровья матери и ребенка в г. Москва с Октября 1989 г. по февраль 1990 г.</li>
                  <li>Сертификат специалист УЗИ в акушерстве и гинекологии в 1990 г. город Санкт-Петербург.</li>
                  <li>Курс обучения на Всероссийском научно-практическом семинаре &quot;Эхографическая оценка осложненной беременности и патологии органов репродуктивной системы 2003 г. Научный центр Акуш-генекология и Перинатологии ООО &quot;Диагноз Ультра&quot;</li>
                  <li>Сертификат повышения квалификации 2004 г. Государственный научно-исследовательский институт гинекологии имени Д.О Отта.</li>
                  <li>Всероссийский научно-практический семинар &quot;Практические аспекты УЗИ в акушерстве, гинекологии и неонатологии&quot; 2006 г.</li>
                  <li>Сертификат повышения квалификации 2009 г. Санкт-Петербург МАПО.</li>
                  <li>Курс лекций по &quot;Актуальным вопросам УЗИ в акушерско-гинекологической практике и перинатологии&quot; - Научный центр акушерства и перинатологии имени академика В.И Кулакова 2012 г.</li>
                  <li>Повышение квалификации УЗ Диагностика врожденных пороков сердца у плода - Научный центр акуш. гинекологии и перинатологии имени академика В.И Кулакова 2012 г.</li>
                  <li>Международный сертификат FMF 1-го скрининга 2013 г.</li>
                  <li>Сертификат ДГМА Минздрава России 2014 г.</li>
                  <li>Сертификат участника конференции &quot;Актуальные проблемы УЗД&quot;, 2015 год г. Махачкала Самсунг-Медисон.</li>
                  <li>Участник VII съезда Российской ассоциации специалистов УЗД в медицине. г. Москва РАСУДМ 2015 г.</li>
                  <li>Сертификат &quot;Перинатальный скрининг врожденных пороков развития и хромосомных аномалий в 11-14 недель&quot; - Центр медицины плода 2015г.</li>
                  <li>Сертификат &quot;Эхокардиографии плода&quot;, &quot;Нейросонография плода&quot; - 2015 г.</li>
                  <li>Международный учебный курс под эгидой ISVOG, &quot;Пороки развития лица, конечностей, сердца&quot; 2016 г. Москва.</li>
                  <li>Сертификат участника 1-го съезда Ассоциации специалистов Медицины плода 2016 г. Санкт-Петербург - Центр Медицины плода.</li>
                  <li>Курс &quot;Актуальные вопросы УЗИ в акуш-гинекологии&quot; 2017 г. Центр медицины плода, г. Санкт-Петербург.</li>
                  <li>Курс &quot;Современные принципы пренатальный эхокардиографии&quot; 2017 г. Санкт-Петербург.</li>
                  <li>Научно Практическая конференция &quot;Пренатальная диагностика, фетальная хирургия&quot;. г. Санкт-Петербург.</li>
                  <li>Курс &quot;Актуальные вопросы УЗИ в медицине матери и плода&quot;, 2017 г. Москва ФАСУДМ.</li>
                  <li>Сертификат &quot;Международный учебный курс под эгидой ISVOG&quot; - Актуальные вопросы УЗ диагностики в акуш-гинекологии, Санкт-Петербург 2018 г.</li>
                  <li>Сертификат &quot;Детальный осмотр сердца плода&quot; 2018 г. Центр медицины плода г. Москва.</li>
                  <li>Сертификат специалиста ООО &quot;Клиника Медика&quot; г. Санкт-Петербург 2018 г.</li>
                  <li>Сертификат специалиста Частное образовательное учреждение Дополнительного профессионального образования &quot;ЭКО Образования&quot; 2020 г. Ижевск.</li>
                  <li>Сертификат &quot;Актуальные вопросы пренатальной диагностики I-II триместра&quot; 2021 г.</li>
                </ol>
              </div>
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