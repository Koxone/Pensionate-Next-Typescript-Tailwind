// Domain Entity: FAQ (Preguntas Frecuentes)

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface FAQCategory {
  id: string;
  name: string;
  slug: string;
}
