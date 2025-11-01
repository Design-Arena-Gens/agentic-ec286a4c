import { testimonials } from "@/content/site";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="bg-slate-900 text-white"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-12">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-indigo-300">
            Отзывы
          </span>
          <h2
            id="testimonials-title"
            className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Нам доверяют маркетологи и основатели
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Клиенты отмечают нашу прозрачность, скорость внедрения и способность
            говорить с топ-менеджментом на языке бизнеса и метрик.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-indigo-500/10 backdrop-blur"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />
                <div>
                  <figcaption className="text-base font-semibold text-white">
                    {item.name}
                  </figcaption>
                  <p className="text-sm text-indigo-200">{item.role}</p>
                </div>
              </div>
              <blockquote className="mt-6 text-sm leading-relaxed text-slate-200">
                “{item.quote}”
              </blockquote>
              <div className="mt-6 text-sm text-amber-300">
                {"★".repeat(item.rating)}
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
