import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      {/* Дисклеймер ФЗ-38 — обязателен для рекламы медицинских услуг */}
      <div className="bg-amber-50 border-t-2 border-amber-200">
        <div className="container mx-auto px-4 py-3 text-center">
          <p className="text-amber-800 text-xs font-medium">
            ⚠️ Есть противопоказания. Необходима консультация специалиста.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">О нашем центре</h3>
            <p className="text-gray-600 text-sm">
              Центр современной медицины специализируется на проведении высокоточной ультразвуковой диагностики. Наша клиника оснащена современным оборудованием экспертного класса Voluson Expert 22, что позволяет проводить УЗИ с максимальной точностью и информативностью.

Мы проводим все виды УЗИ для беременных, включая 3D/4D УЗИ, допплерометрию и скрининговые исследования. Также выполняем полный спектр гинекологических ультразвуковых исследований.
            </p>
          </div>

          {/* Реквизиты организации */}
          <div className="mb-6 pt-4 border-t border-gray-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-500">
              <div>
                <span className="font-semibold text-gray-600">ООО «Центр современной медицины»</span><br />
                ОГРН: 1120571001374 &nbsp;|&nbsp; ИНН: 0571002041<br />
                Адрес: г. Махачкала, ул. Гоголя, 42
              </div>
              <div>
                <span className="font-semibold text-gray-600">Лицензия на медицинскую деятельность</span><br />
                № Л041-01172-05/00312490<br />
                Выдана 28 марта 2017 г. Министерством здравоохранения Республики Дагестан
              </div>
            </div>
          </div>
          
          <div className="pt-4 border-t border-gray-200">
            <div className="text-center">
              <p className="text-gray-500 text-xs">
                © 2026 Все права защищены.
              </p>
              <Link href="/user-agreement" className="text-gray-500 text-xs hover:text-rose-500 transition-colors mt-2 inline-block">
                Пользовательское соглашение
              </Link>
              <div className="mt-2">
                <a
                  href="https://t.me/maratios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 text-xs hover:text-rose-500 transition-colors"
                >
                  Разработка сайта
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

