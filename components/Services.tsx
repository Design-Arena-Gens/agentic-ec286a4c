import { services } from "@/content/site";

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="bg-white"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-12">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-indigo-500">
            Услуги
          </span>
          <h2
            id="services-title"
            className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
          >
            Комплексное SEO под задачи бизнеса
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Стратегия и внедрение без лишних гипотез. Комбинируем технический
            SEO, работу с контентом и цифровой PR, чтобы ускорить рост
            органического трафика и заявки.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200/80 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                {service.description}
              </p>
              <ul className="mt-5 space-y-2 text-sm text-slate-600">
                {service.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
