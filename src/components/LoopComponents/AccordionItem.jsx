// src/components/LoopComponents/AccordionItem.jsx
import React from "react";

export default function AccordionItem({
  item,
  itemClass = "",
  collectionName,
  HasPage,
}) {
  // Use the title from frontmatter (or fall back to slug)
  const question = item.data.title || item.slug;
  // Use description from frontmatter, else the MDX body
  const answer = item.data.description ?? item.body;
  // Unique ID for checkbox toggle
  const toggleId = `accordion-toggle-${item.slug}`;

  return (
    <li className={itemClass}>
      {/* Hidden checkbox */}
      <input
        type="checkbox"
        id={toggleId}
        className="peer hidden"
      />

      {/* Header */}
      <label
        htmlFor={toggleId}
        className="w-full flex justify-between items-center py-[var(--spacing-lg)] cursor-pointer select-none"
      >
        <span className="h6">{question}</span>
        <span className="transform transition-transform peer-checked:rotate-180">
          ▼
        </span>
      </label>

      {/* Body */}
      <div className="max-h-0 overflow-hidden transition-max-height duration-[var(--transition-fast)] peer-checked:max-h-96 peer-checked:py-[var(--spacing-sm)] peer-checked:px-[var(--spacing-lg)]">
        {answer}
      </div>
    </li>
  );
}
