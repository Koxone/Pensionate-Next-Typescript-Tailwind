'use client';

import React, { useState } from 'react';
import { ChevronDownIcon } from './Icons';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  isOpen,
  onToggle
}) => {
  return (
    <div className={`accordion-item ${isOpen ? 'accordion-item-active' : ''}`}>
      <button className="accordion-header" onClick={onToggle}>
        <span className="accordion-title">{question}</span>
        <ChevronDownIcon className="accordion-icon" size={20} />
      </button>
      <div className="accordion-content">
        <div className="accordion-body">
          {answer}
        </div>
      </div>
    </div>
  );
};

interface AccordionProps {
  items: Array<{
    id: string;
    question: string;
    answer: string;
  }>;
  allowMultiple?: boolean;
  variant?: 'default' | 'bordered' | 'flush' | 'card' | 'minimal';
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  variant = 'default'
}) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const handleToggle = (id: string) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        if (!allowMultiple) {
          newSet.clear();
        }
        newSet.add(id);
      }
      return newSet;
    });
  };

  const variantClasses: Record<string, string> = {
    default: 'accordion',
    bordered: 'accordion accordion-bordered',
    flush: 'accordion accordion-flush',
    card: 'accordion accordion-card',
    minimal: 'accordion accordion-minimal'
  };

  return (
    <div className={variantClasses[variant]}>
      {items.map(item => (
        <AccordionItem
          key={item.id}
          question={item.question}
          answer={item.answer}
          isOpen={openItems.has(item.id)}
          onToggle={() => handleToggle(item.id)}
        />
      ))}
    </div>
  );
};

export default Accordion;
