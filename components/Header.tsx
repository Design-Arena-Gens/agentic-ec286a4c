import Link from "next/link";

const navigation = [
  { label: "Услуги", href: "#services" },
  { label: "Подход", href: "#approach" },
  { label: "Кейсы", href: "#cases" },
  { label: "Блог", href: "/blog" },
  { label: "FAQ", href: "#faq" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-12">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight"
          aria-label="Agency SEO — на главную"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 font-semibold text-white shadow-sm">
            SEO
          </span>
          <span className="hidden md:inline">Agency SEO</span>
        </Link>
        <nav className="hidden items-center gap-1 text-sm font-medium text-slate-600 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-full px-3 py-2 transition hover:bg-slate-100 hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:shadow-lg"
        >
          Начать проект
          <span aria-hidden className="transition group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </header>
  );
}
