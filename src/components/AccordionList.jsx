// src/components/LoopComponents/AccordionList.jsx
import React from "react";
import AccordionItem from "@/components/LoopComponents/AccordionItem";

export default function AccordionList({ faqs }) {
  return (
    <div className="flex flex-col gap-[var(--spacing-lg)]">
      {faqs.map((entry, idx) => (
        <AccordionItem
          key={entry.slug}
          id={idx}
          question={entry.data.title}
          answer={entry.body}
        />
      ))}
    </div>
  );
}
