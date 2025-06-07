import Button from "../Button/Button.jsx";
import Heading from "../Heading.jsx";

/**
 * Card component for rendering an individual item.
 * It uses the effective hasPage value (item's own value if defined,
 * otherwise the default provided via Section meta) to decide
 * whether to render the "View More" button.
 */
export default function Card({ item, collectionName, HasPage }) {
  const effectiveHasPage =
    item.data.hasPage !== undefined ? item.data.hasPage : HasPage;
  return (
    <article className="card load text-center scale-up h-[40vh] w-full p-[var(--spacing-md)] md:p-[var(--spacing-3xl)] box-shadow-primary text-text bg-bg flex flex-col justify-center">
      <Heading tagName={"h3"} className="h3 mb-[var(--spacing-sm)]">
        {item.data.title}
      </Heading>
      <p className="mb-[var(--spacing-sm)]">
        {item.data.description || item.body}
      </p>
      {effectiveHasPage && (
        <Button variant={"underline"} href={`/${collectionName}/${item.slug}`}>
          View More
        </Button>
      )}
    </article>
  );
}
