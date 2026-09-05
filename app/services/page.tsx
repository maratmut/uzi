import Link from 'next/link'
import { createPageMetadata } from '@/app/seo'

export const metadata = createPageMetadata(
  'УЗИ при беременности в Махачкале: услуги и запись',
  'УЗИ при беременности в Махачкале: скрининги по триместрам, 3D/4D УЗИ и допплерометрия. Гинекологическое УЗИ, врачи и способы записи.',
  '/services/',
)

const pregnancyServices = [
  {
    title: 'УЗИ на ранних сроках беременности',
    description: 'Уточнение локализации и срока беременности, оценка развития по назначению врача.',
    href: '/services/early-pregnancy-ultrasound/',
  },
  {
    title: 'Скрининг 1 триместра',
    description: 'Оценка развития плода и маркеров первого триместра.',
    href: '/services/ultrasound-1-trimester/',
  },
  {
    title: 'Скрининг 2 триместра',
    description: 'Оценка анатомии и развития плода, плаценты и околоплодных вод.',
    href: '/services/ultrasound-2-trimester/',
  },
  {
    title: 'Скрининг 3 триместра',
    description: 'Оценка роста и положения плода, плаценты и других показателей.',
    href: '/services/ultrasound-3-trimester/',
  },
  {
    title: '3D/4D УЗИ при беременности',
    description: 'Объемное изображение плода; возможность фото и видео уточняется при записи.',
    href: '/services/3d-4d-ultrasound/',
  },
  {
    title: 'Допплерометрия при беременности',
    description: 'Оценка показателей кровотока в сосудах матки, плаценты и плода.',
    href: '/services/dopplerometry/',
  },
]

const gynecologyServices = [
  {
    title: 'Гинекологическое УЗИ',
    description: 'Исследование матки, яичников и придатков трансабдоминально или трансвагинально.',
    href: '/services/gynecological-examination/',
  },
  {
    title: 'УЗИ органов малого таза',
    description: 'Ультразвуковая оценка матки, эндометрия, яичников и придатков.',
    href: '/services/pelvic-ultrasound/',
  },
  {
    title: 'Фолликулометрия',
    description: 'Ультразвуковой мониторинг роста фолликулов и овуляции.',
    href: '/services/folliculometry/',
  },
]

function ServiceGrid({ services }: { services: typeof pregnancyServices }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <article key={service.href} className="flex h-full flex-col rounded-2xl border-2 border-rose-100 bg-white p-7 transition-shadow hover:shadow-lg">
          <h3 className="mb-3 text-2xl font-bold text-gray-900">{service.title}</h3>
          <p className="mb-6 flex-1 leading-relaxed text-gray-600">{service.description}</p>
          <Link
            href={service.href}
            className="rounded-lg bg-rose-100 px-4 py-3 text-center font-medium text-rose-700 transition-colors hover:bg-rose-200"
          >
            {service.title}
          </Link>
        </article>
      ))}
    </div>
  )
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-rose-50 to-white py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
              УЗИ-исследования в Махачкале
            </h1>
            <p className="text-lg leading-relaxed text-gray-600">
              В Центре современной медицины проводятся ультразвуковые исследования при беременности и в гинекологии. На странице каждой услуги можно узнать, что оценивает специалист, как подготовиться и как записаться.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-3 text-3xl font-bold text-gray-900">УЗИ при беременности</h2>
            <p className="mb-8 max-w-3xl text-gray-600">
              Скрининги по триместрам, УЗИ на ранних сроках, 3D/4D и допплерометрия. Рекомендуемый срок и объем исследования определяет врач.
            </p>
            <ServiceGrid services={pregnancyServices} />
          </div>
        </div>
      </section>

      <section className="bg-rose-50 py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-3 text-3xl font-bold text-gray-900">Гинекологическое УЗИ</h2>
            <p className="mb-8 max-w-3xl text-gray-600">
              Исследования органов малого таза выполняются трансабдоминально или трансвагинально — в зависимости от цели исследования и рекомендаций врача.
            </p>
            <ServiceGrid services={gynecologyServices} />
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">Запись на УЗИ в Махачкале</h2>
          <p className="mx-auto mb-7 max-w-2xl text-gray-600">
            При записи администратор уточнит вид исследования, подготовку, актуальную стоимость и доступное время приема.
          </p>
          <Link href="/#contacts" className="inline-block rounded-full bg-rose-400 px-8 py-3 text-lg font-medium text-white shadow-md transition-colors hover:bg-rose-500">
            Записаться на УЗИ
          </Link>
        </div>
      </section>
    </main>
  )
}
