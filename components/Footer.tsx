import Link from "next/link";

const footerLinks = [
  {
    title: "Агентство",
    links: [
      { label: "О нас", href: "#approach" },
      { label: "Кейсы", href: "#cases" },
      { label: "Отзывы", href: "#testimonials" }
    ]
  },
  {
    title: "Услуги",
    links: [
      { label: "Техническое SEO", href: "#services" },
      { label: "Контент-стратегия", href: "#services" },
      { label: "Digital PR", href: "#services" }
    ]
  },
  {
    title: "Ресурсы",
    links: [
      { label: "Блог", href: "/blog" },
      { label: "Вебинары", href: "#webinars" },
      { label: "Телеграм-канал", href: "https://t.me/agency_seo" }
    ]
  }
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50" id="contact">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 lg:grid-cols-[2fr,1fr,1fr,1fr] lg:px-12">
        <div>
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 text-base font-semibold text-white shadow-sm">
              SEO
            </span>
            <div>
              <p className="text-lg font-semibold">Agency SEO</p>
              <p className="text-sm text-slate-500">
                Рост органического трафика и продаж через данные и экспертизу
              </p>
            </div>
          </div>
          <div className="mt-6 space-y-2 text-sm text-slate-500">
            <p>Москва, Сретенский бульвар, 12</p>
            <p>
              <Link
                href="tel:+74951234567"
                className="font-medium text-slate-700 hover:text-slate-900"
              >
                +7 (495) 123-45-67
              </Link>
            </p>
            <p>
              <Link
                href="mailto:hello@agencyseo.ru"
                className="font-medium text-slate-700 hover:text-slate-900"
              >
                hello@agencyseo.ru
              </Link>
            </p>
          </div>
        </div>
        {footerLinks.map((section) => (
          <div key={section.title}>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              {section.title}
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {section.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition hover:text-slate-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-200/70 bg-slate-50/80 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Agency SEO. Все права защищены.
      </div>
    </footer>
  );
}
