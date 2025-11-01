export function CTA() {
  return (
    <section
      id="audit"
      aria-labelledby="cta-title"
      className="bg-gradient-to-br from-indigo-500 via-indigo-500 to-violet-500 text-white"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-16 text-center lg:px-12">
        <h2
          id="cta-title"
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Бесплатный экспресс-аудит сайта за 48 часов
        </h2>
        <p className="mx-auto max-w-2xl text-base text-white/80">
          Получите список из 15–20 высокоимпактных задач, прогноз влияния на
          трафик и текущий E-E-A-T профиль. Аудит подготовят эксперты,
          которые ведут проекты в вашей нише.
        </p>
        <form className="mx-auto flex w-full max-w-3xl flex-col gap-4 text-left sm:flex-row sm:items-center">
          <label className="sr-only" htmlFor="cta-email">
            Email
          </label>
          <input
            id="cta-email"
            type="email"
            required
            autoComplete="email"
            placeholder="Ваш рабочий email"
            className="h-12 flex-1 rounded-full border border-white/40 bg-white/10 px-5 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/60"
          />
          <label className="sr-only" htmlFor="cta-domain">
            Домен сайта
          </label>
          <input
            id="cta-domain"
            type="url"
            required
            placeholder="Домен проекта"
            className="h-12 flex-1 rounded-full border border-white/40 bg-white/10 px-5 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/60"
          />
          <button
            type="submit"
            className="h-12 rounded-full bg-white px-6 text-sm font-semibold text-slate-900 shadow-md transition hover:bg-slate-100"
          >
            Получить аудит
          </button>
        </form>
        <p className="text-xs text-white/70">
          Оставляя заявку, вы соглашаетесь с обработкой персональных данных и
          политикой конфиденциальности.
        </p>
      </div>
    </section>
  );
}
