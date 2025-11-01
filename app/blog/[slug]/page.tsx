import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/content/site";

type BlogPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogPageProps): Metadata {
  const post = blogPosts.find((item) => item.slug === params.slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${post.slug}`
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      tags: post.keywords,
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(post.title)}`,
          width: 1200,
          height: 630,
          alt: post.title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`/api/og?title=${encodeURIComponent(post.title)}`]
    }
  };
}

export default function BlogPostPage({ params }: BlogPageProps) {
  const post = blogPosts.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Organization",
      name: "Agency SEO"
    },
    publisher: {
      "@type": "Organization",
      name: "Agency SEO",
      logo: {
        "@type": "ImageObject",
        url: "https://agentic-ec286a4c.vercel.app/logo.svg"
      }
    },
    inLanguage: "ru-RU",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://agentic-ec286a4c.vercel.app/blog/${post.slug}`
    },
    keywords: post.keywords
  };

  return (
    <article className="bg-white">
      <div className="mx-auto w-full max-w-3xl px-6 py-20 lg:px-8">
        <header>
          <p className="text-xs font-semibold uppercase tracking-wide text-indigo-500">
            {new Date(post.publishedAt).toLocaleDateString("ru-RU", {
              day: "2-digit",
              month: "long",
              year: "numeric"
            })}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-500">
            <span>{post.readingTime} чтения</span>
            <span>
              Обновлено{" "}
              {new Date(post.updatedAt).toLocaleDateString("ru-RU", {
                day: "2-digit",
                month: "long",
                year: "numeric"
              })}
            </span>
          </div>
        </header>
        <hr className="my-8 border-slate-200" />
        <div className="prose prose-slate max-w-none">
          {post.body.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <footer className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
          <p className="font-semibold text-slate-900">
            Ключевые темы статьи:
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {post.keywords.map((keyword) => (
              <li
                key={keyword}
                className="rounded-full bg-white px-3 py-1 text-xs font-medium text-indigo-500"
              >
                #{keyword}
              </li>
            ))}
          </ul>
        </footer>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </div>
    </article>
  );
}
