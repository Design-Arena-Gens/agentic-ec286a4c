import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Approach } from "@/components/Approach";
import { CaseStudies } from "@/components/CaseStudies";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { BlogPreview } from "@/components/BlogPreview";

export const metadata: Metadata = {
  title: "SEO-агентство полного цикла",
  description:
    "Продвигаем сайты и продукты в органическом поиске. Технический SEO, контент и digital PR — стратегия, которая приносит заявки.",
  alternates: {
    canonical: "/"
  }
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Approach />
        <CaseStudies />
        <Testimonials />
        <CTA />
        <BlogPreview />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
