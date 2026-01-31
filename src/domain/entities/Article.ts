// Domain Entity: Artículo de Blog

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  slug: string;
  publishedAt: string;
  readTime: string;
  image?: string;
}

export interface ArticleDetails extends Article {
  content: string;
  author: Author;
  tags: string[];
}

export interface Author {
  name: string;
  role: string;
  avatar?: string;
}
