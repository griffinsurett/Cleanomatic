// src/components/LoopComponents/GalleryCard.jsx
import React from "react";

export default function GalleryCard({
  item,
  collectionName,
  HasPage,
  itemClass = "",
}) {
  const effectiveHasPage =
    item.data.hasPage !== undefined ? item.data.hasPage : HasPage;

  const { featuredImage } = item.data;
  const imageSrc =
    featuredImage && (typeof featuredImage === "string"
      ? featuredImage
      : featuredImage.src || "");

  // Build alt text from item.id: remove -/_, capitalize each word
  const rawId = item.id || "";
  const altText = rawId
    .split(/[-_]/g)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <article
      className={`relative w-full overflow-hidden ${itemClass} h-64 lg:h-[55vh]`}
    >
      {effectiveHasPage ? (
        <a
          href={`/${collectionName}/${item.slug}`}
          className="block w-full h-full relative"
        >
          {imageSrc && (
            <img
              src={imageSrc}
              alt={altText}
              loading="lazy"
              className="w-full h-full object-cover object-center transform transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          )}
        </a>
      ) : (
        <div className="block w-full h-full relative">
          {imageSrc && (
            <img
              src={imageSrc}
              alt={altText}
              loading="lazy"
              className="w-full h-full object-cover object-center transform transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          )}
        </div>
      )}
    </article>
  );
}
