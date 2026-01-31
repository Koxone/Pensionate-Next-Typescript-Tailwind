'use client';

import { Layout } from '@presentation/components/layout';
import { BlogCard } from '@presentation/components/ui/Card';
import { CTASection } from '@presentation/components/sections';
import { articles } from '@infrastructure/data/mockData';
import { useRouter } from 'next/navigation';

export default function BlogPage() {
  const router = useRouter();

  const handleArticleClick = (slug: string) => {
    router.push(`/blog/${slug}`);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="hero hero-gradient hero-sm">
        <div className="hero-container">
          <div className="hero-content-center">
            <span className="hero-overline">Blog</span>
            <h1 className="hero-title">Noticias y Consejos</h1>
            <p className="hero-subtitle">
              Mantente informado sobre pensiones, ahorro e inversión con nuestros artículos especializados.
            </p>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="section section-white">
        <div className="container">
          <div className="grid grid-cols-3 gap-6">
            {articles.map((article) => (
              <BlogCard
                key={article.id}
                title={article.title}
                excerpt={article.excerpt}
                category={article.category}
                publishedAt={article.publishedAt}
                readTime={article.readTime}
                onClick={() => handleArticleClick(article.slug)}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="¿Tienes preguntas sobre tu pensión?"
        subtitle="Nuestros asesores están listos para ayudarte con cualquier duda."
        primaryCta={{ label: 'Hablar con un Asesor', href: '/contacto' }}
      />
    </Layout>
  );
}
