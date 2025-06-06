// src/components/LoopComponents/ClientImageCard.jsx
import React from "react";
import Heading from "../Heading.jsx";

export default function GalleryCard({ item, collectionName, HasPage }) {
  const effectiveHasPage =
    item.data.hasPage !== undefined ? item.data.hasPage : HasPage;
  const { title, featuredImage } = item.data;

  // Determine the image URL
  const imageSrc =
    featuredImage && (typeof featuredImage === "string"
      ? featuredImage
      : featuredImage.src || "");

  return (
    <article className="scale-up relative group w-full h-64 lg:h-[35vh] overflow-hidden shadow hover:shadow-lg transition-shadow">
      {effectiveHasPage ? (
        <a
          href={`/${collectionName}/${item.slug}`}
          className="block w-full h-full relative"
        >
          {imageSrc && (
            <img
              src={imageSrc}
              alt={title}
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
              alt={title}
              loading="lazy"
              className="w-full h-full object-cover object-center transform transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          )}
        </div>
      )}
    </article>
  );
}
