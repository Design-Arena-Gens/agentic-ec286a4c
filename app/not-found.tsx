import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-6 text-center">
      <div className="rounded-3xl bg-white px-10 py-16 shadow-lg">
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-500">
          Ошибка 404
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900">
          Страница не найдена
        </h1>
        <p className="mt-4 max-w-lg text-sm text-slate-600">
          Кажется, мы удалили или переименовали страницу. Возможно, вы найдете
          нужную информацию в разделе услуг, блоге или просто вернитесь на
          главную.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center rounded-full bg-indigo-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-600"
          >
            На главную
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300"
          >
            Читать блог
          </Link>
        </div>
      </div>
    </div>
  );
}
