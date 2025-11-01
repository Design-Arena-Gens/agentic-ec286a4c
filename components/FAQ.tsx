import { faqs } from "@/content/site";

export function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[2fr,3fr] lg:px-12">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wide text-indigo-500">
            FAQ
          </span>
          <h2
            id="faq-title"
            className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
          >
            Ответы на вопросы, которые слышим чаще всего
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Не нашли нужного ответа? Напишите нам — в течение одного рабочего
            дня подготовим рекомендации, примерную стоимость и roadmap.
          </p>
        </div>
        <dl className="space-y-6">
          {faqs.map((item) => (
            <div
              key={item.question}
              className="rounded-3xl border border-slate-200 bg-slate-50/60 p-6"
            >
              <dt className="text-lg font-semibold text-slate-900">
                {item.question}
              </dt>
              <dd className="mt-3 text-sm text-slate-600">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
