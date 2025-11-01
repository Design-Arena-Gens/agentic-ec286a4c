import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/content/site";

export const metadata: Metadata = {
  title: "Блог об SEO и органическом росте",
  description:
    "Практические статьи и чеклисты об SEO: стратегии, технический аудит, контент и локальное продвижение."
};

export default function BlogPage() {
  return (
    <div className="bg-slate-50">
      <div className="mx-auto w-full max-w-5xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-500">
            Блог
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            SEO-инсайты, проверенные на реальных проектах
          </h1>
          <p className="mt-4 text-base text-slate-600">
            Статьи публикуют практикующие SEO-специалисты, которые ведут проекты
            в ecommerce, B2B и медицине. Используйте материалы как чеклисты и
            методички.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200/80 hover:shadow-lg"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-indigo-500">
                {new Date(post.publishedAt).toLocaleDateString("ru-RU", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric"
                })}
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-900">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="mt-3 flex-1 text-sm text-slate-600">
                {post.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-indigo-600">
                {post.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-full bg-indigo-50 px-3 py-1 font-medium"
                  >
                    #{keyword}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
                <span>{post.readingTime}</span>
                <span>
                  Обновлено{" "}
                  {new Date(post.updatedAt).toLocaleDateString("ru-RU", {
                    day: "2-digit",
                    month: "long"
                  })}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
