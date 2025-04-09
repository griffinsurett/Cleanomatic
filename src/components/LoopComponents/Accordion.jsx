// src/components/LoopComponents/AccordionItem.jsx
import React, { useState } from 'react';

export default function AccordionItem({ item, itemClass = '', collectionName, HasPage, ...props }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <li className={`accordion-item ${itemClass}`} {...props}>
      <div
        className="accordion-header p-[var(--spacing-md)] bg-[var(--color-accent)] text-[var(--color-bg)] cursor-pointer"
        onClick={toggleAccordion}
      >
        <h3 className="uppercase italic">{item.data.title}</h3>
      </div>
      {isOpen && (
        <div className="accordion-content p-[var(--spacing-md)] bg-[var(--color-bg)] text-[var(--color-text)]">
          <p>{item.data.description || item.body || 'No additional details provided.'}</p>
        </div>
      )}
    </li>
  );
}
