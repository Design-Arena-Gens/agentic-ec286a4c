import Link from "next/link";
import { blogPosts } from "@/content/site";

export function BlogPreview() {
  return (
    <section id="blog" aria-labelledby="blog-title" className="bg-slate-50">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-12">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-indigo-500">
              Блог
            </span>
            <h2
              id="blog-title"
              className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
            >
              Практические материалы по SEO
            </h2>
            <p className="mt-4 max-w-xl text-base text-slate-600">
              Делимся методологиями, чеклистами и практиками, которые
              используем на проектах. Без воды и перепроданных шаблонов.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
          >
            Все статьи
            <span aria-hidden>→</span>
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {blogPosts.slice(0, 3).map((post) => (
            <article
              key={post.slug}
              className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200/80 hover:shadow-lg"
            >
              <p className="text-xs uppercase tracking-wide text-indigo-500">
                {new Date(post.publishedAt).toLocaleDateString("ru-RU", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric"
                })}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">
                {post.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600">{post.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.keywords.slice(0, 2).map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600"
                  >
                    #{keyword}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-6">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition hover:text-indigo-500"
                >
                  Читать статью
                  <span aria-hidden className="transition group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
