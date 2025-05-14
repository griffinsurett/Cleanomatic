// src/components/LoopComponents/LocationItem.jsx
import React from "react";
import Button from "../Button.jsx";

// Your custom LocationIcon defined as a React component.
const LocationIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    stroke="black"
    className="w-7 h-7"
  >
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
  </svg>
);

export default function LocationItem({ item, collectionName, HasPage }) {
  // Use the explicit item value if defined; otherwise, rely on the meta value (passed as HasPage)
  const effectiveHasPage =
    item.data.hasPage !== undefined ? item.data.hasPage : HasPage;
  
  // Base classes for the item.
  const baseClasses = "flex items-center gap-[var(--spacing-xs)] p-[var(--spacing-sm)]";
  // Only add the hover:underline class when the button is enabled.
  const hoverClass = effectiveHasPage ? "hover:underline" : "";
  
  return (
    <li className="location-item load scale-up">
      <Button
        variant="underline"
        // Provide href only if effectiveHasPage is true.
        href={effectiveHasPage ? `/${collectionName}/${item.id}` : undefined}
        // Pass disabled prop when effectiveHasPage is false.
        disabled={!effectiveHasPage}
        iconProps={{
          element: <LocationIcon />,
          position: "left",
        }}
        // Apply hover class only if the button is enabled.
        className={`${baseClasses} ${hoverClass}`}
      >
        <span className="h5 italic">{item.data.title}</span>
      </Button>
    </li>
  );
}
