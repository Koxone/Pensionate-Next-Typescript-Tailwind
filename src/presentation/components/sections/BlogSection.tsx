'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { BlogCard } from '../ui/Card';
import { Button } from '../ui/Button';
import { articles } from '@infrastructure/data/mockData';

interface BlogSectionProps {
  title?: string;
  subtitle?: string;
  limit?: number;
  showViewAll?: boolean;
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  title = 'Últimos artículos',
  subtitle = 'Mantente informado con las últimas noticias y consejos sobre pensiones.',
  limit = 3,
  showViewAll = true
}) => {
  const router = useRouter();
  const displayedArticles = articles.slice(0, limit);

  const handleArticleClick = (slug: string) => {
    router.push(`/blog/${slug}`);
  };

  return (
    <section className="section section-white">
      <div className="container">
        <div className="section-header">
          <span className="section-overline">Blog</span>
          <h2 className="section-title">{title}</h2>
          <p className="section-description">{subtitle}</p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {displayedArticles.map((article) => (
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

        {showViewAll && (
          <div className="text-center mt-8">
            <Button 
              variant="outline"
              href="/blog"
            >
              Ver todos los artículos
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
