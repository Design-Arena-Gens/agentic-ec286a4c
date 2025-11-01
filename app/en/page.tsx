import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Agency Focused on Sustainable Organic Growth",
  description:
    "Data-backed SEO strategies, technical optimization, and content operations designed to increase qualified pipeline."
};

export default function EnglishLandingPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-10 px-6 py-20 text-slate-900 lg:px-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-500">
            Agency SEO
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight">
            Organic growth campaigns powered by research, experimentation, and
            relentless execution
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-600">
            We help SaaS, healthcare, and B2B services connect with their
            audiences through exceptional content, technical excellence, and
            trustworthy signals. Our team speaks the language of both marketing
            and business — every recommendation is backed by data, forecasted
            impact, and clear prioritization.
          </p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
          <h2 className="text-2xl font-semibold text-slate-900">
            What&apos;s included in our SEO engagements
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-slate-600">
            <li>• Deep technical audits and Core Web Vitals improvement</li>
            <li>
              • Research-based keyword clustering and content operations
            </li>
            <li>
              • Digital PR, link earning, and authority-building initiatives
            </li>
            <li>• Live dashboards with forecasted pipeline impact</li>
          </ul>
        </div>
        <a
          href="mailto:hello@agencyseo.ru"
          className="inline-flex w-fit items-center gap-2 rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-600"
        >
          Request capabilities deck →
        </a>
      </div>
    </main>
  );
}
