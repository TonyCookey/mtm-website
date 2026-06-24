"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

type FAQAccordionProps = {
  items: readonly {
    question: string;
    answer: string;
  }[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div className="faq-item" key={item.question}>
            <button type="button" onClick={() => setOpenIndex(open ? -1 : index)} aria-expanded={open}>
              <span>{item.question}</span>
              <ChevronDown size={20} aria-hidden />
            </button>
            <div className="faq-item__answer" hidden={!open}>
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
