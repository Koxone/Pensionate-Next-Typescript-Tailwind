'use client';

import React from 'react';
import { Icon } from './Icons';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'bordered' | 'flat';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = ''
}) => {
  const variantClasses: Record<string, string> = {
    default: 'card',
    elevated: 'card card-elevated',
    bordered: 'card card-bordered',
    flat: 'card card-flat'
  };

  const sizeClasses: Record<string, string> = {
    sm: 'card-sm',
    md: '',
    lg: 'card-lg'
  };

  const classes = [
    variantClasses[variant],
    sizeClasses[size],
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

// Service Card
interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  onClick?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  onClick
}) => {
  return (
    <div 
      className="card card-elevated card-service cursor-pointer"
      onClick={onClick}
    >
      <div className="card-service-icon">
        <Icon name={icon} size={28} />
      </div>
      <h3 className="card-service-title">{title}</h3>
      <p className="card-service-description">{description}</p>
    </div>
  );
};

// Feature Card
interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon
}) => {
  return (
    <div className="card card-feature">
      <div className="card-feature-icon">
        <Icon name={icon} size={24} />
      </div>
      <div className="card-feature-content">
        <h4 className="card-feature-title">{title}</h4>
        <p className="card-feature-description">{description}</p>
      </div>
    </div>
  );
};

// Stat Card
interface StatCardProps {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  prefix = '',
  suffix = ''
}) => {
  return (
    <div className="card-stat">
      <div className="card-stat-value">
        {prefix}{value}{suffix}
      </div>
      <div className="card-stat-label">{label}</div>
    </div>
  );
};

// Testimonial Card
interface TestimonialCardProps {
  content: string;
  name: string;
  role: string;
  rating: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  content,
  name,
  role,
  rating
}) => {
  return (
    <div className="card card-elevated card-testimonial">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Icon 
            key={i} 
            name="star" 
            size={16} 
            className={i < rating ? 'text-secondary' : 'text-muted'} 
          />
        ))}
      </div>
      <p className="card-testimonial-quote">{content}</p>
      <div className="card-testimonial-author">
        <div className="card-testimonial-avatar">
          <div className="w-full h-full bg-primary-50 flex items-center justify-center text-primary font-bold">
            {name.charAt(0)}
          </div>
        </div>
        <div>
          <div className="card-testimonial-name">{name}</div>
          <div className="card-testimonial-role">{role}</div>
        </div>
      </div>
    </div>
  );
};

// Blog Card
interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readTime: string;
  onClick?: () => void;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  title,
  excerpt,
  category,
  publishedAt,
  readTime,
  onClick
}) => {
  return (
    <div className="card card-elevated card-blog cursor-pointer" onClick={onClick}>
      <div className="card-blog-image bg-gray-100 flex items-center justify-center">
        <Icon name="clipboard" size={48} className="text-gray-300" />
      </div>
      <div className="card-blog-content">
        <span className="card-blog-category">{category}</span>
        <h3 className="card-blog-title">{title}</h3>
        <p className="card-blog-excerpt line-clamp-2">{excerpt}</p>
        <div className="card-blog-meta">
          <span>{publishedAt}</span>
          <span>•</span>
          <span>{readTime} lectura</span>
        </div>
      </div>
    </div>
  );
};

// Pricing Card
interface PricingCardProps {
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
  onSelect?: () => void;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  name,
  description,
  price,
  period,
  features,
  isPopular = false,
  onSelect
}) => {
  return (
    <div className={`card card-elevated card-pricing ${isPopular ? 'card-pricing-featured' : ''}`}>
      {isPopular && <span className="card-pricing-badge">Más Popular</span>}
      <h3 className="card-pricing-title">{name}</h3>
      <p className="text-body-sm mb-4">{description}</p>
      <div className="card-pricing-price">
        {price}
        <span className="card-pricing-period">/{period}</span>
      </div>
      <div className="card-pricing-features">
        {features.map((feature, index) => (
          <div key={index} className="card-pricing-feature">
            <Icon name="check" size={16} className="card-pricing-feature-icon" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
      <button 
        className={`btn btn-full ${isPopular ? 'btn-primary' : 'btn-outline'}`}
        onClick={onSelect}
      >
        Seleccionar Plan
      </button>
    </div>
  );
};

export default Card;
