import { caseStudies } from "@/content/site";

export function CaseStudies() {
  return (
    <section id="cases" aria-labelledby="cases-title" className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-12">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-indigo-500">
            Кейсы
          </span>
          <h2
            id="cases-title"
            className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
          >
            Доказываем эффективность на цифрах
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Каждый проект сопровождаем внятными метриками: видимость, лиды,
            конверсии, выручка. Ниже — проекты из SaaS, медицины и B2B-сервисов.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {caseStudies.map((item) => (
            <article
              key={item.client}
              className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-lg"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium uppercase tracking-wide text-indigo-500">
                    {item.client}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900">
                    {item.result}
                  </h3>
                </div>
                <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-600">
                  SEO x Growth
                </span>
              </div>
              <p className="mt-4 text-sm text-slate-600">{item.details}</p>
              <dl className="mt-6 grid gap-4 text-sm text-slate-600 sm:grid-cols-3">
                {item.metrics.map((metric) => (
                  <div key={metric.label}>
                    <dt className="text-slate-500">{metric.label}</dt>
                    <dd className="mt-1 text-lg font-semibold text-slate-900">
                      {metric.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
