import Image from "next/image";
import Link from "next/link";
import { hero } from "@/content/site";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-slate-900 text-white"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#6366F1_0%,#0F172A_50%,#020617_100%)] opacity-80" />
      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[3fr,2fr] lg:px-12 lg:py-28">
        <div>
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium backdrop-blur">
            {hero.eyebrow}
          </span>
          <h1
            id="hero-title"
            className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl"
          >
            {hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            {hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href={hero.ctaPrimary.href}
              className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              {hero.ctaPrimary.label}
              <span aria-hidden className="transition group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              href={hero.ctaSecondary.href}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/60"
            >
              {hero.ctaSecondary.label}
            </Link>
          </div>
          <dl className="mt-12 grid gap-6 text-sm sm:grid-cols-3">
            {hero.stats.map((item) => (
              <div key={item.label}>
                <dt className="text-slate-400">{item.label}</dt>
                <dd className="mt-1 text-2xl font-semibold text-white">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative hidden h-full w-full rounded-3xl border border-white/10 bg-white/10 p-2 shadow-2xl backdrop-blur md:block">
          <div className="flex h-full w-full flex-col justify-between rounded-2xl bg-slate-950 p-6">
            <div>
              <p className="text-sm font-medium text-indigo-300">
                SEO Dashboard
              </p>
              <p className="mt-2 text-2xl font-semibold text-white">
                Прогноз роста трафика
              </p>
            </div>
            <Image
              src="/analytics-graph.svg"
              alt="График роста органического трафика"
              width={520}
              height={320}
              className="rounded-xl border border-white/5"
              priority
            />
            <div className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3 text-sm text-white/80">
              <span>Вероятность достижения KPI</span>
              <span className="font-semibold text-emerald-300">91%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
