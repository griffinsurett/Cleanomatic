// src/components/LoopComponents/AccordionItem.jsx
import React, { useState } from "react";

export default function AccordionItem({
  item,
  itemClass = "",
  collectionName,
  HasPage,
}) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((prev) => !prev);

  return (
    <li className={`bg-neutral ${itemClass}`}>
      {/* Header: clicking toggles open/closed */}
      <div
        onClick={toggle}
        className="flex justify-between items-center px-[var(--spacing-xl)] py-[var(--spacing-lg)] cursor-pointer select-none"
      >
        <div className="accordion-text grow w-5/6">
        <span className="h6">{item.data.title || item.slug}</span>
        </div>
        <div className="accordion-icon w-1/6 flex justify-end items-center">
        <svg
          className={`w-8 lg:w-4 h-auto transform transition-transform duration-200 ${
            open ? "rotate-180" : "rotate-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
        </div>
      </div>

      {/* Body: conditionally rendered */}
      <div
        className={`overflow-hidden transition-[max-height] duration-[var(--transition-fast)] ${
          open ? "max-h-96 py-[var(--spacing-sm)] px-[var(--spacing-lg)]" : "max-h-0"
        }`}
      >
        <p className="py-[var(--spacing-xl)] px-[var(--spacing-lg)]">
        {item.data.description ?? item.body}
        </p>
      </div>
    </li>
  );
}
