import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

const baseUrl = "https://agentic-ec286a4c.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Agency SEO — Повышаем видимость вашего бизнеса",
    template: "%s | Agency SEO"
  },
  description:
    "Комплексное SEO-продвижение, оптимизация контента и техническая поддержка для роста органического трафика и заявок.",
  keywords: [
    "SEO",
    "поисковое продвижение",
    "оптимизация сайта",
    "контент-маркетинг",
    "аудит сайта"
  ],
  openGraph: {
    title: "Agency SEO — Повышаем видимость вашего бизнеса",
    description:
      "Стратегии SEO, построенные на данных: технический аудит, контент и линкбилдинг без лишних действий.",
    url: baseUrl,
    siteName: "Agency SEO",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Agency SEO — рост органического трафика"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Agency SEO — Повышаем видимость вашего бизнеса",
    description:
      "Экспертное SEO-продвижение с акцентом на рост конверсий и стабильный трафик.",
    creator: "@agency_seo",
    images: ["/og-cover.png"]
  },
  alternates: {
    canonical: baseUrl,
    languages: {
      "ru-RU": "/",
      "en-US": "/en"
    }
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  },
  category: "business",
  creator: "Agency SEO",
  publisher: "Agency SEO",
  verification: {
    google: "google-site-verification=example-token",
    yandex: "yandex-verification=example-token"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={inter.variable}>
      <body className="bg-white text-slate-900 antialiased">
        <div className="relative flex min-h-screen flex-col">
          {children}
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Agency SEO",
              url: baseUrl,
              logo: `${baseUrl}/logo.svg`,
              sameAs: [
                "https://www.linkedin.com/company/agency-seo",
                "https://t.me/agency_seo",
                "https://www.youtube.com/@agency_seo"
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+7-495-123-45-67",
                  contactType: "sales",
                  areaServed: "RU"
                }
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
