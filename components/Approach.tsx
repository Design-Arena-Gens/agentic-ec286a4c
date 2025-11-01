import { differentiators } from "@/content/site";

export function Approach() {
  return (
    <section
      id="approach"
      aria-labelledby="approach-title"
      className="bg-slate-50"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[3fr,2fr] lg:px-12">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wide text-indigo-500">
            Подход
          </span>
          <h2
            id="approach-title"
            className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
          >
            Три направления, которые умножают результат
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Мы синхронизируем бизнес-цели с SEO-метриками, строим прогнозы и
            доставляем результат короткими спринтами. К каждому проекту
            подключаем аналитика, контент-стратега и техническую команду.
          </p>
          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">
              Data-first стратегия
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              Мы моделируем влияние SEO-активностей на лидогенерацию, чтобы
              точнее планировать бюджеты и доказывать ценность канала.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>• BI-dashboard с прогнозом заявок и MQL</li>
              <li>• Автоматизация отчетности и уведомлений</li>
              <li>• Проверка гипотез через A/B тесты и обратную связь продаж</li>
            </ul>
          </div>
        </div>
        <div className="grid gap-6">
          {differentiators.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-transparent bg-white p-6 shadow-lg shadow-indigo-500/10 ring-1 ring-slate-200"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
